import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Starfield from './components/Starfield'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <HashRouter>
      <Starfield />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  )
}
