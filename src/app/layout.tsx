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
  title: 'CognyVita — Neuropsicología Clínica y Educativa en Bogotá',
  description: 'Centro especializado en neuropsicología clínica y educativa. Evaluación, diagnóstico e intervención para TDAH, Autismo, Dislexia y más. Bogotá, Colombia.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'CognyVita — Neuropsicología Clínica y Educativa en Bogotá',
    description: 'Centro especializado en neuropsicología clínica y educativa. Evaluación, diagnóstico e intervención para TDAH, Autismo, Dislexia y más. Bogotá, Colombia.',
    url: 'https://cognyvita.com',
    siteName: 'CognyVita',
    images: [
      {
        url: 'https://cognyvita.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CognyVita — Neuropsicología Clínica y Educativa',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CognyVita — Neuropsicología Clínica y Educativa en Bogotá',
    description: 'Centro especializado en neuropsicología clínica y educativa. Evaluación, diagnóstico e intervención para TDAH, Autismo, Dislexia y más. Bogotá, Colombia.',
    images: ['https://cognyvita.com/og-image.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'CognyVita',
  description: 'Centro especializado en neuropsicología clínica y educativa. Evaluación, diagnóstico e intervención para TDAH, Autismo, Dislexia y más.',
  url: 'https://cognyvita.com',
  logo: 'https://cognyvita.com/logo-navbar.png',
  image: 'https://cognyvita.com/og-image.jpg',
  telephone: '+573193517239',
  email: 'cognyvita@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bogotá',
    addressRegion: 'Cundinamarca',
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 4.7110,
    longitude: -74.0721,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '16:00',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'COP',
  medicalSpecialty: 'Neuropsychology',
  availableService: [
    { '@type': 'MedicalTherapy', name: 'Neurosalud Cognitiva y Emocional' },
    { '@type': 'MedicalTherapy', name: 'Neurohabilidades del Aprendizaje' },
    { '@type': 'MedicalTherapy', name: 'Neuropsicología Organizacional' },
    { '@type': 'MedicalTherapy', name: 'Psicología Clínica' },
    { '@type': 'MedicalTherapy', name: 'ExpresaMente Creativa' },
    { '@type': 'MedicalTherapy', name: 'Capacitación y Talleres' },
  ],
  sameAs: [
    'https://www.instagram.com/neuroafectiva/',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${outfit.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
