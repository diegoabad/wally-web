import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type LegalPageLayoutProps = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalPageLayout({ title, updatedAt, children }: LegalPageLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 py-12">
        <div className="site-container">
          <div className="mx-auto max-w-3xl">
            <header className="mb-8 border-b border-gray-200 pb-6">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
              <p className="mt-2 text-sm text-gray-500">Última actualización: {updatedAt}</p>
            </header>
            <article className="legal-content space-y-6 text-gray-700">{children}</article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
