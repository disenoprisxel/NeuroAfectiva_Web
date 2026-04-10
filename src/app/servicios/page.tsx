import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios — NeuroAfectiva',
  description: 'Un servicio para cada necesidad. Desde la evaluación hasta la intervención, nuestro equipo multidisciplinar te acompaña en cada etapa del camino.',
}

/* ─── DATOS ─────────────────────────────────────────────── */
const categorias = [
  'Neurosalud Cognitiva',
  'Neurohabilidades del Aprendizaje',
  'Neuropsicología Organizacional',
  'Psicología Clínica',
  'ExpresaMente',
  'Capacitación y Talleres',
]

const especialidades = [
  {
    badge: 'Neuropsicología Clínica',
    badgeColor: 'bg-[#F0EAFB] text-[#713ec1]',
    img: '/images/serv-neurosalud.jpg',
    title: 'Neurosalud Cognitiva y Emocional',
    desc: 'Evaluación e intervención del funcionamiento cognitivo, su relación con el comportamiento y el estado emocional en niños, adolescentes y adultos.',
    href: '/servicios/neurosalud-cognitiva',
    linkColor: 'text-[#713ec1]',
  },
  {
    badge: 'Neuropsicología Educativa',
    badgeColor: 'bg-[#E8F9FD] text-[#32b8cc]',
    img: '/images/serv-neurohabilidades.jpg',
    title: 'Neurohabilidades del Aprendizaje',
    desc: 'Diagnóstico e intervención en dificultades de aprendizaje como Dislexia, Disgrafía, Discalculia y TDAH. Trabajo con colegios y familias.',
    href: '/servicios/neurohabilidades',
    linkColor: 'text-[#32b8cc]',
  },
  {
    badge: 'Neuropsicología Organizacional',
    badgeColor: 'bg-[#FFF0F9] text-[#fc66b5]',
    img: '/images/serv-organizacional.jpg',
    title: 'Neuropsicología Organizacional',
    desc: 'Optimización del rendimiento cognitivo, manejo del estrés y bienestar mental en equipos de trabajo.',
    href: '/servicios/organizacional',
    linkColor: 'text-[#fc66b5]',
  },
  {
    badge: 'Psicología Clínica',
    badgeColor: 'bg-[#F0EAFB] text-[#713ec1]',
    img: '/images/serv-clinica.jpg',
    title: 'Línea de Psicología Clínica',
    desc: 'Atención psicológica individual, familiar y de pareja. Ansiedad, depresión, trauma y trastornos del ánimo.',
    href: '/servicios/psicologia-clinica',
    linkColor: 'text-[#713ec1]',
  },
  {
    badge: 'Arte-terapia',
    badgeColor: 'bg-[#E8F9FD] text-[#32b8cc]',
    img: '/images/serv-expresamente.jpg',
    title: 'ExpresaMente Creativa',
    desc: 'Actividades artísticas y expresión creativa como herramientas de apoyo al bienestar cognitivo y emocional.',
    href: '/servicios/expresamente',
    linkColor: 'text-[#32b8cc]',
  },
  {
    badge: 'Psicoeducación',
    badgeColor: 'bg-[#FFF0F9] text-[#fc66b5]',
    img: '/images/serv-capacitacion.jpg',
    title: 'Capacitación y Talleres',
    desc: 'Espacios de formación para docentes y familias en neuropsicología aplicada y manejo de dificultades de aprendizaje.',
    href: '/servicios/capacitacion',
    linkColor: 'text-[#fc66b5]',
  },
]

const stats = [
  { value: '15%', label: 'niños con dificultades de aprendizaje' },
  { value: '+500', label: 'familias acompañadas' },
  { value: '98%', label: 'satisfacción reportada' },
  { value: '6', label: 'especialidades clínicas' },
]

