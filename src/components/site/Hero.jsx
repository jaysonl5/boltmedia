import React from "react"
import { Eyebrow } from "../ui/Eyebrow.jsx"
import { Button } from "../ui/Button.jsx"

// Hero unit — OKC night image, ink scrim, big Anton headline.
export function Hero({ onNav }) {
  return (
    <section
      id="home"
      style={{ position: "relative", minHeight: "640px", display: "flex", alignItems: "center" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "url('/assets/okc-workspace.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(38,48,61,.94) 0%, rgba(38,48,61,.78) 45%, rgba(38,48,61,.35) 100%)",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "150px 32px 90px",
          width: "100%",
        }}
      >
        <Eyebrow color="var(--bolt-red-400)">Oklahoma City Software Consultancy</Eyebrow>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            textTransform: "uppercase",
            fontSize: "clamp(48px, 7vw, 92px)",
            lineHeight: 0.95,
            letterSpacing: "0.01em",
            color: "var(--paper-100)",
            margin: "18px 0 0",
            maxWidth: "14ch",
          }}
        >
          Custom software, <span style={{ color: "var(--bolt-red-500)" }}>built local.</span>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "19px",
            lineHeight: 1.6,
            fontWeight: 400,
            color: "var(--paper-200)",
            maxWidth: "52ch",
            margin: "24px 0 36px",
          }}
        >
          We&rsquo;re a small Oklahoma City shop building custom web platforms, internal tooling, and inventory
          tracking. You work directly with the developer writing your code, from the first call to launch day.
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" icon="fa-solid fa-bolt" onClick={() => onNav("contact")}>
            Start a project
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => onNav("services")}
            style={{ color: "var(--paper-100)", borderColor: "var(--paper-200)" }}
          >
            What we build
          </Button>
        </div>
      </div>
    </section>
  )
}
