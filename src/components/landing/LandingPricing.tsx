import Link from "next/link";
import { Check, Star, Tag } from "lucide-react";
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
    <div
      className={`relative flex h-full min-h-112 flex-col pt-4 sm:min-h-120 ${
        featured ? "lg:pt-4" : ""
      }`}
    >
      {featured ? (
        <span className="absolute left-1/2 top-0 z-10 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold whitespace-nowrap text-violet-700">
          <Star size={14} aria-hidden />
          Más elegido
        </span>
      ) : null}

      <div
        className={`flex h-full min-h-104 flex-col gap-5 rounded-2xl border bg-white p-5 text-left sm:min-h-112 sm:p-6 lg:p-7 ${
          featured
            ? "border-violet-300 bg-violet-50/40 shadow-[0_0_0_1px_rgba(104,41,248,0.18)]"
            : "border-gray-200"
        }`}
      >
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{titulo}</h3>
            {featured && ahorro > 0 ? (
              <span className="inline-flex min-h-7 w-fit items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                <Tag size={14} aria-hidden />
                Ahorrás {formatPrecioArs(ahorro)} (2 meses gratis)
              </span>
            ) : null}
          </div>
          <p className="text-sm leading-snug text-gray-500 sm:text-[0.95rem]">{subtitulo}</p>
          <p className="mt-2 flex flex-wrap items-baseline gap-1.5">
            <span className="text-[clamp(2rem,1.5rem+1vw,2.35rem)] font-bold tabular-nums text-violet-600">
              {formatPrecioArs(precio)}
            </span>
            <span className="text-[clamp(1.05rem,0.95rem+0.35vw,1.2rem)] font-medium text-gray-500">
              {periodo}
            </span>
          </p>
        </div>

        <ul className="flex flex-1 flex-col gap-2.5 sm:gap-3">
          {PRICING.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm leading-snug text-gray-800 sm:text-[0.9rem]">
              <span
                className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white"
                aria-hidden
              >
                <Check size={14} aria-hidden />
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
    <section id="precios" className="scroll-mt-24 bg-violet-50/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Probalo gratis y elegí el plan que te convenga
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Usá Wally durante {PRICING.trialDays} días totalmente gratis, sin poner tarjeta de
            crédito. Después seguís con plan mensual o anual.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:gap-6">
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

        <div className="mt-8 text-center">
          <Link
            href={site.appUrl}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
          >
            Empezar prueba gratis
          </Link>
          <p className="mt-3 text-xs text-gray-500">
            Sin tarjeta de crédito · {PRICING.trialDays} días de prueba incluidos
          </p>
        </div>
      </div>
    </section>
  );
}
