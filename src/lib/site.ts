export const site = {
  name: "Wally",
  legalName: "Wally",
  domain: "soywally.com.ar",
  url: "https://soywally.com.ar",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.soywally.com.ar",
  supportEmail: "hola@soywally.com.ar",
  privacyEmail: "privacidad@soywally.com.ar",
  country: "Argentina",
  description:
    "Wally es una plataforma online para monotributistas en Argentina: emití Factura C electrónica ante ARCA, cobrá con Mercado Pago, programá facturas recurrentes y controlá tu salud fiscal.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "541141499723",
  whatsappMessage: "Hola, me gustaría saber más sobre Wally.",
} as const;

export const navLinks = [
  { href: "/#beneficios", label: "Beneficios" },
  { href: "/#factura", label: "Factura C" },
  { href: "/#producto", label: "Funciones" },
  { href: "/#precios", label: "Precios" },
  { href: "/#preguntas", label: "Preguntas frecuentes" },
] as const;

export const legalLinks = [
  { href: "/terminos", label: "Términos y condiciones" },
  { href: "/privacidad", label: "Política de privacidad" },
] as const;

export function whatsappUrl(message = site.whatsappMessage): string {
  const digits = site.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
