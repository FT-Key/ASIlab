import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import mongoSanitize from 'express-mongo-sanitize'
import hpp from 'hpp'
import morgan from 'morgan'
import routes from './routes/index.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST_PATH = path.resolve(__dirname, '../../frontend/dist')
const HAS_DIST = fs.existsSync(path.join(DIST_PATH, 'index.html'))
const SERVE_STATIC = process.env.SERVE_STATIC !== '0' && HAS_DIST

const app = express()

// --- Security Headers (Helmet) ---
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      fontSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
      upgradeInsecureRequests: [],
    },
  },
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: { policy: 'same-origin' },
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
  noSniff: true,
  xssFilter: true,
  hidePoweredBy: true,
  frameguard: { action: 'deny' },
  permittedCrossDomainPolicies: { permittedPolicies: 'none' },
}))

// --- Rate Limiting ---
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiadas solicitudes, intenta de nuevo en 15 minutos.' },
  keyGenerator: (req) => req.ip,
})

const mutationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiadas solicitudes de escritura, intenta de nuevo en 15 minutos.' },
  keyGenerator: (req) => req.ip,
})

const strictLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Límite de eliminación alcanzado, intenta de nuevo en 15 minutos.' },
  keyGenerator: (req) => req.ip,
})

app.use(globalLimiter)

// --- CORS ---
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:4001',
  'http://localhost:3000',
]
if (process.env.ALLOWED_ORIGIN) {
  allowedOrigins.push(process.env.ALLOWED_ORIGIN)
}

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('No permitido por CORS'))
    }
  },
  methods: ['GET', 'HEAD'],
  allowedHeaders: ['Content-Type'],
  credentials: false,
  maxAge: 86400,
}))

// Re-enable methods for mutation routes specifically
app.use('/api/topics', cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('No permitido por CORS'))
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: false,
}))

// --- Body Parsing with limits ---
app.use(express.json({ limit: '50kb' }))
app.use(express.urlencoded({ extended: false, limit: '50kb' }))

// --- NoSQL Injection Sanitization ---
app.use(mongoSanitize({
  replaceWith: '_',
  onSanitize: ({ req, key }) => {
    console.warn(`[SECURITY] Campo sanitizado: ${key} en ${req.method} ${req.originalUrl}`)
  },
}))

// --- HTTP Parameter Pollution Protection ---
app.use(hpp())

// --- Request Logging ---
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))
}

// --- Rate limiting for mutating endpoints (must run BEFORE the router) ---
app.use('/api', (req, res, next) => {
  if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
    return mutationLimiter(req, res, next)
  }
  next()
})

app.use('/api/topics', (req, res, next) => {
  if (req.method === 'DELETE') {
    return strictLimiter(req, res, next)
  }
  next()
})

// --- Routes ---
app.use('/api', routes)

// --- Static File Serving ---
if (SERVE_STATIC) {
  app.use(express.static(DIST_PATH, {
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache')
      } else if (filePath.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$/)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
      }
    },
  }))
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(DIST_PATH, 'index.html'))
  })
  console.log(`📦 Sirviendo frontend desde ${DIST_PATH}`)
} else {
  app.get('/', (_req, res) => {
    res.json({
      name: 'Administracion de Sistemas de Informacion API',
      endpoints: ['/api/health', '/api/topics', '/api/topics/:slug', '/api/categories', '/api/glossary'],
    })
  })
}

// --- Global Error Handler (no stack trace leaks) ---
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500
  const message = process.env.NODE_ENV === 'production'
    ? 'Error interno del servidor'
    : err.message || 'Error interno del servidor'

  if (status >= 500) {
    console.error(`[ERROR] ${err.message}`, process.env.NODE_ENV !== 'production' ? err.stack : '')
  }

  res.status(status).json({
    error: message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  })
})

export default app
