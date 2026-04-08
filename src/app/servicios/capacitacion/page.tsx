import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Users, GraduationCap, Mic, Brain, HeartPulse, Palette, Briefcase,
  ChevronRight, School, Stethoscope, Building2, MessageCircle,
} from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Capacitación & Talleres — NeuroAfectiva',
  description: 'Programas formativos vivenciales para equipos, instituciones y personas que quieren aprender diferente.',
}

const stats = [
  { val: '50+', label: 'Talleres realizados' },
  { val: '500+', label: 'Participantes formados' },
  { val: '12', label: 'Temáticas especializadas' },
  { val: '100%', label: 'Metodología práctica' },
]

const formats = [
  {
    icon: Users,
    iconBg: '#713ec1',
    cardBg: '#F5F3FF',
    cardBorder: '#E8E0FF',
    title: 'Talleres Grupales',
    desc: 'Sesiones interactivas de 3 a 8 horas para grupos: aulas escolares, equipos de salud, familias o comunidades. Dinámicas vivenciales y herramientas prácticas.',
    pill: '3-8 horas · Presencial/Virtual',
    pillColor: '#713ec1',
    pillBg: '#EDE8FF',
  },
  {
    icon: GraduationCap,
    iconBg: '#32b8cc',
    cardBg: '#F0FAFB',
    cardBorder: '#D0F0F5',
    title: 'Programas de Formación',
    desc: 'Itinerarios de 4 a 8 semanas para profundizar en neurohabilidades, neurosalud o expresión creativa. Con sesiones progresivas, material de apoyo y acompañamiento.',
    pill: '4-8 semanas · Online',
    pillColor: '#32b8cc',
    pillBg: '#D8F5F9',
  },
  {
    icon: Mic,
    iconBg: '#fc66b5',
    cardBg: '#FFF5FB',
    cardBorder: '#FFD6EE',
    title: 'Conferencias y Charlas',
    desc: 'Ponencias de 60 a 90 minutos para jornadas pedagógicas, congresos de salud, eventos corporativos o escuelas de padres. Impacto inmediato y motivacional.',
    pill: '60-90 min · Flexible',
    pillColor: '#fc66b5',
    pillBg: '#FFE8F5',
  },
]

const topics = [
  {
    barColor: '#fc66b5',
    icon: Brain,
    iconBg: '#fc66b5',
    title: 'Neurohabilidades del Aprendizaje',
    imgUrl: 'https://images.unsplash.com/photo-1714646793036-ae03830d3a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    items: [
      'Funciones ejecutivas (planificación, inhibición, flexibilidad)',
      'Atención, concentración y memoria de trabajo',
      'Lectoescritura, comprensión y procesamiento',
      'Velocidad de procesamiento y autorregulación',
    ],
    dotColor: '#fc66b5',
  },
  {
    barColor: '#713ec1',
    icon: HeartPulse,
    iconBg: '#713ec1',
    title: 'Neurosalud Cognitiva y Emocional',
    imgUrl: 'https://images.unsplash.com/photo-1623358184637-2ec651a9ea51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    items: [
      'Regulación emocional y neurobiología del estrés',
      'Manejo de la ansiedad y hábitos cognitivos',
      'Mindfulness, atención plena y neuroplasticidad',
      'Sueño, emociones y bienestar cognitivo',
    ],
    dotColor: '#713ec1',
  },
  {
    barColor: '#32b8cc',
    icon: Palette,
    iconBg: '#32b8cc',
    title: 'ExpresaMente Creativa',
    imgUrl: 'https://images.unsplash.com/photo-1758522275144-85aa16c4ae28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    items: [
      'Arteterapia y expresión visual',
      'Musicoterapia y terapia de movimiento',
      'Escritura terapéutica y narrativa',
      'Creatividad como herramienta de transformación',
    ],
    dotColor: '#32b8cc',
  },
  {
    barColor: '#737f80',
    icon: Briefcase,
    iconBg: '#4A5568',
    title: 'Formación Organizacional',
    imgUrl: 'https://images.unsplash.com/photo-1758691736580-a41e0cfe9e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    items: [
      'Liderazgo consciente y gestión emocional',
      'Bienestar laboral y prevención del burnout',
      'Comunicación asertiva en equipos',
      'Cultura organizacional y habilidades socioemocionales',
    ],
    dotColor: '#A0AEC0',
  },
]

