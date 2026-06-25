import React from "react"

/**
 * Small status/label badge. Pill or square, tinted by tone.
 */
export function Badge({ children, tone = "neutral", variant = "soft", icon, style, ...rest }) {
  const tones = {
    neutral: { soft: ["var(--ink-50)", "var(--ink-500)"], solid: ["var(--ink-500)", "var(--paper-100)"] },
    brand: { soft: ["var(--bolt-red-50)", "var(--bolt-red-700)"], solid: ["var(--bolt-red-500)", "var(--paper-100)"] },
    steel: { soft: ["var(--steel-50)", "var(--steel-700)"], solid: ["var(--steel-500)", "var(--paper-100)"] },
    success: { soft: ["var(--green-50)", "var(--green-700)"], solid: ["var(--green-500)", "var(--paper-100)"] },
    warning: { soft: ["var(--amber-100)", "var(--amber-700)"], solid: ["var(--amber-500)", "var(--ink-700)"] },
  }
  const [bg, fg] = tones[tone][variant]

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: bg,
        color: fg,
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "var(--tracking-wide)",
        textTransform: "uppercase",
        padding: "4px 10px",
        borderRadius: "var(--radius-pill)",
        lineHeight: 1.4,
        ...style,
      }}
      {...rest}
    >
      {icon && <i className={icon} aria-hidden="true"></i>}
      {children}
    </span>
  )
}
