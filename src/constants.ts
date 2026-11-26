/**
 * CONSTANTES EDITABLES - MENTE EN LÍNEA
 * Según Sección 10 de MASTERPROMPT-antigravity-v2.md
 */

// CONFIRMAR con el cliente; si queda vacío en producción, el build falla
export const WHATSAPP_NUMBER = "51977162440";
export const WHATSAPP_DISPLAY = "(+51) 977 162 440";

export const CONTACT_EMAIL = "";

export const MINSA_113_ROUTE = "Línea 113 Salud, opción 5 (salud mental)";
export const MINSA_PHONES = ["955 557 000", "952 842 623"];

export const VERIFICACION_COLEGIATURA = false;

export const PRICES = {
  trial: 25,
  monthly: 89,
  quarterly: 239,
  b2bPerWorker: 20,
  b2bMin: 50,
  igv: 0.18,
};

// Valores derivados por código
export const quarterlyPerMonth = Number((PRICES.quarterly / 3).toFixed(2)); // 79.67
export const quarterlySavings = 3 * PRICES.monthly - PRICES.quarterly; // 28

export const PRIVACY_URL = "";
export const TERMS_URL = "";
export const COMPLAINTS_URL = "";
export const INSTAGRAM_URL = "https://instagram.com/menteenlineaperu";
export const TIKTOK_URL = "https://tiktok.com/@menteenlineaperu";

export const DEFAULT_WHATSAPP_MESSAGE = "Hola, quiero información sobre el acompañamiento psicológico por WhatsApp.";

export function getWhatsAppUrl(msg: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
}
