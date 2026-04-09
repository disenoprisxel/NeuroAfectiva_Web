'use client'

import { useState } from 'react'
import {
  Brain, HeartPulse, Building2, User, Palette, Presentation,
  MapPin, Phone, Mail, CalendarCheck, ArrowRight, ShieldCheck, Timer, CircleX,
  Video, Calendar, ChevronDown, Check,
} from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  { id: 'neurohabilidades', icon: Brain, label: 'Neurohabilidades' },
  { id: 'neurosalud', icon: HeartPulse, label: 'Neurosalud Cognitiva' },
  { id: 'organizacional', icon: Building2, label: 'Psicología Organizacional' },
  { id: 'clinica', icon: User, label: 'Psicología Clínica' },
  { id: 'expresamente', icon: Palette, label: 'ExpresaMente Creativa' },
  { id: 'capacitacion', icon: Presentation, label: 'Capacitación y Talleres' },
]

const horarios = [
  { id: 'manana', label: 'Mañana' },
  { id: 'tarde', label: 'Tarde' },
  { id: 'noche', label: 'Noche' },
]

const howOptions = [
  'Redes sociales (Instagram / Facebook)',
  'Google / Internet',
  'Recomendación de un amigo o familiar',
  'Colegio o institución educativa',
  'Médico o profesional de salud',
  'Otro',
]

const steps = [
  { num: '1', bg: '#fc66b5', title: 'Envías tu solicitud', desc: 'Completa el formulario con tus datos y preferencias.' },
  { num: '2', bg: '#713ec1', title: 'Te confirmamos en 24h', desc: 'Nuestro equipo revisará tu solicitud y confirmará el horario.' },
  { num: '3', bg: '#32b8cc', title: '¡Nos vemos en la sesión!', desc: 'Presencial en Bogotá o virtual por videollamada.' },
]

const contactInfo = [
  {
    icon: MapPin,
    iconColor: '#713ec1', iconBg: '#EDE8FF',
    label: 'Ubicación',
    value: 'Carrera 25 # 51-37\nOf.201\nEdificio Lamprea',
  },
  {
    icon: Phone,
    iconColor: '#32b8cc', iconBg: '#D8F5F9',
    label: 'WhatsApp',
    value: '319 351 7239 - 312 310 4318',
  },
  {
    icon: Mail,
    iconColor: '#fc66b5', iconBg: '#FFE8F5',
    label: 'Correo',
    value: 'neuroafectiva@gmail.com',
  },
]

const schedule = [
  { day: 'Lunes a Viernes', hours: '8:00 am – 6:00 pm', available: true },
  { day: 'Sábados', hours: '8:00 am – 4:00 pm', available: true },
  { day: 'Domingos y festivos', hours: 'No disponible', available: false },
]

