import Link from "next/link";
import { ArrowRight, Bell, Clock, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProgramadasScreenshotMock } from "./LandingMocks";
import { site } from "@/lib/site";

const benefits = [
  {
    Icon: Clock,
    title: "Ahorrá tiempo",
    body: "Automatizá tareas repetitivas.",
  },
  {
    Icon: ShieldCheck,
    title: "Evitá olvidos",
    body: "Nunca más te atrasás con una factura.",
  },
  {
    Icon: Bell,
    title: "Más control",
    body: "Elegís qué se emite y cómo recibir confirmación.",
  },
] as const;

export function LandingProgramadasPromo() {
  return (
    <section className="site-container landing-section-block">
      <ScrollReveal>
        <div className="overflow-hidden rounded-2xl border border-violet-100 bg-linear-to-br from-violet-50/90 via-white to-violet-50/50 px-5 py-8 shadow-[0_8px_40px_rgba(104,41,248,0.08)] sm:rounded-[1.75rem] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="landing-section-title">
              Programá facturas recurrentes para tus{" "}
              <span className="text-violet-600">abonos mensuales</span>
            </h2>
            <p className="landing-section-lead">
              Configurá emisiones mensuales para honorarios, abonos o mantenimiento. Wally puede
              emitir la Factura C automáticamente o pedirte confirmación antes de facturar.
            </p>
          </div>

          <div className="relative mx-auto mt-10 w-full max-w-none lg:mt-12">
            <div
              className="pointer-events-none absolute inset-x-[8%] top-1/2 h-48 -translate-y-1/2 rounded-full bg-violet-200/30 blur-3xl lg:h-64"
              aria-hidden
            />
            <div className="relative z-10 transition-transform duration-500 hover:scale-[1.01]">
              <ProgramadasScreenshotMock className="w-full" />
            </div>
          </div>

          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center text-center lg:mt-12">
            <Link href={site.appUrl} className="landing-btn-primary min-h-12 px-7 py-3.5 text-sm">
              Probar Wally gratis
              <ArrowRight size={18} aria-hidden />
            </Link>

            <div className="mt-10 grid w-full gap-8 sm:grid-cols-3 sm:gap-6 sm:text-left">
              {benefits.map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="flex flex-col items-center rounded-2xl border border-transparent p-4 transition hover:border-violet-100 hover:bg-white/70 sm:items-start"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                    <Icon size={18} strokeWidth={2} aria-hidden />
                  </span>
                  <p className="mt-3 text-sm font-bold text-gray-900">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
