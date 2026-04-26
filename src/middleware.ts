import { NextRequest, NextResponse } from 'next/server'

/**
 * Rate Limiting — Edge Middleware
 * ─────────────────────────────────────────────────────────────────────────────
 * Implementa un limitador de tasa de peticiones (sliding-window por IP)
 * directamente en el Edge Runtime de Next.js / Vercel, sin dependencias externas.
 *
 * Límites configurados:
 *   - Rutas de API (/api/*):           30 req / 60 s por IP
 *   - Formulario de agendamiento:      10 req / 60 s por IP
 *   - Resto de páginas públicas:      120 req / 60 s por IP
 *
 * Nota: el store es in-memory por instancia Edge. En producción con múltiples
 * instancias, considerar Upstash Redis para un límite global. Para el volumen
 * esperado de una clínica de neuropsicología, esta implementación es suficiente.
 */

// ─── Configuración ────────────────────────────────────────────────────────────
const WINDOW_MS = 60 * 1000 // 1 minuto

const LIMITS: Array<{ pattern: RegExp; max: number }> = [
  { pattern: /^\/api\//,        max: 30  },  // API endpoints
  { pattern: /^\/agendar/,      max: 10  },  // Formulario de cita
  { pattern: /^\//,             max: 120 },  // Páginas públicas
]

// ─── Store en memoria ─────────────────────────────────────────────────────────
interface Record { count: number; resetAt: number }
const store = new Map<string, Record>()

// Limpieza periódica para evitar memory leaks (cada 500 entradas nuevas)
let entriesSinceCleanup = 0
function maybeCleanup(now: number) {
  if (++entriesSinceCleanup < 500) return
  entriesSinceCleanup = 0
  for (const [key, val] of store.entries()) {
    if (now > val.resetAt) store.delete(key)
  }
}

// ─── Middleware ───────────────────────────────────────────────────────────────
export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname

  // Determinar el límite aplicable según la ruta
  const limit = LIMITS.find(l => l.pattern.test(pathname))?.max ?? 120

  // Obtener IP del cliente
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'

  const key = `${ip}:${pathname.split('/')[1] ?? ''}`
  const now = Date.now()

  maybeCleanup(now)

  const record = store.get(key)

  if (!record || now > record.resetAt) {
    // Nueva ventana
    store.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return addRateLimitHeaders(NextResponse.next(), 1, limit, now + WINDOW_MS)
  }

  record.count++

  if (record.count > limit) {
    const retryAfter = Math.ceil((record.resetAt - now) / 1000)
    return new NextResponse(
      JSON.stringify({
        error: 'Demasiadas solicitudes. Por favor espera un momento antes de intentarlo de nuevo.',
        retryAfter,
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': String(retryAfter),
          'X-RateLimit-Limit': String(limit),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': String(Math.ceil(record.resetAt / 1000)),
        },
      }
    )
  }

  return addRateLimitHeaders(NextResponse.next(), record.count, limit, record.resetAt)
}

function addRateLimitHeaders(
  res: NextResponse,
  count: number,
  limit: number,
  resetAt: number
): NextResponse {
  res.headers.set('X-RateLimit-Limit', String(limit))
  res.headers.set('X-RateLimit-Remaining', String(Math.max(0, limit - count)))
  res.headers.set('X-RateLimit-Reset', String(Math.ceil(resetAt / 1000)))
  return res
}

// ─── Matcher ──────────────────────────────────────────────────────────────────
export const config = {
  matcher: [
    /*
     * Aplica a todas las rutas excepto:
     * - Archivos estáticos de Next.js (_next/static, _next/image)
     * - Archivos públicos con extensión conocida (favicon, imágenes, fuentes, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|otf|css|js)$).*)',
  ],
}
