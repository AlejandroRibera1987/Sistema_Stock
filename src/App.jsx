import { useState } from 'react'
import './App.css'
import { Principal } from './components/principal/Principal'
import { Contenido } from './components/contenido/Contenido'
import { Footer } from './components/contenido/footer/Footer'


function App() {
  return (
    <>
    <main className=''>
      <Principal />
      <Contenido />
      <Footer />
    </main>
    </>
  )
}

export default App
