import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Mic, Volume2, BookOpen, Baby, Brain, Users, MessageCircle, ChevronRight, Quote,
  ShieldCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fonoaudiología — CognyVita',
  description: 'Prevención, evaluación e intervención de dificultades en comunicación, lenguaje, habla, voz, audición y funciones orofaciales en niños, adolescentes y adultos.',
}

const processSteps = [
  {
    num: '01',
    gradient: 'linear-gradient(135deg, #8537D8 0%, #9045D8 100%)',
    lineColor: 'rgba(133,55,216,0.125)',
    title: 'Evaluación fonoaudiológica integral',
    desc: 'Realizamos una evaluación completa del lenguaje, habla, voz y comunicación para identificar las áreas de dificultad y establecer un diagnóstico preciso.',
  },
  {
    num: '02',
    gradient: 'linear-gradient(135deg, #F545B4 0%, #DC3AA8 100%)',
    lineColor: 'rgba(245,69,180,0.125)',
    title: 'Plan de intervención personalizado',
    desc: 'Diseñamos un plan terapéutico adaptado a la edad, perfil y objetivos de cada persona, con metas claras y actividades funcionales.',
  },
  {
    num: '03',
    gradient: 'linear-gradient(135deg, #4585FF 0%, #3A75E8 100%)',
    lineColor: 'rgba(69,133,255,0.125)',
    title: 'Intervención y seguimiento',
    desc: 'Sesiones regulares con técnicas basadas en evidencia. Involucramos a la familia para reforzar los aprendizajes en el entorno cotidiano.',
  },
  {
    num: '04',
    gradient: 'linear-gradient(135deg, #8537D8 0%, #F545B4 100%)',
    lineColor: null,
    title: 'Evolución y alta terapéutica',
    desc: 'Monitoreamos el progreso de forma continua. Al alcanzar los objetivos, realizamos el cierre del proceso y entregamos orientaciones de mantenimiento.',
  },
]

