import Link from "next/link";
import { WALLY_LOGO_SRC } from "@/lib/brand";
import { site, whatsappUrl } from "@/lib/site";

const productLinks = [
  { href: "/#beneficios", label: "Beneficios" },
  { href: "/#factura", label: "Factura C" },
  { href: "/#producto", label: "Funciones" },
  { href: "/#precios", label: "Precios" },
  { href: "/#preguntas", label: "Preguntas frecuentes" },
] as const;

const companyLinks = [
  { href: "/contacto", label: "Contacto" },
  { href: "/#preguntas", label: "Soporte por WhatsApp" },
] as const;

const legalLinks = [
  { href: "/terminos", label: "Términos y condiciones" },
  { href: "/privacidad", label: "Política de privacidad" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-gray-100 bg-white text-gray-600">
      <div className="site-container py-10 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-90">
              <img
                src={WALLY_LOGO_SRC}
                alt={site.name}
                className="h-auto max-h-12 w-auto max-w-38 object-contain"
                draggable={false}
                decoding="async"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              Factura C electrónica, cobros con Mercado Pago, facturas programadas y salud fiscal
              para monotributistas en Argentina.
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
            <p className="text-sm font-semibold text-gray-900">Empresa</p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-violet-700 transition hover:text-violet-900"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
