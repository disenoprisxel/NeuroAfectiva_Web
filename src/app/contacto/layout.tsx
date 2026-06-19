import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto — CognyVita',
  description: 'Contáctanos para agendar tu consulta de neuropsicología en Bogotá. Atención 100% virtual. Escríbenos por WhatsApp o correo a cognyvita@gmail.com.',
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children
}
