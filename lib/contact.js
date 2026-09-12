export const POWERBUILT_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_POWERBUILT_WHATSAPP_NUMBER;

export function getPowerbuiltWhatsAppUrl(message) {
  const text = encodeURIComponent(message);

  return `https://wa.me/${POWERBUILT_WHATSAPP_NUMBER}?text=${text}`;
}

