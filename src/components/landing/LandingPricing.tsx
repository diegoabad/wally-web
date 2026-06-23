import Link from "next/link";
import { Check, Shield, Star } from "lucide-react";
import {
  PRICING,
  ahorroAnualPrecio,
  formatPrecioArs,
} from "@/lib/pricing";
import { site } from "@/lib/site";

type PlanCardProps = {
  titulo: string;
  subtitulo: string;
  precio: number;
  periodo: string;
  featured?: boolean;
  ahorro?: number;
};

function PlanCard({
  titulo,
  subtitulo,
  precio,
  periodo,
  featured = false,
  ahorro = 0,
}: PlanCardProps) {
  return (
    <div className={`relative flex h-full flex-col ${featured ? "pt-3" : ""}`}>
      {featured ? (
        <span className="absolute right-4 top-0 z-10 inline-flex items-center gap-1 rounded-full bg-violet-600 px-3 py-1 text-[0.65rem] font-bold tracking-wide text-white uppercase">
          <Star size={12} aria-hidden />
          Más elegido
        </span>
      ) : null}

      <div
        className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.06)] sm:p-7 ${
          featured ? "border-violet-400 ring-1 ring-violet-200" : "border-gray-200"
        }`}
      >
        <div>
          <h3 className="text-sm font-bold tracking-wide text-violet-600 uppercase">{titulo}</h3>
          <p className="mt-1 text-sm text-gray-500">{subtitulo}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <p className="flex flex-wrap items-baseline gap-1">
              <span className="text-[clamp(1.85rem,1.5rem+1vw,2.25rem)] font-bold tabular-nums text-gray-900">
                {formatPrecioArs(precio)}
              </span>
              <span className="text-base font-medium text-gray-500">{periodo}</span>
            </p>
            {featured && ahorro > 0 ? (
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                Ahorrás {formatPrecioArs(ahorro)} (2 meses gratis)
              </span>
            ) : null}
          </div>
        </div>

        <hr className="my-6 border-gray-100" />

        <ul className="flex flex-1 flex-col gap-3">
          {PRICING.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm leading-snug text-gray-700"
            >
              <span
                className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white"
                aria-hidden
              >
                <Check size={12} strokeWidth={3} aria-hidden />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function LandingPricing() {
  const ahorro = ahorroAnualPrecio();

  return (
    <section id="precios" className="scroll-mt-24 bg-[#f4f5f7]">
      <div className="site-container py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold tracking-wide text-violet-700 uppercase">
            Planes simples y transparentes
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Probalo gratis y{" "}
            <span className="text-violet-600">elegí el plan que te convenga</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Usá Wally durante {PRICING.trialDays} días totalmente gratis, sin poner tarjeta de
            crédito. Después elegís el plan mensual o anual que mejor se adapta a vos.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:gap-8">
          <PlanCard
            titulo="Mensual"
            subtitulo="Pagás mes a mes"
            precio={PRICING.monthlyPriceArs}
            periodo="/mes"
          />
          <PlanCard
            titulo="Anual"
            subtitulo="Pagás una vez al año"
            precio={PRICING.yearlyPriceArs}
            periodo="/año"
            featured
            ahorro={ahorro}
          />
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <Link
            href={site.appUrl}
            className="inline-flex min-h-12 w-full max-w-md items-center justify-center rounded-xl bg-violet-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-violet-700 sm:w-auto"
          >
            Empezar prueba gratis
          </Link>
          <p className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-sm">
            <Shield size={16} className="shrink-0 text-violet-600" aria-hidden />
            Sin tarjeta de crédito
            <span className="text-gray-300" aria-hidden>
              ·
            </span>
            {PRICING.trialDays} días de prueba incluidos
          </p>
        </div>
      </div>
    </section>
  );
}
