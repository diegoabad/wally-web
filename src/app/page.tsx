import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  CalendarClock,
  Check,
  CircleCheck,
  Cloud,
  Clock,
  CreditCard,
  Eye,
  FileText,
  Folder,
  Headphones,
  HeartPulse,
  Lightbulb,
  Lock,
  MessageCircle,
  Shield,
  ShieldCheck,
  Smartphone,
  User,
  Zap,
} from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MobileGalleryMock } from "@/components/landing/MobileGalleryMock";
import { LandingFacturaPreview } from "@/components/landing/LandingFacturaPreview";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingPricing } from "@/components/landing/LandingPricing";
import { LandingProgramadasPromo } from "@/components/landing/LandingProgramadasPromo";
import { MarketingShell } from "@/components/MarketingShell";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Factura C electrónica para monotributistas",
  description: site.description,
  alternates: {
    canonical: site.url,
  },
};

const resultCards = [
  {
    title: "Emití Factura C online",
    body: "Hacé facturas electrónicas para monotributo en pocos clics, con clientes, productos y servicios guardados.",
    Icon: FileText,
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "Programá facturas recurrentes",
    body: "Automatizá abonos, honorarios y servicios mensuales con emisión automática o confirmación previa.",
    Icon: CalendarClock,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Controlá tu salud fiscal",
    body: "Revisá tu facturación, categoría de monotributo, vencimientos y alertas fiscales desde un panel claro.",
    Icon: HeartPulse,
    color: "bg-orange-100 text-orange-700",
  },
  {
    title: "Cobrá con Mercado Pago",
    body: "Generá links de cobro, revisá pagos recibidos y facturá desde Wally cuando corresponde.",
    Icon: CreditCard,
    color: "bg-sky-100 text-sky-700",
  },
  {
    title: "Ordená clientes y servicios",
    body: "Centralizá tu catálogo, comprobantes, PDFs y datos de clientes para facturar más rápido.",
    Icon: Folder,
    color: "bg-pink-100 text-pink-700",
  },
  {
    title: "Conectá tus herramientas",
    body: "Trabajá con integraciones como Google Drive, Google Calendar y Mercado Pago desde una misma plataforma.",
    Icon: ShieldCheck,
    color: "bg-blue-100 text-blue-700",
  },
];

const steps = [
  {
    number: 1,
    title: "Creá tu cuenta",
    body: "Registrate online y empezá tu prueba gratis sin tarjeta de crédito.",
    badge: "Rápido y gratuito",
    numberClass: "bg-violet-600",
    badgeClass: "bg-violet-50 text-violet-700",
  },
  {
    number: 2,
    title: "Vinculá ARCA de forma guiada",
    body: "Conectá tu CUIT para emitir Factura C electrónica con un proceso simple y acompañado.",
    badge: "Seguro y verificado",
    numberClass: "bg-emerald-600",
    badgeClass: "bg-emerald-50 text-emerald-700",
  },
  {
    number: 3,
    title: "Cargá clientes y servicios",
    body: "Guardá clientes, conceptos frecuentes y precios para no repetir datos en cada factura.",
    badge: "Simple y ordenado",
    numberClass: "bg-sky-600",
    badgeClass: "bg-sky-50 text-sky-700",
  },
  {
    number: 4,
    title: "Facturá, cobrá y controlá",
    body: "Emití Factura C, cobrá con Mercado Pago y seguí tu salud fiscal desde Wally.",
    badge: "Todo en un solo lugar",
    numberClass: "bg-violet-600",
    badgeClass: "bg-violet-50 text-violet-700",
  },
] as const;

const mobileFeatures = [
  {
    title: "Acceso rápido para facturar",
    body: "Emití tu Factura C desde el celular, estés donde estés.",
    Icon: Zap,
  },
  {
    title: "Clientes y servicios a mano",
    body: "Tené clientes, conceptos y montos frecuentes siempre disponibles.",
    Icon: User,
  },
  {
    title: "Cobros y programadas visibles",
    body: "Consultá cobros, links de pago y facturas programadas al instante.",
    Icon: CalendarClock,
  },
  {
    title: "Resumen fiscal desde el inicio",
    body: "Mirá tu categoría, facturación y alertas fiscales en un vistazo.",
    Icon: BarChart3,
  },
] as const;

