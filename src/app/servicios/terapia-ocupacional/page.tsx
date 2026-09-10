import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Hand, Puzzle, Activity, Baby, Brain, Users, MessageCircle, ChevronRight, Quote,
  ShieldCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terapia Ocupacional — CognyVita',
  description: 'Servicios de Terapia Ocupacional para favorecer la participación, autonomía y desempeño en el hogar, colegio, trabajo y comunidad.',
}

const processSteps = [
  {
    num: '01',
    gradient: 'linear-gradient(135deg, #4585FF 0%, #3A75E8 100%)',
    lineColor: 'rgba(69,133,255,0.125)',
    title: 'Evaluación ocupacional',
    desc: 'Valoramos el desempeño de la persona en sus actividades cotidianas, escolares y de ocio para identificar barreras funcionales y establecer prioridades de intervención.',
  },
  {
    num: '02',
    gradient: 'linear-gradient(135deg, #8537D8 0%, #9045D8 100%)',
    lineColor: 'rgba(133,55,216,0.125)',
    title: 'Objetivos funcionales y plan de trabajo',
    desc: 'Definimos metas concretas centradas en la participación real: vestirse, escribir, jugar, estudiar. El plan se adapta al contexto familiar y escolar.',
  },
  {
    num: '03',
    gradient: 'linear-gradient(135deg, #F545B4 0%, #DC3AA8 100%)',
    lineColor: 'rgba(245,69,180,0.125)',
    title: 'Intervención y práctica guiada',
    desc: 'Sesiones terapéuticas con actividades significativas, técnicas de integración sensorial, entrenamiento en habilidades y adaptación del entorno.',
  },
  {
    num: '04',
    gradient: 'linear-gradient(135deg, #4585FF 0%, #8537D8 100%)',
    lineColor: null,
    title: 'Seguimiento y generalización',
    desc: 'Monitoreamos el progreso y trabajamos con la familia y el colegio para generalizar las habilidades adquiridas a todos los entornos de la persona.',
  },
]

