import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agendar Cita — CognyVita',
  description: 'Agenda tu cita de neuropsicología con CognyVita. Evaluación, diagnóstico e intervención para TDAH, Autismo, Dislexia y más. Atención virtual para toda Colombia.',
}

export default function AgendarLayout({ children }: { children: React.ReactNode }) {
  return children
}
