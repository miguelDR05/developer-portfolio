// --- INICIO: Funcionalidad Gemini API ---
const generarBtn = document.getElementById("generar-mensaje-btn");
const promptInput = document.getElementById("mensaje-prompt");
const mensajeTextarea = document.getElementById("mensaje-contacto");
const loadingText = document.getElementById("gemini-loading");
const errorText = document.getElementById("gemini-error");

const apiKey = ""; // Dejar vacío, se proveerá en el entorno
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

// Helper para sleep
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Función fetch con reintentos y backoff exponencial
async function fetchWithBackoff(url, options, retries = 5, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return response.json();
      }
      if (response.status === 429 || response.status >= 500) {
        console.warn(
          `Intento ${i + 1} fallido (Status: ${response.status}). Reintentando en ${delay}ms...`
        );
        await sleep(delay);
        delay *= 2; // Incrementar el delay
      } else {
        console.error(
          "Error en la solicitud (no se reintentará):",
          response.status,
          response.statusText
        );
        const errorResult = await response.json();
        console.error("Detalle del error:", errorResult);
        return null;
      }
    } catch (error) {
      console.warn(
        `Intento ${i + 1} fallido (Error de red). Reintentando en ${delay}ms...`,
        error
      );
      await sleep(delay);
      delay *= 2;
    }
  }
  console.error(
    "No se pudo completar la solicitud después de",
    retries,
    "intentos."
  );
  return null;
}

// Función para llamar a la API de Gemini
async function callGemini(prompt) {
  const systemPrompt = `Eres un asistente profesional y amigable. Ayuda al usuario a redactar un mensaje de contacto claro, conciso y profesional para el dueño de este portafolio. El tono debe ser respetuoso y directo. Responde únicamente con el cuerpo del mensaje sugerido, sin preámbulos como 'Aquí tienes:' o 'Espero que esto sirva:'.`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: {
      parts: [{ text: systemPrompt }],
    },
    safetySettings: [
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
    ],
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };

  const result = await fetchWithBackoff(apiUrl, options);

  if (
    result &&
    result.candidates &&
    result.candidates[0].content.parts[0].text
  ) {
    return result.candidates[0].content.parts[0].text;
  } else {
    console.error(
      "Respuesta inesperada o bloqueada por seguridad de la API:",
      result
    );
    return "No pude generar el mensaje, posiblemente el contenido es sensible o hubo un error interno. Por favor, intenta con otra frase o redacta tu mensaje manualmente.";
  }
}

// Event listener para el botón de generar
generarBtn.addEventListener("click", async () => {
  const prompt = promptInput.value;
  if (!prompt.trim()) {
    promptInput.focus();
    return;
  }

  // Mostrar estado de carga y ocultar error
  loadingText.classList.remove("hidden");
  errorText.classList.add("hidden");
  generarBtn.disabled = true;
  generarBtn.textContent = "Generando...";

  try {
    const draft = await callGemini(prompt);
    mensajeTextarea.value = draft.trim();
    mensajeTextarea.focus(); // Poner el foco en el textarea
  } catch (error) {
    console.error("Error al llamar a Gemini:", error);
    errorText.classList.remove("hidden"); // Mostrar error al usuario
    mensajeTextarea.value =
      "Error al conectar con el servicio. Intenta de nuevo.";
  } finally {
    // Ocultar estado de carga
    loadingText.classList.add("hidden");
    generarBtn.disabled = false;
    generarBtn.innerHTML = "✨ Generar";
  }
});

// --- FIN: Funcionalidad Gemini API ---