export default function FonoaudiologiaPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="w-full relative flex items-center justify-center" style={{ height: '580px' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffbb3e950c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(26,26,46,0.55) 0%, rgba(22,40,69,0.91) 60%, rgba(26,26,46,0.97) 100%)' }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 px-5 md:px-[120px] py-[60px] text-center w-full">
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/" className="text-white/40 text-xs hover:text-white/70">Inicio</Link>
            <ChevronRight size={11} className="text-white/30" />
            <Link href="/servicios" className="text-white/40 text-xs hover:text-white/70">Servicios</Link>
            <ChevronRight size={11} className="text-white/30" />
            <span className="text-[#8537D8] text-xs font-semibold">Fonoaudiología</span>
          </nav>

          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
            style={{ background: 'rgba(133,55,216,0.10)', border: '1px solid rgba(133,55,216,0.35)' }}
          >
            <Mic size={15} style={{ color: '#8537D8' }} />
            <span className="text-white text-[13px] font-semibold">Lenguaje · Habla · Voz · Comunicación</span>
          </div>

          <h1
            className="text-[40px] md:text-[64px] font-extrabold text-white leading-[1.1] max-w-[860px]"
            style={{ letterSpacing: '-2px' }}
          >
            Fonoaudiología
          </h1>

          <p className="text-white/80 text-sm md:text-lg leading-[1.65] max-w-[660px]">
            Evaluación e intervención especializada en lenguaje, habla, voz y comunicación para que cada persona encuentre su propia voz.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
            <Link
              href="/agendar"
              className="flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] font-bold text-white w-full md:w-auto"
              style={{ background: 'linear-gradient(90deg, #8537D8 0%, #F545B4 100%)' }}
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
              src="/images/serv-fono-detail.jpg"
              alt="Fonoaudiología"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2.5 rounded-xl"
              style={{ background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.09)' }}
            >
              <ShieldCheck size={16} style={{ color: '#8537D8' }} />
              <span className="text-[#162845] text-[12px] font-semibold">Intervención basada en evidencia</span>
            </div>
            <div
              className="absolute bottom-11 right-0 flex flex-col gap-0.5 px-5 py-3.5 rounded-xl"
              style={{ background: '#8537D8' }}
            >
              <span className="text-white text-[22px] font-extrabold">Niños</span>
              <span className="text-white text-[11px] font-semibold">y adultos</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 flex-1 min-w-0">
            <span className="px-4 py-1.5 self-start rounded-full text-[13px] font-semibold text-[#8537D8]" style={{ background: '#EDE5FF' }}>
              Sobre este servicio
            </span>
            <h2 className="text-[24px] md:text-[38px] font-extrabold text-[#162845] leading-[1.2]">
              Fonoaudiología
            </h2>
            <p className="text-[#737f80] text-sm md:text-[15px] leading-[1.75]">
              En CognyVita ofrecemos servicios de Fonoaudiología orientados a la prevención, evaluación e intervención de dificultades relacionadas con la comunicación, el lenguaje, el habla, la voz, la audición y las funciones orofaciales.
            </p>
            <p className="text-[#737f80] text-sm md:text-[15px] leading-[1.75]">
              Nuestro acompañamiento busca favorecer el desarrollo de habilidades comunicativas y funcionales en niños, adolescentes y adultos, de acuerdo con las necesidades particulares de cada persona.
            </p>
            <p className="text-[#737f80] text-sm md:text-[15px] leading-[1.75]">
              La intervención en fonoaudiología puede realizarse de manera independiente o integrarse con otras áreas profesionales cuando se requiere un abordaje más amplio.
            </p>

            <div className="flex gap-4 md:gap-6 mt-2">
              <div className="flex flex-col items-start gap-1 rounded-2xl px-5 md:px-6 py-5 flex-1" style={{ background: '#EDE5FF' }}>
                <span className="text-[22px] font-extrabold" style={{ color: '#8537D8' }}>50 min</span>
                <span className="text-[#737f80] text-xs">por sesión</span>
              </div>
              <div className="flex flex-col items-start gap-1 rounded-2xl px-5 md:px-6 py-5 flex-1" style={{ background: '#FFF0F9' }}>
                <span className="text-[22px] font-extrabold" style={{ color: '#F545B4' }}>Online</span>
                <span className="text-[#737f80] text-xs">y presencial</span>
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
      <section className="w-full px-5 md:px-[120px] py-[80px] flex flex-col items-center gap-12" style={{ background: '#EDE5FF' }}>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-[#8537D8] text-[11px] md:text-xs font-extrabold tracking-[3px] uppercase">Áreas de atención</span>
          <h2 className="text-[24px] md:text-[38px] font-extrabold text-[#162845]">Áreas de atención</h2>
          <p className="text-[#737f80] text-sm md:text-base leading-[1.6] max-w-[640px]">
            Abordamos las principales dimensiones de la comunicación humana con un enfoque integral y centrado en la persona.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          {[
            { icon: BookOpen, color: '#8537D8', bg: '#EDE5FF', label: 'Desarrollo y dificultades del lenguaje' },
            { icon: Mic, color: '#F545B4', bg: '#FFF0F9', label: 'Habla y articulación' },
            { icon: Users, color: '#4585FF', bg: '#E5EDFF', label: 'Comunicación y habilidades comunicativas' },
            { icon: Volume2, color: '#8537D8', bg: '#EDE5FF', label: 'Voz' },
            { icon: Brain, color: '#F545B4', bg: '#FFF0F9', label: 'Audición' },
            { icon: Baby, color: '#4585FF', bg: '#E5EDFF', label: 'Funciones orofaciales' },
            { icon: BookOpen, color: '#8537D8', bg: '#EDE5FF', label: 'Acompañamiento en dificultades que pueden impactar el aprendizaje y la comunicación' },
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
            <span className="text-[#8537D8] text-[11px] font-extrabold tracking-[3px] uppercase">El proceso terapéutico</span>
            <h2 className="text-[26px] md:text-[36px] font-extrabold text-[#162845] leading-[1.2]">
              Tu camino hacia<br />la comunicación plena
            </h2>
          </div>
          <p className="text-[#737f80] text-sm md:text-base leading-[1.5] md:text-right max-w-[260px]">
            Un proceso claro, especializado<br className="hidden md:block" />y a tu propio ritmo.
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
        style={{ minHeight: '340px', background: 'linear-gradient(135deg, #8537D8 0%, #9040DC 60%, #F545B4 100%)' }}
      >
        <div className="flex flex-col items-center gap-6 px-5 md:px-[120px] w-full max-w-[860px]">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-[20px]" style={{ background: 'rgba(255,255,255,0.125)' }}>
            <Quote size={16} className="text-white" />
            <span className="text-white text-sm italic font-medium">"La comunicación es el puente entre las personas."</span>
          </div>
          <h2 className="text-white text-[28px] md:text-[40px] font-extrabold leading-[1.2] max-w-[760px]">
            Empieza hoy tu proceso fonoaudiológico
          </h2>
          <p className="text-white/80 text-sm md:text-[17px] max-w-[520px]">
            Agenda tu primera consulta y da el primer paso hacia una comunicación más plena.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-2">
            <Link
              href="/agendar"
              className="flex items-center justify-center gap-2 bg-white rounded-full px-9 py-4 text-[15px] font-bold w-full md:w-auto"
              style={{ color: '#8537D8' }}
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
