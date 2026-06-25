// ── Bolt Media OKC — production server ───────────────────────
// Serves the Vite-built React SPA (dist/) and handles the contact
// form via nodemailer. Mirrors the deployment pattern used by the
// Sowle Ventures site on the same Hetzner/Kamal infrastructure.

import express from "express"
import helmet from "helmet"
import rateLimit from "express-rate-limit"
import nodemailer from "nodemailer"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000
const DIST = path.join(__dirname, "dist")

// Security headers. CSP is relaxed enough to allow the Google Fonts
// and Font Awesome CDN the design system relies on.
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com", "data:"],
        imgSrc: ["'self'", "data:"],
        connectSrc: ["'self'"],
      },
    },
    crossOriginEmbedderPolicy: false,
  }),
)

app.use(express.json({ limit: "16kb" }))

// Health check — used by kamal-proxy.
app.get("/health", (_req, res) => res.status(200).json({ status: "ok" }))

// ── Contact form ─────────────────────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: "Too many requests. Please try again later." },
})

function buildTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: String(process.env.SMTP_SECURE) === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })
}

app.post("/api/contact", contactLimiter, async (req, res) => {
  const { first = "", last = "", email = "", phone = "", message = "" } = req.body || {}

  if (!first.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ ok: false, error: "Name, email, and message are required." })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "Please provide a valid email address." })
  }

  const fullName = `${first} ${last}`.trim()
  const text = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    "",
    "Message:",
    message,
  ].join("\n")

  try {
    const transport = buildTransport()
    await transport.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Bolt Media contact request — ${fullName}`,
      text,
    })
    res.json({ ok: true })
  } catch (err) {
    console.error("Contact form error:", err.message)
    res.status(502).json({ ok: false, error: "Unable to send message right now." })
  }
})

// ── Static SPA ───────────────────────────────────────────────
app.use(express.static(DIST, { maxAge: "1h", index: false }))

// SPA fallback — every non-API route returns index.html.
app.get("*", (_req, res) => {
  res.sendFile(path.join(DIST, "index.html"))
})

app.listen(PORT, () => {
  console.log(`Bolt Media server listening on port ${PORT}`)
})
