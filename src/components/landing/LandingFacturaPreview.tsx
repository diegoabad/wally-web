import { ArrowRight, Check, FileText } from "lucide-react";
import { CtaLink } from "@/components/CtaButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LANDING_FACTURA_PREVIEW_SRC } from "@/lib/brand";
import { site } from "@/lib/site";

const highlights = [
  "Factura C electrónica ante ARCA",
  "CAE, QR y PDF listos al emitir",
  "Vista previa antes de confirmar",
  "Descargá el PDF o compartilo por WhatsApp",
] as const;

export function LandingFacturaPreview() {
  return (
    <section id="factura" className="scroll-mt-24 bg-white">
      <div className="site-container landing-section-block">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <ScrollReveal className="max-w-xl lg:max-w-none">
            <p className="landing-section-badge">
              <FileText size={14} aria-hidden />
              Factura C en segundos
            </p>
            <h2 className="landing-section-title mt-3 sm:mt-4">
              Emitís rápido y recibís un comprobante{" "}
              <span className="text-violet-600">100% oficial</span>
            </h2>
            <p className="landing-section-lead">
              Elegís cliente y monto, revisás la vista previa y en pocos clics tenés tu Factura C
              para monotributo con CAE autorizado por ARCA, lista para descargar o compartir.
            </p>
            <ul className="mt-7 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700 sm:text-[0.9375rem]">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                    <Check size={12} strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <CtaLink href={site.appUrl} size="lg" className="mt-8">
              Emitir mi primera factura
              <ArrowRight size={18} aria-hidden />
            </CtaLink>
          </ScrollReveal>

          <ScrollReveal className="relative mx-auto w-full max-w-md lg:max-w-lg xl:max-w-xl" delay={100}>
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full bg-violet-100/70 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-8 -left-6 h-44 w-44 rounded-full bg-violet-200/40 blur-3xl"
              aria-hidden
            />
            <figure className="landing-image-frame relative z-10">
              <img
                src={LANDING_FACTURA_PREVIEW_SRC}
                alt="Vista previa de Factura C electrónica emitida con Wally, con CAE, QR y datos fiscales"
                className="block h-auto w-full"
                draggable={false}
                decoding="async"
              />
            </figure>
            <figcaption className="mt-4 text-center text-xs text-gray-500">
              Comprobante de ejemplo — tu factura real incluye tus datos y el CAE de ARCA.
            </figcaption>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