const processSteps = [
  {
    num: '01',
    bg: '#713ec1',
    title: 'Diagnóstico',
    desc: 'Conversamos sobre tus objetivos, el perfil del grupo y el contexto donde se realizará la formación.',
  },
  {
    num: '02',
    bg: '#32b8cc',
    title: 'Diseño',
    desc: 'Creamos un programa a medida con dinámicas, recursos y una estructura pensada para tu equipo.',
  },
  {
    num: '03',
    bg: '#fc66b5',
    title: 'Implementación',
    desc: 'Facilitamos el programa y entregamos informe de resultados, materiales y recomendaciones de seguimiento.',
  },
]

const pqCards = [
  {
    icon: School,
    iconBg: '#fc66b5',
    accent: 'Comunidad educativa',
    imgUrl: 'https://images.unsplash.com/photo-1759456629213-3db5a7bb53ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    desc: 'Docentes, orientadores, directivos, padres de familia y estudiantes que quieren integrar la neurociencia en el aula y en el hogar.',
  },
  {
    icon: Stethoscope,
    iconBg: '#32b8cc',
    accent: 'Área clínica y de salud',
    imgUrl: 'https://images.unsplash.com/photo-1573878409120-f66dcde676f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    desc: 'Psicólogos, terapeutas, médicos y personas en proceso de acompañamiento que buscan ampliar sus herramientas desde la neurociencia aplicada.',
  },
  {
    icon: Building2,
    iconBg: '#713ec1',
    accent: 'Sector empresarial y organizacional',
    imgUrl: 'https://images.unsplash.com/photo-1774491816259-8bf12e6dafea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    desc: 'Equipos de trabajo, líderes y áreas de RRHH que buscan fortalecer el bienestar, la productividad y la cultura organizacional.',
  },
]

