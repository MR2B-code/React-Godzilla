import './App.css'
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Historia from './components/Historia'
import Eras from './components/Eras'
import Versiones from './components/Versiones'
import Curiosidades from './components/Curiosidades'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Inicio />
      <Historia />
      <Eras />
      <Versiones />
      <Curiosidades />
      <Footer />
    </div>
  )
}

export default App