const mobileTrustItems = [
  {
    title: "Seguro y confiable",
    body: "Tus datos y comprobantes protegidos en la nube.",
    Icon: Shield,
  },
  {
    title: "Sin instalar nada",
    body: "Entrás desde navegador, computadora o celular.",
    Icon: Cloud,
  },
  {
    title: "Siempre actualizado",
    body: "Mejoras continuas para monotributistas.",
    Icon: Clock,
  },
] as const;

const productInsideCards = [
  {
    title: "Emití Factura C electrónica en ARCA",
    body: "Elegís cliente, cargás el monto y emitís al toque: CAE, QR y PDF quedan listos en Wally.",
    badge: "Rápido, simple y 100% oficial",
    Icon: FileText,
    iconClass: "bg-violet-100 text-violet-600",
    badgeClass: "bg-violet-50 text-violet-700",
  },
  {
    title: "Cobrá con Mercado Pago desde Wally",
    body: "Creá links de cobro, seguí pagos recibidos y facturá en segundos cuando el cobro entra.",
    badge: "Links de cobro y facturación conectados",
    Icon: CreditCard,
    iconClass: "bg-sky-100 text-sky-600",
    badgeClass: "bg-sky-50 text-sky-700",
  },
  {
    title: "Programá facturas recurrentes",
    body: "Automatizá facturas mensuales para abonos, honorarios o servicios y evitá cargar lo mismo cada mes.",
    badge: "Ahorrá tiempo y evitá olvidos",
    Icon: CalendarClock,
    iconClass: "bg-emerald-100 text-emerald-600",
    badgeClass: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Revisá tu salud fiscal y categoría",
    body: "Visualizá tu facturación, controlá tu categoría de monotributo y recibí alertas para estar al día.",
    badge: "Alertas y recomendaciones personalizadas",
    Icon: BarChart3,
    iconClass: "bg-orange-100 text-orange-600",
    badgeClass: "bg-orange-50 text-orange-700",
  },
] as const;

