import React from 'react'
import { Link } from 'react-router-dom'
import { Principal } from '../principal/Principal'
import { Footer } from '../footer/Footer'
import { SlArrowLeftCircle } from "react-icons/sl";


export const Contacto = () => {
  return (
    <>
    <Principal />
        <main className=' h-screen flex justify-center items-center'>
          <div className=' gap-y-5 flex justify-start items-center flex-col bg-gray-600 h-[650px] w-[1000px] bg-opacity-70  shadow-xl shadow-black border-black rounded-lg'>
            <h1 className=' flex text-white text-center text-5xl mt-8 font-light'>Contactenos</h1>
            <form action="" className=' gap-y-10 flex-col flex w-full h-[500px]'>
              <div className=' flex justify-center items-center'>
                  <div>
                  <h2 className=' ml-[95px] text-white text-3xl mt-8 font-light'>Nombre</h2>
                  <input type="text" className=' ml-[95px] mt-2  h-8 w-[300px] rounded-lg px-3' required />
                    <h2 className=' ml-[95px] text-white text-3xl mt-8 font-light'>Apellido</h2>
                    <input type="text" className=' ml-[95px] mt-2  h-8 w-[300px] rounded-lg px-3' required />
                  </div>
                  <div>
                    <h2 className=' ml-[200px] text-white text-3xl mt-8 font-light'>Dni</h2>
                  <input type="number" className=' flex justify-center ml-[200px] mt-2  h-8 w-[300px] rounded-lg px-3' required />
                    <h2 className=' ml-[200px] text-white text-3xl mt-8 font-light'>Email</h2>
                    <input type="email" className=' ml-[200px] mt-2  h-8 w-[300px] rounded-lg px-3' required />
                  </div>
                </div> 
                <div className=' w-full flex flex-col gap-y-5 justify-center items-center'>
                  <h2 className=' text-slate-50 text-3xl font-light'>Mensaje</h2>
                  <textarea name="massage" id="" cols="30" rows="10" className='h-[150px] w-[500px] px-3 rounded-lg'></textarea>
                </div>
            </form>

            <button className=' mb-14 flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg'>Enviar</button>
          </div>
        </main>
    <Footer />
    </>
  )
}
