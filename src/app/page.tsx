import Link from "next/link";
import {
  BarChart3,
  CalendarClock,
  Check,
  Cloud,
  Clock,
  CreditCard,
  FileText,
  Folder,
  HeartPulse,
  Image as ImageIcon,
  Shield,
  ShieldCheck,
  Smartphone,
  User,
  Zap,
} from "lucide-react";
import { MobileDashboardMock } from "@/components/landing/LandingMocks";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingPricing } from "@/components/landing/LandingPricing";
import { MarketingShell } from "@/components/MarketingShell";
import { site } from "@/lib/site";

const resultCards = [
  {
    title: "Facturá sin vueltas",
    body: "Emití Factura C electrónica con clientes, productos y servicios guardados para no cargar todo de nuevo.",
    Icon: FileText,
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "Programá lo repetitivo",
    body: "Automatizá abonos, honorarios y servicios mensuales, o recibí recordatorios para confirmar antes de emitir.",
    Icon: CalendarClock,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Controlá tu monotributo",
    body: "Revisá facturación acumulada, categoría, vencimientos y señales de salud fiscal desde un panel claro.",
    Icon: HeartPulse,
    color: "bg-orange-100 text-orange-700",
  },
  {
    title: "Cobrale fácil a tus clientes",
    body: "Generá links de cobro con Mercado Pago y, cuando corresponde, facturá el pago desde Wally.",
    Icon: CreditCard,
    color: "bg-sky-100 text-sky-700",
  },
  {
    title: "Tené todo ordenado",
    body: "Centralizá clientes, catálogo, comprobantes, PDFs y acciones rápidas para trabajar más simple.",
    Icon: Folder,
    color: "bg-pink-100 text-pink-700",
  },
  {
    title: "Conectá tus herramientas",
    body: "Usá integraciones con Google Drive, Google Calendar y Mercado Pago cuando estén habilitadas.",
    Icon: ShieldCheck,
    color: "bg-blue-100 text-blue-700",
  },
];

const steps = [
  {
    number: 1,
    title: "Creá tu cuenta",
    body: "Registrate en segundos y tené tu cuenta lista para usar.",
    badge: "Rápido y gratuito",
    numberClass: "bg-violet-600",
    badgeClass: "bg-violet-50 text-violet-700",
  },
  {
    number: 2,
    title: "Vinculá ARCA de forma guiada",
    body: "Conectá tu CUIT y clave fiscal. Te guiamos en todo el proceso.",
    badge: "Seguro y verificado",
    numberClass: "bg-emerald-600",
    badgeClass: "bg-emerald-50 text-emerald-700",
  },
  {
    number: 3,
    title: "Cargá clientes y catálogo",
    body: "Agregá tus clientes, productos o servicios en pocos clics.",
    badge: "Simple y ordenado",
    numberClass: "bg-sky-600",
    badgeClass: "bg-sky-50 text-sky-700",
  },
  {
    number: 4,
    title: "Facturá, cobrá y controlá",
    body: "Emití facturas, enviá links de cobro y llevá el control de tu negocio.",
    badge: "Todo en un solo lugar",
    numberClass: "bg-violet-600",
    badgeClass: "bg-violet-50 text-violet-700",
  },
] as const;

const mobileFeatures = [
  {
    title: "Acceso rápido para facturar",
    body: "Emití tu Factura C en segundos desde el celular.",
    Icon: Zap,
  },
  {
    title: "Clientes y servicios a mano",
    body: "Tené todo lo que necesitás siempre disponible.",
    Icon: User,
  },
  {
    title: "Cobros y programadas visibles",
    body: "Ves tus cobros y facturas programadas al instante.",
    Icon: CalendarClock,
  },
  {
    title: "Resumen fiscal desde el inicio",
    body: "Tu información fiscal más importante en un vistazo.",
    Icon: BarChart3,
  },
] as const;

const mobileTrustItems = [
  {
    title: "Seguro y confiable",
    body: "Tus datos siempre protegidos.",
    Icon: Shield,
  },
  {
    title: "Sin instalar nada",
    body: "Funciona desde tu navegador.",
    Icon: Cloud,
  },
  {
    title: "Siempre actualizado",
    body: "Las últimas funciones, siempre.",
    Icon: Clock,
  },
] as const;

