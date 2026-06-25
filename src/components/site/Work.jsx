import React from "react"
import { Eyebrow } from "../ui/Eyebrow.jsx"
import { ProjectCard } from "../ui/ProjectCard.jsx"

const PROJECTS = [
  {
    image: "/assets/work/weatherzip.png",
    title: "WeatherZip",
    tech: ["React", "API", "Node"],
    description: "Fast zip-code weather lookup with a clean, focused UI.",
    link: "#",
  },
  {
    image: "/assets/work/stoneking.png",
    title: "Stoneking",
    tech: ["React", "Node", "CSS"],
    description: "One-page site with a contact form for a local real estate team.",
    link: "http://www.stonekingrealestateteam.com",
  },
  {
    image: "/assets/work/dnas.png",
    title: "DNA Solutions",
    tech: ["Bootstrap", "Shopify", "CSS"],
    description: "Front-end redesign with an embedded Shopify store for DNA test kits.",
    link: "https://www.dnasolutionsusa.com",
  },
  {
    image: "/assets/work/rockypearl.png",
    title: "Rocky Pearl",
    tech: ["Brand", "Web"],
    description: "Brand-forward marketing site for an online boutique.",
    link: "https://www.facebook.com/therockypearl",
  },
  {
    image: "/assets/work/th.png",
    title: "ThunderHeads",
    tech: ["Brand", "Production"],
    description: "Brand design and livestream production for an OKC Thunder YouTube show.",
    link: "https://www.youtube.com/thunderheads",
  },
  {
    image: "/assets/work/mr.png",
    title: "Shot Talkin'",
    tech: ["Motion", "Production"],
    description: "Motion graphics and livestream production for a Top Shot talk show.",
    link: "https://www.twitch.tv/momentranks",
  },
]

export function Work() {
  return (
    <section id="work" style={{ background: "var(--paper-100)", padding: "88px 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Eyebrow color="var(--steel-500)">Recent work</Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "40px",
            letterSpacing: "var(--tracking-wide)",
            color: "var(--text-primary)",
            margin: "14px 0 8px",
          }}
        >
          A few things we&rsquo;ve shipped
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "17px",
            color: "var(--text-secondary)",
            maxWidth: "56ch",
            margin: "0 0 44px",
          }}
        >
          Hover a tile for the details. Every one started with a conversation.
        </p>
        <div className="bm-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
