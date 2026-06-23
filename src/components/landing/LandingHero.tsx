import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CreditCard,
  FileText,
  GraduationCap,
  Heart,
  HeartPulse,
  Lock,
  Play,
  Shield,
  Zap,
} from "lucide-react";
import { DashboardHeroMock } from "./LandingMocks";
import { site } from "@/lib/site";

const heroFeatureCards = [
  {
    Icon: FileText,
    title: "Factura electrónica",
    body: "Emití Factura C en segundos.",
  },
  {
    Icon: CreditCard,
    title: "Mercado Pago",
    body: "Links de cobro y pagos al instante.",
  },
  {
    Icon: HeartPulse,
    title: "Control fiscal",
    body: "Tu categoría y límites siempre a la vista.",
  },
  {
    Icon: Bell,
    title: "Facturas programadas",
    body: "Abonos y honorarios sin olvidos.",
  },
  {
    Icon: GraduationCap,
    title: "Aprendé y entendé",
    body: "Guías simples sobre tus impuestos.",
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
      <div className="site-container relative pt-8 pb-6 lg:pt-10 lg:pb-8">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[min(520px,70%)] bg-linear-to-b from-violet-50/70 via-white to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-16 hidden h-80 w-80 rounded-full bg-violet-200/30 blur-3xl lg:block"
          aria-hidden
        />

        <div className="relative grid items-start gap-10 pb-5 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] lg:gap-14 lg:pb-7">
          <div className="landing-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm shadow-violet-200">
            <Zap size={14} aria-hidden className="shrink-0" />
            Facturación electrónica para monotributistas en Argentina
          </p>

          <h1 className="max-w-xl text-[clamp(1.875rem,1.35rem+1.6vw,2.875rem)] font-bold leading-[1.08] tracking-tight text-gray-900">
            Facturá, cobrá y controlá tu{" "}
            <span className="text-violet-600">monotributo</span> en un solo lugar
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-gray-600">
            Wally simplifica tu día a día: emitís Factura C, organizás clientes, generás links de
            cobro y seguís tu salud fiscal para{" "}
            <strong className="font-semibold text-violet-700">no pasarte de categoría</strong>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={site.appUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-violet-200/80 transition hover:bg-violet-700"
            >
              Probar 30 días gratis
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="#como-funciona"
              className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-white px-6 py-3.5 text-sm font-semibold text-violet-700 transition hover:border-violet-300 hover:bg-violet-50"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-100">
                <Play size={14} aria-hidden className="ml-0.5" />
              </span>
              Ver cómo funciona
            </Link>
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

        <div className="relative z-20 mt-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5 lg:mt-4">
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-0 lg:divide-x lg:divide-gray-100">
            {heroFeatureCards.map(({ Icon, title, body }) => (
              <article
                key={title}
                className="flex min-w-0 flex-1 items-center gap-3 lg:px-4 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
                  <Icon size={18} strokeWidth={2} aria-hidden />
                </span>
                <div className="min-w-0">
                  <h2 className="text-xs font-bold leading-snug text-gray-900">{title}</h2>
                  <p className="mt-0.5 text-xs leading-snug text-gray-500">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-gray-100 bg-gray-50/80">
        <div className="site-container py-8 lg:py-10">
          <p className="text-center text-sm font-semibold text-gray-800 sm:text-base">
            Wally ya ayuda a miles de monotributistas a tener su negocio en orden
          </p>
          <ul className="mt-6 flex flex-wrap items-start justify-center gap-6 sm:gap-10 lg:gap-12">
            {trustBarItems.map(({ Icon, title, subtitle, iconClass }) => (
              <li key={title} className="flex items-start gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconClass}`}
                >
                  <Icon size={20} strokeWidth={2} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug text-gray-900">{title}</p>
                  <p className="mt-0.5 text-xs leading-snug text-gray-500">{subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
