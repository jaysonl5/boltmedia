import React from "react"

/**
 * Multi-line textarea, visually matched to Input.
 */
export function Textarea({ label, id, placeholder, value, onChange, required = false, rows = 4, hint, style, ...rest }) {
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
      <textarea
        id={inputId}
        rows={rows}
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
          padding: "11px 14px",
          outline: "none",
          resize: "vertical",
          boxShadow: focused ? "var(--shadow-focus)" : "none",
          transition:
            "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
        }}
        {...rest}
      />
      {hint && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-secondary)" }}>{hint}</span>
      )}
    </div>
  )
}