export default function TerapiaOcupacionalPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="w-full relative flex items-center justify-center" style={{ height: '580px' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(26,26,46,0.55) 0%, rgba(14,35,79,0.91) 60%, rgba(26,26,46,0.97) 100%)' }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 px-5 md:px-[120px] py-[60px] text-center w-full">
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/" className="text-white/40 text-xs hover:text-white/70">Inicio</Link>
            <ChevronRight size={11} className="text-white/30" />
            <Link href="/servicios" className="text-white/40 text-xs hover:text-white/70">Servicios</Link>
            <ChevronRight size={11} className="text-white/30" />
            <span className="text-[#4585FF] text-xs font-semibold">Terapia Ocupacional</span>
          </nav>

          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
            style={{ background: 'rgba(69,133,255,0.10)', border: '1px solid rgba(69,133,255,0.35)' }}
          >
            <Hand size={15} style={{ color: '#4585FF' }} />
            <span className="text-white text-[13px] font-semibold">Autonomía · Integración sensorial · Funcionalidad</span>
          </div>

          <h1
            className="text-[40px] md:text-[64px] font-extrabold text-white leading-[1.1] max-w-[860px]"
            style={{ letterSpacing: '-2px' }}
          >
            Terapia Ocupacional
          </h1>

          <p className="text-white/80 text-sm md:text-lg leading-[1.65] max-w-[660px]">
            Mejoramos la autonomía y la participación en las actividades diarias para que cada persona viva con mayor independencia y bienestar.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
            <Link
              href="/agendar"
              className="flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] font-bold text-white w-full md:w-auto"
              style={{ background: 'linear-gradient(90deg, #4585FF 0%, #8537D8 100%)' }}
            >
              Agendar sesión
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
              src="/images/serv-to-detail.jpg"
              alt="Terapia Ocupacional"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2.5 rounded-xl"
              style={{ background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.09)' }}
            >
              <ShieldCheck size={16} style={{ color: '#4585FF' }} />
              <span className="text-[#162845] text-[12px] font-semibold">Enfoque centrado en la persona</span>
            </div>
            <div
              className="absolute bottom-11 right-0 flex flex-col gap-0.5 px-5 py-3.5 rounded-xl"
              style={{ background: '#4585FF' }}
            >
              <span className="text-white text-[22px] font-extrabold">Niños</span>
              <span className="text-white text-[11px] font-semibold">y adultos</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 flex-1 min-w-0">
            <span className="px-4 py-1.5 self-start rounded-full text-[13px] font-semibold text-[#4585FF]" style={{ background: '#E5EDFF' }}>
              Sobre este servicio
            </span>
            <h2 className="text-[24px] md:text-[38px] font-extrabold text-[#162845] leading-[1.2]">
              Terapia Ocupacional
            </h2>
            <p className="text-[#737f80] text-sm md:text-[15px] leading-[1.75]">
              En CognyVita ofrecemos servicios de Terapia Ocupacional enfocados en favorecer la participación, autonomía y desempeño de la persona en sus diferentes contextos: hogar, colegio, trabajo y comunidad.
            </p>
            <p className="text-[#737f80] text-sm md:text-[15px] leading-[1.75]">
              La intervención parte de las necesidades y características individuales, fortaleciendo habilidades que permitan desenvolverse de manera más funcional y satisfactoria en las actividades de la vida cotidiana.
            </p>

            <div className="flex gap-4 md:gap-6 mt-2">
              <div className="flex flex-col items-start gap-1 rounded-2xl px-5 md:px-6 py-5 flex-1" style={{ background: '#E5EDFF' }}>
                <span className="text-[22px] font-extrabold" style={{ color: '#4585FF' }}>50 min</span>
                <span className="text-[#737f80] text-xs">por sesión</span>
              </div>
              <div className="flex flex-col items-start gap-1 rounded-2xl px-5 md:px-6 py-5 flex-1" style={{ background: '#EDE5FF' }}>
                <span className="text-[22px] font-extrabold" style={{ color: '#8537D8' }}>Presencial</span>
                <span className="text-[#737f80] text-xs">y online</span>
              </div>
              <div className="flex flex-col items-start gap-1 rounded-2xl px-5 md:px-6 py-5 flex-1" style={{ background: '#FFF0F9' }}>
                <span className="text-[22px] font-extrabold" style={{ color: '#F545B4' }}>2–65+</span>
                <span className="text-[#737f80] text-xs">años</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Áreas de atención ────────────────────────────────────────────── */}
      <section className="w-full px-5 md:px-[120px] py-[80px] flex flex-col items-center gap-12" style={{ background: '#E5EDFF' }}>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-[#4585FF] text-[11px] md:text-xs font-extrabold tracking-[3px] uppercase">Áreas de atención</span>
          <h2 className="text-[24px] md:text-[38px] font-extrabold text-[#162845]">Áreas de atención</h2>
          <p className="text-[#737f80] text-sm md:text-base leading-[1.6] max-w-[640px]">
            Fortalecemos las habilidades que permiten a cada persona participar plenamente en su vida cotidiana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          {[
            { icon: Activity, color: '#4585FF', bg: '#E5EDFF', label: 'Habilidades motoras y coordinación' },
            { icon: Hand, color: '#8537D8', bg: '#EDE5FF', label: 'Motricidad fina y grafomotricidad' },
            { icon: Puzzle, color: '#F545B4', bg: '#FFF0F9', label: 'Procesamiento e integración sensorial' },
            { icon: Brain, color: '#4585FF', bg: '#E5EDFF', label: 'Habilidades necesarias para el desempeño escolar' },
            { icon: Baby, color: '#8537D8', bg: '#EDE5FF', label: 'Actividades de la vida diaria y autonomía (vestirse, alimentarse, organizarse)' },
            { icon: Users, color: '#F545B4', bg: '#FFF0F9', label: 'Organización, planificación y desempeño ocupacional' },
            { icon: Puzzle, color: '#4585FF', bg: '#E5EDFF', label: 'Participación en los diferentes contextos de la vida cotidiana' },
          ].map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-sm"
                style={{ border: `1.5px solid ${s.color}20` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: s.bg }}
                >
                  <Icon size={18} style={{ color: s.color }} />
                </div>
                <span className="text-[#162845] text-sm font-semibold leading-snug pt-1">{s.label}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Proceso ──────────────────────────────────────────────────────── */}
      <section id="proceso" className="w-full bg-white px-5 md:px-[120px] py-[80px] flex flex-col gap-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2.5">
            <span className="text-[#4585FF] text-[11px] font-extrabold tracking-[3px] uppercase">El proceso terapéutico</span>
            <h2 className="text-[26px] md:text-[36px] font-extrabold text-[#162845] leading-[1.2]">
              Tu camino hacia<br />la autonomía y la funcionalidad
            </h2>
          </div>
          <p className="text-[#737f80] text-sm md:text-base leading-[1.5] md:text-right max-w-[260px]">
            Un proceso estructurado,<br className="hidden md:block" />funcional y significativo.
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
        style={{ minHeight: '340px', background: 'linear-gradient(135deg, #4585FF 0%, #8537D8 60%, #2D1040 100%)' }}
      >
        <div className="flex flex-col items-center gap-6 px-5 md:px-[120px] w-full max-w-[860px]">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-[20px]" style={{ background: 'rgba(255,255,255,0.125)' }}>
            <Quote size={16} className="text-white" />
            <span className="text-white text-sm italic font-medium">"La independencia se construye un paso a la vez."</span>
          </div>
          <h2 className="text-white text-[28px] md:text-[40px] font-extrabold leading-[1.2] max-w-[760px]">
            Empieza hoy tu proceso de Terapia Ocupacional
          </h2>
          <p className="text-white/80 text-sm md:text-[17px] max-w-[520px]">
            Agenda tu primera consulta y da el primer paso hacia una vida más autónoma y participativa.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-2">
            <Link
              href="/agendar"
              className="flex items-center justify-center gap-2 bg-white rounded-full px-9 py-4 text-[15px] font-bold w-full md:w-auto"
              style={{ color: '#4585FF' }}
            >
              Agendar mi primera sesión
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