const captures = [
  {
    title: "Emití facturas electrónicas en ARCA",
    body: "Espacio reservado para una captura real del flujo de nueva factura.",
  },
  {
    title: "Gestioná clientes sin perder datos",
    body: "Espacio reservado para una captura real del listado o detalle de clientes.",
  },
  {
    title: "Programá facturas recurrentes",
    body: "Espacio reservado para una captura real del calendario o pantalla de programadas.",
  },
  {
    title: "Revisá tu salud fiscal y categoría",
    body: "Espacio reservado para una captura real del panel de salud fiscal.",
  },
];

const faqs = [
  {
    q: "¿Qué es Wally?",
    a: "Wally es una plataforma para monotributistas que reúne facturación electrónica, clientes, cobros, facturas programadas y seguimiento fiscal en un solo lugar.",
  },
  {
    q: "¿Puedo emitir facturas electrónicas ante ARCA?",
    a: "Sí. Wally emite Factura C electrónica para monotributistas, siempre que tu cuenta tenga la vinculación fiscal completa y estés habilitado para facturar.",
  },
  {
    q: "¿Tengo que poner tarjeta para probar?",
    a: "No. Podés usar Wally durante 30 días gratis sin cargar tarjeta de crédito.",
  },
  {
    q: "¿Puedo cobrar con Mercado Pago?",
    a: "Sí. Podés conectar Mercado Pago para crear links de cobro, revisar pagos recibidos y facturar cobros cuando corresponda.",
  },
  {
    q: "¿Puedo programar facturas mensuales?",
    a: "Sí. Configurás facturas recurrentes con emisión automática o con confirmación manual, ideal para abonos, honorarios y servicios mensuales.",
  },
  {
    q: "¿Wally sirve para responsables inscriptos?",
    a: "No por ahora. Wally está pensado para monotributistas y emite comprobantes C.",
  },
];

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-2xl bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white ${step.numberClass}`}
      >
        {step.number}
      </span>
      <h3 className="mt-5 text-lg font-bold leading-snug text-gray-900">{step.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{step.body}</p>
      <span
        className={`mt-6 inline-flex w-fit rounded-full px-3 py-1.5 text-xs font-semibold ${step.badgeClass}`}
      >
        {step.badge}
      </span>
    </article>
  );
}

function CapturePlaceholder({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-violet-200 bg-violet-50/40 p-8 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-violet-600 shadow-sm">
        <ImageIcon size={28} aria-hidden />
      </span>
      <p className="mt-5 text-sm font-semibold text-gray-900">{title}</p>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-600">{body}</p>
    </div>
  );
}

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.supportEmail,
    logo: `${site.url}/wally-logo.png`,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "es-AR",
    description: site.description,
    potentialAction: {
      "@type": "RegisterAction",
      target: site.appUrl,
      name: "Probar Wally gratis",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: site.url,
    description: site.description,
    offers: {
      "@type": "Offer",
      priceCurrency: "ARS",
      availability: "https://schema.org/InStock",
      url: `${site.url}/#precios`,
    },
    audience: {
      "@type": "Audience",
      audienceType: "Monotributistas de Argentina",
    },
    featureList: [
      "Factura C electrónica para monotributistas",
      "Clientes y catálogo de productos o servicios",
      "Facturas programadas y recurrentes",
      "Cobros con links de Mercado Pago",
      "Seguimiento de salud fiscal y monotributo",
      "Integraciones con Google Drive, Google Calendar y Mercado Pago",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  },
];

