import type { ReactNode } from "react";
import { LANDING_INICIO_DESKTOP_SRC, LANDING_INICIO_MOBILE_SRC, LANDING_PROGRAMADAS_DESKTOP_SRC } from "@/lib/brand";

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
      className={`overflow-hidden rounded-2xl border border-gray-200/80 bg-white ring-1 ring-black/5 ${className}`}
    >
      <div className="border-b border-gray-200 bg-[#f3f4f6] px-3 py-1.5">
        <div className="flex items-center gap-2">
          <div className="flex shrink-0 items-center gap-1" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2 py-0.5">
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
      className={`w-full max-w-80 sm:max-w-88 lg:max-w-96 rounded-[2.5rem] border border-zinc-600/35 bg-zinc-800 p-2 ring-1 ring-zinc-900/25 lg:rounded-[2.75rem] ${className}`}
    >
      <div className="overflow-hidden rounded-[2rem] bg-white lg:rounded-[2.25rem]">
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

export function ProgramadasScreenshotMock({ className = "" }: MockProps) {
  return (
    <div className={`mx-auto w-full ${className}`}>
      <BrowserMockFrame url="app.soywally.com.ar/facturas-programadas" className="w-full">
        <img
          src={LANDING_PROGRAMADAS_DESKTOP_SRC}
          alt="Calendario de facturas programadas en Wally con emisiones automáticas y recordatorios"
          className="block h-auto w-full"
          draggable={false}
          decoding="async"
        />
      </BrowserMockFrame>
    </div>
  );
}

const mockPermissions = [
  { label: "Facturar", active: true },
  { label: "Clientes", active: true },
  { label: "Servicios", active: false },
  { label: "Cobros", active: false },
  { label: "Programadas", active: true },
] as const;

export function EquipoColaboradoresMock({ className = "" }: MockProps) {
  return (
    <div className={`mx-auto w-full ${className}`}>
      <BrowserMockFrame url="app.soywally.com.ar/equipo" className="w-full">
        <div className="p-4 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-gray-900 sm:text-base">Colaboradores</p>
              <p className="mt-0.5 text-[11px] text-gray-500 sm:text-xs">
                Personas que operan tu cuenta con permisos limitados
              </p>
            </div>
            <span className="inline-flex items-center rounded-lg bg-violet-600 px-2.5 py-1.5 text-[10px] font-semibold text-white sm:text-xs">
              + Invitar
            </span>
          </div>

          <div className="mt-4 space-y-2.5">
            {[
              { name: "Mariana L.", email: "mariana@estudio.com", status: "Activo", perms: "Facturar, Clientes" },
              { name: "Tomás R.", email: "tomas@miempresa.com", status: "Pendiente", perms: "Facturar, Programadas" },
            ].map((member) => (
              <div
                key={member.email}
                className="rounded-xl border border-gray-200 bg-white p-3 sm:p-3.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-gray-900 sm:text-sm">
                      {member.name}{" "}
                      <span className="font-normal text-gray-400">({member.email})</span>
                    </p>
                    <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">Permisos: {member.perms}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold sm:text-[11px] ${
                      member.status === "Activo"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {member.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-violet-100 bg-violet-50/60 p-3 sm:p-3.5">
            <p className="text-[11px] font-semibold text-gray-900 sm:text-xs">Invitar colaborador</p>
            <div className="mt-2 rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-[11px] text-gray-400 sm:text-xs">
              nombre@ejemplo.com
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {mockPermissions.map(({ label, active }) => (
                <span
                  key={label}
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold sm:text-[11px] ${
                    active
                      ? "bg-violet-600 text-white"
                      : "bg-white text-gray-500 ring-1 ring-gray-200"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </BrowserMockFrame>
    </div>
  );
}
