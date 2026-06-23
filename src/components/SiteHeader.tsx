import Link from "next/link";
import { WALLY_LOGO_SRC } from "@/lib/brand";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="site-container flex items-center justify-between gap-4 py-3.5">
        <Link href="/" className="flex shrink-0 items-center">
          <img
            src={WALLY_LOGO_SRC}
            alt={site.name}
            className="h-auto max-h-12 w-auto max-w-38 object-contain"
            draggable={false}
            decoding="async"
          />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-violet-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href={site.appUrl}
            className="hidden text-sm font-medium text-gray-700 transition hover:text-violet-700 sm:inline"
          >
            Iniciar sesión
          </Link>
          <Link
            href={site.appUrl}
            className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
          >
            Probar gratis
          </Link>
        </div>
      </div>
    </header>
  );
}
