import type { Metadata } from 'next'
import Link from 'next/link'
import { Palette, Sparkles, MessageCircle, ChevronRight } from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ExpresaMente Creativa — NeuroAfectiva',
  description: 'Un espacio terapéutico donde el arte, la música, el movimiento y la escritura se convierten en el lenguaje del alma.',
}

const modalities = [
  {
    num: '01',
    numColor: '#713ec1',
    title: 'Arteterapia',
    desc: 'Pintura, collage, escultura y medios visuales para procesar emociones que las palabras no alcanzan. Cada obra es una ventana a tu mundo interior.',
    tag: 'Visualización · Autorretrato · Collage',
    tagColor: '#713ec1',
    tagBg: '#F0EAFB',
    contentBg: '#FFFFFF',
    imgUrl: 'https://images.unsplash.com/photo-1758521233203-672379b5072c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    imgRight: true,
  },
  {
    num: '02',
    numColor: '#32b8cc',
    title: 'Musicoterapia',
    desc: 'El sonido y la música como herramientas para regular el sistema nervioso, reducir la ansiedad y conectar con las emociones más profundas.',
    tag: 'Escucha activa · Improvisación · Ritmo',
    tagColor: '#1a9aad',
    tagBg: '#E8F9FD',
    contentBg: '#F8F4FF',
    imgUrl: 'https://images.unsplash.com/photo-1665481129158-286584e171ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    imgRight: false,
  },
  {
    num: '03',
    numColor: '#fc66b5',
    title: 'Terapia de Movimiento',
    desc: 'El cuerpo como mapa emocional. Danza, movimiento expresivo y técnicas somáticas para liberar tensiones acumuladas y reconectar con uno mismo.',
    tag: 'Danza · Expresión corporal · Somática',
    tagColor: '#fc66b5',
    tagBg: '#FFF0F9',
    contentBg: '#FFFFFF',
    imgUrl: 'https://images.unsplash.com/photo-1758598306400-aa82cbf24653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    imgRight: true,
  },
  {
    num: '04',
    numColor: '#713ec1',
    title: 'Escritura Terapéutica',
    desc: 'Narrativas, cartas, diarios y poesía como herramientas para ordenar pensamientos, sanar heridas y construir una historia de vida más compasiva.',
    tag: 'Diario · Narrativa · Poesía',
    tagColor: '#713ec1',
    tagBg: '#F0EAFB',
    contentBg: '#F8F4FF',
    imgUrl: 'https://images.unsplash.com/photo-1579840770754-7d9799c452eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    imgRight: false,
  },
]

const pqItems = [
  {
    num: '01',
    numBg: '#fc66b5',
    title: 'Vives con estrés o ansiedad',
    desc: 'Y buscas una salida creativa para liberar tensiones sin que se sienta como terapia tradicional.',
  },
  {
    num: '02',
    numBg: '#713ec1',
    title: 'Sientes que algo se quedó sin expresar',
    desc: 'Emociones reprimidas, bloqueos creativos o la necesidad de reconectar con tu mundo interior.',
  },
  {
    num: '03',
    numBg: '#32b8cc',
    title: 'Quieres crecer pero sin sermones',
    desc: 'Personas que buscan desarrollo personal de forma experiencial, lúdica y auténtica.',
  },
  {
    num: '04',
    numBg: '#fc66b5',
    title: 'Tu cuerpo siente lo que tus palabras no pueden decir',
    desc: 'Ideal para quienes la terapia verbal no ha sido suficiente y buscan un enfoque más corporal y sensorial.',
  },
]

const heroImages = [
  'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  'https://images.unsplash.com/photo-1679210208075-e70610a78080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  'https://images.unsplash.com/photo-1773709167638-1dc6bc8fe7b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  'https://images.unsplash.com/photo-1653569693215-3b1fc81d2b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
]

