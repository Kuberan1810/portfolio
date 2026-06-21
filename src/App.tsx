import Home from "./pages/Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About/About"
import CaseStudies from "./pages/CaseStudies/CaseStudies"
import Experience from "./pages/Experience/Experience"
import Projects from "./pages/Projects/Projects"
import Skills from "./pages/Skills/Skills"
import Contact from "./pages/Contact/Contact"
import Header from "./components/Header"
import HorizontalLine from "./components/HorizontalLine"


function App() {
  return (
    <BrowserRouter>
      {/* Full-height vertical border lines — fixed */}
      <div className="pointer-events-none fixed inset-0 z-40">
        {/* Vertical side lines — desktop & mobile */}
        <div className="absolute top-0 bottom-0 left-[20px] md:left-[120px] w-px bg-[#1a1a1a08]" />
        <div className="absolute top-0 bottom-0 right-[20px] md:right-[120px] w-px bg-[#1a1a1a08]" />
      </div>

      <Header />

      <div className="relative w-full">
        {/* Horizontal line below navbar — scrolls with page */}
        <div className="absolute left-0 right-0 h-px bg-[#1a1a1a] opacity-[0.06] top-[72px] md:top-[136px] z-10" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
