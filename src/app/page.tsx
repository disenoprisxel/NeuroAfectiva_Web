import Link from 'next/link'
import { Brain, ClipboardList, Zap, Puzzle, BookOpen, Sparkles } from 'lucide-react'

/* ─── HERO ─────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            <span
              data-animate data-delay="1"
              className="na-badge inline-block bg-[#F0EAFB] text-[#713ec1] text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide"
            >
              Centro de Neuropsicología en Bogotá
            </span>

            <h1
              data-animate data-delay="2"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-3"
            >
              Acompañamos tu<br />camino hacia el<br />bienestar
            </h1>
            <h2
              data-animate data-delay="3"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#713ec1] mb-6"
            >
              Neuropsicológico
            </h2>

            <p
              data-animate data-delay="4"
              className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Especialistas en evaluación, diagnóstico e intervención para TDAH, Autismo,
              Dislexia y más. Atención clínica y educativa. Con atención presencial y virtual.
            </p>

            <div data-animate data-delay="5" className="flex flex-wrap gap-3 mb-7">
              <Link
                href="/agendar"
                className="na-btn na-btn-gradient text-white font-bold px-7 py-3 rounded-full shadow-md text-sm na-pulse-glow"
                style={{ background: 'linear-gradient(90deg, #713ec1 0%, #fc66b5 100%)' }}
              >
                Agendar mi cita
              </Link>
              <Link
                href="/servicios"
                className="na-btn border-2 border-[#713ec1] text-[#713ec1] hover:bg-[#F0EAFB] font-bold px-7 py-3 rounded-full text-sm"
              >
                Conocer servicios
              </Link>
            </div>

            {/* Rating */}
            <div data-animate data-delay="6" className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#713ec1]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">+500 familias nos recomiendan</span>
            </div>
          </div>

          {/* Right — image */}
          <div data-animate="scale" className="relative na-img-zoom overflow-hidden rounded-3xl">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-[#F0EAFB]">
              <img
                src="/images/hero.jpg"
                alt="Sesión de neuropsicología en NeuroAfectiva"
                className="w-full h-full object-cover"
                data-parallax="0.1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── ¿POR QUÉ NEUROAFECTIVA? ───────────────────────────── */
const diferencias = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    color: 'text-[#713ec1] bg-[#F0EAFB]',
    title: 'Enfoque neuropsicológico integral',
    desc: 'Evaluamos y tratamos desde una perspectiva compleja que integra lo cognitivo, emocional y conductual.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    color: 'text-[#fc66b5] bg-[#FFF0F9]',
    title: 'Atención cálida y personalizada',
    desc: 'Cada persona es única. Adaptamos cada proceso terapéutico a tus necesidades y las de tu familia.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: 'text-[#32b8cc] bg-[#E8F9FD]',
    title: 'Clínico + Educativo + Organizacional',
    desc: 'Abordamos las necesidades neuropsicológicas en todos los contextos de la vida: familia, colegio y trabajo.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    color: 'text-[#713ec1] bg-[#F0EAFB]',
    title: 'Con presencia en Bogotá',
    desc: 'Consulta presencial en Bogotá y modalidad virtual disponible para todo el país.',
  },
]

function DiferenciaSection() {
  return (
    <section className="bg-[#F8F4FF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span data-animate className="text-xs font-bold tracking-widest text-[#713ec1] uppercase">Nuestra Diferencia</span>
          <h2 data-animate data-delay="1" className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">¿Por qué NeuroAfectiva?</h2>
          <p data-animate data-delay="2" className="mt-3 text-gray-500 max-w-xl mx-auto">Un equipo comprometido con tu bienestar desde el primer momento.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferencias.map((d, i) => (
            <div
              key={d.title}
              data-animate
              data-delay={String(i + 1)}
              className="na-card bg-white rounded-2xl p-7 shadow-sm"
            >
              <div className={`na-icon-box w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${d.color}`}>
                {d.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{d.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── STATS BAR ─────────────────────────────────────────── */
const stats = [
  { value: '+500', label: 'Familias atendidas' },
  { value: '98%', label: 'Satisfacción familiar' },
  { value: '10+', label: 'Años de experiencia' },
  { value: '8+', label: 'Especialidades clínicas' },
]

function StatsBar() {
  return (
    <section className="bg-gradient-to-r from-[#2D1B69] via-[#713ec1] to-[#9d4edd] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-animate="scale"
              data-delay={String(i + 1)}
              className={`na-stat ${i < stats.length - 1 ? 'lg:border-r lg:border-white/20' : ''} px-4`}
            >
              <div className="na-stat-value text-3xl sm:text-4xl font-extrabold mb-1">{s.value}</div>
              <div className="text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SERVICIOS ─────────────────────────────────────────── */
const servicios = [
  {
    icon: Brain, iconColor: '#713ec1', iconBg: '#713ec1', cardBg: '#F0EAFB',
    title: 'Neuropsicología Clínica',
    desc: 'Evaluación y tratamiento de funciones cognitivas para un desarrollo óptimo.',
  },
  {
    icon: ClipboardList, iconColor: '#fc66b5', iconBg: '#fc66b5', cardBg: '#FFF0F9',
    title: 'Evaluación Neuropsicológica',
    desc: 'Diagnóstico preciso de fortalezas y áreas de mejora con pruebas estandarizadas.',
  },
  {
    icon: Zap, iconColor: '#32b8cc', iconBg: '#32b8cc', cardBg: '#E8F9FD',
    title: 'TDAH en Niños y Adultos',
    desc: 'Intervención especializada para el manejo del TDAH en todas las etapas de la vida.',
  },
  {
    icon: Puzzle, iconColor: '#32b8cc', iconBg: '#32b8cc', cardBg: '#E8F9FD',
    title: 'Autismo (TEA)',
    desc: 'Apoyo especializado para personas con trastorno del espectro autista y sus familias.',
  },
  {
    icon: BookOpen, iconColor: '#713ec1', iconBg: '#713ec1', cardBg: '#F0EAFB',
    title: 'Dificultades de Aprendizaje',
    desc: 'Identificación y tratamiento de dislexia, discalculia y otras dificultades académicas.',
  },
  {
    icon: Sparkles, iconColor: '#fc66b5', iconBg: '#fc66b5', cardBg: '#FFF0F9',
    title: 'Neurohabilidades',
    desc: 'Entrenamiento cognitivo para potenciar memoria, atención, concentración y funciones ejecutivas.',
  },
]

function ServiciosSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            data-animate
            className="na-badge inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-3"
            style={{ background: '#FFF0F9', color: '#fc66b5' }}
          >
            Nuestros Servicios
          </span>
          <h2 data-animate data-delay="1" className="text-3xl sm:text-4xl font-extrabold text-gray-900">Cuidado integral para cada mente</h2>
          <p data-animate data-delay="2" className="mt-3 text-gray-500 max-w-xl mx-auto text-sm">
            Ofrecemos atención especializada en neuropsicología para niños, adolescentes y adultos,
            con un enfoque humano y basado en evidencia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {servicios.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                data-animate
                data-delay={String((i % 3) + 1)}
                className="na-card rounded-2xl p-7"
                style={{ background: s.cardBg }}
              >
                <div
                  className="na-icon-box w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: s.iconBg }}
                >
                  <Icon size={22} color="white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>

        <div data-animate className="text-center">
          <Link
            href="/servicios"
            className="na-btn na-btn-gradient inline-flex items-center gap-2 text-white font-bold px-8 py-3 rounded-full shadow-md text-sm"
            style={{ background: 'linear-gradient(90deg, #713ec1 0%, #fc66b5 100%)' }}
          >
            Ver todos los servicios
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── BIENESTAR / POR QUÉ ELEGIRNOS ─────────────────────── */
const razones = [
  {
    color: 'text-[#713ec1] bg-[#F0EAFB]',
    text: 'Enfoque humano y personalizado — Cada plan es único, diseñado para las necesidades específicas de tu familia.',
  },
  {
    color: 'text-[#32b8cc] bg-[#E8F9FD]',
    text: 'Basados en evidencia científica — Usamos las mejores herramientas diagnósticas y terapéuticas avanzadas internacionalmente.',
  },
  {
    color: 'text-[#fc66b5] bg-[#FFF0F9]',
    text: 'Atención para toda la familia — Acompañamos a niños, adolescentes, adultos y padres en cada etapa del proceso.',
  },
]

function BienestarSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — image */}
          <div data-animate="left" className="relative na-img-zoom overflow-hidden rounded-3xl">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-[#F0EAFB]">
              <img
                src="/images/team.jpg"
                alt="Equipo NeuroAfectiva"
                className="w-full h-full object-cover"
                data-parallax="0.14"
              />
            </div>
            <div className="absolute bottom-5 left-5 bg-white rounded-xl px-4 py-2 shadow-lg text-xs font-bold text-gray-700">
              📍 Bogotá, Colombia &nbsp;•&nbsp; Desde 2016
            </div>
          </div>

          {/* Right — copy */}
          <div>
            <span data-animate="right" className="inline-block bg-[#F0EAFB] text-[#713ec1] text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              ¿Por qué elegirnos?
            </span>
            <h2 data-animate="right" data-delay="1" className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
              Tu bienestar es nuestra prioridad
            </h2>
            <ul className="space-y-5">
              {razones.map((r, i) => (
                <li key={i} data-animate="right" data-delay={String(i + 2)} className="flex gap-4 items-start">
                  <span className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${r.color}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── PROCESO ───────────────────────────────────────────── */
const pasos = [
  {
    num: '1', color: 'bg-[#713ec1]',
    title: 'Primera Consulta',
    desc: 'Conocemos tu caso, inquietudes y objetivos en una sesión inicial de valoración.',
  },
  {
    num: '2', color: 'bg-[#32b8cc]',
    title: 'Evaluación',
    desc: 'Aplicamos pruebas neuropsicológicas estandarizadas para un diagnóstico preciso.',
  },
  {
    num: '3', color: 'bg-[#fc66b5]',
    title: 'Plan Personalizado',
    desc: 'Diseñamos un plan de intervención adaptado a tus necesidades y metas específicas.',
  },
  {
    num: '4', color: 'bg-[#713ec1]',
    title: 'Seguimiento',
    desc: 'Hacemos seguimiento continuo del progreso y ajustamos el plan según la evolución.',
  },
]

function ProcesoSection() {
  return (
    <section className="bg-[#F8F4FF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span data-animate className="text-xs font-bold tracking-widest text-[#713ec1] uppercase">Nuestro Proceso</span>
          <h2 data-animate data-delay="1" className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">Tu camino hacia el bienestar</h2>
          <p data-animate data-delay="2" className="mt-3 text-gray-500 text-sm">Un proceso claro y acompañado en cada paso del camino.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pasos.map((p, i) => (
            <div key={p.num} data-animate data-delay={String(i + 1)} className="na-step relative">
              {/* Arrow connector (desktop only) */}
              {i < pasos.length - 1 && (
                <div className="hidden lg:flex absolute top-8 -right-3 z-10 items-center">
                  <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              )}
              <div className="na-card bg-white rounded-2xl p-7 shadow-sm h-full">
                <div className={`na-step-badge w-10 h-10 rounded-full ${p.color} text-white font-extrabold text-lg flex items-center justify-center mb-5`}>
                  {p.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── TESTIMONIOS ───────────────────────────────────────── */
const testimonios = [
  {
    quote: '"Gracias a NeuroAfectiva, mi hijo finalmente tiene el diagnóstico que necesitaba. El equipo es increíblemente profesional y empático. Lo recomiendo con el corazón."',
    name: 'Carolina Martínez',
    role: 'Mamá de Sebastián, 9 años',
  },
  {
    quote: '"El proceso de evaluación fue muy claro y detallado. Nos explicaron todo en términos que pudimos entender. Ahora mi hija tiene la ayuda que necesita en el colegio."',
    name: 'Andrés Gómez',
    role: 'Papá de Valeria, 11 años',
  },
  {
    quote: '"Como adulto con TDAH nunca diagnosticado, encontrar NeuroAfectiva cambió mi vida. Su enfoque empático y científico me dio las herramientas que siempre necesité."',
    name: 'Laura Cifuentes',
    role: 'Paciente adulta, 34 años',
  },
]

function TestimoniosSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span data-animate className="text-xs font-bold tracking-widest text-[#713ec1] uppercase">Testimonios</span>
          <h2 data-animate data-delay="1" className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">Lo que dicen nuestras familias</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <div
              key={t.name}
              data-animate
              data-delay={String(i + 1)}
              className="na-testimonial bg-[#F8F4FF] rounded-2xl p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#713ec1]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E0D4F7] flex items-center justify-center text-[#713ec1] font-bold text-sm flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA FINAL ─────────────────────────────────────────── */
function CTASection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #713ec1 0%, #a855f7 50%, #fc66b5 100%)' }}
      data-parallax="0.06"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 data-animate="scale" className="text-3xl sm:text-4xl font-extrabold mb-4">¿Listo para dar el primer paso?</h2>
        <p data-animate data-delay="1" className="text-white/80 text-base mb-10 max-w-xl mx-auto">
          Agenda una consulta inicial hoy y descubre cómo podemos acompañar el desarrollo de tu familia.
        </p>

        <div data-animate data-delay="2" className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            href="/agendar"
            className="na-btn bg-white text-[#713ec1] hover:bg-gray-50 font-bold px-8 py-3 rounded-full shadow-lg text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            Agendar mi cita
          </Link>
          <a
            href="https://wa.me/573193517239"
            target="_blank"
            rel="noopener noreferrer"
            className="na-btn border-2 border-white/60 hover:border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-full text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escríbenos
          </a>
        </div>

        {/* Trust badges */}
        <div data-animate data-delay="3" className="flex flex-wrap justify-center gap-6 text-xs text-white/70">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            Confidencialidad garantizada
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Respuesta en menos de 24 horas
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Bogotá, Colombia
          </span>
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ──────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DiferenciaSection />
      <StatsBar />
      <ServiciosSection />
      <BienestarSection />
      <ProcesoSection />
      <TestimoniosSection />
      <CTASection />
    </>
  )
}
