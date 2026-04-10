import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Search, Users, TrendingUp, Crown, HeartHandshake, CircleCheck, ChevronRight, MessageCircle, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Neuropsicología Organizacional — NeuroAfectiva',
  description: 'Optimizamos el rendimiento cognitivo, reducimos el burnout y fortalecemos la salud mental de los equipos para crear organizaciones más humanas y productivas.',
}

const kpis = [
  { value: '30%', label: 'reducción de burnout', color: '#32b8cc' },
  { value: '+200', label: 'colaboradores intervenidos', color: '#FFFFFF' },
  { value: '98%', label: 'satisfacción empresarial', color: '#fc66b5' },
  { value: '12', label: 'sectores empresariales', color: '#FFFFFF' },
]

const modules = [
  {
    icon: Search,
    gradient: 'linear-gradient(135deg, #713ec1 0%, #9b6dd6 100%)',
    rowBg: '#F8F4FF',
    tagBg: '#F0EAFB',
    tagColor: '#713ec1',
    tagText: 'Fase 1',
    title: 'Diagnóstico organizacional neuropsicológico',
    desc: 'Evaluamos el estado cognitivo y emocional del equipo: niveles de estrés, atención, memoria de trabajo y funciones ejecutivas colectivas.',
  },
  {
    icon: Users,
    gradient: 'linear-gradient(135deg, #32b8cc 0%, #1a9aad 100%)',
    rowBg: '#E8F9FD',
    tagBg: '#CCF1F7',
    tagColor: '#1a9aad',
    tagText: 'Fase 2',
    title: 'Talleres de neurohabilidades para equipos',
    desc: 'Programas vivenciales de regulación emocional, gestión del estrés, comunicación asertiva y liderazgo neurocientífico para equipos de trabajo.',
  },
  {
    icon: TrendingUp,
    gradient: 'linear-gradient(135deg, #fc66b5 0%, #e04fa0 100%)',
    rowBg: '#FFF0F9',
    tagBg: '#FFD6EC',
    tagColor: '#fc66b5',
    tagText: 'Fase 3',
    title: 'Acompañamiento individual a líderes',
    desc: 'Coaching neuropsicológico personalizado para directivos y líderes de equipo: gestión de la presión, toma de decisiones y bienestar ejecutivo.',
  },
]

const paraQuienCols = [
  {
    icon: Crown,
    iconGradient: 'linear-gradient(135deg, #713ec1 0%, #9b6dd6 100%)',
    shadow: '0 4px 20px rgba(50,184,204,0.082)',
    title: 'Líderes y directivos',
    subtitle: 'C-Level · Gerentes · Jefes de área',
    subtitleColor: '#713ec1',
    desc: 'Directores, gerentes y líderes que buscan gestionar mejor la presión, mejorar su toma de decisiones bajo estrés y fortalecer sus habilidades de liderazgo desde la neurociencia.',
    items: [
      { color: '#713ec1', text: 'Coaching neuropsicológico ejecutivo' },
      { color: '#713ec1', text: 'Manejo del estrés y burnout directivo' },
    ],
  },
  {
    icon: Users,
    iconGradient: 'linear-gradient(135deg, #32b8cc 0%, #1a9aad 100%)',
    shadow: '0 4px 20px rgba(50,184,204,0.082)',
    title: 'Equipos de trabajo',
    subtitle: 'Todos los niveles · Áreas · Proyectos',
    subtitleColor: '#1a9aad',
    desc: 'Equipos que necesitan mejorar su cohesión, comunicación y rendimiento colectivo a través de talleres de neurohabilidades y regulación emocional grupal.',
    items: [
      { color: '#32b8cc', text: 'Talleres grupales de neurohabilidades' },
      { color: '#32b8cc', text: 'Comunicación efectiva y trabajo en equipo' },
    ],
  },
  {
    icon: HeartHandshake,
    iconGradient: 'linear-gradient(135deg, #fc66b5 0%, #e04fa0 100%)',
    shadow: '0 4px 20px rgba(50,184,204,0.082)',
    title: 'Áreas de Talento Humano',
    subtitle: 'HR · Bienestar · Cultura organizacional',
    subtitleColor: '#fc66b5',
    desc: 'Departamentos de RRHH que buscan implementar programas de bienestar mental basados en evidencia, reducir la rotación y mejorar el clima organizacional.',
    items: [
      { color: '#fc66b5', text: 'Programas de bienestar corporativo' },
      { color: '#fc66b5', text: 'Reducción de ausentismo y rotación' },
    ],
  },
]

