import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Network, Brain, Users, Heart, Activity, Puzzle, MessageCircle, ChevronRight, Quote,
  ShieldCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terapia Integral e Interdisciplinaria — CognyVita',
  description: 'Modelo de atención integral donde neuropsicología, fonoaudiología, terapia ocupacional y psicología trabajan de forma coordinada para resultados más completos.',
}

const specialties = [
  { icon: Brain, color: '#8537D8', borderColor: '#8537D830', label: 'Neurodesarrollo complejo' },
  { icon: Puzzle, color: '#4585FF', borderColor: '#4585FF30', label: 'TEA con perfil mixto' },
  { icon: Activity, color: '#F545B4', borderColor: '#F545B430', label: 'TDAH severo' },
  { icon: Network, color: '#8537D8', borderColor: '#8537D830', label: 'Discapacidad intelectual' },
  { icon: Heart, color: '#4585FF', borderColor: '#4585FF30', label: 'Síndromes genéticos' },
  { icon: Users, color: '#F545B4', borderColor: '#F545B430', label: 'Parálisis cerebral' },
  { icon: Brain, color: '#8537D8', borderColor: '#8537D830', label: 'Secuelas neurológicas múltiples' },
  { icon: Puzzle, color: '#4585FF', borderColor: '#4585FF30', label: 'Dificultades de aprendizaje complejas' },
  { icon: Activity, color: '#F545B4', borderColor: '#F545B430', label: 'Trastornos del desarrollo global' },
]

const processSteps = [
  {
    num: '01',
    gradient: 'linear-gradient(135deg, #8537D8 0%, #9045D8 100%)',
    lineColor: 'rgba(133,55,216,0.125)',
    title: 'Valoración interdisciplinaria conjunta',
    desc: 'Realizamos una evaluación coordinada entre los profesionales involucrados para obtener una visión completa del perfil funcional, cognitivo y emocional de la persona.',
  },
  {
    num: '02',
    gradient: 'linear-gradient(135deg, #4585FF 0%, #3A75E8 100%)',
    lineColor: 'rgba(69,133,255,0.125)',
    title: 'Plan de atención integral',
    desc: 'Diseñamos un plan conjunto con objetivos compartidos entre las distintas disciplinas, evitando duplicidades y maximizando el impacto de cada intervención.',
  },
  {
    num: '03',
    gradient: 'linear-gradient(135deg, #F545B4 0%, #DC3AA8 100%)',
    lineColor: 'rgba(245,69,180,0.125)',
    title: 'Intervención coordinada',
    desc: 'Cada profesional trabaja desde su área, comunicándose de forma regular para ajustar el plan según la evolución y asegurar coherencia en todas las sesiones.',
  },
  {
    num: '04',
    gradient: 'linear-gradient(135deg, #8537D8 0%, #4585FF 100%)',
    lineColor: null,
    title: 'Seguimiento y ajuste del plan',
    desc: 'Reuniones periódicas del equipo para revisar avances, reformular objetivos e informar a la familia sobre el progreso global y los pasos a seguir.',
  },
]

