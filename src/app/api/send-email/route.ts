import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { type, ...data } = body

    let subject = ''
    let html = ''

    if (type === 'contacto') {
      subject = `Nuevo mensaje de contacto — ${data.nombre}`
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f6ff; border-radius: 12px;">
          <h2 style="color: #713ec1; margin-bottom: 4px;">Nuevo mensaje de contacto</h2>
          <p style="color: #888; font-size: 13px; margin-top: 0;">Desde el formulario de NeuroAfectiva.com</p>
          <hr style="border: none; border-top: 1px solid #e0d4f7; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #333;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Nombre:</td><td>${data.nombre}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${data.email}" style="color: #713ec1;">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Teléfono:</td><td>${data.telefono}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Servicio:</td><td>${data.servicio}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e0d4f7; margin: 20px 0;" />
          <p style="font-weight: bold; font-size: 14px; color: #333; margin-bottom: 8px;">Motivo de consulta:</p>
          <p style="font-size: 14px; color: #555; background: #fff; padding: 14px; border-radius: 8px; border-left: 4px solid #713ec1;">${data.motivo || '—'}</p>
        </div>
      `
    } else if (type === 'agendar') {
      subject = `Solicitud de cita — ${data.nombre}`
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f6ff; border-radius: 12px;">
          <h2 style="color: #fc66b5; margin-bottom: 4px;">Nueva solicitud de cita</h2>
          <p style="color: #888; font-size: 13px; margin-top: 0;">Desde el formulario de Agendar Cita — NeuroAfectiva.com</p>
          <hr style="border: none; border-top: 1px solid #f5c0e0; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #333;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 160px;">Nombre:</td><td>${data.nombre}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${data.email}" style="color: #713ec1;">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Teléfono:</td><td>${data.telefono}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Edad:</td><td>${data.edad}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Ciudad:</td><td>${data.ciudad}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Servicio:</td><td>${data.servicio}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Modalidad:</td><td style="text-transform: capitalize;">${data.modalidad}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Fecha preferida:</td><td>${data.fecha || '—'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Horario:</td><td style="text-transform: capitalize;">${data.horario}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Cómo nos conoció:</td><td>${data.como || '—'}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #f5c0e0; margin: 20px 0;" />
          <p style="font-weight: bold; font-size: 14px; color: #333; margin-bottom: 8px;">Motivo de consulta:</p>
          <p style="font-size: 14px; color: #555; background: #fff; padding: 14px; border-radius: 8px; border-left: 4px solid #fc66b5;">${data.motivo || '—'}</p>
        </div>
      `
    } else {
      return NextResponse.json({ error: 'Tipo de formulario inválido' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'NeuroAfectiva <onboarding@resend.dev>',
      to: ['neuroafectiva@gmail.com'],
      replyTo: data.email,
      subject,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
