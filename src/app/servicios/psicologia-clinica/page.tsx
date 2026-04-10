import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Heart, ShieldCheck, CloudRain, Cloud, Flame, Users, Leaf,
  Scissors, Moon, Zap, Shield, MessageCircle, ChevronRight, Quote,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Línea de Psicología Clínica — NeuroAfectiva',
  description: 'Acompañamiento psicológico individual, de pareja y familiar para sanar, crecer y recuperar el bienestar emocional que mereces.',
}

const specialties = [
  { icon: CloudRain, color: '#fc66b5', borderColor: '#fc66b530', label: 'Ansiedad y estrés' },
  { icon: Cloud, color: '#713ec1', borderColor: '#713ec130', label: 'Depresión' },
  { icon: Heart, color: '#32b8cc', borderColor: '#32b8cc30', label: 'Terapia de pareja' },
  { icon: Flame, color: '#fc66b5', borderColor: '#fc66b530', label: 'Trauma y PTSD' },
  { icon: Users, color: '#713ec1', borderColor: '#713ec130', label: 'Terapia familiar' },
  { icon: Leaf, color: '#32b8cc', borderColor: '#32b8cc30', label: 'Duelo y pérdida' },
  { icon: Scissors, color: '#fc66b5', borderColor: '#fc66b530', label: 'Trastornos alimentarios' },
  { icon: Moon, color: '#713ec1', borderColor: '#713ec130', label: 'Trastornos del sueño' },
  { icon: Zap, color: '#32b8cc', borderColor: '#32b8cc30', label: 'Crisis vitales y cambios' },
  { icon: Shield, color: '#fc66b5', borderColor: '#fc66b530', label: 'Baja autoestima' },
]

const processSteps = [
  {
    num: '01',
    gradient: 'linear-gradient(135deg, #fc66b5 0%, #e04fa0 100%)',
    lineColor: 'rgba(252,102,181,0.125)',
    title: 'Primera consulta — Evaluación inicial',
    desc: 'Conocemos tu historia, tus preocupaciones y lo que esperas del proceso. Definimos conjuntamente los objetivos terapéuticos y el enfoque más adecuado para ti.',
  },
  {
    num: '02',
    gradient: 'linear-gradient(135deg, #713ec1 0%, #9b6dd6 100%)',
    lineColor: 'rgba(113,62,193,0.125)',
    title: 'Plan terapéutico personalizado',
    desc: 'Diseñamos un plan de trabajo adaptado a tu perfil, ritmo y necesidades. Establecemos frecuencia de sesiones, técnicas a utilizar y metas concretas y medibles.',
  },
  {
    num: '03',
    gradient: 'linear-gradient(135deg, #32b8cc 0%, #1a9aad 100%)',
    lineColor: 'rgba(50,184,204,0.125)',
    title: 'Proceso de intervención',
    desc: 'Sesiones regulares de acompañamiento donde trabajamos activamente tus objetivos mediante técnicas terapéuticas validadas, ejercicios prácticos y reflexión guiada.',
  },
  {
    num: '04',
    gradient: 'linear-gradient(135deg, #fc66b5 0%, #713ec1 100%)',
    lineColor: null,
    title: 'Cierre y seguimiento',
    desc: 'Al alcanzar tus metas, cerramos el proceso de forma consciente y planeamos el seguimiento para consolidar los cambios logrados a largo plazo.',
  },
]

