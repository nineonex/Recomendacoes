import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/navBar'
import { Footer } from './components/footer'
import { Categorias } from './pages/categoria'
import { Contatos } from './pages/contatos'
import { Home } from './pages/home'
import { Sobre } from './pages/sobre'
import './style.css'

export function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contatos' element={<Contatos />} />
        <Route path='/categorias' element={<Categorias />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
      <Footer />
    </Router>
  )
}
