import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/MarketingShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacto y soporte de ${site.name}.`,
};

export default function ContactoPage() {
  return (
    <MarketingShell>
      <main className="mx-auto max-w-3xl flex-1 px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900">Contacto</h1>
        <p className="mt-4 text-gray-600">
          Estamos para ayudarte con consultas sobre {site.name}, privacidad o soporte de la
          aplicación.
        </p>

        <div className="mt-10 space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Soporte general
            </h2>
            <a
              href={`mailto:${site.supportEmail}`}
              className="mt-1 block text-lg font-medium text-violet-700 hover:underline"
            >
              {site.supportEmail}
            </a>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Privacidad y datos
            </h2>
            <a
              href={`mailto:${site.privacyEmail}`}
              className="mt-1 block text-lg font-medium text-violet-700 hover:underline"
            >
              {site.privacyEmail}
            </a>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Aplicación
            </h2>
            <Link href={site.appUrl} className="mt-1 block text-lg font-medium text-violet-700 hover:underline">
              {site.appUrl}
            </Link>
          </div>
        </div>
      </main>
    </MarketingShell>
  );
}
