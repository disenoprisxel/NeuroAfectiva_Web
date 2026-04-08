import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cómo Trabajamos — NeuroAfectiva',
  description: 'Nuestro proceso de acompañamiento. Cada persona merece un camino terapéutico diseñado a su medida.',
}

/* ─── DATOS ─────────────────────────────────────────────── */
const pasos = [
  {
    num: '01',
    numColor: 'bg-[#fc66b5]',
    badge: 'Primer contacto',
    badgeColor: 'bg-[#FFF0F9] text-[#fc66b5]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    iconColor: 'text-[#fc66b5] bg-[#FFF0F9]',
    title: 'Primer contacto',
    desc: 'Nos escribes o llamas para contarnos brevemente tu situación. En esta primera conversación te orientamos sin compromiso y resolvemos tus dudas iniciales.',
    feature: 'Sin compromiso · Respuesta en menos de 24h',
    featureColor: 'text-[#fc66b5] bg-[#FFF0F9]',
    img: '/images/paso-01-contacto.jpg',
    sectionBg: 'bg-white',
    reverse: false,
  },
  {
    num: '02',
    numColor: 'bg-[#713ec1]',
    badge: 'Paso a paso',
    badgeColor: 'bg-[#F0EAFB] text-[#713ec1]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    iconColor: 'text-[#713ec1] bg-[#F0EAFB]',
    title: 'Entrevista inicial',
    desc: 'Realizamos una sesión de escucha activa con el paciente y/o su familia. Entendemos el contexto, la historia y las necesidades específicas desde una perspectiva empática y holística.',
    feature: 'Sesión para toda la familia · Enfoque holístico',
    featureColor: 'text-[#713ec1] bg-[#F0EAFB]',
    img: '/images/paso-02-entrevista.jpg',
    sectionBg: 'bg-[#F8F4FF]',
    reverse: true,
  },
  {
    num: '03',
    numColor: 'bg-[#32b8cc]',
    badge: 'Evaluación',
    badgeColor: 'bg-[#E8F9FD] text-[#32b8cc]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    iconColor: 'text-[#32b8cc] bg-[#E8F9FD]',
    title: 'Evaluación neuropsicológica',
    desc: 'Aplicamos baterías de pruebas neuropsicológicas estandarizadas y validadas para Colombia. La evaluación es rigurosa, lúdica y respetuosa del ritmo de cada persona.',
    feature: 'Pruebas validadas para Colombia · Lúdica y respetuosa',
    featureColor: 'text-[#32b8cc] bg-[#E8F9FD]',
    img: '/images/paso-03-evaluacion.jpg',
    sectionBg: 'bg-white',
    reverse: false,
  },
  {
    num: '04',
    numColor: 'bg-[#fc66b5]',
    badge: 'Diagnóstico',
    badgeColor: 'bg-[#FFF0F9] text-[#fc66b5]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    iconColor: 'text-[#fc66b5] bg-[#FFF0F9]',
    title: 'Diagnóstico e informe',
    desc: 'Entregamos un informe claro, accesible y orientador con los resultados. Te lo explicamos en detalle para que tú y tu familia lo entiendan completamente.',
    feature: 'Explicado paso a paso · Para toda la familia',
    featureColor: 'text-[#fc66b5] bg-[#FFF0F9]',
    img: '/images/paso-04-diagnostico.jpg',
    sectionBg: 'bg-[#F8F4FF]',
    reverse: true,
  },
  {
    num: '05',
    numColor: 'bg-[#713ec1]',
    badge: 'Plan',
    badgeColor: 'bg-[#F0EAFB] text-[#713ec1]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    iconColor: 'text-[#713ec1] bg-[#F0EAFB]',
    title: 'Plan de intervención',
    desc: 'Diseñamos una ruta terapéutica y/o educativa personalizada con objetivos claros, cronograma y estrategias específicas para cada contexto: hogar, colegio y trabajo.',
    feature: 'Objetivos claros · Hogar, colegio y trabajo',
    featureColor: 'text-[#713ec1] bg-[#F0EAFB]',
    img: '/images/paso-05-plan.jpg',
    sectionBg: 'bg-white',
    reverse: false,
  },
  {
    num: '06',
    numColor: 'bg-[#32b8cc]',
    badge: 'Seguimiento',
    badgeColor: 'bg-[#E8F9FD] text-[#32b8cc]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    iconColor: 'text-[#32b8cc] bg-[#E8F9FD]',
    title: 'Seguimiento continuo',
    desc: 'Monitoreamos el progreso con sesiones periódicas de revisión. Ajustamos el plan según la evolución, manteniendo comunicación constante con el paciente y su familia.',
    feature: 'Ajuste continuo · Comunicación constante',
    featureColor: 'text-[#32b8cc] bg-[#E8F9FD]',
    img: '/images/paso-06-seguimiento.jpg',
    sectionBg: 'bg-[#F8F4FF]',
    reverse: true,
  },
]

const modalidades = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Presencial',
    desc: 'Nuestras instalaciones en Bogotá, diseñadas para brindar comodidad y privacidad.',
    tag: '📍 Bogotá, Colombia',
    gradient: 'from-[#713ec1] to-[#fc66b5]',
    tagBg: 'bg-white/20 text-white',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Virtual',
    desc: 'Atención por videollamada para todo Colombia con la misma calidad y calidez.',
    tag: '🌎 Todo Colombia',
    gradient: 'from-[#32b8cc] to-[#06b6d4]',
    tagBg: 'bg-white/20 text-white',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: 'Mixta',
    desc: 'Combinamos sesiones presenciales y virtuales según tus necesidades y disponibilidad.',
    tag: '🔄 Flexible y adaptada a ti',
    gradient: 'from-[#2D2D3A] to-[#3d3d52]',
    tagBg: 'bg-white/10 text-gray-300',
  },
]

/* ─── HERO ──────────────────────────────────────────────── */
function HeroComoTrabajamos() {
  const stepPills = [
    { num: '1', label: 'Primer contacto' },
    { num: '2', label: 'Entrevista' },
    { num: '3', label: 'Evaluación' },
    { num: '4', label: 'Diagnóstico' },
    { num: '5', label: 'Plan' },
    { num: '6', label: 'Seguimiento' },
  ]
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-[#FFF0F9] text-[#fc66b5] text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
          Nuestro Proceso
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5">
          Nuestro proceso de<br className="hidden sm:block" /> acompañamiento
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mb-10">
          Cada persona merece un camino terapéutico diseñado a su medida. Así es como trabajamos juntos.
        </p>
        {/* Step pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {stepPills.map((p) => (
            <span
              key={p.num}
              className="bg-[#713ec1] text-white text-xs font-bold px-4 py-2 rounded-full"
            >
              {p.num} · {p.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── PASOS (zigzag) ────────────────────────────────────── */
function PasoStep({ paso }: { paso: typeof pasos[0] }) {
  return (
    <section className={`${paso.sectionBg} py-16 lg:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${paso.reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>

          {/* Text side */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className={`w-10 h-10 rounded-full ${paso.numColor} text-white font-extrabold text-base flex items-center justify-center flex-shrink-0`}>
                {paso.num}
              </span>
              <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${paso.iconColor}`}>
                {paso.icon}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">{paso.title}</h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">{paso.desc}</p>
            <div className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold ${paso.featureColor}`}>
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {paso.feature}
            </div>
          </div>

          {/* Image side */}
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-[#F0EAFB]">
            <img
              src={paso.img}
              alt={paso.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── MODALIDADES ───────────────────────────────────────── */
function ModalidadesSection() {
  return (
    <section className="bg-[#1A1035] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#fc66b5] uppercase mb-4 block">
            Modalidades de Atención
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Elige cómo quieres ser atendido
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Nos adaptamos a tu realidad y disponibilidad para que el acompañamiento sea posible desde donde estés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modalidades.map((m) => (
            <div
              key={m.title}
              className={`rounded-2xl p-8 bg-gradient-to-br ${m.gradient} text-white flex flex-col`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                {m.icon}
              </div>
              <h3 className="text-xl font-extrabold mb-3">{m.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6 flex-1">{m.desc}</p>
              <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold w-fit ${m.tagBg}`}>
                {m.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ───────────────────────────────────────────────── */
function CTAComoTrabajamos() {
  return (
    <section
      className="py-16"
      style={{ background: 'linear-gradient(135deg, #713ec1 0%, #a855f7 50%, #fc66b5 100%)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          ¿Listo para dar el primer paso?
        </h2>
        <p className="text-white/80 text-base mb-10 max-w-xl mx-auto">
          Agenda tu primera consulta y comienza el camino hacia el bienestar neuropsicológico de tu familia.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/agendar"
            className="bg-white text-[#713ec1] hover:bg-gray-50 font-bold px-8 py-3 rounded-full transition-colors shadow-lg text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            Agendar mi cita
          </Link>
          <a
            href="https://wa.me/573103317235"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/60 hover:border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-full transition-colors text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ──────────────────────────────────────────────── */
export default function ComoTrabajamosPage() {
  return (
    <>
      <HeroComoTrabajamos />
      {pasos.map((paso) => (
        <PasoStep key={paso.num} paso={paso} />
      ))}
      <ModalidadesSection />
      <CTAComoTrabajamos />
    </>
  )
}
