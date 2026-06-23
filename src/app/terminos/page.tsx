import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Términos y condiciones de uso de ${site.name}.`,
  alternates: {
    canonical: `${site.url}/terminos`,
  },
};

const updatedAt = "9 de junio de 2026";

export default function TerminosPage() {
  return (
    <LegalPageLayout title="Términos y condiciones" updatedAt={updatedAt}>
      <p>
        Estos términos regulan el acceso y uso de {site.name}, disponible en{" "}
        <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
          {site.appUrl}
        </a>
        , operado desde {site.url}. Al crear una cuenta o utilizar el servicio, aceptás estos
        términos.
      </p>

      <h2>1. Descripción del servicio</h2>
      <p>
        {site.name} es una plataforma digital orientada a monotributistas y profesionales que
        necesitan emitir comprobantes, administrar clientes y organizar aspectos de su actividad
        fiscal en Argentina. El servicio puede integrarse con AFIP/ARCA y, de forma opcional, con
        Google (inicio de sesión, Drive y Calendar).
      </p>

      <h2>2. Requisitos de uso</h2>
      <ul>
        <li>Ser mayor de 18 años y tener capacidad legal para contratar.</li>
        <li>Proporcionar información veraz, actualizada y completa.</li>
        <li>Contar con credenciales válidas ante AFIP/ARCA cuando corresponda facturar.</li>
        <li>No utilizar el servicio para fines ilícitos o contrarios a la normativa vigente.</li>
      </ul>

      <h2>3. Cuenta y seguridad</h2>
      <p>
        Sos responsable de mantener la confidencialidad de tus credenciales y de toda actividad
        realizada desde tu cuenta. Notificanos de inmediato cualquier uso no autorizado a{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>

      <h2>4. Integraciones de terceros</h2>
      <p>
        Al conectar Google o servicios fiscales, autorizás a {site.name} a actuar según los
        permisos que otorgues. Podés desvincular integraciones desde la aplicación o desde tu
        cuenta de Google. {site.name} no es responsable por interrupciones o cambios en servicios
        de terceros (Google, AFIP, ARCA, proveedores de hosting).
      </p>

      <h2>5. Contenido del usuario</h2>
      <p>
        Conservás la titularidad de los datos que cargues (clientes, comprobantes, etc.). Nos
        otorgás una licencia limitada para procesarlos únicamente a fin de prestar el servicio.
      </p>

      <h2>6. Limitación de responsabilidad</h2>
      <p>
        {site.name} es una herramienta de apoyo. No reemplaza asesoramiento contable, legal o
        impositivo profesional. Sos responsable de verificar que tus comprobantes y obligaciones
        fiscales cumplan la normativa aplicable. En la medida permitida por la ley, no seremos
        responsables por daños indirectos, lucro cesante o errores derivados de información
        incorrecta provista por el usuario o por fallas de servicios externos.
      </p>

      <h2>7. Disponibilidad y cambios</h2>
      <p>
        Podemos modificar, suspender o discontinuar funciones del servicio. Procuraremos avisar
        cambios relevantes por medios razonables (email o aviso en la app).
      </p>

      <h2>8. Planes y pagos</h2>
      <p>
        Si en el futuro ofrecemos planes pagos, sus condiciones específicas se comunicarán antes
        de la contratación. Hasta entonces, las funcionalidades disponibles pueden cambiar durante
        la etapa de lanzamiento.
      </p>

      <h2>9. Propiedad intelectual</h2>
      <p>
        El software, marca, diseño y contenidos de {site.name} son propiedad de sus titulares.
        No podés copiar, modificar ni distribuir el servicio sin autorización expresa.
      </p>

      <h2>10. Terminación</h2>
      <p>
        Podés dejar de usar el servicio en cualquier momento. Podemos suspender o cerrar cuentas
        que incumplan estos términos o que representen riesgo de seguridad.
      </p>

      <h2>11. Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de la República Argentina. Cualquier controversia
        será sometida a los tribunales competentes de Argentina, salvo norma imperativa en
        contrario.
      </p>

      <h2>12. Contacto</h2>
      <p>
        Consultas sobre estos términos:{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>
    </LegalPageLayout>
  );
}
