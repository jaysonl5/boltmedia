import React from "react"

/**
 * Generic surface card. White, soft layered shadow, gentle radius.
 * Optional hover lift. The base container for most content blocks.
 */
export function Card({ children, padding = "var(--space-5)", hover = false, accent, style, ...rest }) {
  const [lift, setLift] = React.useState(false)
  return (
    <div
      onMouseEnter={() => hover && setLift(true)}
      onMouseLeave={() => hover && setLift(false)}
      style={{
        background: "var(--surface-card)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border-subtle)",
        borderTop: accent ? `3px solid ${accent}` : "1px solid var(--border-subtle)",
        boxShadow: lift ? "var(--shadow-lg)" : "var(--shadow-md)",
        padding,
        transform: lift ? "translateY(-4px)" : "translateY(0)",
        transition:
          "transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
