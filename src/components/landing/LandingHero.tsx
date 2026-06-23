import {
  ArrowRight,
  Bell,
  CreditCard,
  FileText,
  GraduationCap,
  Heart,
  HeartPulse,
  Lock,
  Shield,
  Zap,
} from "lucide-react";
import { DashboardHeroMock } from "./LandingMocks";
import { CtaLink } from "@/components/CtaButton";
import { site } from "@/lib/site";

const heroFeatureCards = [
  {
    Icon: FileText,
    title: "Factura C online",
    body: "Emití en segundos con ARCA.",
  },
  {
    Icon: CreditCard,
    title: "Mercado Pago",
    body: "Links de cobro y pagos.",
  },
  {
    Icon: HeartPulse,
    title: "Salud fiscal",
    body: "Categoría y alertas claras.",
  },
  {
    Icon: Bell,
    title: "Facturas programadas",
    body: "Abonos y honorarios.",
  },
  {
    Icon: GraduationCap,
    title: "Aprendé y entendé",
    body: "Guías simples de monotributo.",
  },
] as const;

const trustBarItems = [
  {
    Icon: Shield,
    title: "100% en la nube",
    subtitle: "Tus datos siempre seguros",
    iconClass: "text-emerald-600 bg-emerald-50",
  },
  {
    Icon: Lock,
    title: "Cumplimos con ARCA",
    subtitle: "Facturación electrónica oficial",
    iconClass: "text-sky-600 bg-sky-50",
  },
  {
    Icon: Heart,
    title: "Hecho en Argentina",
    subtitle: "Soporte local",
    iconClass: "text-rose-500 bg-rose-50",
  },
] as const;

export function LandingHero() {
  return (
    <section className="relative bg-white">
      <div className="site-container relative pt-5 pb-4 sm:pt-8 sm:pb-6 lg:pt-10 lg:pb-8">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[min(520px,70%)] bg-linear-to-b from-violet-50/70 via-white to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-16 hidden h-80 w-80 rounded-full bg-violet-200/30 blur-3xl lg:block"
          aria-hidden
        />

        <div className="relative grid items-start gap-7 pb-4 sm:gap-10 sm:pb-5 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] lg:gap-14 lg:pb-7">
          <div className="landing-fade-up landing-mobile-header">
          <p className="mb-4 inline-flex max-w-full items-center gap-1.5 rounded-full bg-violet-600 px-3 py-1 text-[0.6875rem] font-semibold leading-snug text-white sm:mb-5 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs">
            <Zap size={12} aria-hidden className="shrink-0 sm:hidden" />
            <Zap size={14} aria-hidden className="hidden shrink-0 sm:block" />
            <span className="sm:hidden">Factura C para monotributo</span>
            <span className="hidden sm:inline">Factura C electrónica para monotributistas en Argentina</span>
          </p>

          <h1 className="max-w-xl text-[clamp(1.5rem,1.25rem+1.4vw,2.875rem)] font-bold leading-[1.12] tracking-tight text-gray-900">
            Emití Factura C, cobrá y controlá tu{" "}
            <span className="text-violet-600">monotributo</span> desde Wally
          </h1>

          <p className="mt-4 max-w-lg text-[0.9375rem] leading-relaxed text-gray-600 sm:mt-5 sm:text-lg">
            La plataforma online para monotributistas que reúne facturación electrónica ante ARCA,
            links de cobro con Mercado Pago, facturas programadas, colaboradores con permisos
            limitados y salud fiscal para{" "}
            <strong className="font-semibold text-violet-700">trabajar más simple</strong>.
          </p>

          <div className="mt-6 sm:mt-8">
            <CtaLink href={site.appUrl} size="lg" block>
              Probar Wally gratis 30 días
              <ArrowRight size={18} aria-hidden />
            </CtaLink>
          </div>
        </div>

          <div className="landing-fade-up landing-fade-up-delay-2 relative z-0 w-full self-start lg:max-w-none">
            <div
              className="pointer-events-none absolute inset-6 rounded-3xl bg-violet-400/15 blur-3xl"
              aria-hidden
            />
            <DashboardHeroMock className="relative w-full" />
          </div>
        </div>

        <div className="landing-fade-up landing-fade-up-delay-3 relative z-20 mt-2 rounded-xl border border-gray-100 bg-white/95 p-3 backdrop-blur-sm sm:rounded-2xl sm:p-4 lg:mt-4 lg:p-5">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-gray-100">
            {heroFeatureCards.map(({ Icon, title, body }) => (
              <article
                key={title}
                className="flex min-w-0 items-center gap-2.5 rounded-lg transition-colors duration-200 hover:bg-violet-50/60 sm:gap-3 sm:rounded-xl lg:px-4 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-700 sm:h-9 sm:w-9">
                  <Icon size={16} strokeWidth={2} aria-hidden className="sm:hidden" />
                  <Icon size={18} strokeWidth={2} aria-hidden className="hidden sm:block" />
                </span>
                <div className="min-w-0">
                  <h2 className="text-[0.6875rem] font-bold leading-snug text-gray-900 sm:text-xs">{title}</h2>
                  <p className="mt-0.5 text-[0.6875rem] leading-snug text-gray-500 sm:text-xs">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-gray-100 bg-gray-50/80">
        <div className="site-container py-6 sm:py-8 lg:py-10">
          <p className="text-center text-xs font-semibold leading-snug text-gray-800 sm:text-sm lg:text-base">
            Wally está diseñado para monotributistas que quieren facturar, cobrar y ordenar su negocio
          </p>
          <ul className="landing-mobile-trust-list mt-4 flex flex-col items-start gap-5 sm:mt-6 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-start sm:justify-start sm:gap-x-8 sm:gap-y-4 lg:gap-x-12">
            {trustBarItems.map(({ Icon, title, subtitle, iconClass }) => (
              <li key={title} className="flex items-start gap-2.5 sm:gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10 ${iconClass}`}
                >
                  <Icon size={18} strokeWidth={2} aria-hidden className="sm:hidden" />
                  <Icon size={20} strokeWidth={2} aria-hidden className="hidden sm:block" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold leading-snug text-gray-900 sm:text-sm">{title}</p>
                  <p className="mt-0.5 text-[0.6875rem] leading-snug text-gray-500 sm:text-xs">{subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
