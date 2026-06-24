/** Valores alineados con `api/src/constants/subscription.ts` y planes activos. */
export const PRICING = {
  trialDays: 30,
  monthlyPriceArs: 20_000,
  yearlyPriceArs: 200_000,
  features: [
    "Emisión ilimitada de facturas",
    "Facturas programadas",
    "Salud fiscal y control de categoría",
    "Clientes y servicios ilimitados",
    "Cobros online con link de pago",
    "Integraciones (Mercado Pago, Google Drive, Google Calendar)",
    "Colaboradores con permisos limitados por módulo",
    "Soporte prioritario",
  ],
} as const;

export function formatPrecioArs(n: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(n);
}

export function ahorroAnualPrecio(): number {
  return Math.max(0, PRICING.monthlyPriceArs * 12 - PRICING.yearlyPriceArs);
}