export default function CapacitacionPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="w-full relative flex items-center justify-center" style={{ height: '600px' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1762176264161-09219da49794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.533) 0%, rgba(16,10,34,0.867) 100%)' }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 px-5 text-center w-full max-w-[800px]">
          <div
            className="inline-flex items-center px-6 py-2 rounded-full text-[#32b8cc] text-[13px] font-semibold"
            style={{ background: 'rgba(50,184,204,0.251)', border: '1px solid #32b8cc' }}
          >
            Formación y Desarrollo
          </div>
          <h1
            className="text-[48px] md:text-[72px] font-black text-white leading-[1.1]"
          >
            Capacitación<br />&amp; Talleres
          </h1>
          <p className="text-white/80 text-sm md:text-lg leading-[1.5] max-w-[640px]">
            Programas formativos vivenciales para equipos, instituciones y personas que quieren aprender diferente.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-5 w-full md:w-auto mt-2">
            <Link
              href="#formatos"
              className="flex items-center justify-center px-10 py-4 rounded-full text-base font-bold text-white w-full md:w-auto"
              style={{ background: '#32b8cc' }}
            >
              Ver programas
            </Link>
            <Link
              href="/contacto"
              className="flex items-center justify-center px-10 py-4 rounded-full text-base font-semibold text-white w-full md:w-auto"
              style={{ border: '2px solid rgba(255,255,255,0.6)' }}
            >
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <div
        className="w-full flex items-center justify-between px-5 md:px-[120px]"
        style={{ height: '100px', background: 'linear-gradient(90deg, #fc66b5 0%, #713ec1 50%, #32b8cc 100%)' }}
      >
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center flex-1">
            <div className="flex flex-col items-center gap-1 flex-1">
              <span className="text-white text-[24px] md:text-[32px] font-black">{s.val}</span>
              <span className="text-white/85 text-[11px] md:text-[13px] text-center">{s.label}</span>
            </div>
            {i < stats.length - 1 && <div className="hidden md:block w-px h-[40px] bg-white/20" />}
          </div>
        ))}
      </div>

      {/* ── Formatos ─────────────────────────────────────────────────────── */}
      <section id="formatos" className="w-full bg-white px-5 md:px-[120px] py-[80px] flex flex-col gap-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="px-4 py-1.5 rounded-full text-[#32b8cc] text-[13px] font-semibold" style={{ background: '#EDF9FC' }}>
            Formatos disponibles
          </span>
          <h2 className="text-[24px] md:text-[40px] font-extrabold text-[#1A1A2E]">
            Formación para todos los contextos
          </h2>
          <p className="text-[#737f80] text-sm md:text-base max-w-[680px]">
            Desde el aula hasta la empresa, desde la familia hasta el consultorio.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {formats.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="flex flex-col gap-5 rounded-[20px] p-10 flex-1"
                style={{ background: f.cardBg, border: `1px solid ${f.cardBorder}` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: f.iconBg }}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-[#1A1A2E] text-[20px] font-bold">{f.title}</h3>
                <p className="text-[#737f80] text-sm leading-[1.6] flex-1">{f.desc}</p>
                <span
                  className="self-start px-4 py-1.5 rounded-2xl text-xs font-semibold"
                  style={{ background: f.pillBg, color: f.pillColor }}
                >
                  {f.pill}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Temas ────────────────────────────────────────────────────────── */}
      <section className="w-full px-5 md:px-[120px] py-[80px] flex flex-col gap-12" style={{ background: '#1A0A2E' }}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <span className="px-4 py-1.5 self-start rounded-full text-[#B99FE0] text-[13px] font-semibold" style={{ background: 'rgba(113,62,193,0.4)' }}>
              Catálogo temático
            </span>
            <h2 className="text-white text-[26px] md:text-[40px] font-extrabold">
              Nuestros talleres y capacitaciones
            </h2>
          </div>
          <p className="text-[#9988C0] text-sm md:text-[15px] leading-[1.6] md:text-right max-w-[300px]">
            Cuatro grandes áreas de formación.<br className="hidden md:block" />Cada programa, adaptado a tu contexto.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            {topics.slice(0, 2).map((topic) => {
              const Icon = topic.icon
              return (
                <div
                  key={topic.title}
                  className="flex flex-col rounded-2xl overflow-hidden flex-1"
                  style={{ background: '#1E1040' }}
                >
                  {/* Color bar */}
                  <div className="h-1.5 w-full rounded-t-[8px]" style={{ background: topic.barColor }} />
                  {/* Image */}
                  <div className="h-[160px] overflow-hidden">
                    <img src={topic.imgUrl} alt={topic.title} className="w-full h-full object-cover" />
                  </div>
                  {/* Body */}
                  <div className="flex flex-col gap-4 p-7 md:p-8">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: topic.iconBg }}
                      >
                        <Icon size={22} className="text-white" />
                      </div>
                      <span className="text-white text-[17px] font-bold">{topic.title}</span>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {topic.items.map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <div className="w-2 h-2 rounded-full shrink-0" style={{ background: topic.dotColor }} />
                          <span className="text-[#C4A8D8] text-[13px]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            {topics.slice(2).map((topic) => {
              const Icon = topic.icon
              return (
                <div
                  key={topic.title}
                  className="flex flex-col rounded-2xl overflow-hidden flex-1"
                  style={{ background: '#1E1040' }}
                >
                  <div className="h-1.5 w-full rounded-t-[8px]" style={{ background: topic.barColor }} />
                  <div className="h-[160px] overflow-hidden">
                    <img src={topic.imgUrl} alt={topic.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-4 p-7 md:p-8">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: topic.iconBg }}
                      >
                        <Icon size={22} className="text-white" />
                      </div>
                      <span className="text-white text-[17px] font-bold">{topic.title}</span>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {topic.items.map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <div className="w-2 h-2 rounded-full shrink-0" style={{ background: topic.dotColor }} />
                          <span className="text-[#C4A8D8] text-[13px]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Proceso ──────────────────────────────────────────────────────── */}
      <section className="w-full px-5 md:px-[120px] py-[80px] flex flex-col items-center gap-14" style={{ background: '#F5F3FF' }}>
        <div className="flex flex-col items-center gap-3 text-center w-full">
          <span className="px-4 py-1.5 self-center rounded-full text-[#713ec1] text-[13px] font-semibold" style={{ background: '#EDE8FF' }}>
            Cómo trabajamos
          </span>
          <h2 className="text-[#1A1A2E] text-[26px] md:text-[40px] font-extrabold">Proceso en 3 pasos</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-0 w-full">
          {processSteps.map((step, i) => (
            <div key={step.num} className="flex md:flex-row items-start flex-1">
              <div
                className="flex flex-col items-center gap-5 flex-1 px-6 md:px-12 py-10"
              >
                <div
                  className="w-[72px] h-[72px] rounded-[36px] flex items-center justify-center"
                  style={{ background: step.bg }}
                >
                  <span className="text-white text-[22px] font-black">{step.num}</span>
                </div>
                <h3 className="text-[#1A1A2E] text-[20px] font-bold text-center">{step.title}</h3>
                <p className="text-[#737f80] text-sm leading-[1.6] text-center">{step.desc}</p>
              </div>
              {i < processSteps.length - 1 && (
                <div className="hidden md:flex items-center h-[72px] w-10 shrink-0 justify-center mt-10">
                  <ChevronRight size={32} style={{ color: '#C4B5E8' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Para quién ───────────────────────────────────────────────────── */}
      <section className="w-full bg-white px-5 md:px-[120px] py-[80px] flex flex-col gap-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="px-4 py-1.5 self-center rounded-full text-[#fc66b5] text-[13px] font-semibold" style={{ background: '#FFF0F9' }}>
            ¿Para quién?
          </span>
          <h2 className="text-[#1A1A2E] text-[26px] md:text-[40px] font-extrabold">¿A quién van dirigidos?</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {pqCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.accent}
                className="flex flex-col rounded-[20px] overflow-hidden flex-1"
                style={{ background: '#1A0A2E', height: '380px' }}
              >
                {/* Image */}
                <div className="h-[180px] overflow-hidden shrink-0">
                  <img src={card.imgUrl} alt={card.accent} className="w-full h-full object-cover" />
                </div>
                {/* Body */}
                <div className="flex flex-col gap-3 p-7 flex-1">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-[18px] flex items-center justify-center shrink-0"
                      style={{ background: card.iconBg }}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <span className="text-white text-base font-bold">{card.accent}</span>
                  </div>
                  <p className="text-[#9988C0] text-[13px] leading-[1.5]">{card.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="w-full flex flex-col items-center justify-center gap-8 px-5 md:px-[120px] py-[80px] text-center"
        style={{ background: 'linear-gradient(135deg, #1A0A2E 0%, #713ec1 50%, #32b8cc 100%)', minHeight: '480px' }}
      >
        <div className="flex flex-col items-center gap-4 max-w-[740px]">
          <span className="px-6 py-2 rounded-full text-white text-[13px] font-semibold" style={{ background: 'rgba(255,255,255,0.149)' }}>
            ¿Listo para empezar?
          </span>
          <h2 className="text-white text-[28px] md:text-[44px] font-extrabold leading-[1.2]">
            Diseñemos juntos tu programa
          </h2>
          <p className="text-white/80 text-sm md:text-[17px] max-w-[580px]">
            Cuéntanos tu contexto y construimos una propuesta formativa a la medida de tu equipo o institución.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 w-full md:w-auto">
          <Link
            href="/contacto"
            className="flex items-center justify-center px-10 py-4 rounded-full text-base font-bold w-full md:w-auto"
            style={{ background: '#FFFFFF', color: '#713ec1' }}
          >
            Solicitar propuesta
          </Link>
          <Link
            href="/servicios"
            className="flex items-center justify-center px-10 py-4 rounded-full text-base font-semibold text-white w-full md:w-auto"
            style={{ border: '2px solid rgba(255,255,255,0.6)' }}
          >
            Ver más servicios
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
