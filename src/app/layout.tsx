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
    default: "Wally | Facturador online para monotributo",
    template: "%s | Wally",
  },
  description: site.description,
  keywords: [
    "facturación electrónica monotributo",
    "factura electrónica monotributistas",
    "factura C",
    "Factura C ARCA",
    "emitir factura C online",
    "hacer factura C",
    "monotributistas",
    "ARCA",
    "AFIP",
    "software de facturación para monotributistas",
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
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=6", sizes: "any" },
      { url: "/favicon-16.png?v=6", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png?v=6", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon.ico?v=6"],
    apple: [{ url: "/apple-touch-icon.png?v=6", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: site.url,
    siteName: site.name,
    title: "Wally | Facturador online para monotributo",
    description: site.description,
    images: [
      {
        url: "/landing/inicio-dashboard-desktop.png",
        width: 1024,
        height: 575,
        alt: "Panel de Wally para emitir Factura C, cobrar y controlar el monotributo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wally | Facturador online para monotributo",
    description: site.description,
    images: ["/landing/inicio-dashboard-desktop.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${inter.variable} h-full antialiased`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
