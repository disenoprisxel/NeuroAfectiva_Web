import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, CircleCheck, TrendingUp, Smile, Users, MessageCircle, Calendar } from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Neurohabilidades de Aprendizaje — NeuroAfectiva',
  description: 'Diagnóstico e intervención especializada en dificultades del aprendizaje: Dislexia, Disgrafía, Discalculia y TDAH. Acompañamos a niños, adolescentes, familias y colegios en Bogotá.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const audienceItems = [
  'Niños y adolescentes con bajo rendimiento escolar sin causa aparente',
  'Dificultades en lectura, escritura o matemáticas',
  'Diagnóstico previo o sospecha de TDAH, Dislexia, Disgrafía o Discalculia',
  'Familias y docentes que buscan estrategias de apoyo',
]

const includesItems = [
  'Evaluación psicopedagógica completa',
  'Informe diagnóstico detallado',
  'Reeducación cognitiva personalizada',
  'Orientación a padres y docentes',
  'Coordinación con el colegio',
]

const benefits = [
  {
    icon: TrendingUp,
    color: '#713ec1',
    title: 'Mejor rendimiento escolar',
    desc: 'Herramientas concretas para avanzar en el aprendizaje de forma segura y efectiva.',
  },
  {
    icon: Smile,
    color: '#fc66b5',
    title: 'Mayor autoestima y confianza',
    desc: 'Recuperar la seguridad en sus capacidades y disfrutar del proceso de aprender.',
  },
  {
    icon: Users,
    color: '#713ec1',
    title: 'Familia y colegio alineados',
    desc: 'Estrategias compartidas entre padres, docentes y terapeutas para resultados duraderos.',
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function NeurohabilidadesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="w-full bg-white px-5 md:px-[120px] py-12 md:py-[80px]">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full">
          {/* Left column */}
          <div className="flex flex-col gap-5 w-full md:w-[580px] shrink-0">
            {/* Breadcrumb — desktop only */}
            <nav className="hidden md:flex items-center gap-1.5">
              <Link href="/" className="text-[#6B6B6B] text-xs hover:text-[#713ec1] transition-colors">Inicio</Link>
              <ChevronRight size={10} className="text-[#6B6B6B]" />
              <Link href="/servicios" className="text-[#6B6B6B] text-xs hover:text-[#713ec1] transition-colors">Servicios</Link>
              <ChevronRight size={10} className="text-[#6B6B6B]" />
              <span className="text-[#fc66b5] text-xs">Neurohabilidades de Aprendizaje</span>
            </nav>

            {/* Pill */}
            <span className="inline-flex self-start items-center px-4 py-2 rounded-full text-xs font-semibold text-[#743fc1] bg-[#f8f4ff]">
              Niños, adolescentes y familias
            </span>

            {/* Title */}
            <h1 className="text-[28px] md:text-[48px] font-bold text-[#1A1A1A] leading-[1.15]">
              Neurohabilidades de Aprendizaje
            </h1>

            {/* Subtitle */}
            <p className="text-[#6B6B6B] text-sm md:text-base leading-[1.7] max-w-[520px]">
              Diagnóstico e intervención especializada en dificultades del aprendizaje: Dislexia, Disgrafía, Discalculia y TDAH. Acompañamos a niños, adolescentes, familias y colegios.
            </p>

            {/* CTA */}
            <Link
              href="/agendar"
              className="inline-flex self-start items-center px-8 py-4 rounded-full text-sm md:text-[15px] font-semibold text-white"
              style={{ background: 'linear-gradient(160deg, #fc66b5 0%, #713ec1 100%)' }}
            >
              Agendar evaluación
            </Link>
          </div>

          {/* Hero image */}
          <div
            className="w-full md:flex-1 h-[240px] md:h-[420px] rounded-[24px] md:rounded-[48px] overflow-hidden shrink-0"
          >
            <img
              src="https://images.unsplash.com/photo-1758612898114-4b1504db79a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
              alt="Neurohabilidades de Aprendizaje"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Service Description ──────────────────────────────────────────── */}
      <section className="w-full bg-[#f8f4ff] px-5 md:px-[120px] py-[40px] md:py-[80px]">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 w-full">
          {/* Left: description + audience */}
          <div className="flex flex-col gap-5 flex-1 min-w-0">
            <h2 className="text-[22px] md:text-[32px] font-bold text-[#1A1A1A]">
              ¿Qué es este servicio?
            </h2>
            <p className="text-[#3D3D3D] text-sm md:text-[15px] leading-[1.8]">
              Las Neurohabilidades de Aprendizaje es un programa integral de evaluación y apoyo terapéutico dirigido a niños y adolescentes que presentan dificultades específicas en lectura, escritura o matemáticas, o que han recibido o sospechan tener un diagnóstico de TDAH.
            </p>
            <p className="text-[#3D3D3D] text-sm md:text-[15px] leading-[1.8]">
              Nuestro equipo de psicopedagogos y neuropsicólogos trabaja de manera coordinada con las familias y los colegios para diseñar estrategias de intervención que se implementan tanto en el entorno clínico como escolar y familiar.
            </p>

            <h3 className="text-[20px] md:text-2xl font-bold text-[#1A1A1A] mt-2">
              ¿A quién va dirigido?
            </h3>
            <div className="flex flex-col gap-3">
              {audienceItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-[6px] shrink-0 w-2 h-2 rounded-full bg-[#fc66b5]" />
                  <p className="text-[#555] text-sm md:text-[14px] leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: includes card */}
          <div className="w-full md:w-[360px] shrink-0">
            <div className="flex flex-col gap-4 rounded-[20px] bg-[#713ec1] p-7">
              <h3 className="text-white text-xl font-bold">¿Qué incluye?</h3>
              {includesItems.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CircleCheck size={16} className="text-white shrink-0" />
                  <p className="text-white text-[13px]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────────── */}
      <section className="w-full bg-white px-5 md:px-[120px] py-[48px] md:py-[80px] flex flex-col items-center gap-10 md:gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-[#713ec1] text-[11px] md:text-xs font-bold tracking-[2px] uppercase">Beneficios</p>
          <h2 className="text-[24px] md:text-[36px] font-bold text-[#1A1A1A]">¿Qué puede lograr tu hijo?</h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="flex flex-col gap-3 rounded-2xl bg-white p-7 flex-1"
                style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.031), 0 12px 32px rgba(0,0,0,0.059)' }}
              >
                <Icon size={32} style={{ color: b.color }} />
                <h3 className="text-[#1A1A1A] text-base font-bold">{b.title}</h3>
                <p className="text-[#6B6B6B] text-[13px] leading-[1.6]">{b.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="w-full flex flex-col items-center gap-5 px-5 md:px-[120px] py-[80px] text-center"
        style={{ background: 'linear-gradient(135deg, #713ec1 0%, #fc66b5 100%)' }}
      >
        <h2 className="text-white text-[24px] md:text-[40px] font-bold max-w-[700px] leading-[1.2]">
          ¿Quieres saber más sobre este servicio?
        </h2>
        <p className="text-white/90 text-sm md:text-base max-w-[480px] leading-relaxed">
          Agenda una consulta inicial y te orientamos sin compromiso.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-2">
          <Link
            href="/agendar"
            className="flex items-center justify-center gap-2 bg-white rounded-full px-9 py-4 text-[15px] font-bold w-full md:w-auto"
            style={{ color: '#713ec1' }}
          >
            <Calendar size={18} style={{ color: '#713ec1' }} />
            Agendar cita
          </Link>
          <a
            href="https://wa.me/573193517239"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full px-9 py-4 text-[15px] font-bold text-white bg-[#25D366] w-full md:w-auto"
          >
            <MessageCircle size={18} className="text-white" />
            WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
