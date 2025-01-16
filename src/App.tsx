import './App.css'
import About from './components/About/About'
import Benefits from './components/Benefits/Benefits'
import Episodes from './components/Episodes/Episodes'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import MainBanner from './components/MainBanner/MainBanner'
import Manifesto from './components/Manifesto/Manifesto'
import Menu from './components/Menu/Menu'

function App() {
  return (
    <>
      <Menu />
      <MainBanner />
      <Intro />
      <About />
      <Benefits />
      <Episodes />
      <Manifesto />
      <Footer />
    </>
  )
}

export default App
