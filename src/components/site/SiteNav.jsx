import React from "react"
import { Button } from "../ui/Button.jsx"

const LINKS = [
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
]

// Top navigation bar — transparent over the hero, ink-blur once scrolled.
export function SiteNav({ onNav }) {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20)
    f()
    window.addEventListener("scroll", f, { passive: true })
    return () => window.removeEventListener("scroll", f)
  }, [])

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(38,48,61,.96)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,245,234,.1)" : "1px solid transparent",
        transition: "background .25s ease, border-color .25s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="/assets/bolt-logo.svg"
          alt="Bolt Media OKC"
          style={{ height: "50px", cursor: "pointer" }}
          onClick={() => onNav("home")}
        />
        <nav className="bm-nav-links" style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {LINKS.map((l) => (
            <button
              key={l.id}
              className="bm-nav-textlink"
              onClick={() => onNav(l.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-heading)",
                fontSize: "15px",
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-wide)",
                color: "var(--paper-100)",
                paddingBottom: "4px",
                borderBottom: "3px solid transparent",
                transition: "color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--bolt-red-400)"
                e.currentTarget.style.borderBottomColor = "var(--bolt-red-500)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--paper-100)"
                e.currentTarget.style.borderBottomColor = "transparent"
              }}
            >
              {l.label}
            </button>
          ))}
          <Button size="sm" variant="primary" icon="fa-solid fa-bolt" onClick={() => onNav("contact")}>
            Start a project
          </Button>
        </nav>
      </div>
    </header>
  )
}
