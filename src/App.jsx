import { useState } from 'react'
import './App.css'
import { Principal } from './components/principal/Principal'
import { Contenido } from './components/contenido/Contenido'
import { Footer } from './components/footer/Footer'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from './components/login/Login'
import { Contacto } from './components/contacto/Contacto'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Contenido/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
