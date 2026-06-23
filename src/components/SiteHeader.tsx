"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { WALLY_LOGO_SRC } from "@/lib/brand";
import { CtaLink } from "@/components/CtaButton";
import { legalLinks, navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="site-header-shell">
        <header className="site-header">
          <div className="site-container site-header__bar">
            <Link href="/" className="site-header__logo-link" onClick={closeMenu}>
              <img
                src={WALLY_LOGO_SRC}
                alt={site.name}
                className="site-header__logo"
                draggable={false}
                decoding="async"
              />
            </Link>

            <nav className="hidden items-center gap-7 min-[900px]:flex xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.9375rem] font-medium text-gray-600 transition-colors duration-200 hover:text-violet-700 min-[900px]:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 min-[900px]:gap-4">
              <Link
                href={site.appUrl}
                className="hidden text-[0.9375rem] font-medium text-gray-700 transition-colors duration-200 hover:text-violet-700 min-[900px]:inline min-[900px]:text-base"
              >
                Iniciar sesión
              </Link>
              <div className="hidden min-[900px]:block">
                <CtaLink href={site.appUrl}>Probar gratis</CtaLink>
              </div>
              <button
                type="button"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 min-[900px]:hidden"
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
      </div>

      <div
        className={`site-mobile-drawer-backdrop min-[900px]:hidden ${menuOpen ? "site-mobile-drawer-backdrop--open" : ""}`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      <aside
        id="site-mobile-drawer"
        className={`site-mobile-drawer min-[900px]:hidden ${menuOpen ? "site-mobile-drawer--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-4 py-3.5">
          <Link href="/" className="flex h-10 shrink-0 items-center" onClick={closeMenu}>
            <img
              src={WALLY_LOGO_SRC}
              alt={site.name}
              className="block h-full w-auto max-w-36 object-contain"
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
          <ul className="mt-2 space-y-0.5 border-t border-gray-100 pt-2">
            {legalLinks.map((link) => (
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

        <div className="mt-auto shrink-0 border-t border-gray-100 bg-gray-50/80 px-5 py-5 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))]">
          <Link
            href={site.appUrl}
            className="block rounded-lg px-3 py-2.5 text-center text-sm font-medium text-gray-700 transition hover:bg-white hover:text-violet-700"
            onClick={closeMenu}
          >
            Iniciar sesión
          </Link>
          <CtaLink href={site.appUrl} block className="mt-3">
            Probar gratis
          </CtaLink>
        </div>
      </aside>
    </>
  );
}
