"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { WALLY_LOGO_SRC } from "@/lib/brand";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-[box-shadow,border-color,background-color] duration-300 ${
          scrolled
            ? "border-gray-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
            : "border-gray-100"
        }`}
      >
        <div className="site-container flex items-center justify-between gap-3 py-2.5 sm:py-3.5">
          <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
            <img
              src={WALLY_LOGO_SRC}
              alt={site.name}
              className="h-auto max-h-9 w-auto max-w-32 object-contain sm:max-h-11 sm:max-w-36 lg:max-h-12 lg:max-w-38"
              draggable={false}
              decoding="async"
            />
          </Link>

          <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-violet-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={site.appUrl}
              className="hidden text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-violet-700 lg:inline"
            >
              Iniciar sesión
            </Link>
            <Link
              href={site.appUrl}
              className="landing-btn-primary hidden px-4 py-2.5 text-sm lg:inline-flex"
            >
              Probar gratis
            </Link>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="site-mobile-drawer"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`site-mobile-drawer-backdrop lg:hidden ${menuOpen ? "site-mobile-drawer-backdrop--open" : ""}`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      <aside
        id="site-mobile-drawer"
        className={`site-mobile-drawer lg:hidden ${menuOpen ? "site-mobile-drawer--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
          <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
            <img
              src={WALLY_LOGO_SRC}
              alt={site.name}
              className="h-auto max-h-8 w-auto max-w-28 object-contain"
              draggable={false}
              decoding="async"
            />
          </Link>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          >
            <X size={18} aria-hidden />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-3">
          <p className="px-3 pb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-gray-400">
            Navegación
          </p>
          <ul className="space-y-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-[0.9375rem] font-medium text-gray-700 transition hover:bg-violet-50 hover:text-violet-700"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-gray-100 bg-gray-50/80 p-4">
          <Link
            href={site.appUrl}
            className="block rounded-lg px-3 py-2.5 text-center text-sm font-medium text-gray-700 transition hover:bg-white hover:text-violet-700"
            onClick={closeMenu}
          >
            Iniciar sesión
          </Link>
          <Link
            href={site.appUrl}
            className="landing-btn-primary mt-2 w-full justify-center px-4 py-2.5 text-sm"
            onClick={closeMenu}
          >
            Probar gratis
          </Link>
        </div>
      </aside>
    </>
  );
}