/* ─── HERO SERVICIOS ────────────────────────────────────── */
function HeroServicios() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span data-animate className="na-badge inline-flex items-center gap-2 bg-[#FFF0F9] text-[#fc66b5] text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          NUESTROS SERVICIOS
        </span>
        <h1 data-animate data-delay="1" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5">
          Un servicio para<br className="hidden sm:block" /> cada necesidad
        </h1>
        <p data-animate data-delay="2" className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mb-8">
          Desde la evaluación hasta la intervención, nuestro equipo multidisciplinar te acompaña en cada etapa del camino.
        </p>
        {/* Category pills */}
        <div data-animate data-delay="3" className="flex flex-wrap justify-center gap-2">
          {categorias.map((c) => (
            <span
              key={c}
              className="na-badge bg-[#F0EAFB] text-[#713ec1] text-xs font-bold px-4 py-2 rounded-full hover:bg-[#713ec1] hover:text-white transition-colors cursor-pointer"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── NUESTRAS ESPECIALIDADES ───────────────────────────── */
function EspecialidadesSection() {
  return (
    <section className="bg-[#F8F4FF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 data-animate className="text-3xl sm:text-4xl font-extrabold text-gray-900">Nuestras especialidades</h2>
          <p data-animate data-delay="1" className="mt-3 text-gray-500 text-sm">Servicios diseñados para cada etapa del desarrollo cognitivo y emocional.</p>
        </div>

        {/* First row — 3 cards with image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {especialidades.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i + 1} />
          ))}
        </div>

        {/* Second row — 3 cards with image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {especialidades.slice(3).map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }: { service: typeof especialidades[0]; delay: number }) {
  return (
    <div
      data-animate
      data-delay={String(delay)}
      className="na-card bg-white rounded-2xl overflow-hidden shadow-sm group"
    >
      {/* Image */}
      <div className="aspect-[16/9] bg-[#F0EAFB] overflow-hidden na-img-zoom">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* Content */}
      <div className="p-6">
        <span className={`na-badge text-xs font-bold px-3 py-1 rounded-full ${service.badgeColor} mb-4 inline-block`}>
          {service.badge}
        </span>
        <h3 className="font-extrabold text-gray-900 text-lg mb-2">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
        <Link
          href={service.href}
          className="na-btn group inline-flex items-center gap-2 mt-1 px-5 py-2.5 rounded-full text-sm font-bold text-white shadow-md transition-all"
          style={{ background: 'linear-gradient(90deg, #713ec1 0%, #fc66b5 100%)' }}
        >
          Conocer más
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

/* ─── STATS BAR ─────────────────────────────────────────── */
function StatsBar() {
  return (
    <section className="bg-gradient-to-r from-[#2D1B69] via-[#713ec1] to-[#a855f7] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
          {stats.map((s, i) => (
            <div
              key={s.value}
              data-animate="scale"
              data-delay={String(i + 1)}
              className={`na-stat ${i < stats.length - 1 ? 'lg:border-r lg:border-white/20' : ''} px-4`}
            >
              <div className="na-stat-value text-3xl sm:text-4xl font-extrabold mb-1">{s.value}</div>
              <div className="text-xs text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA FINAL ─────────────────────────────────────────── */
function CTAServicios() {
  return (
    <section
      className="py-16"
      style={{ background: 'linear-gradient(135deg, #713ec1 0%, #a855f7 50%, #fc66b5 100%)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 data-animate="scale" className="text-3xl sm:text-4xl font-extrabold mb-4">¿No sabes por dónde empezar?</h2>
        <p data-animate data-delay="1" className="text-white/80 text-base mb-8 max-w-xl mx-auto">
          Cuéntanos tu situación y te orientamos hacia el servicio que mejor se adapta a tus necesidades.
        </p>
        <div data-animate data-delay="2" className="flex flex-wrap justify-center gap-4">
          <Link
            href="/agendar"
            className="na-btn bg-white text-[#713ec1] hover:bg-gray-50 font-bold px-8 py-3 rounded-full shadow-lg text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            Agendar consulta
          </Link>
          <a
            href="https://wa.me/573193517239"
            target="_blank"
            rel="noopener noreferrer"
            className="na-btn border-2 border-white/60 hover:border-white text-white font-bold px-8 py-3 rounded-full text-sm flex items-center gap-2"
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
export default function ServiciosPage() {
  return (
    <>
      <HeroServicios />
      <EspecialidadesSection />
      <StatsBar />
      <CTAServicios />
    </>
  )
}
