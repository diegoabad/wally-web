/** Mismas rutas que la app (`app/src/lib/brand.ts`). */
export const WALLY_LOGO_SRC = "/wally-logo.png?v=5";
export const WALLY_LOGO_WHITE_SRC = "/wally-logo-white.png?v=5";

/** Capturas del inicio de la app para la landing. */
export const LANDING_INICIO_DESKTOP_SRC = "/landing/inicio-dashboard-desktop.png?v=1";
export const LANDING_INICIO_MOBILE_SRC = "/landing/inicio-dashboard-mobile.png?v=2";
export const LANDING_PROGRAMADAS_DESKTOP_SRC = "/landing/programadas-calendario-desktop.png?v=1";
export const LANDING_FACTURA_PREVIEW_SRC = "/landing/factura-preview.png?v=1";

/** Galería mobile — distintas pantallas de la app. */
export const LANDING_MOBILE_GALLERY = [
  {
    src: LANDING_INICIO_MOBILE_SRC,
    alt: "Inicio de Wally en celular con acciones rápidas para emitir factura",
    label: "Inicio",
  },
  {
    src: "/landing/mobile-programadas.png?v=1",
    alt: "Calendario de facturas programadas en Wally",
    label: "Programadas",
  },
  {
    src: "/landing/mobile-mercadopago.png?v=1",
    alt: "Pagos recibidos de Mercado Pago en Wally",
    label: "Mercado Pago",
  },
  {
    src: "/landing/mobile-servicios.png?v=1",
    alt: "Catálogo de servicios en Wally",
    label: "Servicios",
  },
  {
    src: "/landing/mobile-salud-fiscal.png?v=1",
    alt: "Panel de salud fiscal y categoría en Wally",
    label: "Salud fiscal",
  },
] as const;