export default function HomePage() {
  return (
    <MarketingShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LandingHero />

      {/* Value cards */}
      <section id="beneficios" className="scroll-mt-24 bg-[#f4f5f7]">
        <div className="site-container py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Todo lo que necesitás para administrar tu monotributo
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Una plataforma clara para facturar, cobrar, ordenar información y saber dónde estás parado.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {resultCards.map(({ title, body, Icon, color }) => (
              <article
                key={title}
                className="landing-hover-lift rounded-2xl bg-white p-7 shadow-[0_2px_8px_rgba(15,23,42,0.06)]"
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
                >
                  <Icon size={24} aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-[0.9375rem]">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="site-container py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] lg:gap-14">
            <div className="order-2 lg:order-1">
              <MobileDashboardMock className="landing-float mx-auto lg:mx-0" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                <Smartphone size={14} aria-hidden />
                También desde el celular
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Emití facturas estés{" "}
                <span className="text-violet-600">donde estés</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Wally está pensado para que puedas entrar desde el celular, buscar tus accesos rápidos
                y emitir una Factura C sin depender de una computadora.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {mobileFeatures.map(({ title, body, Icon }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.05)]"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                      <Icon size={18} aria-hidden />
                    </span>
                    <h3 className="mt-3 text-sm font-bold text-gray-900">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{body}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href={site.appUrl}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700 sm:px-8"
                >
                  <Smartphone size={18} aria-hidden />
                  Probar desde mi celular
                </Link>
                <p className="font-['Segoe_Script','Bradley_Hand',cursive] text-xl text-violet-600 sm:text-2xl">
                  Sin instalar nada →
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-8 border-t border-gray-100 pt-10 sm:grid-cols-3">
            {mobileTrustItems.map(({ title, body, Icon }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <Icon size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-900">{title}</p>
                  <p className="mt-1 text-sm text-gray-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LandingPricing />

      {/* Cómo funciona */}
      <section id="como-funciona" className="scroll-mt-24 bg-white">
        <div className="site-container py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold tracking-wide text-violet-700 uppercase">
              Empezar es muy fácil
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              En 4 pasos estás listo para facturar
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Te acompañamos de principio a fin para que puedas enfocarte en tu negocio.
            </p>
          </div>

          <div className="mt-12 hidden items-stretch gap-3 lg:flex">
            {steps.map((step, index) => (
              <div key={step.title} className="contents">
                <div className="min-w-0 flex-1">
                  <StepCard step={step} />
                </div>
                {index < steps.length - 1 ? (
                  <span
                    className="flex shrink-0 items-center self-center text-xl text-violet-300"
                    aria-hidden
                  >
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:hidden">
            {steps.map((step) => (
              <StepCard key={step.title} step={step} />
            ))}
          </div>

          <p className="mt-10 text-center font-['Segoe_Script','Bradley_Hand',cursive] text-2xl text-violet-600 sm:text-3xl">
            Así de simple. Así de Wally.
          </p>
        </div>
      </section>

      {/* Producto */}
      <section id="producto" className="site-container scroll-mt-24 py-16 lg:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Conocé Wally por dentro</h2>
          <p className="mt-3 text-gray-600">
            Pantallas limpias, acciones visibles y funciones pensadas para monotributistas.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {captures.map(({ title, body }) => (
            <div key={title}>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">{title}</h3>
              <CapturePlaceholder title={title} body={body} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA púrpura — facturas programadas */}
      <section className="site-container py-16 lg:py-20">
        <div className="overflow-hidden rounded-3xl bg-violet-600">
          <div className="grid items-center gap-10 px-8 py-12 lg:grid-cols-2 lg:px-14 lg:py-16">
            <div className="mx-auto w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-sm lg:mx-0">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-violet-700">
                  <CalendarClock size={26} aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold">Facturas programadas</p>
                  <p className="text-xs text-violet-100">Automáticas o con confirmación</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {["Abonos mensuales", "Honorarios recurrentes", "Recordatorios de emisión"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                      <Check size={16} aria-hidden />
                      <span className="text-sm">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white">
                ¿Facturás todos los meses a los mismos clientes?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-violet-100">
                Configurá emisiones recurrentes para honorarios, abonos o mantenimiento. Wally puede
                emitirlas automáticamente o pedirte confirmación antes de facturar.
              </p>
              <Link
                href={site.appUrl}
                className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
              >
                Probar Wally gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Contacto */}
      <section id="preguntas" className="scroll-mt-24 bg-white">
        <div className="site-container grid gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Preguntas frecuentes</h2>
            <div className="mt-8 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-gray-200 bg-gray-50 open:bg-white open:shadow-sm"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-gray-900 marker:content-none">
                    <span className="flex items-center justify-between gap-4">
                      {faq.q}
                      <span className="text-violet-600 transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="border-t border-gray-100 px-5 pb-4 pt-2 text-sm leading-relaxed text-gray-600">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">Hablá con nosotros</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                ¿Querés saber si Wally encaja con tu forma de facturar? Escribinos por email y te
                orientamos.
              </p>
              <a
                href={`mailto:${site.supportEmail}`}
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                Enviar email
              </a>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
