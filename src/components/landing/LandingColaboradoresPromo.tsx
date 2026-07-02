import { ArrowRight, Check, ShieldCheck, Users } from "lucide-react";
import { CtaLink } from "@/components/CtaButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/lib/site";

const highlights = [
  "Invitación por email: la persona elige su contraseña y entra a operar tu cuenta.",
  "Permisos por módulo: facturar, clientes, servicios, cobros o programadas.",
  "Sin compartir tu clave fiscal ni dar acceso total a la cuenta.",
  "Vos seguís siendo titular: modificás permisos o revocás el acceso cuando quieras.",
] as const;

export function LandingColaboradoresPromo() {
  return (
    <section id="colaboradores" className="scroll-mt-24 bg-[#f4f5f7]">
      <div className="site-container landing-section-block">
        <ScrollReveal className="mx-auto max-w-3xl landing-mobile-header">
          <p className="landing-section-badge">
            <Users size={14} aria-hidden />
            Colaboradores de cuenta
          </p>
          <h2 className="landing-section-title mt-3 sm:mt-4">
            Invitá a tu equipo para que{" "}
            <span className="text-violet-600">facture en tu nombre</span>
          </h2>
          <p className="landing-section-lead">
            Sumá empleados o asistentes por email. Cada colaborador opera tu cuenta de monotributo
            con permisos limitados — por ejemplo solo facturas o solo clientes — mientras vos
            mantenés el control total.
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

          <div className="mt-8 flex flex-col items-center gap-3">
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
    </section>
  );
}