export default function ExpresaMentePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="w-full flex" style={{ height: 'auto', minHeight: '580px' }}>
        {/* Left content */}
        <div className="flex flex-col justify-center gap-8 px-5 md:px-[80px] py-[60px] w-full md:w-[680px] shrink-0 bg-white">
          {/* Breadcrumb */}
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/" className="text-[#AAAAAA] text-xs hover:text-[#713ec1]">Inicio</Link>
            <ChevronRight size={11} className="text-[#CCCCCC]" />
            <Link href="/servicios" className="text-[#AAAAAA] text-xs hover:text-[#713ec1]">Servicios</Link>
            <ChevronRight size={11} className="text-[#CCCCCC]" />
            <span className="text-[#32b8cc] text-xs font-semibold">ExpresaMente Creativa</span>
          </nav>

          {/* Tag */}
          <div className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full" style={{ background: '#E8F9FD' }}>
            <Palette size={15} style={{ color: '#32b8cc' }} />
            <span className="text-[#1a9aad] text-[13px] font-semibold">Terapia a través de la expresión creativa</span>
          </div>

          {/* Title */}
          <h1
            className="text-[56px] md:text-[80px] font-extrabold text-[#2D2D3A] leading-[0.95]"
            style={{ letterSpacing: '-3px' }}
          >
            Expresa.<br />Crea.<br />Sana.
          </h1>

          <p className="text-[#737f80] text-sm md:text-[17px] leading-[1.7] max-w-[520px]">
            Un espacio terapéutico donde el arte, la música, el movimiento y la escritura se convierten en el lenguaje del alma.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3.5">
            <Link
              href="/agendar"
              className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-bold text-white"
              style={{ background: 'linear-gradient(90deg, #32b8cc 0%, #713ec1 100%)' }}
            >
              Reservar sesión
            </Link>
            <Link
              href="#modalidades"
              className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold text-[#713ec1] bg-white"
              style={{ border: '2px solid #E0E0EE' }}
            >
              Ver modalidades ↓
            </Link>
          </div>
        </div>

        {/* Right: 2x2 image grid */}
        <div
          className="hidden md:flex flex-col flex-1 p-1 gap-1"
          style={{ background: '#F0EAFB' }}
        >
          <div className="flex gap-1 flex-1">
            <div className="flex-1 overflow-hidden rounded-xl">
              <img src={heroImages[0]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 overflow-hidden rounded-xl">
              <img src={heroImages[1]} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex gap-1 flex-1">
            <div className="flex-1 overflow-hidden rounded-xl">
              <img src={heroImages[2]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 overflow-hidden rounded-xl">
              <img src={heroImages[3]} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee bar ──────────────────────────────────────────────────── */}
      <div
        className="w-full flex items-center justify-center gap-10 overflow-hidden"
        style={{ height: '56px', background: 'linear-gradient(90deg, #32b8cc 0%, #713ec1 100%)' }}
      >
        {['Arte', 'Música', 'Movimiento', 'Escritura', 'Expresión', 'Creatividad', 'Transformación'].map((word, i) => (
          <div key={word} className="flex items-center gap-10 shrink-0">
            <span className="text-white text-[15px] font-bold tracking-[2px]">{word}</span>
            {i < 6 && <Sparkles size={14} className="text-white/50" />}
          </div>
        ))}
      </div>

      {/* ── Qué es ───────────────────────────────────────────────────────── */}
      <section className="w-full bg-white px-5 md:px-[120px] py-[80px] flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center w-full">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px" style={{ background: '#32b8cc' }} />
            <span className="text-[#32b8cc] text-[12px] font-extrabold tracking-[3px] uppercase">El programa</span>
            <div className="flex-1 h-px" style={{ background: '#32b8cc' }} />
          </div>
          <h2 className="text-[26px] md:text-[42px] font-extrabold text-[#2D2D3A] leading-[1.2] max-w-[840px]">
            ¿Qué es ExpresaMente Creativa?
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-[1000px] mt-2">
            <p className="text-[#737f80] text-sm md:text-base leading-[1.75] flex-1 text-left md:text-left">
              ExpresaMente Creativa es un programa terapéutico que utiliza el arte, la música, el movimiento y la escritura como vehículos de expresión emocional y transformación personal. No se necesita talento artístico — solo la voluntad de explorar y sanar.
            </p>
            <p className="text-[#737f80] text-sm md:text-base leading-[1.75] flex-1 text-left md:text-left">
              Basado en arteterapia, musicoterapia y terapia de movimiento, este programa está indicado para quienes encuentran difícil expresarse verbalmente o quienes buscan un camino complementario y creativo hacia el bienestar emocional.
            </p>
          </div>
        </div>

        {/* Stats block */}
        <div className="flex rounded-[20px] overflow-hidden w-full" style={{ background: '#F8F4FF' }}>
          {[
            { val: '60 min', label: 'por sesión', color: '#713ec1' },
            { val: '4', label: 'modalidades creativas', color: '#32b8cc' },
            { val: 'Todas', label: 'las edades', color: '#fc66b5' },
            { val: 'Online', label: 'y presencial', color: '#713ec1' },
          ].map((b, i) => (
            <div key={b.val} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1.5 flex-1 py-7 px-2">
                <span className="text-[20px] md:text-[26px] font-extrabold" style={{ color: b.color }}>{b.val}</span>
                <span className="text-[#737f80] text-[11px] md:text-[13px] text-center">{b.label}</span>
              </div>
              {i < 3 && <div className="w-px h-[60px]" style={{ background: 'rgba(113,62,193,0.145)' }} />}
            </div>
          ))}
        </div>
      </section>

      {/* ── Modalidades ──────────────────────────────────────────────────── */}
      <section id="modalidades" className="w-full" style={{ background: '#FAFAFA' }}>
        <div className="px-5 md:px-[120px] py-[64px] pb-10 flex flex-col gap-2.5">
          <span className="text-[#713ec1] text-[11px] font-extrabold tracking-[3px] uppercase">Las modalidades</span>
          <h2 className="text-[26px] md:text-[38px] font-extrabold text-[#2D2D3A]">Cuatro caminos hacia la expresión</h2>
        </div>

        {/* Modality rows */}
        <div className="flex flex-col">
          {modalities.map((mod) => (
            <div
              key={mod.num}
              className="flex flex-col md:flex-row"
              style={{ height: 'auto', minHeight: '260px' }}
            >
              {mod.imgRight ? (
                <>
                  {/* Content left */}
                  <div
                    className="flex flex-col justify-center gap-3 flex-1 px-5 md:px-[60px] py-10"
                    style={{ background: mod.contentBg }}
                  >
                    <span className="text-[13px] font-extrabold tracking-[2px]" style={{ color: mod.numColor }}>{mod.num}</span>
                    <h3 className="text-[#2D2D3A] text-[24px] md:text-[28px] font-extrabold">{mod.title}</h3>
                    <p className="text-[#737f80] text-sm md:text-[15px] leading-[1.6] max-w-[480px]">{mod.desc}</p>
                    <span
                      className="self-start px-3.5 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: mod.tagBg, color: mod.tagColor }}
                    >
                      {mod.tag}
                    </span>
                  </div>
                  {/* Image right */}
                  <div className="w-full md:w-[420px] h-[200px] md:h-auto shrink-0 overflow-hidden">
                    <img src={mod.imgUrl} alt={mod.title} className="w-full h-full object-cover" />
                  </div>
                </>
              ) : (
                <>
                  {/* Image left */}
                  <div className="w-full md:w-[420px] h-[200px] md:h-auto shrink-0 overflow-hidden">
                    <img src={mod.imgUrl} alt={mod.title} className="w-full h-full object-cover" />
                  </div>
                  {/* Content right */}
                  <div
                    className="flex flex-col justify-center gap-3 flex-1 px-5 md:px-[60px] py-10"
                    style={{ background: mod.contentBg }}
                  >
                    <span className="text-[13px] font-extrabold tracking-[2px]" style={{ color: mod.numColor }}>{mod.num}</span>
                    <h3 className="text-[#2D2D3A] text-[24px] md:text-[28px] font-extrabold">{mod.title}</h3>
                    <p className="text-[#737f80] text-sm md:text-[15px] leading-[1.6] max-w-[480px]">{mod.desc}</p>
                    <span
                      className="self-start px-3.5 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: mod.tagBg, color: mod.tagColor }}
                    >
                      {mod.tag}
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── ¿Para quién? ─────────────────────────────────────────────────── */}
      <section className="w-full">
        {/* Top: image + dark content */}
        <div className="flex flex-col md:flex-row" style={{ minHeight: '560px' }}>
          {/* Left image */}
          <div className="w-full md:w-[620px] h-[280px] md:h-auto shrink-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1752649935896-55f97dfe3c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
              alt="Para quién"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right dark content */}
          <div
            className="flex flex-col justify-center gap-8 flex-1 px-5 md:px-[80px] py-[60px]"
            style={{ background: '#100A22' }}
          >
            <span className="px-5 py-2 self-start rounded-full text-[#fc66b5] text-[13px] font-semibold" style={{ background: '#2A1040' }}>
              ¿Para quién es?
            </span>
            <h2 className="text-white text-[28px] md:text-[38px] font-extrabold leading-[1.15]">
              ExpresaMente es para ti si...
            </h2>
            <div className="flex flex-col gap-6">
              {pqItems.map((item) => (
                <div key={item.num} className="flex gap-5 items-start">
                  <div
                    className="w-10 h-10 rounded-[20px] flex items-center justify-center shrink-0"
                    style={{ background: item.numBg }}
                  >
                    <span className="text-white text-[13px] font-extrabold">{item.num}</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <span className="text-white text-base font-bold">{item.title}</span>
                    <span className="text-[#B8A8D0] text-sm leading-snug">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row" style={{ minHeight: '320px', background: '#0D0820' }}>
          <div className="flex flex-col justify-center gap-5 flex-1 px-5 md:px-[80px] py-[60px]">
            <h3 className="text-white text-[20px] md:text-[22px] font-bold leading-[1.3] max-w-[500px]">
              Cualquier momento es un buen momento para empezar.
            </h3>
            <p className="text-[#B8A8D0] text-sm md:text-base max-w-[500px]">
              No necesitas experiencia artística ni habilidad creativa. Solo la disposición de explorar.
            </p>
          </div>
          <div className="hidden md:block w-[560px] shrink-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524840127331-f2ca773ec28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="w-full flex flex-col items-center justify-center gap-8 px-5 md:px-[120px] py-[80px] text-center"
        style={{ background: 'linear-gradient(135deg, #fc66b5 0%, #713ec1 50%, #32b8cc 100%)', minHeight: '480px' }}
      >
        <div className="flex flex-col items-center gap-4 w-full max-w-[780px]">
          <span className="px-6 py-2 rounded-full text-white text-[13px] font-semibold" style={{ background: 'rgba(255,255,255,0.2)' }}>
            Empieza hoy
          </span>
          <h2 className="text-white text-[28px] md:text-[44px] font-extrabold leading-[1.2]">
            Descubre el poder de tu creatividad
          </h2>
          <p className="text-white/85 text-sm md:text-[17px]">
            Sesiones individuales y grupales disponibles. Primera consulta sin compromiso.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 w-full md:w-auto">
          <Link
            href="/agendar"
            className="flex items-center justify-center px-10 py-4 rounded-full text-base font-bold w-full md:w-auto"
            style={{ background: '#FFFFFF', color: '#713ec1' }}
          >
            Reservar sesión
          </Link>
          <Link
            href="/servicios"
            className="flex items-center justify-center px-10 py-4 rounded-full text-base font-semibold text-white w-full md:w-auto"
            style={{ border: '2px solid #FFFFFF' }}
          >
            Conocer más
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
