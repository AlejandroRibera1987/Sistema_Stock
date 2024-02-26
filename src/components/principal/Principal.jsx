import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../login/Login'
import { DiAngularSimple } from "react-icons/di";



export const Principal = () => {
  return (
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <Link to='/'>
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
        <DiAngularSimple className=' text-6xl text-blue-700'/>
        <span className="ml-3 text-2xl">Sistema DropFox</span>
      </a>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/"><a className="mr-5 hover:text-red-500 cursor-pointer">Inicio</a></Link>
      <Link><a className="mr-5 hover:text-red-500 cursor-pointer">Nosotros</a></Link>
      <Link><a className="mr-5 hover:text-red-500 cursor-pointer">Preguntas Frecuentes</a></Link>
      <Link to="/Contacto"><a className="mr-5 hover:text-red-500 cursor-pointer">Contacto</a></Link>
    </nav>
    <button className="inline-flex items-center bg-blue-400 border-2 py-1 px-3 focus:outline-none hover:bg-blue-900 rounded text-base mt-4 md:mt-0 h-10 font-bold text-black"><Link to="/Login">Acceder</Link>
    </button>
  </div>
</header>
  )
}
