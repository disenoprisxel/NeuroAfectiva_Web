import type { Metadata } from 'next'
import Link from 'next/link'
import { Brain, Frown, Flame, Leaf, MessageCircle, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Neurosalud Cognitiva y Emocional — NeuroAfectiva',
  description: 'Evaluación e intervención neuropsicológica para optimizar tus funciones cognitivas y fortalecer tu bienestar emocional. Bogotá, virtual y presencial.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const audienceCards = [
  {
    icon: Frown,
    gradient: 'linear-gradient(135deg, #713ec1 0%, #9b6dd6 100%)',
    title: 'Ansiedad y depresión',
    desc: 'Adultos y adolescentes que experimentan ansiedad, depresión o episodios de estrés crónico que interfieren con su vida diaria.',
  },
  {
    icon: Brain,
    gradient: 'linear-gradient(135deg, #32b8cc 0%, #1a9aad 100%)',
    title: 'Dificultades cognitivas',
    desc: 'Personas con problemas de atención, memoria o funciones ejecutivas que afectan su desempeño académico, profesional o cotidiano.',
  },
  {
    icon: Flame,
    gradient: 'linear-gradient(135deg, #fc66b5 0%, #ff99d0 100%)',
    title: 'Trauma y agotamiento mental',
    desc: 'Quienes han sufrido situaciones de trauma emocional, burnout o agotamiento mental y necesitan un proceso de recuperación neurológica.',
  },
  {
    icon: Leaf,
    gradient: 'linear-gradient(135deg, #5fbe8f 0%, #32b8cc 100%)',
    title: 'Bienestar preventivo',
    desc: 'Personas que buscan optimizar proactivamente su rendimiento cognitivo y bienestar emocional antes de que aparezcan síntomas.',
  },
]

