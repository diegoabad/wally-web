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
    "Wally ayuda a monotributistas a emitir Factura C, organizar clientes, programar facturas, cobrar con Mercado Pago y controlar su salud fiscal en un solo lugar.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5491112345678",
  whatsappMessage: "Hola, quiero probar Wally para facturar como monotributista.",
} as const;

export const navLinks = [
  { href: "/#beneficios", label: "Beneficios" },
  { href: "/#producto", label: "Funciones" },
  { href: "/#precios", label: "Precios" },
  { href: "/#preguntas", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Ayuda" },
] as const;

export function whatsappUrl(message = site.whatsappMessage): string {
  const digits = site.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
