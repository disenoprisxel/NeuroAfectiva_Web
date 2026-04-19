import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad y Tratamiento de Datos Personales — NeuroAfectiva',
  description:
    'Política de privacidad y tratamiento de datos personales de NeuroAfectiva, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 de la República de Colombia.',
}

const FECHA_ACTUALIZACION = '18 de abril de 2026'
const FECHA_VIGENCIA = '18 de abril de 2026'

export default function PrivacidadPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-[#F8F4FF] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#F0EAFB] text-[#713ec1] text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            Legal · Privacidad
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Política de Privacidad y Tratamiento<br className="hidden sm:block" /> de Datos Personales
          </h1>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Conforme a la <strong>Ley 1581 de 2012</strong>, el <strong>Decreto 1377 de 2013</strong> y demás
            normas concordantes de la República de Colombia.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
            <span>Última actualización: {FECHA_ACTUALIZACION}</span>
            <span>·</span>
            <span>Vigente desde: {FECHA_VIGENCIA}</span>
          </div>
        </div>
      </section>

      {/* ── Contenido ── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">

          {/* Índice */}
          <div className="bg-[#F8F4FF] rounded-2xl p-6 mb-10 not-prose">
            <h2 className="text-sm font-bold text-[#713ec1] uppercase tracking-widest mb-4">Tabla de contenido</h2>
            <ol className="space-y-1.5 text-sm text-gray-600 list-decimal list-inside">
              {[
                'Identificación del Responsable del Tratamiento',
                'Marco normativo aplicable',
                'Definiciones',
                'Datos personales que recopilamos',
                'Finalidades del tratamiento',
                'Base legal del tratamiento',
                'Derechos de los Titulares',
                'Procedimiento para ejercer sus derechos',
                'Transferencia y transmisión de datos personales',
                'Medidas de seguridad',
                'Datos sensibles',
                'Datos de menores de edad',
                'Uso de cookies y tecnologías similares',
                'Vigencia de la política y de las bases de datos',
                'Modificaciones a la política',
                'Contacto y canal de atención',
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          </div>

          {/* 1 */}
          <Article num="1" title="Identificación del Responsable del Tratamiento">
            <p>
              En cumplimiento del artículo 17 de la Ley 1581 de 2012, el responsable del tratamiento de los datos
              personales recopilados a través del sitio web <strong>https://neuro-afectiva-web.vercel.app</strong> y
              de los demás canales de atención es:
            </p>
            <table>
              <tbody>
                <Row label="Razón social" value="NeuroAfectiva" />
                <Row label="NIT / Identificación" value="En proceso de registro ante la SIC" />
                <Row label="Domicilio principal" value="Bogotá D.C., Colombia" />
                <Row label="Correo electrónico" value="neuroafectiva.bog@gmail.com" />
                <Row label="Teléfono" value="+57 319 351 7239" />
                <Row label="Sitio web" value="https://neuro-afectiva-web.vercel.app" />
              </tbody>
            </table>
          </Article>

          {/* 2 */}
          <Article num="2" title="Marco normativo aplicable">
            <p>Esta política se rige por las siguientes normas de la República de Colombia:</p>
            <ul>
              <li><strong>Constitución Política de Colombia, artículo 15</strong> — Derecho a la intimidad y al habeas data.</li>
              <li><strong>Ley 1266 de 2008</strong> — Ley de habeas data financiero.</li>
              <li><strong>Ley 1581 de 2012</strong> — Ley General de Protección de Datos Personales.</li>
              <li><strong>Decreto 1377 de 2013</strong> — Reglamentación parcial de la Ley 1581 de 2012.</li>
              <li><strong>Decreto 1074 de 2015</strong> — Decreto Único Reglamentario del Sector Comercio, Industria y Turismo (Libro 2, Parte 2, Título 2, Capítulo 25).</li>
              <li><strong>Circular Externa 002 de 2015</strong> de la Superintendencia de Industria y Comercio (SIC).</li>
              <li>Demás normas que las modifiquen, complementen o deroguen.</li>
            </ul>
          </Article>

          {/* 3 */}
          <Article num="3" title="Definiciones">
            <p>Para efectos de la presente política se entiende por:</p>
            <ul>
              <li><strong>Autorización:</strong> Consentimiento previo, expreso e informado del Titular para llevar a cabo el tratamiento de datos personales.</li>
              <li><strong>Base de datos:</strong> Conjunto organizado de datos personales que sea objeto de tratamiento.</li>
              <li><strong>Dato personal:</strong> Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.</li>
              <li><strong>Dato sensible:</strong> Datos que afectan la intimidad del Titular o cuyo uso indebido puede generar discriminación (origen racial, orientación política, convicciones religiosas, datos de salud, vida sexual, datos biométricos, entre otros).</li>
              <li><strong>Encargado del tratamiento:</strong> Persona natural o jurídica que realiza el tratamiento de datos por cuenta del Responsable.</li>
              <li><strong>Responsable del tratamiento:</strong> Persona natural o jurídica que decide sobre la base de datos y/o el tratamiento. En el presente caso: NeuroAfectiva.</li>
              <li><strong>Titular:</strong> Persona natural cuyos datos personales son objeto de tratamiento.</li>
              <li><strong>Tratamiento:</strong> Cualquier operación sobre datos personales: recolección, almacenamiento, uso, circulación, supresión, transferencia, transmisión o cualquier otra.</li>
            </ul>
          </Article>

          {/* 4 */}
          <Article num="4" title="Datos personales que recopilamos">
            <p>NeuroAfectiva recopila, según el caso, las siguientes categorías de datos personales:</p>
            <h3>4.1 Datos de identificación</h3>
            <ul>
              <li>Nombres y apellidos completos</li>
              <li>Número de documento de identidad (CC, TI, CE, pasaporte)</li>
              <li>Fecha de nacimiento</li>
              <li>Género</li>
            </ul>
            <h3>4.2 Datos de contacto</h3>
            <ul>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono o celular</li>
              <li>Ciudad y departamento de residencia</li>
            </ul>
            <h3>4.3 Datos de salud (datos sensibles)</h3>
            <ul>
              <li>Motivo de consulta</li>
              <li>Historia clínica y registros de evaluación neuropsicológica</li>
              <li>Diagnósticos, informes y resultados de pruebas</li>
              <li>Información sobre tratamientos previos o actuales</li>
              <li>Datos del grupo familiar relevantes para el proceso terapéutico</li>
            </ul>
            <h3>4.4 Datos de navegación</h3>
            <ul>
              <li>Dirección IP</li>
              <li>Tipo de navegador y sistema operativo</li>
              <li>Páginas visitadas y duración de la visita</li>
              <li>Cookies y datos de analítica web (ver sección 13)</li>
            </ul>
            <p className="text-sm bg-[#FFF0F9] border border-[#fc66b5]/30 rounded-xl p-4 not-prose mt-4">
              <strong className="text-[#fc66b5]">Nota importante:</strong> Los datos de salud son datos sensibles y
              su tratamiento requiere autorización expresa del Titular, o de su representante legal cuando se trate
              de menores de edad, conforme al artículo 6 de la Ley 1581 de 2012.
            </p>
          </Article>

          {/* 5 */}
          <Article num="5" title="Finalidades del tratamiento">
            <p>Los datos personales recopilados por NeuroAfectiva serán utilizados para las siguientes finalidades:</p>
            <ol>
              <li>Prestar los servicios de neuropsicología clínica y educativa contratados o solicitados por el Titular.</li>
              <li>Gestionar citas, agendamiento y seguimiento de procesos terapéuticos.</li>
              <li>Elaborar, gestionar y custodiar historias clínicas conforme a la Resolución 1995 de 1999 del Ministerio de Salud.</li>
              <li>Elaborar informes neuropsicológicos, diagnósticos y planes de intervención.</li>
              <li>Enviar comunicaciones relacionadas con la prestación del servicio, recordatorios de citas y resultados.</li>
              <li>Remitir información de interés sobre servicios, programas o actividades de NeuroAfectiva, previo consentimiento del Titular.</li>
              <li>Cumplir obligaciones legales, contables, tributarias y administrativas.</li>
              <li>Atender peticiones, quejas, reclamos y sugerencias (PQRS).</li>
              <li>Mejorar la calidad de los servicios mediante análisis estadísticos anonimizados.</li>
              <li>Garantizar la seguridad de las instalaciones y el personal, en caso de atención presencial.</li>
            </ol>
          </Article>

          {/* 6 */}
          <Article num="6" title="Base legal del tratamiento">
            <p>
              El tratamiento de sus datos personales se fundamenta en las siguientes bases legales establecidas por
              la Ley 1581 de 2012 y el Decreto 1377 de 2013:
            </p>
            <ul>
              <li><strong>Autorización del Titular (art. 9, Ley 1581 de 2012):</strong> Obtenida de forma previa, expresa e informada mediante formularios físicos o digitales, o mediante el marcado de casillas de consentimiento.</li>
              <li><strong>Relación contractual o precontractual (art. 10, literal b):</strong> Cuando el tratamiento es necesario para la ejecución del contrato de prestación de servicios de salud.</li>
              <li><strong>Obligación legal (art. 10, literal c):</strong> Cuando el tratamiento es exigido por normas de orden médico, tributario o administrativo (ej. custodia de historia clínica por mínimo 20 años).</li>
              <li><strong>Interés vital (art. 10, literal e):</strong> Para proteger la vida o integridad del Titular u otras personas, en situaciones de emergencia.</li>
            </ul>
          </Article>

          {/* 7 */}
          <Article num="7" title="Derechos de los Titulares">
            <p>
              Conforme al artículo 8 de la Ley 1581 de 2012, el Titular de los datos personales tiene los
              siguientes derechos, que podrá ejercer en cualquier momento de forma gratuita:
            </p>
            <ul>
              <li><strong>Derecho de acceso o consulta:</strong> Conocer los datos personales que NeuroAfectiva tiene sobre usted, su origen, uso y tratamiento.</li>
              <li><strong>Derecho de rectificación:</strong> Solicitar la actualización, corrección o modificación de datos inexactos, incompletos o desactualizados.</li>
              <li><strong>Derecho de supresión (derecho al olvido):</strong> Pedir la eliminación de sus datos cuando no sean necesarios para la finalidad que justificó su recolección, salvo que exista obligación legal de conservarlos.</li>
              <li><strong>Derecho de revocación:</strong> Revocar la autorización otorgada para el tratamiento, sin efectos retroactivos, salvo en los casos previstos en el artículo 10 de la Ley 1581.</li>
              <li><strong>Derecho de queja:</strong> Presentar ante la Superintendencia de Industria y Comercio (SIC) quejas por infracciones a la Ley 1581 de 2012, una vez agotado el trámite de consulta o reclamo ante NeuroAfectiva.</li>
              <li><strong>Derecho a solicitar prueba de la autorización:</strong> Obtener copia de la autorización otorgada.</li>
              <li><strong>Derecho a ser informado:</strong> Recibir información sobre el uso dado a sus datos a solicitud del Titular.</li>
            </ul>
          </Article>

          {/* 8 */}
          <Article num="8" title="Procedimiento para ejercer sus derechos">
            <p>
              Para ejercer cualquiera de los derechos descritos en la sección anterior, el Titular o su representante
              legal podrá dirigirse a NeuroAfectiva por los siguientes canales:
            </p>
            <ul>
              <li><strong>Correo electrónico:</strong> neuroafectiva.bog@gmail.com</li>
              <li><strong>WhatsApp:</strong> +57 319 351 7239</li>
            </ul>
            <h3>Solicitudes de consulta</h3>
            <p>
              NeuroAfectiva atenderá las consultas en un término máximo de <strong>diez (10) días hábiles</strong> contados
              a partir de la fecha de recepción. Cuando no fuere posible atender la consulta dentro de dicho término,
              se informará al Titular antes del vencimiento, indicando la fecha en que se atenderá la consulta, la cual
              no podrá superar los <strong>cinco (5) días hábiles</strong> siguientes al vencimiento del primer término
              (art. 14, Ley 1581 de 2012).
            </p>
            <h3>Solicitudes de reclamo</h3>
            <p>
              Los reclamos serán atendidos en un término máximo de <strong>quince (15) días hábiles</strong> contados
              a partir del día siguiente al de su recepción. Cuando no fuere posible atender el reclamo dentro de dicho
              término, se informará al Titular antes del vencimiento, expresando los motivos de la demora y la fecha en
              que se atenderá, sin que en ningún caso supere los <strong>ocho (8) días hábiles</strong> siguientes al
              vencimiento del primer término (art. 15, Ley 1581 de 2012).
            </p>
            <p>
              Si el reclamo resulta incompleto, NeuroAfectiva requerirá al interesado dentro de los cinco (5) días
              hábiles siguientes a su recepción para que subsane las fallas. Transcurridos dos (2) meses desde la fecha
              de requerimiento sin que el solicitante subsane, se entenderá que ha desistido del reclamo.
            </p>
            <p>
              Agotado el trámite interno, el Titular podrá acudir ante la{' '}
              <strong>Superintendencia de Industria y Comercio (SIC)</strong> — Delegatura para la Protección de Datos
              Personales, con sede en Bogotá D.C., a través de{' '}
              <a href="https://www.sic.gov.co" target="_blank" rel="noopener noreferrer">www.sic.gov.co</a>.
            </p>
          </Article>

          {/* 9 */}
          <Article num="9" title="Transferencia y transmisión de datos personales">
            <p>
              NeuroAfectiva podrá compartir datos personales con terceros únicamente en los siguientes supuestos y
              con las garantías exigidas por los artículos 17 y 25 del Decreto 1377 de 2013:
            </p>
            <ul>
              <li><strong>Prestadores de servicios tecnológicos:</strong> Plataformas de gestión de citas, almacenamiento en la nube, servicios de correo electrónico y herramientas de videoconferencia, quienes actúan como Encargados del tratamiento y están sujetos a contratos de confidencialidad y tratamiento de datos.</li>
              <li><strong>Profesionales de la salud:</strong> Médicos, psiquiatras u otros especialistas cuando sea necesario para la atención integral del paciente, con el consentimiento del Titular o por mandato legal.</li>
              <li><strong>Autoridades competentes:</strong> Entidades estatales (Fiscalía, juzgados, entidades de salud) cuando así lo exija la ley o una orden judicial.</li>
              <li><strong>EPS o aseguradoras:</strong> Cuando el Titular solicite el reconocimiento de prestaciones o reembolsos.</li>
            </ul>
            <p>
              En ningún caso NeuroAfectiva venderá, cederá ni compartirá datos personales con fines comerciales sin
              la autorización expresa del Titular.
            </p>
            <p>
              Las transferencias internacionales de datos, en caso de realizarse, se efectuarán conforme al artículo 26
              de la Ley 1581 de 2012, garantizando que el país receptor cuente con niveles adecuados de protección o
              mediante la suscripción de cláusulas contractuales tipo.
            </p>
          </Article>

          {/* 10 */}
          <Article num="10" title="Medidas de seguridad">
            <p>
              En cumplimiento del artículo 17, literal d) de la Ley 1581 de 2012, NeuroAfectiva implementa las
              siguientes medidas técnicas, humanas y administrativas para proteger los datos personales contra pérdida,
              acceso no autorizado, uso indebido, alteración o divulgación:
            </p>
            <ul>
              <li>Acceso restringido a las bases de datos mediante credenciales únicas y control de roles.</li>
              <li>Cifrado de comunicaciones mediante protocolos SSL/TLS en el sitio web.</li>
              <li>Almacenamiento de historias clínicas físicas en archivos bajo llave en áreas de acceso controlado.</li>
              <li>Almacenamiento digital en plataformas con certificaciones de seguridad (ISO 27001 o equivalente).</li>
              <li>Capacitación periódica al personal en protección de datos y confidencialidad de la información en salud.</li>
              <li>Acuerdos de confidencialidad suscritos con todo el personal y los Encargados del tratamiento.</li>
              <li>Procedimiento de notificación de incidentes de seguridad conforme a la Circular 002 de 2015 de la SIC.</li>
            </ul>
            <p>
              En caso de que ocurra una violación de seguridad que pueda afectar los derechos del Titular, NeuroAfectiva
              notificará a la SIC y a los Titulares afectados en los términos establecidos por la normativa vigente.
            </p>
          </Article>

          {/* 11 */}
          <Article num="11" title="Datos sensibles">
            <p>
              Los datos de salud recopilados en el ejercicio de la actividad clínica de NeuroAfectiva constituyen
              <strong> datos sensibles</strong> en los términos del artículo 5 de la Ley 1581 de 2012. Su tratamiento
              estará sujeto a las siguientes condiciones adicionales:
            </p>
            <ul>
              <li>Se requerirá autorización <strong>expresa y específica</strong> para cada finalidad.</li>
              <li>No podrán ser usados para discriminar al Titular o vulnerar sus derechos.</li>
              <li>Será obligatorio informar al Titular el carácter facultativo de las respuestas que versen sobre datos sensibles.</li>
              <li>Su acceso estará limitado al personal de salud directamente involucrado en la atención del Titular.</li>
              <li>Quedan sujetos al secreto profesional médico consagrado en la Ley 23 de 1981 y demás normas aplicables.</li>
            </ul>
          </Article>

          {/* 12 */}
          <Article num="12" title="Datos de menores de edad">
            <p>
              NeuroAfectiva atiende con frecuencia a niños, niñas y adolescentes. En estos casos:
            </p>
            <ul>
              <li>
                La autorización para el tratamiento de datos será otorgada por el <strong>representante legal</strong> del
                menor (padre, madre o tutor), conforme al artículo 12 de la Ley 1581 de 2012 y el artículo 7 del
                Decreto 1377 de 2013.
              </li>
              <li>
                Se garantizará que el tratamiento responde al <strong>interés superior del menor</strong> y respeta sus
                derechos fundamentales.
              </li>
              <li>
                NeuroAfectiva verificará la identidad del representante legal y su relación con el menor antes de
                iniciar cualquier tratamiento de datos.
              </li>
              <li>
                Los datos de menores de 14 años que se recopilen en el sitio web requerirán consentimiento verificable
                del padre o tutor.
              </li>
            </ul>
          </Article>

          {/* 13 */}
          <Article num="13" title="Uso de cookies y tecnologías similares">
            <p>
              El sitio web de NeuroAfectiva puede utilizar cookies y tecnologías similares para mejorar la experiencia
              de navegación y analizar el uso del sitio. Las cookies utilizadas son:
            </p>
            <ul>
              <li><strong>Cookies técnicas o esenciales:</strong> Necesarias para el funcionamiento del sitio web. No requieren consentimiento.</li>
              <li><strong>Cookies analíticas:</strong> Permiten medir el tráfico y el comportamiento de los usuarios (p. ej., Google Analytics). Se utilizan de forma anonimizada.</li>
              <li><strong>Cookies de preferencias:</strong> Almacenan configuraciones del usuario para mejorar la experiencia de uso.</li>
            </ul>
            <p>
              El usuario puede configurar su navegador para rechazar o eliminar cookies en cualquier momento. Sin
              embargo, la desactivación de cookies técnicas puede afectar el funcionamiento del sitio.
            </p>
          </Article>

          {/* 14 */}
          <Article num="14" title="Vigencia de la política y de las bases de datos">
            <p>
              La presente política entrará en vigor el <strong>{FECHA_VIGENCIA}</strong> y tendrá vigencia indefinida,
              hasta tanto sea modificada o derogada por NeuroAfectiva.
            </p>
            <p>
              Las bases de datos que contienen información de pacientes y usuarios se conservarán por los períodos
              mínimos establecidos por la normativa aplicable:
            </p>
            <ul>
              <li><strong>Historia clínica:</strong> Mínimo 20 años contados a partir de la fecha del último acto médico, conforme a la Resolución 1995 de 1999 del Ministerio de Salud.</li>
              <li><strong>Datos contables y tributarios:</strong> Mínimo 10 años, conforme al Código de Comercio y las normas tributarias vigentes.</li>
              <li><strong>Datos de contacto y comunicaciones:</strong> Mientras dure la relación contractual o comercial y hasta por 5 años adicionales para efectos de PQRS y evidencias legales.</li>
            </ul>
            <p>
              Vencidos los términos de conservación, NeuroAfectiva procederá a la supresión segura e irreversible de
              los datos.
            </p>
          </Article>

          {/* 15 */}
          <Article num="15" title="Modificaciones a la política">
            <p>
              NeuroAfectiva se reserva el derecho de modificar la presente política en cualquier momento para adaptarla
              a cambios normativos, jurisprudenciales o de sus prácticas internas. Cualquier modificación será:
            </p>
            <ul>
              <li>Publicada en el sitio web con al menos <strong>10 días hábiles</strong> de anticipación a su entrada en vigencia.</li>
              <li>Notificada a los Titulares que hayan suministrado correo electrónico, cuando los cambios sean sustanciales.</li>
            </ul>
            <p>
              La continuación en el uso de los servicios de NeuroAfectiva tras la publicación de cambios sustanciales
              implicará la aceptación de la nueva versión de la política, salvo que el Titular manifieste lo contrario
              dentro del período de preaviso.
            </p>
          </Article>

          {/* 16 */}
          <Article num="16" title="Contacto y canal de atención">
            <p>
              Para consultas, reclamos, solicitudes de acceso, rectificación, supresión o revocación de autorización,
              el Titular puede comunicarse con el <strong>Responsable del Tratamiento</strong> a través de:
            </p>
            <div className="not-prose bg-[#F8F4FF] rounded-2xl p-6 mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ContactItem icon="✉️" label="Correo electrónico" value="neuroafectiva.bog@gmail.com" />
                <ContactItem icon="📱" label="WhatsApp" value="+57 319 351 7239" />
                <ContactItem icon="📍" label="Ciudad" value="Bogotá D.C., Colombia" />
                <ContactItem icon="🕘" label="Horario de atención" value="Lunes a viernes, 8:00 a.m. – 6:00 p.m." />
              </div>
            </div>
            <p className="mt-6">
              Si considera que su solicitud no fue atendida de manera satisfactoria, puede acudir ante la{' '}
              <strong>Superintendencia de Industria y Comercio (SIC)</strong>:
            </p>
            <ul>
              <li>Sitio web: <a href="https://www.sic.gov.co" target="_blank" rel="noopener noreferrer">www.sic.gov.co</a></li>
              <li>Línea nacional: <strong>01 8000 910165</strong></li>
              <li>Dirección: Carrera 13 No. 27-00, Bogotá D.C.</li>
            </ul>
          </Article>

          {/* CTA volver */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between not-prose">
            <p className="text-sm text-gray-400">
              Última actualización: <strong>{FECHA_ACTUALIZACION}</strong>
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#713ec1] hover:bg-[#6B46C1] text-white font-bold px-6 py-3 rounded-full text-sm transition-colors shadow-md"
            >
              ← Volver al inicio
            </Link>
          </div>

        </div>
      </section>
    </main>
  )
}

/* ── Componentes auxiliares ── */

function Article({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <article className="mb-10">
      <h2 className="text-xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-[#713ec1] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
          {num}
        </span>
        {title}
      </h2>
      <div className="text-gray-600 text-sm leading-relaxed space-y-3 pl-11">
        {children}
      </div>
    </article>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <td className="font-semibold text-gray-700 py-1 pr-4 text-sm whitespace-nowrap">{label}</td>
      <td className="text-gray-600 text-sm py-1">{value}</td>
    </tr>
  )
}

function ContactItem({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-lg">{icon}</span>
      <div>
        <div className="text-xs font-bold text-[#713ec1] uppercase tracking-wide">{label}</div>
        <div className="text-sm text-gray-700 font-medium">{value}</div>
      </div>
    </div>
  )
}
