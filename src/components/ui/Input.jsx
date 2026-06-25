import React from "react"

/**
 * Labeled text input matching the brand contact form — white field,
 * soft radius, steel focus ring, Mulish label.
 */
export function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  hint,
  icon,
  style,
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined)
  const [focused, setFocused] = React.useState(false)

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "14px",
            color: "var(--text-primary)",
          }}
        >
          {label}
          {required && <span style={{ color: "var(--bolt-red-500)" }}> *</span>}
        </label>
      )}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {icon && (
          <i
            className={icon}
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "14px",
              color: "var(--ink-200)",
              fontSize: "14px",
              pointerEvents: "none",
            }}
          ></i>
        )}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "var(--text-primary)",
            background: "var(--surface-card)",
            border: `1.5px solid ${focused ? "var(--steel-400)" : "var(--border-default)"}`,
            borderRadius: "var(--radius-sm)",
            padding: icon ? "11px 14px 11px 38px" : "11px 14px",
            outline: "none",
            boxShadow: focused ? "var(--shadow-focus)" : "none",
            transition:
              "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
          }}
          {...rest}
        />
      </div>
      {hint && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-secondary)" }}>{hint}</span>
      )}
    </div>
  )
}
