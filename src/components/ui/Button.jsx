import React from "react"

/**
 * Bolt Media primary button. Fjalla One label, gentle radius,
 * brand-red fill with a steel-blue press. Mirrors the site's `.Btn`.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight = false,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 16px", fontSize: "13px" },
    md: { padding: "11px 22px", fontSize: "15px" },
    lg: { padding: "15px 30px", fontSize: "18px" },
  }

  const variants = {
    primary: {
      background: "var(--bolt-red-500)",
      color: "var(--paper-100)",
      border: "2px solid transparent",
    },
    secondary: {
      background: "var(--steel-500)",
      color: "var(--paper-100)",
      border: "2px solid transparent",
    },
    outline: {
      background: "transparent",
      color: "var(--steel-600)",
      border: "2px solid var(--steel-500)",
    },
    ghost: {
      background: "transparent",
      color: "var(--bolt-red-600)",
      border: "2px solid transparent",
    },
  }

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-heading)",
    letterSpacing: "var(--tracking-wide)",
    textTransform: "uppercase",
    lineHeight: 1,
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? "100%" : "auto",
    transition:
      "background var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
    ...sizes[size],
    ...variants[variant],
    ...style,
  }

  const hoverColors = {
    primary: "var(--bolt-red-600)",
    secondary: "var(--steel-600)",
    outline: "var(--steel-50)",
    ghost: "var(--bolt-red-50)",
  }

  const onEnter = (e) => {
    if (!disabled) e.currentTarget.style.background = hoverColors[variant]
  }
  const onLeave = (e) => {
    if (!disabled) e.currentTarget.style.background = variants[variant].background
  }
  const onDown = (e) => {
    if (!disabled) e.currentTarget.style.transform = "translateY(1px)"
  }
  const onUp = (e) => {
    if (!disabled) e.currentTarget.style.transform = "translateY(0)"
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {icon && !iconRight && <i className={icon} aria-hidden="true"></i>}
      {children}
      {icon && iconRight && <i className={icon} aria-hidden="true"></i>}
    </button>
  )
}
