import type { Metadata } from 'next'
import { Outfit, Nunito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ParallaxInit from '@/components/ParallaxInit'
import AnimateInit from '@/components/AnimateInit'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'NeuroAfectiva — Neuropsicología Clínica y Educativa en Bogotá',
  description: 'Centro especializado en neuropsicología clínica y educativa. Evaluación, diagnóstico e intervención para TDAH, Autismo, Dislexia y más. Bogotá, Colombia.',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${outfit.variable} ${nunito.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ParallaxInit />
        <AnimateInit />
      </body>
    </html>
  )
}
