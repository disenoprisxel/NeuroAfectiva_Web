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
              width={160}
              height={44}
              className="h-11 w-auto mb-3"
            />
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Centro especializado en neuropsicología clínica y educativa en Bogotá. Acompañamos a niños, adolescentes y adultos hacia su bienestar cognitivo y emocional.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#713ec1] flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
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
          <div className="flex gap-4">
            <Link href="/privacidad" className="hover:text-gray-300 transition-colors">Política de Privacidad</Link>
            <Link href="/terminos" className="hover:text-gray-300 transition-colors">Términos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
