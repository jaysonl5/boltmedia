import React from "react"
import { SiteNav } from "./components/site/SiteNav.jsx"
import { Hero } from "./components/site/Hero.jsx"
import { Services } from "./components/site/Services.jsx"
import { Process } from "./components/site/Process.jsx"
import { Work } from "./components/site/Work.jsx"
import { Contact } from "./components/site/Contact.jsx"
import { Footer } from "./components/site/Footer.jsx"

export default function App() {
  // Smooth-scroll to a section by id; "home" scrolls to the top.
  const handleNav = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <SiteNav onNav={handleNav} />
      <main>
        <Hero onNav={handleNav} />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
