import Link from "next/link";
import { WALLY_LOGO_WHITE_SRC } from "@/lib/brand";
import { site } from "@/lib/site";

const productLinks = [
  { href: "/#beneficios", label: "Beneficios" },
  { href: "/#producto", label: "Funciones" },
  { href: "/#precios", label: "Precios" },
  { href: "/#preguntas", label: "Preguntas frecuentes" },
] as const;

const companyLinks = [
  { href: "/contacto", label: "Quiénes somos" },
  { href: "/contacto", label: "Contacto" },
] as const;

const legalLinks = [
  { href: "/terminos", label: "Términos y condiciones" },
  { href: "/privacidad", label: "Política de privacidad" },
] as const;

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://youtube.com", label: "YouTube" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#0f172a] text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <img
                src={WALLY_LOGO_WHITE_SRC}
                alt={site.name}
                className="h-auto max-h-12 w-auto max-w-38 object-contain"
                draggable={false}
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Facturación electrónica, cobros y salud fiscal para monotributistas en Argentina.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Producto</p>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Empresa</p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Legal</p>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-semibold text-gray-400 transition hover:border-white/25 hover:text-white"
                aria-label={link.label}
              >
                {link.label[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
