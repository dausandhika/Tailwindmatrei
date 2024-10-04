import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Beranda from './pages/beranda/Beranda'
import Profil from './pages/profil'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Detail from './pages/Detail'
import Error from './pages/Error'
import "./assets/style.scss"
import Products from './pages/beranda/products'
import Negara from './pages/negara/negara'
import NegaraDetail from './pages/negara/NegaraDetail'
import ThemeContext from './components/context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)

  const theme = useState("light");
  return (
    <div>
   <BrowserRouter>
   <ThemeContext.Provider value={theme}>
   <Navbar/>
    <Routes>
      <Route path='/product' element={<Products/>}/>
      <Route path='/' element={<Beranda/>}/>
      <Route path='/profil' element={<Profil/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/negara' element={<Negara/>}/>
      <Route path='/detailnegara/:id' element={<NegaraDetail/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </ThemeContext.Provider>
    <Footer/>
   </BrowserRouter>
   </div>
  )
}

export default App
