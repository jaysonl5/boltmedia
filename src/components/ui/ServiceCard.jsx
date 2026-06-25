import React from "react"
import { Card } from "./Card.jsx"

/**
 * Service offering card — icon medallion, title, blurb. Used on the
 * marketing site to present "what we build".
 */
export function ServiceCard({ icon = "fa-solid fa-bolt", title, children, tone = "brand", style }) {
  const tones = {
    brand: ["var(--bolt-red-50)", "var(--bolt-red-500)"],
    steel: ["var(--steel-50)", "var(--steel-500)"],
    green: ["var(--green-50)", "var(--green-600)"],
  }
  const [bg, fg] = tones[tone] || tones.brand

  return (
    <Card hover style={style}>
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "var(--radius-md)",
          background: bg,
          color: fg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
          marginBottom: "var(--space-4)",
        }}
      >
        <i className={icon} aria-hidden="true"></i>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "20px",
          letterSpacing: "var(--tracking-wide)",
          color: "var(--text-primary)",
          margin: "0 0 8px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "15px",
          lineHeight: "var(--leading-normal)",
          color: "var(--text-secondary)",
          margin: 0,
        }}
      >
        {children}
      </p>
    </Card>
  )
}
