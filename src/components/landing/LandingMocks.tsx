import type { ReactNode } from "react";
import { LANDING_INICIO_DESKTOP_SRC, LANDING_INICIO_MOBILE_SRC } from "@/lib/brand";

type MockProps = {
  className?: string;
};

function BrowserMockFrame({
  url,
  className = "",
  children,
}: MockProps & { url: string; children: ReactNode }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-2xl shadow-violet-200/40 ring-1 ring-black/5 ${className}`}
    >
      <div className="border-b border-gray-200 bg-[#f3f4f6] px-3 py-1.5">
        <div className="flex items-center gap-2">
          <div className="flex shrink-0 items-center gap-1" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2 py-0.5 shadow-sm">
            <svg viewBox="0 0 20 20" className="h-2.5 w-2.5 shrink-0 text-emerald-600" aria-hidden>
              <path
                fill="currentColor"
                d="M10 1a5 5 0 00-5 5v1H4a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2h-1V6a5 5 0 00-5-5zm3 6V6a3 3 0 10-6 0v1h6z"
              />
            </svg>
            <span className="truncate text-[10px] font-medium leading-none text-gray-600">{url}</span>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f5f7]">{children}</div>
    </div>
  );
}

export function DashboardHeroMock({ className = "" }: MockProps) {
  return (
    <div className={`mx-auto w-full max-w-136 lg:max-w-none ${className}`}>
      <BrowserMockFrame url="app.soywally.com.ar/inicio" className="w-full">
        <img
          src={LANDING_INICIO_DESKTOP_SRC}
          alt="Panel de inicio de Wally en escritorio con acciones rápidas y resumen fiscal"
          className="block h-auto w-full"
          draggable={false}
          decoding="async"
        />
      </BrowserMockFrame>
    </div>
  );
}

export function MobileDashboardMock({ className = "" }: MockProps) {
  return (
    <div
      className={`mx-auto w-full max-w-68 rounded-[2.1rem] border border-gray-200/80 bg-gray-950 p-2 shadow-2xl shadow-violet-200/60 ring-1 ring-black/10 ${className}`}
    >
      <div className="overflow-hidden rounded-[1.7rem] bg-white">
        <img
          src={LANDING_INICIO_MOBILE_SRC}
          alt="Inicio de Wally en celular con acceso para emitir factura"
          className="block h-auto w-full"
          draggable={false}
          decoding="async"
        />
      </div>
    </div>
  );
}
