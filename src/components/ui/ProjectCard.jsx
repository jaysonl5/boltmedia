import React from "react"
import { Badge } from "./Badge.jsx"
import { Button } from "./Button.jsx"

/**
 * Portfolio "work" card — image with an info panel that rises on hover,
 * tech badges, and a View action. Mirrors the original site's project tile.
 */
export function ProjectCard({ image, title, description, tech = [], link, style }) {
  const [hover, setHover] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        width: "100%",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-md)",
        background: "var(--surface-card)",
        transform: hover ? "scale(1.02)" : "scale(1)",
        transition:
          "transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)",
        ...style,
      }}
    >
      <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* tech badges, top-left */}
        {tech.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              display: "flex",
              gap: "6px",
              flexWrap: "wrap",
              opacity: hover ? 1 : 0,
              transition: "opacity var(--duration-base) var(--ease-standard)",
            }}
          >
            {tech.map((t) => (
              <Badge
                key={t}
                tone="neutral"
                variant="solid"
                style={{ background: "rgba(11,16,22,.72)", color: "var(--paper-100)" }}
              >
                {t}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* info panel rises on hover */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(255,255,255,.96)",
          padding: "var(--space-4) var(--space-5)",
          transform: hover ? "translateY(0)" : "translateY(101%)",
          transition: "transform var(--duration-slow) var(--ease-out)",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <h4
          style={{
            fontFamily: "var(--font-display)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            fontSize: "22px",
            color: "var(--bolt-red-500)",
            margin: 0,
          }}
        >
          {title}
        </h4>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "13px",
            lineHeight: 1.4,
            color: "var(--steel-600)",
            margin: 0,
          }}
        >
          {description}
        </p>
        {link && link !== "#" && (
          <div style={{ alignSelf: "flex-start", marginTop: "4px" }}>
            <Button
              size="sm"
              variant="primary"
              icon="fa-solid fa-chevron-right"
              iconRight
              onClick={() => window.open(link, "_blank")}
            >
              View
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