const benefitRows = [
  {
    num: '01',
    numGradient: 'linear-gradient(180deg, #713ec1 0%, #9b6dd6 100%)',
    title: 'Regulación emocional efectiva',
    desc: 'Aprende a gestionar tus emociones con estrategias neuropsicológicas que reducen la ansiedad, la impulsividad y el estrés de forma sostenida y medible.',
    tag: 'Ansiedad · Impulsividad · Estrés',
    tagColor: '#713ec1',
    tagBg: '#F0EAFB',
    rowBg: '#F8F4FF',
    imgUrl: 'https://images.unsplash.com/photo-1709124290787-5bffd50ee24f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    imgRight: true,
    cornerRadius: 'rounded-t-[20px]',
  },
  {
    num: '02',
    numGradient: 'linear-gradient(180deg, #32b8cc 0%, #1a9aad 100%)',
    title: 'Mayor atención y memoria',
    desc: 'Recupera y potencia tu capacidad de concentración y memoria a largo plazo mediante ejercicios de neuroplasticidad diseñados para tu perfil cognitivo.',
    tag: 'Atención · Memoria · Concentración',
    tagColor: '#32b8cc',
    tagBg: '#E8F9FD',
    rowBg: '#F0EAFB',
    imgUrl: 'https://images.unsplash.com/photo-1770233621425-5d9ee7a0a700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    imgRight: false,
    cornerRadius: '',
  },
  {
    num: '03',
    numGradient: 'linear-gradient(180deg, #fc66b5 0%, #e04fa0 100%)',
    title: 'Bienestar mental integral',
    desc: 'Alcanza un estado de bienestar neurológico y emocional duradero que impacta positivamente en tu vida personal, laboral y social.',
    tag: 'Calidad de vida · Relaciones · Trabajo',
    tagColor: '#fc66b5',
    tagBg: '#FFF0F9',
    rowBg: '#F8F4FF',
    imgUrl: 'https://images.unsplash.com/photo-1758874384683-0accd9fb26ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    imgRight: true,
    cornerRadius: 'rounded-b-[20px]',
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function NeurosaudPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="w-full bg-white px-5 md:px-[120px] pt-[60px] pb-0 flex flex-col items-center gap-7">
        {/* Badge */}
        <div
          data-animate
          className="na-badge flex items-center gap-2 px-5 py-2 rounded-full"
          style={{ background: 'rgba(113,62,193,0.06)' }}
        >
          <Brain size={15} style={{ color: '#32b8cc' }} />
          <span className="text-[#fc66b5] text-[12px] md:text-[13px] font-semibold">
            Neuropsicología Clínica · Adultos y adolescentes
          </span>
        </div>

        {/* Title */}
        <h1
          data-animate data-delay="1"
          className="text-[32px] md:text-[68px] font-bold text-[#1a1a1a] text-center leading-[1.1]"
          style={{ letterSpacing: '-1px' }}
        >
          Neurosalud<br />Cognitiva y Emocional
        </h1>

        {/* Subtitle */}
        <p data-animate data-delay="2" className="text-[#1a1a1a] text-sm md:text-lg text-center leading-[1.65] max-w-[680px]">
          Evaluación e intervención neuropsicológica para optimizar tus funciones cognitivas y fortalecer tu bienestar emocional.
        </p>

        {/* CTA */}
        <div data-animate data-delay="3">
          <Link
            href="/agendar"
            className="na-btn na-btn-gradient inline-flex items-center px-9 py-4 rounded-full text-[15px] md:text-base font-bold text-white"
            style={{ background: 'linear-gradient(90deg, #713ec1 0%, #fc66b5 100%)' }}
          >
            Agendar Consulta
          </Link>
        </div>

        {/* Hero image strip */}
        <div data-animate="scale" data-delay="4" className="w-full flex justify-center">
          <div
            className="na-img-zoom w-full md:w-[760px] h-[200px] md:h-[220px] overflow-hidden"
            style={{ borderRadius: '24px 24px 0 0' }}
          >
            <img
              src="https://images.unsplash.com/photo-1759392619894-2b97c6f4df00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
              alt="Neurosalud Cognitiva y Emocional"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────────────────── */}
      <section className="w-full bg-white px-5 md:px-[120px] py-10 md:py-[80px]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full">
          {/* Decorative number col */}
          <div className="flex flex-col gap-2 md:w-[200px] shrink-0">
            <span
              className="text-[64px] md:text-[100px] font-black leading-none select-none"
              style={{ color: '#F0EAFB' }}
            >
              01
            </span>
            <span
              className="text-xs md:text-[14px] font-bold uppercase tracking-[2px]"
              style={{ color: '#713ec1' }}
            >
              El servicio
            </span>
          </div>

          {/* Content col */}
          <div className="flex flex-col gap-8 flex-1 min-w-0">
            <h2 className="text-[24px] md:text-[38px] font-extrabold text-[#2D2D3A] leading-[1.2]">
              ¿Qué es la Neurosalud<br className="hidden md:block" /> Cognitiva y Emocional?
            </h2>

            {/* Two-column text on desktop, single on mobile */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <p className="text-[#737f80] text-sm md:text-[15px] leading-[1.75] flex-1">
                La Neurosalud Cognitiva y Emocional es un programa de evaluación e intervención neuropsicológica diseñado para personas que experimentan dificultades emocionales, cognitivas o conductuales que afectan su calidad de vida. A través de herramientas basadas en neurociencia, trabajamos en la regulación emocional, la atención, la memoria y las funciones ejecutivas.
              </p>
              <p className="text-[#737f80] text-sm md:text-[15px] leading-[1.75] flex-1">
                Nuestro enfoque integrador combina técnicas cognitivo-conductuales, mindfulness neurológico y estrategias de neurorehabilitación para lograr cambios duraderos en el funcionamiento cerebral y emocional de cada persona.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex rounded-2xl overflow-hidden" style={{ background: '#F8F4FF' }}>
              {/* Stat 1 */}
              <div className="flex flex-col items-center gap-1 flex-1 py-5 md:py-6 px-2 md:px-8">
                <span className="text-sm md:text-[22px] font-extrabold text-[#713ec1] text-center">50–60 min</span>
                <span className="text-[11px] md:text-xs text-[#737f80] text-center">por sesión</span>
              </div>
              {/* Divider */}
              <div className="w-px my-5 md:my-6" style={{ background: 'rgba(113,62,193,0.19)' }} />
              {/* Stat 2 */}
              <div className="flex flex-col items-center gap-1 flex-1 py-5 md:py-6 px-2 md:px-8">
                <span className="text-sm md:text-[22px] font-extrabold text-[#713ec1] text-center">Semanal</span>
                <span className="text-[11px] md:text-xs text-[#737f80] text-center">frecuencia recomendada</span>
              </div>
              {/* Divider */}
              <div className="w-px my-5 md:my-6" style={{ background: 'rgba(113,62,193,0.19)' }} />
              {/* Stat 3 */}
              <div className="flex flex-col items-center gap-1 flex-1 py-5 md:py-6 px-2 md:px-8">
                <span className="text-sm md:text-[22px] font-extrabold text-[#32b8cc] text-center">Virtual</span>
                <span className="text-[11px] md:text-xs text-[#737f80] text-center">y presencial Bogotá</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Audiencia ────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#1A1A2E] px-5 md:px-[120px] py-12 md:py-[80px] flex flex-col items-center gap-10 md:gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span
            className="text-[12px] md:text-[13px] font-extrabold tracking-[3px] uppercase"
            style={{ color: '#32b8cc' }}
          >
            02
          </span>
          <h2 className="text-[26px] md:text-[40px] font-extrabold text-white">¿A quién va dirigido?</h2>
          <p className="text-white/50 text-sm md:text-base leading-[1.6] max-w-[620px]">
            Este servicio está pensado para quienes buscan mejorar su salud mental y cognitiva desde la neurociencia.
          </p>
        </div>

        {/* 2×2 Grid */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 w-full">
          {audienceCards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                data-animate
                data-delay={String(i + 1)}
                className="na-card flex flex-col gap-4 p-7 rounded-[20px]"
                style={{
                  background: 'rgba(255,255,255,0.051)',
                  border: '1px solid rgba(255,255,255,0.082)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl shrink-0"
                  style={{ background: card.gradient }}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-white text-[18px] font-bold">{card.title}</h3>
                <p className="text-white/50 text-[14px] leading-[1.6]">{card.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Beneficios ───────────────────────────────────────────────────── */}
      <section className="w-full bg-white px-5 md:px-[120px] py-12 md:py-[80px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="flex flex-col gap-2.5">
            <span
              className="text-[12px] md:text-[13px] font-extrabold tracking-[3px] uppercase"
              style={{ color: '#fc66b5' }}
            >
              03
            </span>
            <h2 className="text-[26px] md:text-[40px] font-extrabold text-[#2D2D3A]">¿Qué puedes lograr?</h2>
          </div>
          <p className="text-[#737f80] text-sm md:text-lg leading-[1.5] md:text-right max-w-[300px]">
            Resultados concretos,<br className="hidden md:block" /> medibles y duraderos.
          </p>
        </div>

        {/* Benefit rows — desktop: horizontal strips; mobile: cards */}
        <div className="flex flex-col gap-0.5">
          {benefitRows.map((row, i) => (
            <div
              key={row.num}
              data-animate
              data-delay={String(i + 1)}
              className={`w-full ${row.cornerRadius}`}
              style={{ background: row.rowBg }}
            >
              {/* Desktop layout */}
              <div className="hidden md:flex items-stretch h-[200px]">
                {row.imgRight ? (
                  <>
                    {/* Num strip left */}
                    <div
                      className="w-[100px] flex items-center justify-center shrink-0"
                      style={{ background: row.numGradient }}
                    >
                      <span className="text-[40px] font-extrabold text-white">{row.num}</span>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col justify-center gap-2.5 flex-1 px-10">
                      <h3 className="text-[#2D2D3A] text-[22px] font-bold">{row.title}</h3>
                      <p className="text-[#737f80] text-[15px] leading-[1.6]">{row.desc}</p>
                      <span
                        className="self-start px-3.5 py-1 rounded-xl text-xs font-semibold"
                        style={{ background: row.tagBg, color: row.tagColor }}
                      >
                        {row.tag}
                      </span>
                    </div>
                    {/* Image right */}
                    <div className="w-[280px] shrink-0 overflow-hidden">
                      <img src={row.imgUrl} alt={row.title} className="w-full h-full object-cover" />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image left */}
                    <div className="w-[280px] shrink-0 overflow-hidden">
                      <img src={row.imgUrl} alt={row.title} className="w-full h-full object-cover" />
                    </div>
                    {/* Content */}
                    <div className="flex flex-col justify-center gap-2.5 flex-1 px-10">
                      <h3 className="text-[#2D2D3A] text-[22px] font-bold">{row.title}</h3>
                      <p className="text-[#737f80] text-[15px] leading-[1.6]">{row.desc}</p>
                      <span
                        className="self-start px-3.5 py-1 rounded-xl text-xs font-semibold"
                        style={{ background: row.tagBg, color: row.tagColor }}
                      >
                        {row.tag}
                      </span>
                    </div>
                    {/* Num strip right */}
                    <div
                      className="w-[100px] flex items-center justify-center shrink-0"
                      style={{ background: row.numGradient }}
                    >
                      <span className="text-[40px] font-extrabold text-white">{row.num}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Mobile layout — card with image on top */}
              <div className="flex flex-col md:hidden rounded-2xl overflow-hidden">
                <div className="h-[160px] overflow-hidden">
                  <img src={row.imgUrl} alt={row.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  {/* Mobile num badge */}
                  <div
                    className="w-11 h-11 flex items-center justify-center rounded-[10px] shrink-0"
                    style={{ background: row.numGradient }}
                  >
                    <span className="text-white text-base font-extrabold">{row.num}</span>
                  </div>
                  <h3 className="text-[#2D2D3A] text-[17px] font-bold mt-1">{row.title}</h3>
                  <p className="text-[#737f80] text-[13px] leading-[1.6]">{row.desc}</p>
                  <span
                    className="self-start px-3.5 py-1 rounded-xl text-[11px] font-semibold"
                    style={{ background: row.tagBg, color: row.tagColor }}
                  >
                    {row.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="w-full flex flex-col items-center gap-5 md:gap-6 px-5 md:px-[120px] py-14 md:py-[80px] text-center"
        style={{ background: 'linear-gradient(150deg, #713ec1 0%, #fc66b5 100%)' }}
      >
        <h2 data-animate="scale" className="text-white text-[24px] md:text-[38px] font-extrabold max-w-[700px] leading-[1.2]">
          ¿Listo para transformar tu bienestar?
        </h2>
        <p data-animate data-delay="1" className="text-white/80 text-sm md:text-[17px] max-w-[520px] leading-[1.5]">
          Tu cerebro tiene la capacidad de cambiar. Nosotros te acompañamos en ese proceso.
        </p>
        <div data-animate data-delay="2" className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-2">
          <Link
            href="/agendar"
            className="na-btn flex items-center justify-center gap-2 bg-white rounded-full px-9 py-4 text-[15px] font-bold w-full md:w-auto"
            style={{ color: '#713ec1' }}
          >
            <Calendar size={18} style={{ color: '#713ec1' }} />
            Agendar cita
          </Link>
          <a
            href="https://wa.me/573193517239"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full px-9 py-4 text-[15px] font-semibold text-white w-full md:w-auto"
            style={{
              background: 'rgba(255,255,255,0.145)',
              border: '2px solid rgba(255,255,255,1)',
            }}
          >
            <MessageCircle size={18} className="text-white" />
            WhatsApp
          </a>
        </div>
      </section>

    </>
  )
}