const steps = [
  {
    num: '01',
    gradient: 'linear-gradient(135deg, #713ec1 0%, #9b6dd6 100%)',
    title: 'Diagnóstico inicial',
    desc: 'Evaluamos el estado cognitivo y emocional de la organización mediante instrumentos neuropsicológicos validados.',
  },
  {
    num: '02',
    gradient: 'linear-gradient(135deg, #32b8cc 0%, #1a9aad 100%)',
    title: 'Plan personalizado',
    desc: 'Diseñamos un programa a medida según los hallazgos del diagnóstico, las metas de la empresa y el perfil del equipo.',
  },
  {
    num: '03',
    gradient: 'linear-gradient(135deg, #fc66b5 0%, #e04fa0 100%)',
    title: 'Intervención y talleres',
    desc: 'Implementamos los talleres, sesiones y acompañamientos definidos, con seguimiento continuo de indicadores de bienestar.',
  },
  {
    num: '04',
    gradient: 'linear-gradient(135deg, #2D2D3A 0%, #4a4a6a 100%)',
    title: 'Medición de impacto',
    desc: 'Entregamos un informe de resultados con métricas de bienestar, productividad y recomendaciones para la sostenibilidad del cambio.',
  },
]

export default function OrganizacionalPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="w-full flex" style={{ height: '580px' }}>
        {/* Left */}
        <div
          className="flex flex-col justify-center gap-7 px-16 md:px-[80px] py-[60px] w-full md:w-[660px] shrink-0"
          style={{ background: '#f8f4ff' }}
        >
          {/* Breadcrumb */}
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/" className="text-[#737f80] text-xs hover:text-[#713ec1]">Inicio</Link>
            <ChevronRight size={11} className="text-[#fc66b5]" />
            <Link href="/servicios" className="text-[#737f80] text-xs hover:text-[#713ec1]">Servicios</Link>
            <ChevronRight size={11} className="text-[#fc66b5]" />
            <span className="text-[#32b8cc] text-xs font-semibold">Neuropsicología Organizacional</span>
          </nav>

          {/* Badge */}
          <div data-animate className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full na-badge"
            style={{ background: 'rgba(255,255,255,0.125)', border: '1px solid rgba(50,184,204,0.3)' }}>
            <Building2 size={15} style={{ color: '#32b8cc' }} />
            <span className="text-[#32b8cc] text-[13px] font-semibold">Empresas · Líderes · Equipos de trabajo</span>
          </div>

          {/* Title */}
          <h1 data-animate data-delay="1" className="text-[40px] md:text-[52px] font-extrabold text-[#1a1a1a] leading-[1.1]" style={{ letterSpacing: '-1px' }}>
            Neuropsicología<br />Organizacional
          </h1>

          <p data-animate data-delay="2" className="text-[#737f80] text-sm md:text-base leading-[1.7] max-w-[520px]">
            Optimizamos el rendimiento cognitivo, reducimos el burnout y fortalecemos la salud mental de los equipos para crear organizaciones más humanas y productivas.
          </p>

          {/* Buttons */}
          <div data-animate data-delay="3" className="flex items-center gap-3.5">
            <Link
              href="/agendar"
              className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-bold text-white"
              style={{ background: '#7b41c0' }}
            >
              Solicitar diagnóstico
            </Link>
            <Link
              href="#que-es"
              className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold"
              style={{ color: '#f665b6', background: 'rgba(255,255,255,0.145)', border: '1.5px solid #fa65b5' }}
            >
              Ver más →
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div data-animate="right" className="hidden md:block flex-1 overflow-hidden na-img-zoom">
          <img
            src="https://images.unsplash.com/photo-1758873268394-443e1ac80032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
            alt="Neuropsicología Organizacional"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── KPI Bar ──────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#1A1A2E] flex items-center justify-center px-5 md:px-[120px]" style={{ height: '140px' }}>
        <div className="flex w-full">
          {kpis.map((k, i) => (
            <div key={k.label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1 flex-1 py-6 px-4 md:px-10">
                <span className="text-[28px] md:text-[36px] font-extrabold" style={{ color: k.color }}>{k.value}</span>
                <span className="text-white/50 text-[11px] md:text-xs text-center">{k.label}</span>
              </div>
              {i < kpis.length - 1 && <div className="w-px h-[50px] bg-white/15" />}
            </div>
          ))}
        </div>
      </section>

      {/* ── Qué es ───────────────────────────────────────────────────────── */}
      <section id="que-es" className="w-full bg-white px-5 md:px-[120px] py-[80px] flex flex-col gap-14">
        {/* Header */}
        <div data-animate="scale" className="flex flex-col items-center gap-4 text-center">
          <span className="px-4 py-1.5 rounded-full text-[13px] font-semibold text-[#1a9aad]" style={{ background: '#E8F9FD' }}>
            El programa
          </span>
          <h2 className="text-[24px] md:text-[38px] font-extrabold text-[#2D2D3A] leading-[1.2] max-w-[800px]">
            ¿Qué es la Neuropsicología Organizacional?
          </h2>
          <p className="text-[#737f80] text-sm md:text-base leading-[1.7] max-w-[820px]">
            Un programa de diagnóstico, intervención y acompañamiento que aplica principios de neurociencia al entorno laboral para optimizar el desempeño humano, prevenir el deterioro cognitivo por estrés y construir culturas organizacionales más saludables y sostenibles.
          </p>
        </div>

        {/* Modules */}
        <div className="flex flex-col gap-4">
          {modules.map((m, i) => {
            const Icon = m.icon
            return (
              <div
                key={m.title}
                data-animate
                data-delay={String(i + 1)}
                className="na-card flex items-center rounded-2xl overflow-hidden"
                style={{ background: m.rowBg, height: '120px' }}
              >
                {/* Icon strip */}
                <div
                  className="w-[100px] md:w-[120px] h-full flex items-center justify-center shrink-0"
                  style={{ background: m.gradient, borderRadius: '16px 0 0 16px' }}
                >
                  <Icon size={36} className="text-white" />
                </div>
                {/* Content */}
                <div className="flex flex-col gap-1.5 flex-1 px-6 md:px-8 py-4">
                  <h3 className="text-[#2D2D3A] text-base md:text-[19px] font-bold">{m.title}</h3>
                  <p className="text-[#737f80] text-[13px] md:text-sm leading-[1.6] line-clamp-2">{m.desc}</p>
                </div>
                {/* Tag */}
                <div className="hidden md:flex items-center justify-center w-[140px] h-full shrink-0 px-5">
                  <span
                    className="px-3 py-1 rounded-[10px] text-xs font-bold"
                    style={{ background: m.tagBg, color: m.tagColor }}
                  >
                    {m.tagText}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Para quién ───────────────────────────────────────────────────── */}
      <section className="w-full px-5 md:px-[120px] py-[80px] flex flex-col items-center gap-12" style={{ background: '#E8F9FD' }}>
        <div data-animate="scale" className="flex flex-col items-center gap-2.5 text-center">
          <span className="text-[#1a9aad] text-[11px] md:text-xs font-extrabold tracking-[3px] uppercase">¿Para quién?</span>
          <h2 className="text-[24px] md:text-[38px] font-extrabold text-[#2D2D3A]">Diseñado para cada nivel de la organización</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          {paraQuienCols.map((col, i) => {
            const Icon = col.icon
            return (
              <div
                key={col.title}
                data-animate
                data-delay={String(i + 1)}
                className="na-card flex flex-col gap-5 rounded-[20px] bg-white p-8 flex-1"
                style={{ boxShadow: col.shadow }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: col.iconGradient }}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[#2D2D3A] text-[18px] font-bold">{col.title}</span>
                    <span className="text-[12px] font-semibold" style={{ color: col.subtitleColor }}>{col.subtitle}</span>
                  </div>
                </div>
                <p className="text-[#737f80] text-sm leading-[1.6]">{col.desc}</p>
                <div className="flex flex-col gap-2">
                  {col.items.map((item) => (
                    <div key={item.text} className="flex items-center gap-2.5">
                      <CircleCheck size={16} style={{ color: item.color }} className="shrink-0" />
                      <span className="text-[#2D2D3A] text-[13px]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Proceso ──────────────────────────────────────────────────────── */}
      <section className="w-full bg-white px-5 md:px-[120px] py-[80px] flex flex-col gap-14">
        {/* Header */}
        <div data-animate className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[#713ec1] text-[11px] font-extrabold tracking-[3px] uppercase">Cómo trabajamos</span>
            <h2 className="text-[26px] md:text-[36px] font-extrabold text-[#2D2D3A] leading-[1.2]">
              Nuestro proceso<br />con tu organización
            </h2>
          </div>
          <p className="text-[#737f80] text-sm md:text-[17px] leading-[1.5] md:text-right max-w-[280px]">
            Cuatro etapas claras,<br className="hidden md:block" />resultados medibles.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row gap-0 w-full">
          {steps.map((step, i) => (
            <div key={step.num} data-animate data-delay={String(i + 1)} className="flex md:flex-row items-start flex-1">
              <div className="flex flex-col gap-4 flex-1 pr-0 md:pr-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: step.gradient }}
                >
                  <span className="text-white text-base font-extrabold">{step.num}</span>
                </div>
                <h3 className="text-[#2D2D3A] text-[18px] font-bold">{step.title}</h3>
                <p className="text-[#737f80] text-sm leading-[1.6]">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center h-12 w-10 shrink-0 justify-center">
                  <ChevronRight size={24} style={{ color: 'rgba(113,62,193,0.25)' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#1A1A2E] flex flex-col md:flex-row items-stretch" style={{ minHeight: '320px' }}>
        {/* Left */}
        <div className="flex flex-col justify-center gap-5 px-5 md:px-[80px] py-[60px] flex-1">
          <span data-animate className="text-[#32b8cc] text-[11px] font-extrabold tracking-[2px] uppercase">
            ¿Listo para transformar tu organización?
          </span>
          <h2 data-animate data-delay="1" className="text-white text-[26px] md:text-[36px] font-extrabold leading-[1.2] max-w-[600px]">
            Construyamos juntos<br />un equipo más sano y productivo
          </h2>
          <p data-animate data-delay="2" className="text-white/50 text-sm md:text-base leading-[1.6] max-w-[560px]">
            Agenda una sesión informativa sin costo y descubre cómo la neurociencia puede transformar tu empresa.
          </p>
          <div data-animate data-delay="3" className="flex flex-col md:flex-row items-start gap-4 mt-2">
            <Link
              href="/agendar"
              className="inline-flex items-center px-8 py-3.5 rounded-full text-[15px] font-bold text-white"
              style={{ background: 'linear-gradient(90deg, #fc66b5 0%, #713ec1 100%)' }}
            >
              Solicitar diagnóstico gratuito
            </Link>
            <a
              href="https://wa.me/573193517239"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold text-white"
              style={{ background: 'rgba(255,255,255,0.063)', border: '1.5px solid rgba(255,255,255,0.25)' }}
            >
              <MessageCircle size={17} className="text-white" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right features */}
        <div
          className="hidden md:flex flex-col justify-center gap-4 p-10 w-[400px] shrink-0"
          style={{ background: 'rgba(255,255,255,0.031)' }}
        >
          <div className="flex items-center gap-4 rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.051)' }}>
            <Building2 size={24} style={{ color: '#32b8cc' }} />
            <span className="text-white text-sm font-medium">Empresas de todos los tamaños</span>
          </div>
          <div className="flex items-center gap-4 rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.051)' }}>
            <ShieldCheck size={24} style={{ color: '#fc66b5' }} />
            <span className="text-white text-sm font-medium">Metodología con evidencia científica</span>
          </div>
        </div>
      </section>

    </>
  )
}
