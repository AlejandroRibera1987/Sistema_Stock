import React from 'react'
import { Principal } from '../principal/Principal'
import { Footer } from '../footer/Footer'

export const Login = () => {
  return (
    <>
    <Principal />
    <main className=' h-screen flex justify-center items-center'>
        <div className=' flex justify-start items-center flex-col bg-gray-600 h-[650px] w-[1000px] bg-opacity-70  shadow-xl shadow-black border-black rounded-lg'>
            <h1 className=' flex justify-center mt-[100px] text-white font-light text-5xl'>DropFox</h1>
            <form action="" className='items-center mt-[90px] justify-center'>
                <h2 className=' justify-center flex text-white font-light text-4xl '>Usuario</h2>
                <input type="text" className=' flex mt-4 w-[400px] h-10 justify-center rounded-lg px-3 ' required/>
                <h2 className=' justify-center flex text-white mt-4 font-light text-4xl '>Contraseña</h2>
                <input type="password" className=' flex mt-4 w-[400px] h-10 justify-center rounded-lg px-3' required/>
            </form>
            <button className=' flex h-10 items-center text-white text-3xl justify-center text-center mt-7'>Iniciar Sesión</button>
        </div>
    </main>
    <Footer />
    
    </>
  )
}
