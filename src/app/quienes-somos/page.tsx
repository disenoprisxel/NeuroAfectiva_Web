import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quiénes Somos — NeuroAfectiva',
  description: 'Somos una clínica especializada en neuropsicología ubicada en el corazón de Bogotá. Conoce nuestra misión, visión, valores y equipo de especialistas.',
}

/* ─── HERO ──────────────────────────────────────────────── */
function HeroQuienesSomos() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-[#713ec1] transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-gray-600 font-medium">Quiénes Somos</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-[#1A1035]">
              <img
                src="/images/clinic.jpg"
                alt="Clínica NeuroAfectiva"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg text-xs font-bold text-gray-700 flex items-center gap-1.5">
              ❤️ Desde 2016
            </div>
          </div>

          {/* Right — copy */}
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-[#F0EAFB] text-[#713ec1] text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              Nuestra misión
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Somos NeuroAfectiva
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              En NeuroAfectiva creemos que cada cerebro es único y merece una atención personalizada.
              Somos una clínica especializada en neuropsicología ubicada en el corazón de Bogotá, donde
              ciencia y empatía se unen para ofrecer procesos de evaluación, intervención y acompañamiento
              que transforman vidas.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Nuestra metodología combina los más recientes avances en neurociencias con un enfoque humano
              y cercano, porque entendemos que detrás de cada diagnóstico hay una historia, una familia y
              un futuro por construir.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/equipo"
                className="bg-[#713ec1] hover:bg-[#6B46C1] text-white font-bold px-7 py-3 rounded-full transition-colors shadow-md text-sm"
              >
                Conoce nuestro equipo
              </Link>
              <Link
                href="/servicios"
                className="text-[#713ec1] hover:text-[#6B46C1] font-bold text-sm flex items-center gap-1.5 transition-colors"
              >
                Ver servicios
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── MISIÓN / VISIÓN / VALORES ─────────────────────────── */
function MisionVisionValores() {
  return (
    <section className="bg-[#F8F4FF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#713ec1] uppercase">Nuestra Propuesta</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">Lo que nos mueve cada día</h2>
          <p className="mt-3 text-gray-500 text-sm max-w-xl mx-auto">
            Principios que guían cada intervención, cada diagnóstico y cada acompañamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Misión */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <span className="text-xs font-bold tracking-widest text-[#713ec1] uppercase mb-3 block">Misión</span>
            <h3 className="text-xl font-extrabold text-gray-900 mb-4">Nuestra Misión</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Brindar atención neuropsicológica integral, cálida y de alta calidad que transforme la vida
              de nuestros pacientes y sus familias, con un enfoque científico y profundamente humano.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-[#713ec1]">
            <span className="text-xs font-bold tracking-widest text-[#fc66b5] uppercase mb-3 block">Visión</span>
            <h3 className="text-xl font-extrabold text-gray-900 mb-4">Nuestra Visión</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ser referentes en neuropsicología clínica y educativa en Colombia, reconocidos por la
              excelencia de nuestros profesionales y el impacto positivo en la vida de las personas
              que atendemos.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <span className="text-xs font-bold tracking-widest text-[#32b8cc] uppercase mb-3 block">Valores</span>
            <h3 className="text-xl font-extrabold text-gray-900 mb-4">Nuestros Valores</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {['Empatía y calidad humana', 'Rigor científico y ético', 'Inclusión y diversidad', 'Innovación constante'].map((v) => (
                <li key={v} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#713ec1] flex-shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── STATS BAR (dark) ──────────────────────────────────── */
function StatsDark() {
  const stats = [
    { value: 'Bogotá', label: 'Sede principal' },
    { value: 'Virtual', label: 'Atención online disponible', highlight: true },
    { value: '10+ años', label: 'Combinados de experiencia' },
  ]
  return (
    <section className="bg-[#2D2D3A] py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 text-center">
          {stats.map((s, i) => (
            <div key={s.value} className={`${i < stats.length - 1 ? 'border-r border-white/10' : ''} px-4`}>
              <div className={`text-2xl sm:text-3xl font-extrabold mb-1 ${s.highlight ? 'text-[#fc66b5]' : 'text-white'}`}>
                {s.value}
              </div>
              <div className="text-xs text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── EQUIPO DE ESPECIALISTAS ───────────────────────────── */
const especialistas = [
  {
    nombre: 'Viviana M. Trujillo',
    especialidad: 'Neuropsicología Pediátrica',
    formacion: 'Universidad de La Rioja',
    exp: '8+ años',
    badge: { label: 'Juvenil', color: 'bg-[#F0EAFB] text-[#713ec1]' },
  },
  {
    nombre: 'Johanna Castro',
    especialidad: 'Neuropsicología Clínica',
    formacion: 'Capacitación internacional',
    exp: '',
    badge: { label: 'Clínica', color: 'bg-[#E8F9FD] text-[#32b8cc]' },
  },
]

function EquipoSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            <span className="text-xs font-bold tracking-widest text-[#713ec1] uppercase mb-4 block">Nuestro Equipo</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Especialistas apasionados<br />por la neurociencia
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-7">
              Contamos con psicólogas especializadas en neuropsicología educativa y clínica, formadas
              en universidades de España y Colombia en instituciones de prestigio internacional y con
              amplia experiencia en evaluación e intervención neuropsicológica.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Formación en universidades de España y Colombia',
                'Más de 8 años de experiencia clínica',
                'Certificadas internacionalmente en neuropsicología',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-[#F0EAFB] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#713ec1]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/equipo"
              className="bg-[#713ec1] hover:bg-[#6B46C1] text-white font-bold px-7 py-3 rounded-full transition-colors shadow-md text-sm inline-block"
            >
              Conoce el equipo
            </Link>
          </div>

          {/* Right — specialist cards */}
          <div className="space-y-4">
            {especialistas.map((e) => (
              <div key={e.nombre} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-[#F0EAFB] flex-shrink-0 overflow-hidden">
                  <img
                    src={`/images/${e.nombre.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}.jpg`}
                    alt={e.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900 text-sm">{e.nombre}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{e.especialidad}</div>
                  <div className="text-gray-400 text-xs">{e.formacion}{e.exp && ` · ${e.exp}`}</div>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 ${e.badge.color}`}>
                  {e.badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA GRADIENT ──────────────────────────────────────── */
function CTAQuienesSomos() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2D1B69 0%, #713ec1 60%, #fc66b5 100%)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <span className="text-xs font-bold tracking-widest text-white/70 uppercase mb-4 block">¿Lista para empezar?</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Tu bienestar neurológico comienza aquí</h2>
        <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
          Agenda tu primera consulta y descubre cómo podemos transformar tu vida.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/agendar"
            className="bg-white text-[#713ec1] hover:bg-gray-50 font-bold px-8 py-3 rounded-full transition-colors shadow-lg text-sm"
          >
            Agendar consulta
          </Link>
          <Link
            href="/servicios"
            className="border-2 border-white/60 hover:border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-full transition-colors text-sm"
          >
            Conocer servicios
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── IMPACTO EN NÚMEROS ────────────────────────────────── */
const impacto = [
  { value: '+500', label: 'Pacientes atendidos', color: 'text-[#713ec1]' },
  { value: '+8', label: 'Años de experiencia', color: 'text-[#32b8cc]' },
  { value: '6', label: 'Servicios especializados', color: 'text-[#fc66b5]' },
  { value: '98%', label: 'Satisfacción de familias', color: 'text-[#713ec1]' },
]

function ImpactoSection() {
  return (
    <section className="bg-[#F8F4FF] py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10">
          Nuestro impacto en números
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {impacto.map((item) => (
            <div key={item.label} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className={`text-4xl font-extrabold mb-2 ${item.color}`}>{item.value}</div>
              <div className="text-gray-500 text-xs">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ──────────────────────────────────────────────── */
export default function QuienesSomosPage() {
  return (
    <>
      <HeroQuienesSomos />
      <MisionVisionValores />
      <StatsDark />
      <EquipoSection />
      <CTAQuienesSomos />
      <ImpactoSection />
    </>
  )
}