export default function PsicologiaClinicalPage() {
  return (
    <>
      {/* ── Hero (full-bleed dark image) ─────────────────────────────────── */}
      <section className="w-full relative flex items-center justify-center" style={{ height: '580px' }}>
        {/* BG image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1733360485753-0b11ba7a3d91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(26,26,46,0.6) 0%, rgba(45,16,64,0.902) 60%, rgba(26,26,46,0.961) 100%)' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 px-5 md:px-[120px] py-[60px] text-center w-full">
          {/* Breadcrumb */}
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/" className="text-white/43 text-xs hover:text-white/70">Inicio</Link>
            <ChevronRight size={11} className="text-white/31" />
            <Link href="/servicios" className="text-white/43 text-xs hover:text-white/70">Servicios</Link>
            <ChevronRight size={11} className="text-white/31" />
            <span className="text-[#fc66b5] text-xs font-semibold">Psicología Clínica</span>
          </nav>

          {/* Badge */}
          <div
            data-animate
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full na-badge"
            style={{ background: 'rgba(252,102,181,0.082)', border: '1px solid rgba(252,102,181,0.314)' }}
          >
            <Heart size={15} style={{ color: '#fc66b5' }} />
            <span className="text-white text-[13px] font-semibold">Psicología clínica · Individual · Pareja · Familia</span>
          </div>

          {/* Title */}
          <h1
            data-animate data-delay="1"
            className="text-[40px] md:text-[64px] font-extrabold text-white leading-[1.1] max-w-[860px]"
            style={{ letterSpacing: '-2px' }}
          >
            Línea de<br />Psicología Clínica
          </h1>

          <p data-animate data-delay="2" className="text-white/80 text-sm md:text-lg leading-[1.65] max-w-[660px]">
            Acompañamiento psicológico individual, de pareja y familiar para sanar, crecer y recuperar el bienestar emocional que mereces.
          </p>

          {/* Buttons */}
          <div data-animate data-delay="3" className="flex flex-col md:flex-row items-center gap-4 mt-2">
            <Link
              href="/agendar"
              className="flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] font-bold text-white w-full md:w-auto"
              style={{ background: 'linear-gradient(90deg, #fc66b5 0%, #713ec1 100%)' }}
            >
              Agendar sesión
            </Link>
            <Link
              href="#proceso"
              className="flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] font-medium text-white w-full md:w-auto"
              style={{ background: 'rgba(255,255,255,0.125)', border: '1.5px solid rgba(255,255,255,0.314)' }}
            >
              ¿Cómo funciona?
            </Link>
          </div>
        </div>
      </section>

      {/* ── Qué es ───────────────────────────────────────────────────────── */}
      <section className="w-full bg-white px-5 md:px-[120px] py-[80px]">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20 w-full">
          {/* Image */}
          <div data-animate="left" className="relative w-full md:w-[520px] h-[360px] md:h-[520px] shrink-0 rounded-[24px] overflow-hidden na-img-zoom">
            <img
              src="https://images.unsplash.com/photo-1758691462743-f9fc9e430d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
              alt="Psicología Clínica"
              className="w-full h-full object-cover"
            />
            {/* Badge overlay */}
            <div
              className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2.5 rounded-xl"
              style={{ background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.094)' }}
            >
              <ShieldCheck size={16} style={{ color: '#fc66b5' }} />
              <span className="text-[#2D2D3A] text-[12px] font-semibold">Espacio seguro y confidencial</span>
            </div>
            {/* Stat overlay */}
            <div
              className="absolute bottom-11 right-0 flex flex-col gap-0.5 px-5 py-3.5 rounded-xl"
              style={{ background: '#fc66b5' }}
            >
              <span className="text-white text-[22px] font-extrabold">+500</span>
              <span className="text-white text-[11px] font-semibold">pacientes</span>
            </div>
          </div>

          {/* Content */}
          <div data-animate="right" className="flex flex-col gap-6 flex-1 min-w-0">
            <span className="px-4 py-1.5 self-start rounded-full text-[13px] font-semibold text-[#fc66b5]" style={{ background: '#FFF0F9' }}>
              Sobre este servicio
            </span>
            <h2 className="text-[24px] md:text-[38px] font-extrabold text-[#2D2D3A] leading-[1.2]">
              ¿Qué es la Línea<br className="hidden md:block" />de Psicología Clínica?
            </h2>
            <p className="text-[#737f80] text-sm md:text-[15px] leading-[1.75]">
              Nuestra línea de Psicología Clínica ofrece un espacio terapéutico seguro, empático y profesional para abordar las dificultades emocionales, conductuales y relacionales que afectan la calidad de vida.
            </p>
            <p className="text-[#737f80] text-sm md:text-[15px] leading-[1.75]">
              Trabajamos con un enfoque integrador que combina herramientas cognitivo-conductuales, sistémicas y basadas en evidencia, adaptadas siempre al ritmo y necesidades únicas de cada persona, pareja o familia.
            </p>

            {/* Stats */}
            <div className="flex gap-4 md:gap-6 mt-2">
              <div className="flex flex-col items-start gap-1 rounded-2xl px-5 md:px-6 py-5 flex-1" style={{ background: '#FFF0F9' }}>
                <span className="text-[22px] font-extrabold" style={{ color: '#fc66b5' }}>50 min</span>
                <span className="text-[#737f80] text-xs">por sesión</span>
              </div>
              <div className="flex flex-col items-start gap-1 rounded-2xl px-5 md:px-6 py-5 flex-1" style={{ background: '#F0EAFB' }}>
                <span className="text-[22px] font-extrabold" style={{ color: '#713ec1' }}>Online</span>
                <span className="text-[#737f80] text-xs">y presencial</span>
              </div>
              <div className="flex flex-col items-start gap-1 rounded-2xl px-5 md:px-6 py-5 flex-1" style={{ background: '#E8F9FD' }}>
                <span className="text-[22px] font-extrabold" style={{ color: '#32b8cc' }}>13+</span>
                <span className="text-[#737f80] text-xs">años en adelante</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Especialidades ───────────────────────────────────────────────── */}
      <section className="w-full px-5 md:px-[120px] py-[80px] flex flex-col items-center gap-12" style={{ background: '#FFF0F9' }}>
        <div data-animate="scale" className="flex flex-col items-center gap-3 text-center">
          <span className="text-[#fc66b5] text-[11px] md:text-xs font-extrabold tracking-[3px] uppercase">Áreas de atención</span>
          <h2 className="text-[24px] md:text-[38px] font-extrabold text-[#2D2D3A]">Condiciones que tratamos</h2>
          <p className="text-[#737f80] text-sm md:text-base leading-[1.6] max-w-[640px]">
            Abordamos un amplio espectro de condiciones emocionales, conductuales y relacionales con evidencia clínica.
          </p>
        </div>

        <div data-animate data-delay="1" className="flex flex-col gap-3 w-full">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-3">
            {specialties.slice(0, 5).map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.label}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white"
                  style={{
                    border: `1.5px solid ${s.borderColor}`,
                    boxShadow: `0 2px 8px ${s.color}10`,
                  }}
                >
                  <Icon size={18} style={{ color: s.color }} />
                  <span className="text-[#2D2D3A] text-sm font-semibold">{s.label}</span>
                </div>
              )
            })}
          </div>
          {/* Row 2 */}
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
                  <span className="text-[#2D2D3A] text-sm font-semibold">{s.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Proceso ──────────────────────────────────────────────────────── */}
      <section id="proceso" className="w-full bg-white px-5 md:px-[120px] py-[80px] flex flex-col gap-14">
        {/* Header */}
        <div data-animate className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2.5">
            <span className="text-[#fc66b5] text-[11px] font-extrabold tracking-[3px] uppercase">El proceso terapéutico</span>
            <h2 className="text-[26px] md:text-[36px] font-extrabold text-[#2D2D3A] leading-[1.2]">
              Tu camino hacia<br />el bienestar emocional
            </h2>
          </div>
          <p className="text-[#737f80] text-sm md:text-base leading-[1.5] md:text-right max-w-[260px]">
            Un proceso claro, humano<br className="hidden md:block" />y a tu propio ritmo.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-0">
          {processSteps.map((step, i) => (
            <div key={step.num} data-animate data-delay={String(i + 1)} className="flex gap-0 w-full">
              {/* Left column: dot + line */}
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
              {/* Content */}
              <div className={`flex flex-col gap-2 flex-1 pl-8 ${i < processSteps.length - 1 ? 'pb-12' : ''}`} style={{ paddingTop: '4px' }}>
                <h3 className="text-[#2D2D3A] text-lg md:text-[20px] font-bold">{step.title}</h3>
                <p className="text-[#737f80] text-sm leading-[1.65]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="w-full relative flex items-center justify-center py-[80px] md:py-0 text-center"
        style={{ minHeight: '340px', background: 'linear-gradient(135deg, #fc66b5 0%, #713ec1 60%, #2D1040 100%)' }}
      >
        <div className="flex flex-col items-center gap-6 px-5 md:px-[120px] w-full max-w-[860px]">
          {/* Quote pill */}
          <div data-animate className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-[20px]" style={{ background: 'rgba(255,255,255,0.125)' }}>
            <Quote size={16} className="text-white" />
            <span className="text-white text-sm italic font-medium">"El primer paso es el más valiente."</span>
          </div>
          <h2 data-animate data-delay="1" className="text-white text-[28px] md:text-[40px] font-extrabold leading-[1.2] max-w-[760px]">
            Empieza hoy tu proceso terapéutico
          </h2>
          <p data-animate data-delay="2" className="text-white/80 text-sm md:text-[17px] max-w-[520px]">
            Sin listas de espera largas. Primera consulta disponible esta semana.
          </p>
          <div data-animate data-delay="3" className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-2">
            <Link
              href="/agendar"
              className="flex items-center justify-center gap-2 bg-white rounded-full px-9 py-4 text-[15px] font-bold w-full md:w-auto"
              style={{ color: '#fc66b5' }}
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
