import React from "react"
import { Eyebrow } from "../ui/Eyebrow.jsx"

const PHASES = [
  {
    n: "01",
    phase: "Discovery",
    icon: "fa-solid fa-comments",
    title: "First, we talk",
    body: "We sit down, learn how your business actually runs, and pin down what you really need.",
  },
  {
    n: "02",
    phase: "Plan & Scope",
    icon: "fa-solid fa-map",
    title: "Map it out",
    body: "A clear scope, an honest timeline, and a flat quote up front. No surprise invoices.",
  },
  {
    n: "03",
    phase: "Design",
    icon: "fa-solid fa-pen-ruler",
    title: "Sketch it together",
    body: "You see wireframes and clickable prototypes early, while changes are still cheap.",
  },
  {
    n: "04",
    phase: "Build",
    icon: "fa-solid fa-code",
    title: "Build in the open",
    body: "We work in short cycles and share progress often, so you are never left wondering.",
  },
  {
    n: "05",
    phase: "Test & Refine",
    icon: "fa-solid fa-vial-circle-check",
    title: "Test & tighten",
    body: "We test it hard, smooth out the rough edges, and tune it with your feedback in hand.",
  },
  {
    n: "06",
    phase: "Launch & Support",
    icon: "fa-solid fa-life-ring",
    title: "Launch & look after",
    body: "We ship it, then stick around for updates, fixes, and the questions that come later.",
  },
]

export function Process() {
  return (
    <section id="process" style={{ background: "var(--surface-card)", padding: "88px 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Eyebrow color="var(--steel-500)">How we work</Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "40px",
            letterSpacing: "var(--tracking-wide)",
            color: "var(--text-primary)",
            margin: "14px 0 8px",
          }}
        >
          A simple, no-surprises process
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "17px",
            color: "var(--text-secondary)",
            maxWidth: "60ch",
            margin: "0 0 44px",
          }}
        >
          Six plain-English steps, the same every time. You always know where your project stands and who to call.
        </p>
        <div className="bm-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {PHASES.map((p) => (
            <div
              key={p.n}
              style={{
                position: "relative",
                background: "var(--paper-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-lg)",
                padding: "24px",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "14px",
                  fontFamily: "var(--font-display)",
                  fontSize: "52px",
                  color: "var(--paper-300)",
                  lineHeight: 1,
                }}
              >
                {p.n}
              </span>
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--steel-500)",
                  color: "var(--paper-100)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "19px",
                  marginBottom: "16px",
                }}
              >
                <i className={p.icon} aria-hidden="true"></i>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "var(--tracking-wider)",
                  textTransform: "uppercase",
                  color: "var(--bolt-red-500)",
                  marginBottom: "6px",
                }}
              >
                {p.phase}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "21px",
                  letterSpacing: "var(--tracking-wide)",
                  color: "var(--text-primary)",
                  margin: "0 0 8px",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  lineHeight: 1.55,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
