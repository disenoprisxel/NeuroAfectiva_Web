import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nuestro Equipo — NeuroAfectiva',
  description: 'Especialistas apasionadas por tu bienestar. Psicólogas especializadas en neuropsicología con formación de alto nivel y un profundo compromiso humano.',
}

/* ─── DATOS ─────────────────────────────────────────────── */
const equipo = [
  {
    id: 'johanna',
    nombre: 'Johanna Castro',
    cargo: 'Psicóloga · Especialista en Neuropsicología Clínica',
    badge: 'Neuropsicología Clínica',
    badgeColor: 'bg-[#E8F9FD] text-[#32b8cc]',
    badgeCard: 'Especialista certificada',
    badgeCardColor: 'bg-[#FFF0F9] text-[#fc66b5]',
    floatingBadge: 'Avalada internacionalmente',
    img: '/images/johanna-castro.jpg',
    imgAlt: 'Johanna Castro',
    imgSide: 'left' as const,
    bio: 'Johanna es una neuropsicóloga clínica con un profundo compromiso por el bienestar cognitivo y emocional de cada uno de sus pacientes. Su formación especializada le permite realizar evaluaciones y tratamientos de alto nivel para niños, adolescentes y adultos con condiciones neurológicas, del neurodesarrollo y trastornos cognitivos. Caracterizada por su calidez humana y rigor científico, guía a cada paciente y su familia a través de un proceso transformador que brinda herramientas concretas y resultados medibles.',
    tags: ['Neurología Clínica', 'Neurodesarrollo', 'Evaluación Cognitiva'],
    tagColors: ['bg-[#F0EAFB] text-[#713ec1]', 'bg-[#E8F9FD] text-[#32b8cc]', 'bg-[#FFF0F9] text-[#fc66b5]'],
    ctaLabel: 'Agendar con Johanna',
    ctaColor: 'bg-[#fc66b5] hover:bg-[#f054a8]',
    formacion: null,
  },
  {
    id: 'viviana',
    nombre: 'Viviana Marcela Trujillo',
    cargo: 'Psicóloga · Especialista en Neuropsicología Educativa',
    badge: 'Neuropsicología Educativa',
    badgeColor: 'bg-[#F0EAFB] text-[#713ec1]',
    badgeCard: 'Neuropsicología Educativa',
    badgeCardColor: 'bg-[#F0EAFB] text-[#713ec1]',
    floatingBadge: '8+ años de experiencia',
    img: '/images/viviana-trujillo.jpg',
    imgAlt: 'Viviana Marcela Trujillo',
    imgSide: 'right' as const,
    bio: (
      <>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          Viviana es una profesional apasionada por transformar la vida de niños y adolescentes a través de la neuropsicología educativa. Su enfoque científico y profundamente empático le permite identificar y trabajar las barreras cognitivas que impiden el pleno desarrollo académico y personal. Con más de 8 años acompañando familias, ha desarrollado un método propio que combina evaluación rigurosa con intervención lúdica y significativa, generando cambios reales y medibles en el rendimiento escolar y la calidad de vida.
        </p>
        <p className="text-gray-700 text-sm font-bold mb-3">Herramientas complementarias profesionales:</p>
        <ul className="space-y-3 text-gray-500 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#713ec1] flex-shrink-0 mt-1.5" />
            <span><strong className="text-gray-700">Certificación Infanto-Juvenil:</strong> A través de sus diplomados en psicología clínica y educativa, ofrece un acompañamiento integral que conecta la salud emocional con el éxito escolar.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fc66b5] flex-shrink-0 mt-1.5" />
            <span><strong className="text-gray-700">Innovación Creativa:</strong> Cuenta con certificación en Arte Terapia, lo que le permite diseñar intervenciones lúdicas y significativas que potencian la neuroplasticidad y la expresión emocional.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#32b8cc] flex-shrink-0 mt-1.5" />
            <span>Complementariamente, Viviana extiende su conocimiento del comportamiento humano al sector corporativo. Cuenta con formación en la aplicación de la Batería de Riesgo Psicosocial del Ministerio de Trabajo, ofreciendo consultoría técnica a empresas interesadas en la evaluación y prevención de factores de riesgo en el clima laboral.</span>
          </li>
        </ul>
      </>
    ),
    tags: ['Dificultades de Aprendizaje', 'Funciones Ejecutivas', 'TDAH'],
    tagColors: ['bg-[#F0EAFB] text-[#713ec1]', 'bg-[#FFF0F9] text-[#fc66b5]', 'bg-[#E8F9FD] text-[#32b8cc]'],
    ctaLabel: 'Agendar con Viviana',
    ctaColor: 'bg-[#713ec1] hover:bg-[#6B46C1]',
    formacion: 'Fund. Univ. Internacional de la Rioja',
  },
]