export default function TerapiaIntegralPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="w-full relative flex items-center justify-center" style={{ height: '580px' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(26,26,46,0.55) 0%, rgba(14,35,79,0.92) 60%, rgba(26,26,46,0.97) 100%)' }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 px-5 md:px-[120px] py-[60px] text-center w-full">
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/" className="text-white/40 text-xs hover:text-white/70">Inicio</Link>
            <ChevronRight size={11} className="text-white/30" />
            <Link href="/servicios" className="text-white/40 text-xs hover:text-white/70">Servicios</Link>
            <ChevronRight size={11} className="text-white/30" />
            <span className="text-[#F545B4] text-xs font-semibold">Terapia Integral</span>
          </nav>

          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
            style={{ background: 'rgba(245,69,180,0.10)', border: '1px solid rgba(245,69,180,0.35)' }}
          >
            <Network size={15} style={{ color: '#F545B4' }} />
            <span className="text-white text-[13px] font-semibold">Neuropsicología · Fonoaudiología · Terapia Ocupacional · Psicología</span>
          </div>

          <h1
            className="text-[36px] md:text-[60px] font-extrabold text-white leading-[1.1] max-w-[860px]"
            style={{ letterSpacing: '-2px' }}
          >
            Terapia Integral<br />e Interdisciplinaria
          </h1>

          <p className="text-white/80 text-sm md:text-lg leading-[1.65] max-w-[660px]">
            Un equipo de especialistas trabajando de forma coordinada para abordar perfiles complejos con la profundidad y coherencia que merecen.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
            <Link
              href="/agendar"
              className="flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] font-bold text-white w-full md:w-auto"
              style={{ background: 'linear-gradient(90deg, #F545B4 0%, #8537D8 50%, #4585FF 100%)' }}
            >
              Agendar valoración
            </Link>
            <Link
              href="#proceso"
              className="flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] font-medium text-white w-full md:w-auto"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.30)' }}
            >
              ¿Cómo funciona?
            </Link>
          </div>
        </div>
      </section>

      {/* ── Qué es ───────────────────────────────────────────────────────── */}
      <section className="w-full bg-white px-5 md:px-[120px] py-[80px]">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20 w-full">
          <div className="relative w-full md:w-[520px] h-[360px] md:h-[520px] shrink-0 rounded-[24px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
              alt="Terapia Integral e Interdisciplinaria"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2.5 rounded-xl"
              style={{ background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.09)' }}
            >
              <ShieldCheck size={16} style={{ color: '#F545B4' }} />
              <span className="text-[#162845] text-[12px] font-semibold">Equipo coordinado y especializado</span>
            </div>
            <div
              className="absolute bottom-11 right-0 flex flex-col gap-0.5 px-5 py-3.5 rounded-xl"
              style={{ background: 'linear-gradient(135deg, #8537D8, #F545B4)' }}
            >
              <span className="text-white text-[22px] font-extrabold">4+</span>
              <span className="text-white text-[11px] font-semibold">disciplinas</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 flex-1 min-w-0">
            <span className="px-4 py-1.5 self-start rounded-full text-[13px] font-semibold text-[#F545B4]" style={{ background: '#FFF0F9' }}>
              Sobre este servicio
            </span>
            <h2 className="text-[24px] md:text-[38px] font-extrabold text-[#162845] leading-[1.2]">
              ¿Qué es la Terapia<br className="hidden md:block" />Integral e Interdisciplinaria?
            </h2>
            <p className="text-[#737f80] text-sm md:text-[15px] leading-[1.75]">
              Es un modelo de atención donde múltiples profesionales de la salud — neuropsicólogos, fonoaudiólogos, terapeutas ocupacionales y psicólogos — trabajan de forma coordinada y con objetivos compartidos para abordar perfiles de alta complejidad.
            </p>
            <p className="text-[#737f80] text-sm md:text-[15px] leading-[1.75]">
              A diferencia de los tratamientos paralelos e independientes, nuestra propuesta interdisciplinaria garantiza coherencia en la intervención, comunicación constante entre especialistas y un plan unificado centrado en la persona y su familia.
            </p>

            <div className="flex gap-4 md:gap-6 mt-2">
              <div className="flex flex-col items-start gap-1 rounded-2xl px-5 md:px-6 py-5 flex-1" style={{ background: '#FFF0F9' }}>
                <span className="text-[22px] font-extrabold" style={{ color: '#F545B4' }}>4+</span>
                <span className="text-[#737f80] text-xs">disciplinas</span>
              </div>
              <div className="flex flex-col items-start gap-1 rounded-2xl px-5 md:px-6 py-5 flex-1" style={{ background: '#EDE5FF' }}>
                <span className="text-[22px] font-extrabold" style={{ color: '#8537D8' }}>Plan</span>
                <span className="text-[#737f80] text-xs">unificado</span>
              </div>
              <div className="flex flex-col items-start gap-1 rounded-2xl px-5 md:px-6 py-5 flex-1" style={{ background: '#E5EDFF' }}>
                <span className="text-[22px] font-extrabold" style={{ color: '#4585FF' }}>0–65+</span>
                <span className="text-[#737f80] text-xs">años</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Áreas de atención ────────────────────────────────────────────── */}
      <section className="w-full px-5 md:px-[120px] py-[80px] flex flex-col items-center gap-12" style={{ background: '#FFF0F9' }}>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-[#F545B4] text-[11px] md:text-xs font-extrabold tracking-[3px] uppercase">Perfiles que atendemos</span>
          <h2 className="text-[24px] md:text-[38px] font-extrabold text-[#162845]">Condiciones que tratamos</h2>
          <p className="text-[#737f80] text-sm md:text-base leading-[1.6] max-w-[640px]">
            Casos de alta complejidad que se benefician de un abordaje multidisciplinar coordinado.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-wrap justify-center gap-3">
            {specialties.slice(0, 5).map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.label}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white"
                  style={{ border: `1.5px solid ${s.borderColor}`, boxShadow: `0 2px 8px ${s.color}10` }}
                >
                  <Icon size={18} style={{ color: s.color }} />
                  <span className="text-[#162845] text-sm font-semibold">{s.label}</span>
                </div>
              )
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {specialties.slice(5).map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.label}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white"
                  style={{ border: `1.5px solid ${s.borderColor}` }}
                >
                  <Icon size={18} style={{ color: s.color }} />
                  <span className="text-[#162845] text-sm font-semibold">{s.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Proceso ──────────────────────────────────────────────────────── */}
      <section id="proceso" className="w-full bg-white px-5 md:px-[120px] py-[80px] flex flex-col gap-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2.5">
            <span className="text-[#F545B4] text-[11px] font-extrabold tracking-[3px] uppercase">El proceso interdisciplinario</span>
            <h2 className="text-[26px] md:text-[36px] font-extrabold text-[#162845] leading-[1.2]">
              Tu camino hacia<br />una atención completa
            </h2>
          </div>
          <p className="text-[#737f80] text-sm md:text-base leading-[1.5] md:text-right max-w-[260px]">
            Un equipo, un plan,<br className="hidden md:block" />un objetivo compartido.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {processSteps.map((step, i) => (
            <div key={step.num} className="flex gap-0 w-full">
              <div className="flex flex-col items-center w-[80px] shrink-0">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: step.gradient }}
                >
                  <span className="text-white text-[15px] font-extrabold">{step.num}</span>
                </div>
                {i < processSteps.length - 1 && step.lineColor && (
                  <div className="w-0.5 h-[60px]" style={{ background: step.lineColor }} />
                )}
                {i < processSteps.length - 1 && !step.lineColor && (
                  <div className="h-[60px]" />
                )}
              </div>
              <div className={`flex flex-col gap-2 flex-1 pl-8 ${i < processSteps.length - 1 ? 'pb-12' : ''}`} style={{ paddingTop: '4px' }}>
                <h3 className="text-[#162845] text-lg md:text-[20px] font-bold">{step.title}</h3>
                <p className="text-[#737f80] text-sm leading-[1.65]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="w-full relative flex items-center justify-center py-[80px] md:py-0 text-center"
        style={{ minHeight: '340px', background: 'linear-gradient(135deg, #F545B4 0%, #8537D8 50%, #4585FF 100%)' }}
      >
        <div className="flex flex-col items-center gap-6 px-5 md:px-[120px] w-full max-w-[860px]">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-[20px]" style={{ background: 'rgba(255,255,255,0.125)' }}>
            <Quote size={16} className="text-white" />
            <span className="text-white text-sm italic font-medium">"Juntos llegamos más lejos."</span>
          </div>
          <h2 className="text-white text-[28px] md:text-[40px] font-extrabold leading-[1.2] max-w-[760px]">
            Solicita una valoración interdisciplinaria
          </h2>
          <p className="text-white/80 text-sm md:text-[17px] max-w-[520px]">
            Te orientamos sobre qué profesionales necesita tu caso y cómo coordinar la atención de forma eficiente.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-2">
            <Link
              href="/agendar"
              className="flex items-center justify-center gap-2 bg-white rounded-full px-9 py-4 text-[15px] font-bold w-full md:w-auto"
              style={{ color: '#8537D8' }}
            >
              Agendar valoración integral
            </Link>
            <a
              href="https://wa.me/573193517239"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold text-white w-full md:w-auto"
              style={{ background: 'rgba(255,255,255,0.125)', border: '1.5px solid rgba(255,255,255,0.376)' }}
            >
              <MessageCircle size={17} className="text-white" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
