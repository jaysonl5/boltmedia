import React from "react"

export function Footer() {
  return (
    <footer style={{ background: "var(--ink-600)", padding: "32px", color: "var(--ink-200)" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <img src="/assets/bolt-logo.svg" alt="Bolt Media OKC" style={{ height: "34px" }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>
          &copy; {new Date().getFullYear()} Bolt Media OKC &middot; Built in Oklahoma City
        </span>
      </div>
    </footer>
  )
}
