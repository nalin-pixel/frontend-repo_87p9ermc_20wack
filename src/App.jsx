import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FloatingPanels from './components/FloatingPanels'
import CaseStudies from './components/CaseStudies'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0b10] text-white">
      <Navbar />
      <Hero />
      <FloatingPanels />
      <CaseStudies />
      <Footer />
    </div>
  )
}

export default App
