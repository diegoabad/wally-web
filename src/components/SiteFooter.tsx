import Link from "next/link";
import { WALLY_LOGO_SRC } from "@/lib/brand";
import { legalLinks, site, whatsappUrl } from "@/lib/site";

const productLinks = [
  { href: "/#beneficios", label: "Beneficios" },
  { href: "/#factura", label: "Factura C" },
  { href: "/#producto", label: "Funciones" },
  { href: "/#precios", label: "Precios" },
  { href: "/#preguntas", label: "Preguntas frecuentes" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-gray-100 bg-white text-gray-600">
      <div className="site-container py-10 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-90">
              <img
                src={WALLY_LOGO_SRC}
                alt={site.name}
                className="h-auto max-h-12 w-auto max-w-38 object-contain"
                draggable={false}
                decoding="async"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
              Factura C electrónica, cobros con Mercado Pago, facturas programadas y salud fiscal
              para monotributistas en Argentina.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Contacto:{" "}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-violet-700 hover:text-violet-900"
              >
                WhatsApp
              </a>
              {" · "}
              <a href={`mailto:${site.supportEmail}`} className="font-medium text-violet-700 hover:text-violet-900">
                {site.supportEmail}
              </a>
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Producto</p>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-600 transition hover:text-violet-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Legal</p>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 transition hover:text-violet-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-4 text-center text-sm leading-relaxed text-gray-600 sm:px-6">
          Al usar {site.name} aceptás nuestros{" "}
          <Link href="/terminos" className="font-medium text-violet-700 hover:text-violet-900">
            Términos y condiciones
          </Link>{" "}
          y la{" "}
          <Link href="/privacidad" className="font-medium text-violet-700 hover:text-violet-900">
            Política de privacidad
          </Link>
          .
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-xs text-gray-500" suppressHydrationWarning>
            © {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-gray-600"
            aria-label="Enlaces legales"
          >
            {legalLinks.map((link, index) => (
              <span key={link.href} className="inline-flex items-center gap-4">
                {index > 0 ? <span className="text-gray-300" aria-hidden>·</span> : null}
                <Link href={link.href} className="transition hover:text-violet-700">
                  {link.label}
                </Link>
              </span>
            ))}
            <span className="text-gray-300" aria-hidden>
              ·
            </span>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-violet-700"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
