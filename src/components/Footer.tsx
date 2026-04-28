import Image from 'next/image'
import Link from 'next/link'

const servicios = [
  'Neurosalud Cognitiva y Emocional',
  'Neurohabilidades del Aprendizaje',
  'Neuropsicología Organizacional',
  'Línea de Atención en Psicología Clínica',
  'ExpresaMente Creativa',
  'Capacitación y Talleres',
]

const empresa = [
  { label: 'Quiénes Somos', href: '/quienes-somos' },
  { label: 'Nuestro Equipo', href: '/equipo' },
  { label: 'Cómo Trabajamos', href: '/como-trabajamos' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1A1035] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="/logo-footer.png"
              alt="NeuroAfectiva"
              width={240}
              height={66}
              className="h-[66px] w-auto mb-3"
            />
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Centro especializado en neuropsicología clínica y educativa en Bogotá. Acompañamos a niños, adolescentes y adultos hacia su bienestar cognitivo y emocional.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a href="https://www.instagram.com/neuroafectiva/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#713ec1] flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-2.5">
              {servicios.map((s) => (
                <li key={s}>
                  <Link href="/servicios" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-2.5">
              {empresa.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <span className="mt-0.5">📍</span>
                <span>Carrera 25 # 51-37 Of.201<br />Edificio Lamprea</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <span>319 351 7239 · 312 310 4318</span>
              </li>
              <li className="flex gap-2">
                <span>✉️</span>
                <span>neuroafectiva@gmail.com</span>
              </li>
              <li className="flex gap-2">
                <span>🕐</span>
                <span>Lun–Vie 8am–6pm<br />Sáb 8am–4pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} NeuroAfectiva. Todos los derechos reservados.</span>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-gray-400">Hecho por PRISXEL con ❤️</span>
            <Link href="/privacidad" className="hover:text-gray-300 transition-colors">Política de Privacidad</Link>
            <Link href="/terminos" className="hover:text-gray-300 transition-colors">Términos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
