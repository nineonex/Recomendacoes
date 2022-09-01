import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/navBar'
import { Footer } from './components/footer'
import { Categorias } from './pages/categoria'
import { Home } from './pages/home'
import { Sobre } from './pages/sobre'
import { Teclado } from './pages/teclado'
import { Mouse } from './pages/mouse'
import './style.css'

export function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categorias' element={<Categorias />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/categorias/teclado' element={<Teclado />} />
        <Route path='/categorias/mouse' element={<Mouse />} />
      </Routes>
      <Footer />
    </Router>
  )
}
