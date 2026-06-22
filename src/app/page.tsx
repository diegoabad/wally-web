import Link from "next/link";
import {
  CalendarClock,
  Check,
  CreditCard,
  FileText,
  FolderKanban,
  HeartPulse,
  Image as ImageIcon,
  Link2,
  ListChecks,
  Play,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  UserPlus,
} from "lucide-react";
import { DashboardHeroMock, MobileDashboardMock } from "@/components/landing/LandingMocks";
import { LandingPricing } from "@/components/landing/LandingPricing";
import { MarketingShell } from "@/components/MarketingShell";
import { site, whatsappUrl } from "@/lib/site";

const heroFeatures = [
  { Icon: FileText, label: "Factura C electrónica" },
  { Icon: CreditCard, label: "Cobros con Mercado Pago" },
  { Icon: HeartPulse, label: "Control fiscal del monotributo" },
];

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
    Icon: FolderKanban,
    color: "bg-fuchsia-100 text-fuchsia-700",
  },
  {
    title: "Conectá tus herramientas",
    body: "Usá integraciones con Google Drive, Google Calendar y Mercado Pago cuando estén habilitadas.",
    Icon: ShieldCheck,
    color: "bg-indigo-100 text-indigo-700",
  },
];

const steps = [
  { Icon: UserPlus, title: "Creá tu cuenta" },
  { Icon: Link2, title: "Vinculá ARCA de forma guiada" },
  { Icon: ListChecks, title: "Cargá clientes y catálogo" },
  { Icon: Check, title: "Facturá, cobrá y controlá" },
];

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
      {/* Hero */}
      <section className="relative overflow-x-clip bg-linear-to-b from-violet-50/80 to-[#f4f5f7]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,44%)_minmax(0,56%)] lg:gap-12 lg:py-24">
          <div className="landing-fade-up">
            <p className="mb-4 inline-flex rounded-full border border-violet-200 bg-white px-3 py-1 text-xs font-semibold text-violet-700 shadow-sm">
              Facturación electrónica para monotributistas en Argentina
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Facturá, cobrá y controlá tu monotributo desde un solo lugar
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Wally simplifica tu día a día: emitís Factura C electrónica, organizás clientes,
              programás comprobantes, generás links de cobro y seguís tu salud fiscal sin perderte
              entre pantallas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={site.appUrl}
                className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
              >
                Probar 30 días gratis
              </Link>
              <Link
                href="#como-funciona"
                className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-white px-6 py-3 text-sm font-semibold text-violet-700 transition hover:border-violet-300 hover:bg-violet-50"
              >
                <Play size={16} aria-hidden />
                Ver cómo funciona
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {heroFeatures.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-sm">
                    <Icon size={16} aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <DashboardHeroMock className="landing-fade-up landing-fade-up-delay-2 w-full lg:scale-[1.04] lg:origin-center" />
        </div>
      </section>

      {/* Value cards */}
      <section id="beneficios" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Todo lo que necesitás para administrar tu monotributo
          </h2>
          <p className="mt-3 text-gray-600">
            Una plataforma clara para facturar, cobrar, ordenar información y saber dónde estás parado.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resultCards.map(({ title, body, Icon, color }) => (
            <article
              key={title}
              className="landing-hover-lift rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-violet-200"
            >
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${color}`}
              >
                <Icon size={22} aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:py-20">
          <div className="order-2 lg:order-1">
            <MobileDashboardMock className="landing-float" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
              <Smartphone size={14} aria-hidden />
              También desde el celular
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Emití facturas estés donde estés
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Wally está pensado para que puedas entrar desde el celular, buscar tus accesos rápidos
              y emitir una Factura C sin depender de una computadora.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Acceso rápido para facturar",
                "Clientes y servicios a mano",
                "Cobros y programadas visibles",
                "Resumen fiscal desde el inicio",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-800"
                >
                  <ReceiptText size={17} className="shrink-0 text-violet-600" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href={site.appUrl}
              className="mt-8 inline-flex rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
            >
              Probar desde mi celular
            </Link>
          </div>
        </div>
      </section>

      <LandingPricing />

      {/* Cómo funciona */}
      <section id="como-funciona" className="scroll-mt-24 bg-[#f4f5f7]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900">Empezar es muy fácil</h2>
            <p className="mt-3 text-gray-600">
              Te acompañamos paso a paso para dejar tu cuenta lista y empezar a trabajar.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ Icon, title }, i) => (
              <article
                key={title}
                className="landing-hover-lift relative overflow-hidden rounded-3xl border border-violet-100 bg-white p-6 shadow-sm"
              >
                <span
                  className="pointer-events-none absolute -right-3 -top-8 text-8xl font-black leading-none text-violet-50"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative flex items-center justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-200">
                    <Icon size={20} aria-hidden />
                  </span>
                  <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="relative mt-6 text-lg font-bold leading-snug text-gray-900">{title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Producto */}
      <section id="producto" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
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
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
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
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
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
                ¿Querés saber si Wally encaja con tu forma de facturar? Escribinos por WhatsApp o
                email y te orientamos.
              </p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${site.supportEmail}`}
                className="mt-3 flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-violet-300 hover:text-violet-700"
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
