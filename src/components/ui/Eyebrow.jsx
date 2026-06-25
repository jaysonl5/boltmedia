import React from "react"

/**
 * Eyebrow / section label — uppercase mono kicker with a bolt tick.
 */
export function Eyebrow({ children, color = "var(--bolt-red-500)", showTick = true, style, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: "var(--tracking-wider)",
        textTransform: "uppercase",
        color,
        ...style,
      }}
      {...rest}
    >
      {showTick && (
        <span style={{ width: "18px", height: "2px", background: "currentColor", display: "inline-block" }}></span>
      )}
      {children}
    </span>
  )
}
