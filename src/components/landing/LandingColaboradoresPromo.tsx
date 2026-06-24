import { ArrowRight, Check, ShieldCheck, UserPlus, Users } from "lucide-react";
import { CtaLink } from "@/components/CtaButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { EquipoColaboradoresMock } from "./LandingMocks";
import { site } from "@/lib/site";

const highlights = [
  "Invitación por email: la persona elige su contraseña y entra a operar tu cuenta.",
  "Permisos por módulo: facturar, clientes, servicios, cobros o programadas.",
  "Sin compartir tu clave fiscal ni dar acceso total a la cuenta.",
  "Vos seguís siendo titular: modificás permisos o revocás el acceso cuando quieras.",
] as const;

const useCases = [
  {
    title: "Empleados o asistentes",
    body: "Que carguen clientes y emitan Factura C por vos mientras atendés el negocio.",
  },
  {
    title: "Contador o gestor",
    body: "Que revise cobros y comprobantes sin pedirte usuario y contraseña.",
  },
  {
    title: "Socio del emprendimiento",
    body: "Que facture y gestione programadas con los permisos que vos definís.",
  },
] as const;

export function LandingColaboradoresPromo() {
  return (
    <section id="colaboradores" className="scroll-mt-24 bg-[#f4f5f7]">
      <div className="site-container landing-section-block">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <ScrollReveal className="relative mx-auto w-full max-w-lg lg:order-2 lg:max-w-none" delay={80}>
            <div
              className="pointer-events-none absolute -right-4 -top-4 hidden h-40 w-40 rounded-full bg-violet-100/70 blur-3xl min-[900px]:block"
              aria-hidden
            />
            <EquipoColaboradoresMock className="relative z-10 w-full" />
          </ScrollReveal>

          <ScrollReveal className="max-w-xl lg:order-1 lg:max-w-none landing-mobile-header">
            <p className="landing-section-badge">
              <Users size={14} aria-hidden />
              Colaboradores de cuenta
            </p>
            <h2 className="landing-section-title mt-3 sm:mt-4">
              Invitá a tu equipo para que{" "}
              <span className="text-violet-600">facture en tu nombre</span>
            </h2>
            <p className="landing-section-lead">
              Sumá empleados, asistentes o tu contador por email. Cada colaborador opera tu cuenta
              de monotributo con permisos limitados — por ejemplo solo facturas o solo clientes —
              mientras vos mantenés el control total.
            </p>

            <ul className="landing-mobile-icon-list mt-7 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700 sm:text-[0.9375rem]">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                    <Check size={12} strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {useCases.map(({ title, body }) => (
                <article
                  key={title}
                  className="rounded-xl border border-gray-100 bg-white/80 p-3.5 sm:p-4"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                    <UserPlus size={16} aria-hidden />
                  </span>
                  <p className="mt-2.5 text-sm font-bold text-gray-900">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">{body}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 min-[900px]:items-start">
              <CtaLink href={site.appUrl} size="lg" block className="max-w-sm min-[900px]:max-w-none">
                Invitar colaboradores en Wally
                <ArrowRight size={18} aria-hidden />
              </CtaLink>
              <p className="flex items-center gap-2 text-xs text-gray-500 sm:text-sm">
                <ShieldCheck size={15} className="shrink-0 text-emerald-600" aria-hidden />
                Incluido en tu prueba gratis de 30 días
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