const filosofia = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Enfoque Humano',
    desc: 'Cada persona es única. Nos adaptamos a sus necesidades, ritmo y contexto familiar para brindar un acompañamiento genuinamente personalizado.',
    gradient: 'from-[#713ec1] to-[#a855f7]',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Rigor Científico',
    desc: 'Utilizamos herramientas diagnósticas y terapéuticas avaladas internacionalmente, siempre actualizadas con las últimas evidencias en neurociencias.',
    gradient: 'from-[#32b8cc] to-[#06b6d4]',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Acompañamiento Familiar',
    desc: 'Involucramos a la familia en cada etapa del proceso. Orientamos a padres, docentes y cuidadores para extender el impacto más allá de la consulta.',
    gradient: 'from-[#fc66b5] to-[#f472b6]',
  },
]

/* ─── HERO ──────────────────────────────────────────────── */
function HeroEquipo() {
  return (
    <section className="bg-[#F8F4FF] py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span data-animate className="na-badge inline-flex items-center gap-2 bg-[#FFF0F9] text-[#fc66b5] text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          Nuestro Equipo
        </span>
        <h1 data-animate data-delay="1" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5">
          Profesionales apasionadas<br className="hidden sm:block" /> por tu bienestar
        </h1>
        <p data-animate data-delay="2" className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mb-8">
          Especialistas en neuropsicología con formación de alto nivel, enfoque científico
          y un profundo compromiso humano con cada paciente y familia.
        </p>
        {/* Badges */}
        <div data-animate data-delay="3" className="flex flex-wrap justify-center gap-3">
          {[
            { icon: '👩‍⚕️', text: '2 Especialistas certificadas' },
            { icon: '⏱️', text: '8+ años de experiencia' },
            { icon: '📍', text: 'Bogotá, Colombia' },
          ].map((b) => (
            <span key={b.text} className="na-badge bg-[#fc66b5] text-white text-xs font-bold px-5 py-2 rounded-full flex items-center gap-2">
              <span>{b.icon}</span>
              {b.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── TARJETA DE ESPECIALISTA ───────────────────────────── */
const waNumbers: Record<string, string> = {
  viviana: '573193517239',
  johanna: '573123104318',
}

function EspecialistaCard({ esp, reverse }: { esp: typeof equipo[0]; reverse: boolean }) {
  const waNumber = waNumbers[esp.id] || '573193517239'
  const imgAnimate = reverse ? 'right' : 'left'
  const contentAnimate = reverse ? 'left' : 'right'
  return (
    <section className={`py-16 lg:py-20 ${reverse ? 'bg-[#F8F4FF]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Image */}
          <div
            data-animate={imgAnimate}
            className={`relative w-full lg:w-[42%] flex-shrink-0 na-img-zoom overflow-hidden rounded-3xl ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-[#F0EAFB]">
              <img
                src={esp.img}
                alt={esp.imgAlt}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Top-left floating card (Johanna) */}
            {!esp.formacion && (
              <div className="absolute top-5 left-5 bg-white rounded-2xl px-4 py-3 shadow-xl">
                <div className="font-extrabold text-[#fc66b5] text-sm leading-tight">{esp.badge}</div>
                <div className="text-xs text-gray-400 mt-0.5">Especialista certificada</div>
              </div>
            )}
            {/* Top-right floating card (Viviana) */}
            {esp.formacion && (
              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <div className="font-bold text-gray-900 text-xs">{esp.nombre.split(' ')[0]}</div>
                <div className="text-xs font-medium mt-0.5 text-[#713ec1]">Neuropsicóloga</div>
              </div>
            )}
            {/* Bottom badge */}
            {esp.formacion ? (
              <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg text-xs font-bold text-gray-700">
                🎓 {esp.formacion}
              </div>
            ) : (
              <div className="absolute bottom-5 right-5 bg-white rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
                <svg className="w-4 h-4 text-[#713ec1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-xs font-bold text-gray-700">Avalada internacionalmente</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div data-animate={contentAnimate} className={`w-full lg:flex-1 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <span className={`na-badge text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-5 ${esp.badgeColor}`}>
              {esp.badge}
            </span>
            <h2 data-animate={contentAnimate} data-delay="1" className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">{esp.nombre}</h2>
            <p className={`text-sm font-semibold mb-6 ${esp.badgeColor.split(' ')[1]}`}>{esp.cargo}</p>
            <div data-animate={contentAnimate} data-delay="2" className="text-gray-500 text-sm leading-relaxed mb-7">{esp.bio}</div>

            {/* Tags */}
            <div data-animate={contentAnimate} data-delay="3" className="flex flex-wrap gap-2 mb-8">
              {esp.tags.map((tag, i) => (
                <span key={tag} className={`na-badge text-xs font-bold px-3 py-1.5 rounded-full ${esp.tagColors[i]}`}>
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div data-animate={contentAnimate} data-delay="4" className="flex flex-wrap gap-3">
              <Link
                href="/agendar"
                className="na-btn na-btn-gradient text-white font-bold px-7 py-3 rounded-full shadow-md text-sm flex items-center gap-2"
                style={{ background: 'linear-gradient(90deg, #fc66b5 0%, #713ec1 100%)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                {esp.ctaLabel}
              </Link>
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="na-btn bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3 rounded-full text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── FILOSOFÍA ─────────────────────────────────────────── */
function FilosofiaSection() {
  return (
    <section className="bg-[#1A1035] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span data-animate className="text-xs font-bold tracking-widest text-[#fc66b5] uppercase mb-3 block">Nuestra Filosofía</span>
          <h2 data-animate data-delay="1" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ciencia, calidez y compromiso
          </h2>
          <p data-animate data-delay="2" className="text-gray-400 text-sm max-w-xl mx-auto">
            Cada integrante de NeuroAfectiva comparte los mismos valores fundamentales que guían cada sesión, cada diagnóstico y cada acompañamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filosofia.map((f, i) => (
            <div
              key={f.title}
              data-animate
              data-delay={String(i + 1)}
              className={`na-card rounded-2xl p-8 bg-gradient-to-br ${f.gradient} text-white`}
            >
              <div className="na-icon-box w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3 className="font-extrabold text-xl mb-3">{f.title}</h3>
              <p className="text-white/85 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ───────────────────────────────────────────────── */
function CTAEquipo() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #713ec1 0%, #a855f7 50%, #fc66b5 100%)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 data-animate="scale" className="text-3xl sm:text-4xl font-extrabold mb-4">
          ¿Lista para conocer a nuestro equipo en persona?
        </h2>
        <p data-animate data-delay="1" className="text-white/80 text-base mb-10 max-w-xl mx-auto">
          Agenda una consulta inicial y descubre cómo Viviana o Johanna pueden acompañar el bienestar de tu familia.
        </p>
        <div data-animate data-delay="2" className="flex flex-wrap justify-center gap-4">
          <Link
            href="/agendar"
            className="na-btn bg-white text-[#713ec1] hover:bg-gray-50 font-bold px-8 py-3 rounded-full shadow-lg text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            Agendar mi cita
          </Link>
          <a
            href="https://wa.me/573193517239"
            target="_blank"
            rel="noopener noreferrer"
            className="na-btn border-2 border-white/60 hover:border-white text-white font-bold px-8 py-3 rounded-full text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ──────────────────────────────────────────────── */
export default function EquipoPage() {
  return (
    <>
      <HeroEquipo />
      {equipo.map((esp, i) => (
        <EspecialistaCard key={esp.id} esp={esp} reverse={i % 2 !== 0} />
      ))}
      <FilosofiaSection />
      <CTAEquipo />
    </>
  )
}
