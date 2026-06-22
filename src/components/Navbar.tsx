'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes Somos', href: '/quienes-somos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Equipo', href: '/equipo' },
  { label: 'Cómo Trabajamos', href: '/como-trabajamos' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-navbar.png"
              alt="CognyVita"
              width={338}
              height={90}
              className="w-auto h-[5.625rem] lg:h-[8.436rem]"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-semibold pb-1.5 transition-colors duration-200 group ${
                    active
                      ? 'text-[#8537D8]'
                      : 'text-gray-700 hover:text-[#8537D8]'
                  }`}
                >
                  {link.label}
                  {/* Gradient underline — solid when active, faint on hover */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2.5px] rounded-full transition-all duration-300 ${
                      active
                        ? 'w-full opacity-100'
                        : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-40'
                    }`}
                    style={{ background: 'linear-gradient(90deg, #F545B4 0%, #8537D8 100%)' }}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/agendar"
              className="text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-md hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(90deg, #F545B4 0%, #8537D8 100%)' }}
            >
              Agendar Cita
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold py-3 border-b border-gray-50 transition-all pl-4 rounded-lg ${
                    active
                      ? 'text-[#8537D8] bg-[#EDE5FF] border-l-[3px] border-l-[#8537D8]'
                      : 'text-gray-700 hover:text-[#8537D8] hover:bg-gray-50 border-l-[3px] border-l-transparent'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/agendar"
              className="mt-4 text-white text-sm font-bold px-6 py-3 rounded-full text-center hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(90deg, #F545B4 0%, #8537D8 100%)' }}
              onClick={() => setMenuOpen(false)}
            >
              Agendar Cita
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
