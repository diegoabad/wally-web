import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Smartphone } from "lucide-react";
import { MarketingShell } from "@/components/MarketingShell";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto y soporte para monotributistas",
  description: `Contactá a ${site.name} por WhatsApp para conocer la plataforma de Factura C, Mercado Pago y salud fiscal para monotributistas.`,
  alternates: {
    canonical: `${site.url}/contacto`,
  },
};

const contactItems = [
  {
    Icon: MessageCircle,
    title: "Soporte general",
    body: "Consultas sobre la plataforma, facturación o funciones.",
    href: whatsappUrl(),
    label: "Escribinos por WhatsApp",
    external: true,
  },
  {
    Icon: Mail,
    title: "Privacidad y datos",
    body: "Consultas sobre protección de datos y privacidad.",
    href: `mailto:${site.privacyEmail}`,
    label: site.privacyEmail,
    external: false,
  },
  {
    Icon: Smartphone,
    title: "Aplicación",
    body: "Accedé a Wally para empezar tu prueba gratis.",
    href: site.appUrl,
    label: site.appUrl.replace(/^https?:\/\//, ""),
    external: false,
  },
] as const;

export default function ContactoPage() {
  return (
    <MarketingShell>
      <main className="flex-1 py-10 sm:py-16">
        <div className="site-container">
          <ScrollReveal className="mx-auto max-w-3xl">
            <p className="landing-section-badge">Contacto</p>
            <h1 className="landing-section-title mt-3 sm:mt-4">Estamos para ayudarte</h1>
            <p className="landing-section-lead">
              Consultas sobre {site.name}, facturación electrónica para monotributistas, Mercado
              Pago, programadas o soporte de la aplicación.
            </p>
          </ScrollReveal>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4">
            {contactItems.map(({ Icon, title, body, href, label, external }, index) => (
              <ScrollReveal key={title} delay={index * 70}>
                <article className="landing-card p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                      <Icon size={20} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                        {title}
                      </h2>
                      <p className="mt-1 text-sm text-gray-600">{body}</p>
                      {external ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex text-base font-semibold text-violet-700 transition hover:text-violet-900"
                        >
                          {label}
                        </a>
                      ) : (
                        <Link
                          href={href}
                          className="mt-3 inline-flex text-base font-semibold text-violet-700 transition hover:text-violet-900"
                        >
                          {label}
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
    </MarketingShell>
  );
}
