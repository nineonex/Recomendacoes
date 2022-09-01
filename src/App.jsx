import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/navBar'
import { Footer } from './components/footer'
import { Home } from './pages/home'
import { Sobre } from './pages/sobre'

import { Amplificador } from './pages/categorias/amplificador'
import { Dac } from './pages/categorias/dac'
import { FoneDeOuvido } from './pages/categorias/foneDeOuvido'
import { Headset } from './pages/categorias/headset'
import { Microfone } from './pages/categorias/microfone'
import { Monitor } from './pages/categorias/monitor'
import { Mouse } from './pages/categorias/mouse'
import { Mousepad } from './pages/categorias/mousepad'
import { Organizacao } from './pages/categorias/organizacao'
import { Periferico } from './pages/categorias/periferico'
import { Teclado } from './pages/categorias/teclado'

import './style.css'

export function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/teclado' element={<Teclado />} />
        <Route path='/mouse' element={<Mouse />} />
        <Route path='/monitor' element={<Monitor />} />
        <Route path='/mousepad' element={<Mousepad />} />
        <Route path='/headset' element={<Headset />} />
        <Route path='/fone-de-ouvido' element={<FoneDeOuvido />} />
        <Route path='/periferico' element={<Periferico />} />
        <Route path='/microfone' element={<Microfone />} />
        <Route path='/dac' element={<Dac />} />
        <Route path='/amplificador' element={<Amplificador />} />
        <Route path='/organizacao' element={<Organizacao />} />
      </Routes>
      <Footer />
    </Router>
  )
}
