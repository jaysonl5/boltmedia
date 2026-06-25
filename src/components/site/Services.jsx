import React from "react"
import { Eyebrow } from "../ui/Eyebrow.jsx"
import { ServiceCard } from "../ui/ServiceCard.jsx"

const ITEMS = [
  {
    icon: "fa-solid fa-laptop-code",
    title: "Custom Web Platforms",
    tone: "brand",
    body: "Tailored web apps and customer portals, designed around your business — not a template.",
  },
  {
    icon: "fa-solid fa-plug-circle-bolt",
    title: "Integration & Tooling",
    tone: "steel",
    body: "We wire your existing systems together and build the internal tools your team has been asking for.",
  },
  {
    icon: "fa-solid fa-boxes-stacked",
    title: "Inventory Tracking",
    tone: "green",
    body: "Real-time stock and asset tracking software tuned to how your warehouse actually runs.",
  },
  {
    icon: "fa-solid fa-robot",
    title: "AI Consulting & Automation",
    tone: "brand",
    body: "Practical AI and workflow automation that takes the busywork off your team’s plate.",
  },
]

export function Services() {
  return (
    <section id="services" style={{ background: "var(--paper-100)", padding: "88px 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Eyebrow>What we build</Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "40px",
            letterSpacing: "var(--tracking-wide)",
            color: "var(--text-primary)",
            margin: "14px 0 8px",
          }}
        >
          Software that fits how you work
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "17px",
            color: "var(--text-secondary)",
            maxWidth: "56ch",
            margin: "0 0 44px",
          }}
        >
          Just a few of the things we do well, all under one roof, all built right here in OKC.
        </p>
        <div className="bm-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          {ITEMS.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} tone={s.tone}>
              {s.body}
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  )
}
