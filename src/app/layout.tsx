import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Facturación electrónica para monotributistas`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "facturación electrónica monotributo",
    "factura C",
    "emitir factura C online",
    "monotributistas",
    "ARCA",
    "AFIP",
    "Mercado Pago",
    "links de cobro Mercado Pago",
    "facturas programadas",
    "facturas recurrentes",
    "salud fiscal",
    "control monotributo",
    "software para monotributistas",
  ],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "business",
  alternates: {
    canonical: site.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Facturación electrónica para monotributistas`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Facturación electrónica para monotributistas`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