const reassure = [
  { icon: ShieldCheck, color: '#713ec1', text: 'Datos 100% confidenciales' },
  { icon: Timer, color: '#32b8cc', text: 'Respuesta en menos de 24 horas' },
  { icon: CircleX, color: '#fc66b5', text: 'Sin compromisos ni costos ocultos' },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AgendarPage() {
  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '', edad: '', ciudad: '',
    servicio: 'neurohabilidades', modalidad: 'presencial',
    fecha: '', horario: 'tarde', motivo: '', como: '', privacidad: false,
  })
  const [submitted, setSubmitted] = useState(false)

  function set(field: string, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent('Solicitud de cita — NeuroAfectiva.com')
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\nTeléfono: ${form.telefono}\nEdad: ${form.edad}\nCiudad: ${form.ciudad}\nServicio: ${form.servicio}\nModalidad: ${form.modalidad}\nFecha preferida: ${form.fecha}\nHorario: ${form.horario}\n\nMotivo de consulta:\n${form.motivo}\n\nCómo nos conoció: ${form.como}`
    )
    window.open(`mailto:neuroafectiva@gmail.com?subject=${subject}&body=${body}`)
    setSubmitted(true)
  }

  const inputClass = "w-full h-12 px-4 rounded-[10px] border-[1.5px] border-[#D1D5DB] bg-white text-sm text-[#1A1A2E] outline-none focus:border-[#713ec1] focus:ring-2 focus:ring-[#713ec1]/10 transition placeholder-[#9CA3AF]"

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="w-full flex flex-col items-center justify-center gap-3.5 px-5 text-center"
        style={{ height: '200px', background: 'linear-gradient(180deg, #FDF5FF 0%, #FFFFFF 100%)' }}
      >
        <span className="px-5 py-1.5 rounded-full text-[#713ec1] text-[13px] font-semibold" style={{ background: '#F0E6FF' }}>
          Atención especializada · Tu bienestar en manos expertas
        </span>
        <h1 className="text-[36px] md:text-[52px] font-black text-[#1A1A2E]">Agenda tu cita</h1>
        <p className="text-[#737f80] text-sm md:text-base">
          Reserva tu sesión en minutos. Confirmaremos tu cita en menos de 24 horas.
        </p>
      </section>

      {/* ── Main ─────────────────────────────────────────────────────────── */}
      <section className="w-full bg-white px-5 md:px-[120px] py-[60px]">
        <div className="flex flex-col md:flex-row gap-16 md:gap-20 w-full">

          {/* ── Form column ─────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0">
            {submitted ? (
              <div className="flex flex-col items-center gap-6 py-20 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #fc66b5 0%, #713ec1 100%)' }}
                >
                  <CalendarCheck size={36} className="text-white" />
                </div>
                <h2 className="text-[#1A1A2E] text-2xl font-bold">¡Solicitud enviada!</h2>
                <p className="text-[#737f80] text-sm max-w-sm leading-relaxed">
                  Hemos recibido tu solicitud. Nuestro equipo se pondrá en contacto contigo en menos de 24 horas para confirmar tu cita.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">

                {/* ── Sección 1: Datos personales ─────────────────────── */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-[14px] flex items-center justify-center" style={{ background: '#fc66b5' }}>
                      <span className="text-white text-[13px] font-extrabold">1</span>
                    </div>
                    <h2 className="text-[#1A1A2E] text-[18px] font-bold">Datos personales</h2>
                  </div>

                  {/* Nombre */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#374151] text-[13px] font-semibold">Nombre completo *</label>
                    <input
                      type="text"
                      required
                      value={form.nombre}
                      onChange={e => set('nombre', e.target.value)}
                      placeholder="Ej. María González"
                      className={inputClass}
                    />
                  </div>

                  {/* Email + Teléfono */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-[#374151] text-[13px] font-semibold">Correo electrónico *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => set('email', e.target.value)}
                        placeholder="correo@ejemplo.com"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-[#374151] text-[13px] font-semibold">WhatsApp / Teléfono *</label>
                      <input
                        type="tel"
                        required
                        value={form.telefono}
                        onChange={e => set('telefono', e.target.value)}
                        placeholder="+57 300 000 0000"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Edad + Ciudad */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-[#374151] text-[13px] font-semibold">Edad</label>
                      <input
                        type="number"
                        min="1"
                        value={form.edad}
                        onChange={e => set('edad', e.target.value)}
                        placeholder="Ej. 32"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-[#374151] text-[13px] font-semibold">Ciudad</label>
                      <input
                        type="text"
                        value={form.ciudad}
                        onChange={e => set('ciudad', e.target.value)}
                        placeholder="Bogotá"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* ── Sección 2: Tipo de servicio ─────────────────────── */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-[14px] flex items-center justify-center" style={{ background: '#713ec1' }}>
                      <span className="text-white text-[13px] font-extrabold">2</span>
                    </div>
                    <h2 className="text-[#1A1A2E] text-[18px] font-bold">Tipo de servicio</h2>
                  </div>

                  {/* Service grid */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-[#374151] text-[13px] font-semibold">¿Qué servicio te interesa? *</label>
                    <div className="flex flex-col gap-2.5">
                      <div className="flex flex-col md:flex-row gap-2.5">
                        {services.slice(0, 3).map(s => {
                          const Icon = s.icon
                          const active = form.servicio === s.id
                          return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => set('servicio', s.id)}
                              className="flex items-center gap-2.5 h-[52px] px-5 rounded-[10px] flex-1 transition"
                              style={{
                                background: active ? '#F5F3FF' : '#FFFFFF',
                                border: `1.5px solid ${active ? '#713ec1' : '#E5E7EB'}`,
                              }}
                            >
                              <Icon size={18} style={{ color: active ? '#713ec1' : '#9CA3AF' }} />
                              <span className="text-[13px] font-semibold" style={{ color: active ? '#713ec1' : '#6B7280' }}>
                                {s.label}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                      <div className="flex flex-col md:flex-row gap-2.5">
                        {services.slice(3).map(s => {
                          const Icon = s.icon
                          const active = form.servicio === s.id
                          return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => set('servicio', s.id)}
                              className="flex items-center gap-2.5 h-[52px] px-5 rounded-[10px] flex-1 transition"
                              style={{
                                background: active ? '#F5F3FF' : '#FFFFFF',
                                border: `1.5px solid ${active ? '#713ec1' : '#E5E7EB'}`,
                              }}
                            >
                              <Icon size={18} style={{ color: active ? '#713ec1' : '#9CA3AF' }} />
                              <span className="text-[13px] font-semibold" style={{ color: active ? '#713ec1' : '#6B7280' }}>
                                {s.label}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Modalidad */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-[#374151] text-[13px] font-semibold">Modalidad de atención *</label>
                    <div className="flex gap-3">
                      {/* Presencial */}
                      <button
                        type="button"
                        onClick={() => set('modalidad', 'presencial')}
                        className="flex items-center gap-2.5 flex-1 px-7 py-3.5 rounded-[10px] transition"
                        style={{
                          background: form.modalidad === 'presencial' ? '#F0FAFB' : '#FFFFFF',
                          border: `2px solid ${form.modalidad === 'presencial' ? '#32b8cc' : '#E5E7EB'}`,
                        }}
                      >
                        <div
                          className="w-9 h-9 rounded-[18px] flex items-center justify-center shrink-0"
                          style={{ background: form.modalidad === 'presencial' ? '#32b8cc' : '#E5E7EB' }}
                        >
                          <MapPin size={18} style={{ color: '#fff' }} />
                        </div>
                        <div className="flex flex-col gap-0.5 text-left">
                          <span className="text-[14px] font-bold" style={{ color: form.modalidad === 'presencial' ? '#32b8cc' : '#6B7280' }}>Presencial</span>
                          <span className="text-[12px]" style={{ color: form.modalidad === 'presencial' ? '#737f80' : '#9CA3AF' }}>Bogotá, Colombia</span>
                        </div>
                      </button>
                      {/* Virtual */}
                      <button
                        type="button"
                        onClick={() => set('modalidad', 'virtual')}
                        className="flex items-center gap-2.5 flex-1 px-7 py-3.5 rounded-[10px] transition"
                        style={{
                          background: form.modalidad === 'virtual' ? '#F0FAFB' : '#FFFFFF',
                          border: `2px solid ${form.modalidad === 'virtual' ? '#32b8cc' : '#E5E7EB'}`,
                        }}
                      >
                        <div
                          className="w-9 h-9 rounded-[18px] flex items-center justify-center shrink-0"
                          style={{ background: form.modalidad === 'virtual' ? '#32b8cc' : '#E5E7EB' }}
                        >
                          <Video size={18} style={{ color: '#fff' }} />
                        </div>
                        <div className="flex flex-col gap-0.5 text-left">
                          <span className="text-[14px] font-bold" style={{ color: form.modalidad === 'virtual' ? '#32b8cc' : '#6B7280' }}>Virtual</span>
                          <span className="text-[12px]" style={{ color: form.modalidad === 'virtual' ? '#737f80' : '#9CA3AF' }}>Videollamada / Online</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Fecha + Horario */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-[#374151] text-[13px] font-semibold">Fecha preferida *</label>
                      <div className="relative">
                        <input
                          type="date"
                          required
                          value={form.fecha}
                          onChange={e => set('fecha', e.target.value)}
                          className={inputClass}
                          style={{ paddingRight: '40px' }}
                        />
                        <Calendar size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-[#374151] text-[13px] font-semibold">Horario preferido *</label>
                      <div className="flex gap-2">
                        {horarios.map(h => {
                          const active = form.horario === h.id
                          return (
                            <button
                              key={h.id}
                              type="button"
                              onClick={() => set('horario', h.id)}
                              className="flex-1 h-12 rounded-[10px] text-[13px] font-semibold transition"
                              style={{
                                background: active ? '#FFF5FB' : '#FFFFFF',
                                border: `1.5px solid ${active ? '#fc66b5' : '#D1D5DB'}`,
                                color: active ? '#fc66b5' : '#9CA3AF',
                              }}
                            >
                              {h.label}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Sección 3: Cuéntanos más ────────────────────────── */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-[14px] flex items-center justify-center" style={{ background: '#32b8cc' }}>
                      <span className="text-white text-[13px] font-extrabold">3</span>
                    </div>
                    <h2 className="text-[#1A1A2E] text-[18px] font-bold">Cuéntanos más</h2>
                  </div>

                  {/* Motivo */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#374151] text-[13px] font-semibold">Motivo de consulta *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.motivo}
                      onChange={e => set('motivo', e.target.value)}
                      placeholder="Cuéntanos brevemente qué te trae a consulta, cómo te has sentido últimamente o qué esperas lograr con el proceso..."
                      className="w-full px-4 py-3 rounded-[10px] border-[1.5px] border-[#D1D5DB] bg-white text-sm text-[#1A1A2E] outline-none focus:border-[#713ec1] focus:ring-2 focus:ring-[#713ec1]/10 transition placeholder-[#9CA3AF] resize-none leading-[1.6]"
                    />
                  </div>

                  {/* Cómo nos conociste */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#374151] text-[13px] font-semibold">¿Cómo nos conociste?</label>
                    <div className="relative">
                      <select
                        value={form.como}
                        onChange={e => set('como', e.target.value)}
                        className="w-full h-12 pl-4 pr-10 rounded-[10px] border-[1.5px] border-[#D1D5DB] bg-white text-sm outline-none focus:border-[#713ec1] transition appearance-none text-[#9CA3AF]"
                      >
                        <option value="">Selecciona una opción</option>
                        {howOptions.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                      <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                    </div>
                  </div>

                  {/* Privacidad */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div
                      className="w-[18px] h-[18px] rounded-[4px] flex items-center justify-center shrink-0 mt-0.5 transition"
                      style={{ background: form.privacidad ? '#713ec1' : 'transparent', border: form.privacidad ? 'none' : '2px solid #D1D5DB' }}
                      onClick={() => set('privacidad', !form.privacidad)}
                    >
                      {form.privacidad && <Check size={12} className="text-white" />}
                    </div>
                    <span className="text-[#6B7280] text-[13px] leading-[1.5]">
                      Acepto el tratamiento de mis datos personales conforme a la Política de Privacidad de NeuroAfectiva.
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 w-full h-14 rounded-[14px] text-white text-base font-bold transition hover:opacity-90"
                  style={{ background: 'linear-gradient(90deg, #fc66b5 0%, #713ec1 100%)' }}
                >
                  <CalendarCheck size={22} className="text-white" />
                  Confirmar solicitud de cita
                  <ArrowRight size={20} className="text-white/70" />
                </button>
              </form>
            )}
          </div>

          {/* ── Info sidebar ────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6 w-full md:w-[380px] shrink-0">

            {/* Cómo funciona */}
            <div className="flex flex-col gap-6 rounded-[20px] p-8" style={{ background: '#1A0A2E' }}>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-white text-[18px] font-bold">¿Cómo funciona?</h3>
                <p className="text-[#9988C0] text-[14px]">Reservar tu cita es fácil y rápido.</p>
              </div>
              {steps.map(step => (
                <div key={step.num} className="flex gap-4 items-start">
                  <div
                    className="w-9 h-9 rounded-[18px] flex items-center justify-center shrink-0"
                    style={{ background: step.bg }}
                  >
                    <span className="text-white text-[14px] font-extrabold">{step.num}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-[14px] font-bold">{step.title}</span>
                    <span className="text-[#9988C0] text-[13px] leading-[1.5]">{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Contacto */}
            <div
              className="flex flex-col gap-5 rounded-[20px] p-7"
              style={{ background: '#F8F5FF', border: '1px solid #E8E0FF' }}
            >
              <h3 className="text-[#1A1A2E] text-[15px] font-bold">Información de contacto</h3>
              {contactInfo.map(item => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-3.5">
                    <div
                      className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center shrink-0"
                      style={{ background: item.iconBg }}
                    >
                      <Icon size={18} style={{ color: item.iconColor }} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#737f80] text-[12px]">{item.label}</span>
                      <span className="text-[#1A1A2E] text-[14px] font-semibold whitespace-pre-line leading-snug">{item.value}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Horarios */}
            <div
              className="flex flex-col gap-4 rounded-[20px] p-7"
              style={{ background: '#F0FAFB', border: '1px solid #C8EDF5' }}
            >
              <h3 className="text-[#1A1A2E] text-[15px] font-bold">Horarios de atención</h3>
              {schedule.map(s => (
                <div key={s.day} className="flex items-center justify-between">
                  <span className="text-[#737f80] text-[13px]">{s.day}</span>
                  <span
                    className="text-[13px] font-semibold"
                    style={{ color: s.available ? '#32b8cc' : '#9CA3AF' }}
                  >
                    {s.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reassurance bar ──────────────────────────────────────────────── */}
      <section
        className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-5 md:px-[120px] py-7"
        style={{ background: '#F5F3FF' }}
      >
        {reassure.map(r => {
          const Icon = r.icon
          return (
            <div key={r.text} className="flex items-center gap-2.5">
              <Icon size={20} style={{ color: r.color }} />
              <span className="text-[#374151] text-[14px]">{r.text}</span>
            </div>
          )
        })}
      </section>

    </>
  )
}
