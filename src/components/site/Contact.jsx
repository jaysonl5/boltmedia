import React from "react"
import { Eyebrow } from "../ui/Eyebrow.jsx"
import { Input } from "../ui/Input.jsx"
import { Textarea } from "../ui/Textarea.jsx"
import { Button } from "../ui/Button.jsx"

// Contact section over the OKC image, with a real submit to /api/contact.
export function Contact() {
  const [status, setStatus] = React.useState("idle") // idle | sending | sent | error
  const [form, setForm] = React.useState({ first: "", last: "", email: "", phone: "", message: "" })
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" style={{ position: "relative", padding: "88px 32px" }}>
      <div
        style={{ position: "absolute", inset: 0, background: "url('/assets/okc-scissortail.jpeg') center/cover" }}
      ></div>
      <div style={{ position: "absolute", inset: 0, background: "rgba(43,88,119,.92)" }}></div>
      <div style={{ position: "relative", maxWidth: "1040px", margin: "0 auto" }}>
        <Eyebrow color="var(--bolt-red-400)">Let&rsquo;s talk</Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            textTransform: "uppercase",
            fontSize: "52px",
            letterSpacing: ".02em",
            color: "var(--paper-100)",
            margin: "10px 0 32px",
          }}
        >
          Start a project
        </h2>
        <div
          className="bm-contact-grid"
          style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "40px", alignItems: "start" }}
        >
          <div
            style={{
              background: "rgba(255,245,234,.97)",
              borderRadius: "var(--radius-lg)",
              padding: "28px",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "36px 12px" }}>
                <i className="fa-solid fa-circle-check" style={{ fontSize: "44px", color: "var(--green-500)" }}></i>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "24px",
                    color: "var(--text-primary)",
                    margin: "16px 0 6px",
                  }}
                >
                  Message sent!
                </h3>
                <p style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", margin: 0 }}>
                  We&rsquo;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", gap: "16px" }}>
                  <Input label="First name" value={form.first} onChange={upd("first")} required style={{ flex: 1 }} />
                  <Input label="Last name" value={form.last} onChange={upd("last")} required style={{ flex: 1 }} />
                </div>
                <Input
                  label="Email"
                  type="email"
                  icon="fa-solid fa-envelope"
                  value={form.email}
                  onChange={upd("email")}
                  required
                />
                <Input label="Phone" type="tel" icon="fa-solid fa-phone" value={form.phone} onChange={upd("phone")} />
                <Textarea
                  label="What are you building?"
                  rows={4}
                  value={form.message}
                  onChange={upd("message")}
                  required
                />
                {status === "error" && (
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--bolt-red-600)", margin: 0 }}>
                    Something went wrong sending your message. Please email contact@boltmediaokc.com directly.
                  </p>
                )}
                <Button
                  type="submit"
                  variant="primary"
                  icon="fa-solid fa-angles-right"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send it"}
                </Button>
              </form>
            )}
          </div>
          <div style={{ color: "var(--paper-100)", fontFamily: "var(--font-body)" }}>
            <p style={{ fontSize: "18px", fontWeight: 600, display: "flex", alignItems: "center", gap: "12px" }}>
              <i className="fa-solid fa-phone"></i> 918.527.0315
            </p>
            <p style={{ fontSize: "18px", fontWeight: 600, display: "flex", alignItems: "center", gap: "12px" }}>
              <i className="fa-solid fa-envelope"></i> contact@boltmediaokc.com
            </p>
            <p style={{ fontSize: "18px", fontWeight: 600, display: "flex", alignItems: "center", gap: "12px" }}>
              <i className="fa-solid fa-location-dot"></i> Oklahoma City, OK
            </p>
            <div style={{ display: "flex", gap: "20px", marginTop: "24px", fontSize: "24px" }}>
              <a href="https://www.github.com/jaysonl5" target="_blank" rel="noreferrer" style={socialStyle}>
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://twitter.com/boltokc" target="_blank" rel="noreferrer" style={socialStyle}>
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/jayson-lewis-90737951/"
                target="_blank"
                rel="noreferrer"
                style={socialStyle}
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/boltmediaokc/" target="_blank" rel="noreferrer" style={socialStyle}>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const socialStyle = { color: "var(--paper-100)", cursor: "pointer" }
