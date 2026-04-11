import Image from 'next/image'
import Link from 'next/link'
import {
  Phone, MessageSquare, Microscope, FileText, Map, TrendingUp,
  Sparkles, Users, ShieldCheck, BookOpen, Target, RefreshCw,
  Calendar, MessageCircle, Building2, Video, Repeat2, MapPin, Globe, Settings2,
} from 'lucide-react'
import Footer from '@/components/Footer'

// ─── Data ────────────────────────────────────────────────────────────────────

const heroPills = [
  { label: '1 · Primer contacto',      color: '#8e65ce' },
  { label: '2 · Entrevista',            color: '#763fc1' },
  { label: '3 · Evaluación',            color: '#743fc1' },
  { label: '4 · Diagnóstico',           color: '#7640c1' },
  { label: '5 · Plan',                  color: '#713ec1' },
  { label: '6 · Seguimiento',           color: '#713ec1' },
]

type Step = {
  num: string
  color: string
  tipBg: string
  icon: React.ElementType
  tipIcon: React.ElementType
  title: string
  description: string
  tip: string
  image: string
  imageAlt: string
  bg: string
  dividerGradient: string
  layout: 'text-left' | 'text-right'
}

const steps: Step[] = [
  {
    num: '01', color: '#fc66b5', tipBg: '#FFF0F9',
    icon: Phone, tipIcon: Sparkles,
    title: 'Primer contacto',
    description: 'Nos escribes o llamas para contarnos brevemente tu situación. En esta primera conversación te orientamos sin compromiso y resolvemos tus dudas iniciales.',
    tip: 'Sin compromiso · Respuesta en menos de 24h',
    image: 'https://images.unsplash.com/photo-1758598304346-1b01479f681a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    imageAlt: 'Primer contacto telefónico',
    bg: '#FFFFFF',
    dividerGradient: 'linear-gradient(90deg, #fc66b5 0%, #713ec1 50%, #32b8cc 100%)',
    layout: 'text-left',
  },
  {
    num: '02', color: '#713ec1', tipBg: '#F0EAFB',
    icon: MessageSquare, tipIcon: Users,
    title: 'Entrevista inicial',
    description: 'Realizamos una sesión de escucha activa con el paciente y/o su familia. Entendemos el contexto, la historia y las necesidades específicas desde una perspectiva empática y holística.',
    tip: 'Sesión para toda la familia · Enfoque holístico',
    image: 'https://images.unsplash.com/photo-1585945148306-db646373834d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    imageAlt: 'Entrevista inicial familiar',
    bg: '#F8F4FF',
    dividerGradient: 'linear-gradient(90deg, #713ec1 0%, #32b8cc 100%)',
    layout: 'text-right',
  },
  {
    num: '03', color: '#32b8cc', tipBg: '#E8F9FD',
    icon: Microscope, tipIcon: ShieldCheck,
    title: 'Evaluación neuropsicológica',
    description: 'Aplicamos baterías de pruebas neuropsicológicas estandarizadas y validadas para Colombia. La evaluación es rigurosa, lúdica y respetuosa del ritmo de cada persona.',
    tip: 'Pruebas validadas para Colombia · Lúdica y respetuosa',
    image: 'https://images.unsplash.com/photo-1723473160725-20d9a18ebce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    imageAlt: 'Evaluación neuropsicológica',
    bg: '#FFFFFF',
    dividerGradient: 'linear-gradient(90deg, #32b8cc 0%, #fc66b5 100%)',
    layout: 'text-left',
  },
  {
    num: '04', color: '#fc66b5', tipBg: '#FFF0F9',
    icon: FileText, tipIcon: BookOpen,
    title: 'Diagnóstico e informe',
    description: 'Entregamos un informe claro, accesible y orientador con los resultados. Te lo explicamos en detalle para que tú y tu familia lo entiendan completamente.',
    tip: 'Explicado paso a paso · Para toda la familia',
    image: 'https://images.unsplash.com/photo-1673865641073-4479f93a7776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    imageAlt: 'Diagnóstico e informe',
    bg: '#F8F4FF',
    dividerGradient: 'linear-gradient(90deg, #fc66b5 0%, #713ec1 100%)',
    layout: 'text-right',
  },
  {
    num: '05', color: '#713ec1', tipBg: '#F0EAFB',
    icon: Map, tipIcon: Target,
    title: 'Plan de intervención',
    description: 'Diseñamos una ruta terapéutica y/o educativa personalizada con objetivos claros, cronograma y estrategias específicas para cada contexto: hogar, colegio y trabajo.',
    tip: 'Objetivos claros · Hogar, colegio y trabajo',
    image: 'https://images.unsplash.com/photo-1714976694773-cc2d946c1481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    imageAlt: 'Plan de intervención terapéutica',
    bg: '#FFFFFF',
    dividerGradient: 'linear-gradient(90deg, #713ec1 0%, #32b8cc 100%)',
    layout: 'text-left',
  },
  {
    num: '06', color: '#32b8cc', tipBg: '#E8F9FD',
    icon: TrendingUp, tipIcon: RefreshCw,
    title: 'Seguimiento continuo',
    description: 'Monitoreamos el progreso con sesiones periódicas de revisión. Ajustamos el plan según la evolución, manteniendo comunicación constante con el paciente y su familia.',
    tip: 'Ajuste continuo · Comunicación constante',
    image: 'https://images.unsplash.com/photo-1733685372616-7eba4255f43b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    imageAlt: 'Seguimiento continuo del proceso',
    bg: '#F8F4FF',
    dividerGradient: '',
    layout: 'text-right',
  },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

function StepContent({ step }: { step: Step }) {
  const Icon = step.icon
  const TipIcon = step.tipIcon
  return (
    <div className="flex flex-col gap-6">
      {/* Badge */}
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center w-14 h-14 rounded-[28px] text-white text-xl font-extrabold shrink-0"
          style={{ background: step.color }}
        >
          {step.num}
        </div>
        <Icon size={28} style={{ color: step.color }} />
      </div>
      {/* Title */}
      <h2 className="text-[32px] font-extrabold text-[#2D2D3A] leading-tight">{step.title}</h2>
      {/* Description */}
      <p className="text-[#737f80] text-base leading-[1.7]">{step.description}</p>
      {/* Tip */}
      <div
        className="flex items-center gap-3 rounded-xl px-5 py-4"
        style={{ background: step.tipBg }}
      >
        <TipIcon size={20} style={{ color: step.color }} />
        <p className="text-sm font-semibold" style={{ color: step.color }}>{step.tip}</p>
      </div>
    </div>
  )
}

function StepImage({ step }: { step: Step }) {
  return (
    <div className="relative rounded-3xl overflow-hidden shrink-0 w-[560px] h-[380px]">
      <img
        src={step.image}
        alt={step.imageAlt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ComoTrabajamosPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="w-full bg-white flex flex-col items-center justify-center gap-5 py-12 md:h-[400px] md:py-0 px-5 md:px-[120px] text-center">
        {/* Pill */}
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-black/15" style={{ background: 'rgba(248,101,181,0.12)' }}>
          <span className="text-[#f865b5] text-xs md:text-[13px] font-bold tracking-[2px]">NUESTRO PROCESO</span>
        </div>
        {/* Title */}
        <h1 className="text-[28px] md:text-[52px] font-extrabold text-[#2d2d3a] leading-tight max-w-2xl">
          Nuestro proceso de acompañamiento
        </h1>
        {/* Subtitle */}
        <p className="text-[#9f9e9e] text-sm md:text-lg font-normal max-w-xl md:max-w-[640px]">
          Cada persona merece un camino terapéutico diseñado a su medida. Así es como trabajamos juntos.
        </p>
        {/* Step pills — desktop single row / mobile two rows */}
        <div className="hidden md:flex items-center gap-3 flex-wrap justify-center">
          {heroPills.map((pill) => (
            <span
              key={pill.label}
              className="text-white text-[13px] font-semibold px-4 py-2 rounded-full"
              style={{ background: pill.color }}
            >
              {pill.label}
            </span>
          ))}
        </div>
        <div className="flex md:hidden flex-col gap-2 items-center w-full">
          <div className="flex gap-2 justify-center flex-wrap">
            {heroPills.slice(0, 3).map((pill) => (
              <span key={pill.label} className="text-white text-xs font-semibold px-3 py-2 rounded-full" style={{ background: pill.color }}>
                {pill.label}
              </span>
            ))}
          </div>
          <div className="flex gap-2 justify-center flex-wrap">
            {heroPills.slice(3).map((pill) => (
              <span key={pill.label} className="text-white text-xs font-semibold px-3 py-2 rounded-full" style={{ background: pill.color }}>
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Steps Section ───────────────────────────────────────────────── */}
      <section className="w-full flex flex-col">
        {steps.map((step, idx) => (
          <div key={step.num}>
            {/* Desktop: alternating two-column layout */}
            <div
              className="hidden md:flex items-center gap-0 w-full px-[120px] py-16"
              style={{ background: step.bg }}
            >
              {step.layout === 'text-left' ? (
                <>
                  <div className="w-[560px] shrink-0">
                    <StepContent step={step} />
                  </div>
                  <div className="flex-1" />
                  <StepImage step={step} />
                </>
              ) : (
                <>
                  <StepImage step={step} />
                  <div className="flex-1" />
                  <div className="w-[560px] shrink-0">
                    <StepContent step={step} />
                  </div>
                </>
              )}
            </div>

            {/* Mobile: stacked card layout */}
            <div
              className="md:hidden flex flex-col w-full"
              style={{ background: step.bg }}
            >
              <div className="h-[220px] w-full overflow-hidden">
                <img src={step.image} alt={step.imageAlt} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="px-6 py-7">
                <StepContent step={step} />
              </div>
            </div>

            {/* Gradient divider between steps */}
            {idx < steps.length - 1 && (
              <div className="h-[2px] w-full" style={{ background: step.dividerGradient }} />
            )}
          </div>
        ))}
      </section>

      {/* ── Modalidades Section ─────────────────────────────────────────── */}
      <section className="w-full bg-[#1a1a2e] flex flex-col gap-14 px-5 md:px-[120px] py-[80px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 w-full text-center">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/10">
            <span className="text-[#32b8cc] text-[13px] md:text-sm font-semibold">Modalidades de Atención</span>
          </div>
          <h2 className="text-[24px] md:text-[40px] font-bold text-white max-w-xl">
            Elige cómo quieres ser atendido
          </h2>
          <p className="text-white/67 text-sm md:text-[17px] max-w-[620px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.67)' }}>
            Nos adaptamos a tu realidad y disponibilidad para que el acompañamiento sea posible desde donde estés.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Presencial */}
          <div
            className="flex flex-col gap-5 rounded-3xl p-7 md:p-9 flex-1"
            style={{ background: 'linear-gradient(135deg, #fc66b5 0%, #713ec1 100%)' }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20">
              <Building2 size={28} className="text-white" />
            </div>
            <h3 className="text-white text-2xl font-bold">Presencial</h3>
            <p className="text-white/80 text-[15px] leading-[1.6]">
              Nuestras instalaciones en Bogotá, diseñadas para brindar comodidad y privacidad.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 self-start">
              <MapPin size={14} className="text-white" />
              <span className="text-white text-xs font-semibold">Bogotá, Colombia</span>
            </div>
          </div>

          {/* Virtual */}
          <div
            className="flex flex-col gap-5 rounded-3xl p-7 md:p-9 flex-1"
            style={{ background: 'linear-gradient(135deg, #32b8cc 0%, #1a8fa0 100%)' }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20">
              <Video size={28} className="text-white" />
            </div>
            <h3 className="text-white text-2xl font-bold">Virtual</h3>
            <p className="text-white/80 text-[15px] leading-[1.6]">
              Atención por videollamada para todo Colombia con la misma calidad y calidez.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 self-start">
              <Globe size={14} className="text-white" />
              <span className="text-white text-xs font-semibold">Todo Colombia</span>
            </div>
          </div>

          {/* Mixta */}
          <div
            className="flex flex-col gap-5 rounded-3xl p-7 md:p-9 flex-1 border border-white/15"
            style={{ background: 'rgba(255,255,255,0.094)' }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10">
              <Repeat2 size={28} className="text-white" />
            </div>
            <h3 className="text-white text-2xl font-bold">Mixta</h3>
            <p className="text-white/80 text-[15px] leading-[1.6]">
              Combinamos sesiones presenciales y virtuales según tus necesidades y disponibilidad.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 self-start">
              <Settings2 size={14} className="text-white" />
              <span className="text-white text-xs font-semibold">Flexible y adaptada a ti</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────────────── */}
      <section
        className="w-full flex flex-col items-center gap-8 px-5 md:px-[120px] py-[80px] text-center"
        style={{ background: 'linear-gradient(135deg, #713ec1 0%, #fc66b5 100%)' }}
      >
        <h2 className="text-white text-[26px] md:text-[44px] font-extrabold max-w-2xl leading-tight">
          ¿Listo para dar el primer paso?
        </h2>
        <p className="text-white/80 text-sm md:text-lg max-w-[580px] leading-relaxed">
          Agenda tu primera consulta y comienza el camino hacia el bienestar neuropsicológico de tu familia.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <Link
            href="/agendar"
            className="flex items-center justify-center gap-2.5 bg-white rounded-full px-9 py-[18px] text-base font-bold w-full md:w-auto"
            style={{ color: '#713ec1' }}
          >
            <Calendar size={20} style={{ color: '#713ec1' }} />
            Agendar mi cita
          </Link>
          <a
            href="https://wa.me/573193517239"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 rounded-full px-9 py-[18px] text-base font-bold text-white border-2 border-[#25d366] w-full md:w-auto"
          >
            <MessageCircle size={20} className="text-white" />
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}

export const metadata = {
  title: 'Cómo Trabajamos — NeuroAfectiva',
  description: 'Conoce nuestro proceso terapéutico: desde el primer contacto hasta el seguimiento continuo. Evaluación neuropsicológica personalizada en Bogotá.',
}
