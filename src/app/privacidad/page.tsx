import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Política de privacidad de ${site.name}. Cómo tratamos tus datos personales, integraciones con Google OAuth, Drive, Calendar y contacto.`,
  alternates: {
    canonical: `${site.url}/privacidad`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const updatedAt = "9 de junio de 2026";

export default function PrivacidadPage() {
  return (
    <LegalPageLayout title="Política de privacidad" updatedAt={updatedAt}>
      <p>
        En {site.name} ({site.url}) respetamos tu privacidad. Esta política describe qué datos
        recopilamos, cómo los usamos y cuáles son tus derechos cuando utilizás nuestra aplicación
        web en{" "}
        <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
          {site.appUrl}
        </a>
        .
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        El responsable del tratamiento de los datos es {site.name}, con domicilio en {site.country}.
        Podés contactarnos en{" "}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> o{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>

      <h2>2. Datos que recopilamos</h2>
      <ul>
        <li>Datos de cuenta: nombre, email, contraseña (hash), CUIT y datos fiscales necesarios.</li>
        <li>Datos de clientes y comprobantes que cargues en la plataforma.</li>
        <li>Datos de uso: registros técnicos, dirección IP aproximada y eventos de seguridad.</li>
        <li>
          Datos de Google cuando conectás tu cuenta (ver sección específica más abajo).
        </li>
      </ul>

      <h2>3. Uso de Google OAuth y APIs de Google</h2>
      <p>
        {site.name} utiliza servicios de Google para permitir inicio de sesión y, de forma
        opcional, integraciones con Google Drive y Google Calendar. El uso de datos obtenidos
        desde las APIs de Google cumple con la{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , incluidos los requisitos de Limited Use.
      </p>

      <h3>3.1. Inicio de sesión con Google</h3>
      <p>
        Si elegís ingresar con Google, solicitamos los scopes <strong>openid</strong>,{" "}
        <strong>email</strong> y <strong>profile</strong> para identificarte y crear o vincular tu
        cuenta. Usamos tu email y nombre para autenticación y comunicaciones relacionadas con el
        servicio.
      </p>

      <h3>3.2. Google Drive (opcional)</h3>
      <p>
        Si activás la integración con Drive, solicitamos el scope{" "}
        <strong>https://www.googleapis.com/auth/drive.file</strong>. Este permiso permite a{" "}
        {site.name} crear y administrar únicamente los archivos que la aplicación genera (por
        ejemplo, PDF de facturas), sin acceder al resto de tu Drive. Los archivos se almacenan en
        tu propia cuenta de Google Drive.
      </p>

      <h3>3.3. Google Calendar (opcional)</h3>
      <p>
        Si activás Calendar, solicitamos los scopes{" "}
        <strong>https://www.googleapis.com/auth/calendar.events</strong> y{" "}
        <strong>https://www.googleapis.com/auth/calendar.calendars</strong> para crear o
        actualizar eventos relacionados con emisiones programadas y recordatorios que elijas
        sincronizar. No leemos ni modificamos eventos ajenos a las funciones de {site.name}.
      </p>

      <h3>3.4. Qué no hacemos con tus datos de Google</h3>
      <ul>
        <li>No vendemos ni alquilamos datos de Google.</li>
        <li>No usamos datos de Google para publicidad.</li>
        <li>No transferimos datos de Google a terceros salvo proveedores necesarios para operar el servicio o obligación legal.</li>
        <li>No usamos datos de Google para entrenar modelos de IA generalizados.</li>
      </ul>

      <h2>4. Finalidades del tratamiento</h2>
      <ul>
        <li>Prestar el servicio de facturación y gestión fiscal.</li>
        <li>Autenticación, seguridad y prevención de fraude.</li>
        <li>Soporte al usuario y comunicaciones operativas.</li>
        <li>Cumplimiento de obligaciones legales y regulatorias.</li>
      </ul>

      <h2>5. Base legal</h2>
      <p>
        Tratamos tus datos en base a la ejecución del contrato (prestación del servicio), tu
        consentimiento (integraciones opcionales) y el interés legítimo en mantener la seguridad
        de la plataforma, conforme normativa aplicable en Argentina.
      </p>

      <h2>6. Conservación</h2>
      <p>
        Conservamos los datos mientras mantengas tu cuenta activa y el tiempo necesario para
        cumplir obligaciones legales, resolver disputas o hacer valer nuestros derechos. Podés
        solicitar la eliminación de tu cuenta contactándonos.
      </p>

      <h2>7. Compartición con terceros</h2>
      <p>Podemos compartir datos con:</p>
      <ul>
        <li>Proveedores de infraestructura (hosting, base de datos, email transaccional).</li>
        <li>AFIP/ARCA y servicios fiscales necesarios para facturación electrónica.</li>
        <li>Google, cuando autorices integraciones OAuth descritas arriba.</li>
      </ul>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables: cifrado en tránsito (HTTPS),
        contraseñas hasheadas, control de acceso y almacenamiento seguro de credenciales sensibles.
      </p>

      <h2>9. Tus derechos</h2>
      <p>
        Podés acceder, rectificar, actualizar o solicitar la eliminación de tus datos escribiendo a{" "}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. También podés revocar
        permisos de Google desde tu{" "}
        <a
          href="https://myaccount.google.com/permissions"
          target="_blank"
          rel="noopener noreferrer"
        >
          cuenta de Google
        </a>
        .
      </p>

      <h2>10. Cambios</h2>
      <p>
        Podemos actualizar esta política. Publicaremos la versión vigente en {site.url}/privacidad
        con la fecha de última modificación.
      </p>

      <h2>11. Términos de uso</h2>
      <p>
        El uso de {site.name} también se rige por nuestros{" "}
        <a href="/terminos">Términos y condiciones</a>.
      </p>
    </LegalPageLayout>
  );
}
