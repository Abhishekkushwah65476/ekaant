import DynamicHomepage from './components/DynamicHomepage'
import './App.css'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Offerings from './components/Offerings'
import HowToReach from './components/HowToReach'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      {/* <DynamicHomepage /> */}
      <HeroSection />
      <About />
      <Offerings />
      <HowToReach />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App