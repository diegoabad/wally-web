import { Check, Shield, Star } from "lucide-react";
import { CtaLink } from "@/components/CtaButton";
import { ScrollReveal } from "@/components/ScrollReveal";
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
    <div className="landing-card landing-plan-card relative flex h-full flex-col p-6 sm:p-7">
      {featured ? (
        <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-violet-600 px-3 py-1 text-[0.65rem] font-bold tracking-wide text-white uppercase">
          <Star size={12} aria-hidden />
          Más elegido
        </span>
      ) : null}

      <div className={featured ? "pr-24 sm:pr-28" : undefined}>
        <h3 className="text-sm font-bold tracking-wide text-violet-600 uppercase">{titulo}</h3>
        <p className="mt-1 text-sm text-gray-500">{subtitulo}</p>
        <div className="mt-4">
          <p className="flex flex-wrap items-baseline gap-1">
            <span className="text-[clamp(1.85rem,1.5rem+1vw,2.25rem)] font-bold tabular-nums text-gray-900">
              {formatPrecioArs(precio)}
            </span>
            <span className="text-base font-medium text-gray-500">{periodo}</span>
          </p>
          <div className="mt-2 min-h-7">
            {featured && ahorro > 0 ? (
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                Ahorrás {formatPrecioArs(ahorro)} (2 meses gratis)
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <hr className="mt-6 border-gray-100" />

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
  );
}

export function LandingPricing() {
  const ahorro = ahorroAnualPrecio();

  return (
    <section id="precios" className="scroll-mt-24 bg-[#f4f5f7]">
      <div className="site-container landing-section-block">
        <ScrollReveal className="landing-mobile-header mx-auto max-w-3xl text-center">
          <p className="landing-section-badge uppercase tracking-wide">
            Planes simples y transparentes
          </p>
          <h2 className="landing-section-title mt-4 sm:mt-5">
            Probá Wally gratis y{" "}
            <span className="text-violet-600">elegí cómo seguir facturando</span>
          </h2>
          <p className="landing-section-lead">
            Usá todas las funciones durante {PRICING.trialDays} días: Factura C electrónica,
            Mercado Pago, programadas y salud fiscal. Sin tarjeta de crédito.
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-6 sm:grid-cols-2 lg:gap-8">
          <ScrollReveal delay={60} className="h-full">
            <PlanCard
              titulo="Mensual"
              subtitulo="Pagás mes a mes"
              precio={PRICING.monthlyPriceArs}
              periodo="/mes"
            />
          </ScrollReveal>
          <ScrollReveal delay={120} className="h-full">
            <PlanCard
              titulo="Anual"
              subtitulo="Pagás una vez al año"
              precio={PRICING.yearlyPriceArs}
              periodo="/año"
              featured
              ahorro={ahorro}
            />
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-10 flex flex-col items-center gap-4" delay={160}>
          <CtaLink href={site.appUrl} size="lg" block className="max-w-md">
            Empezar prueba gratis
          </CtaLink>
          <p className="landing-cta-trust">
            <span className="landing-cta-trust__item">
              <Shield size={16} aria-hidden />
              Sin tarjeta de crédito
            </span>
            <span className="landing-cta-trust__sep" aria-hidden>
              ·
            </span>
            <span className="landing-cta-trust__item">{PRICING.trialDays} días de prueba incluidos</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