const faqContactItems = [
  {
    Icon: MessageCircle,
    title: "Respuesta rápida",
    body: "Te respondemos en menos de 24 hs.",
  },
  {
    Icon: Headphones,
    title: "Asesoramiento personalizado",
    body: "Te ayudamos a elegir lo mejor para vos.",
  },
  {
    Icon: Shield,
    title: "Sin compromiso",
    body: "Consultanos lo que necesites, sin cargo.",
  },
] as const;

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const faqs = [
  {
    q: "¿Qué es Wally?",
    a: "Wally es una plataforma online para monotributistas en Argentina que reúne Factura C electrónica, clientes, cobros con Mercado Pago, facturas programadas y seguimiento fiscal en un solo lugar.",
  },
  {
    q: "¿Puedo emitir facturas electrónicas ante ARCA?",
    a: "Sí. Wally permite emitir Factura C electrónica para monotributistas, siempre que tu cuenta tenga la vinculación fiscal completa y estés habilitado para facturar ante ARCA.",
  },
  {
    q: "¿Tengo que poner tarjeta para probar?",
    a: "No. Podés usar Wally durante 30 días gratis sin cargar tarjeta de crédito.",
  },
  {
    q: "¿Puedo cobrar con Mercado Pago?",
    a: "Sí. Podés conectar Mercado Pago para crear links de cobro, revisar pagos recibidos y facturar desde Wally cuando corresponda.",
  },
  {
    q: "¿Puedo programar facturas mensuales?",
    a: "Sí. Configurás facturas recurrentes mensuales con emisión automática o con confirmación manual, ideal para abonos, honorarios y servicios.",
  },
  {
    q: "¿Wally sirve para responsables inscriptos?",
    a: "No por ahora. Wally está pensado para monotributistas y emite comprobantes C.",
  },
];

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <article className="landing-card flex h-full min-w-0 flex-col p-5 sm:p-6">
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white ${step.numberClass}`}
      >
        {step.number}
      </span>
      <h3 className="mt-4 text-base font-bold leading-snug text-gray-900 sm:mt-5 sm:text-lg">{step.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{step.body}</p>
      <span
        className={`mt-6 inline-flex w-fit rounded-full px-3 py-1.5 text-xs font-semibold ${step.badgeClass}`}
      >
        {step.badge}
      </span>
    </article>
  );
}

function ProductInsideCard({ card }: { card: (typeof productInsideCards)[number] }) {
  return (
    <article className="landing-card flex h-full min-w-0 flex-col p-5 sm:p-7">
      <span
        className={`relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${card.iconClass}`}
      >
        <card.Icon size={28} strokeWidth={1.75} aria-hidden />
        {card.Icon === FileText ? (
          <CircleCheck
            size={18}
            className="absolute -bottom-1 -right-1 rounded-full bg-white text-emerald-500"
            aria-hidden
          />
        ) : null}
      </span>
      <h3 className="mt-4 text-base font-bold leading-snug text-gray-900 sm:mt-5 sm:text-xl">{card.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 sm:text-[0.9375rem]">
        {card.body}
      </p>
      <span
        className={`mt-6 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${card.badgeClass}`}
      >
        <Check size={14} strokeWidth={2.5} aria-hidden />
        {card.badge}
      </span>
    </article>
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: `+${site.whatsappNumber}`,
        availableLanguage: "es-AR",
        areaServed: "AR",
      },
    ],
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
    softwareHelp: `${site.url}/#preguntas`,
    offers: {
      "@type": "Offer",
      priceCurrency: "ARS",
      availability: "https://schema.org/InStock",
      url: `${site.url}/#precios`,
      trialDuration: "P30D",
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
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Beneficios",
        item: `${site.url}/#beneficios`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Precios",
        item: `${site.url}/#precios`,
      },
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
        <div className="site-container landing-section-block">
          <ScrollReveal className="max-w-3xl">
            <h2 className="landing-section-title">
              Software de facturación para monotributistas, simple y completo
            </h2>
            <p className="landing-section-lead">
              Emití Factura C, cobrá con Mercado Pago, ordená clientes y controlá tu monotributo
              desde una plataforma clara.
            </p>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {resultCards.map(({ title, body, Icon, color }, index) => (
              <ScrollReveal key={title} delay={index * 70}>
                <article className="landing-card h-full p-5 sm:p-7">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${color}`}
                  >
                    <Icon size={20} aria-hidden className="sm:hidden" />
                    <Icon size={24} aria-hidden className="hidden sm:block" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-gray-900 sm:mt-5 sm:text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-[0.9375rem]">
                    {body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-gradient-section">
        <div className="site-container landing-section-block">
          <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] lg:gap-14">
            <ScrollReveal className="order-2 lg:order-1">
              <MobileGalleryMock className="landing-float" />
            </ScrollReveal>
            <ScrollReveal className="order-1 lg:order-2" delay={80}>
              <p className="landing-section-badge">
                <Smartphone size={14} aria-hidden />
                También desde el celular
              </p>
              <h2 className="landing-section-title mt-3 sm:mt-4">
                Emití facturas estés{" "}
                <span className="text-violet-600">donde estés</span>
              </h2>
              <p className="landing-section-lead">
                Wally está pensado para que puedas entrar desde el celular, consultar cobros,
                revisar programadas y emitir una Factura C sin depender de una computadora.
              </p>
              <div className="mt-5 grid gap-3 sm:mt-7 sm:gap-4 sm:grid-cols-2">
                {mobileFeatures.map(({ title, body, Icon }) => (
                  <article key={title} className="landing-card p-3.5 sm:p-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                      <Icon size={18} aria-hidden />
                    </span>
                    <h3 className="mt-3 text-sm font-bold text-gray-900">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{body}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href={site.appUrl} className="landing-btn-primary min-h-12 px-6 py-3 text-sm sm:px-8">
                  <Smartphone size={18} aria-hidden />
                  Probar desde mi celular
                </Link>
                <p className="font-['Segoe_Script','Bradley_Hand',cursive] text-lg text-violet-600 sm:text-2xl">
                  Sin instalar nada →
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-10 grid gap-6 border-t border-gray-100 pt-8 sm:mt-14 sm:gap-8 sm:pt-10 sm:grid-cols-3" delay={120}>
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
          </ScrollReveal>
        </div>
      </section>

      <LandingPricing />

      {/* Cómo funciona */}
      <section id="como-funciona" className="scroll-mt-24 bg-white">
        <div className="site-container landing-section-block">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="landing-section-badge uppercase tracking-wide">Empezar es muy fácil</p>
            <h2 className="landing-section-title mt-4 sm:mt-5">
              En 4 pasos estás listo para facturar
            </h2>
            <p className="landing-section-lead">
              Te acompañamos de principio a fin para que puedas facturar online sin trabarte con
              procesos largos.
            </p>
          </ScrollReveal>

          <div className="mt-12 hidden items-stretch gap-3 lg:flex">
            {steps.map((step, index) => (
              <div key={step.title} className="contents">
                <ScrollReveal className="min-w-0 flex-1" delay={index * 80}>
                  <StepCard step={step} />
                </ScrollReveal>
                {index < steps.length - 1 ? (
                  <span
                    className="flex shrink-0 items-center self-center text-xl text-violet-300 transition-transform duration-300 hover:translate-x-0.5"
                    aria-hidden
                  >
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:hidden">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 70}>
                <StepCard step={step} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-10 text-center" delay={120}>
            <p className="font-['Segoe_Script','Bradley_Hand',cursive] text-xl text-violet-600 sm:text-3xl">
              Así de simple. Así de Wally.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Producto */}
      <section id="producto" className="scroll-mt-24 bg-[#f4f5f7]">
        <div className="site-container landing-section-block">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="landing-section-badge landing-section-badge--solid">
              Diseñado para monotributistas
            </p>
            <h2 className="landing-section-title mt-4 sm:mt-5">
              Conocé <span className="text-violet-600">Wally</span> por dentro
            </h2>
            <p className="landing-section-lead">
              Pantallas limpias, acciones visibles y funciones pensadas para emitir, cobrar y
              controlar tu monotributo.
            </p>
          </ScrollReveal>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:gap-8">
            {productInsideCards.map((card, index) => (
              <ScrollReveal key={card.title} delay={index * 70}>
                <ProductInsideCard card={card} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mx-auto mt-12 flex max-w-xl flex-col items-center text-center" delay={120}>
            <Link
              href={site.appUrl}
              className="landing-btn-secondary min-h-12 w-full rounded-full border-2 border-violet-600 px-6 py-3 text-sm sm:w-auto sm:px-8"
            >
              <Eye size={18} aria-hidden />
              Probá todas las funciones gratis por 30 días
            </Link>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500">
              <Lock size={14} aria-hidden className="shrink-0" />
              Sin tarjeta de crédito • Podés cancelar cuando quieras
            </p>
          </ScrollReveal>
        </div>
      </section>

      <LandingFacturaPreview />

      <LandingProgramadasPromo />

      {/* FAQ + Contacto */}
      <section id="preguntas" className="scroll-mt-24 bg-[#f4f5f7]">
        <div className="site-container grid gap-8 landing-section-block lg:grid-cols-2 lg:gap-12">
          <ScrollReveal>
            <h2 className="landing-section-title">Preguntas frecuentes</h2>
            <p className="landing-section-lead mt-2">
              Respondemos las dudas más comunes de monotributistas.
            </p>
            <div className="mt-8">
              <FaqAccordion faqs={faqs} />
            </div>
            <p className="mt-6 flex items-start gap-2 text-sm text-gray-600">
              <Lightbulb size={16} className="mt-0.5 shrink-0 text-violet-600" aria-hidden />
              ¿No encontraste lo que buscabas? Escribinos por WhatsApp, estamos para ayudarte.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="landing-card h-full border-violet-100 bg-linear-to-br from-violet-50/90 via-white to-violet-50/40 p-5 sm:p-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-200 sm:h-11 sm:w-11">
                <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <h2 className="mt-4 text-xl font-bold text-gray-900 sm:mt-5 sm:text-2xl">Hablá con nosotros</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                ¿Querés saber si Wally encaja con tu forma de facturar?{" "}
                <strong className="font-semibold text-gray-800">Escribinos por WhatsApp</strong> y
                te orientamos.
              </p>
              <ul className="mt-6 space-y-4">
                {faqContactItems.map(({ Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-violet-600 shadow-sm">
                      <Icon size={18} aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{title}</p>
                      <p className="mt-0.5 text-sm text-gray-600">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="landing-btn-whatsapp mt-8 w-full"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Escribinos por WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </MarketingShell>
  );
}
