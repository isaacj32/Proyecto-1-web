import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
   return (
      <div className="bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover max-h-[492px] bg-base-100 p-6 sm:p-10 xl:p-16 rounded-xl flex items-center justify-center md:justify-between">
         <div className="w-full md:max-w-[260px] lg:max-w-[460px]">
            <h1 className="text-3xl xl:text-5xl font-semibold text-base-content text-center md:text-start leading-9 xl:!leading-[56px]">
            Desarrollo de Software
            </h1>
            <p className="mt-4 mb-6 xl:my-6 text-base xl:text-lg text-base-content/60 text-center md:text-start leading-6 xl:leading-7">
            En el mundo del código, Isaac es la línea que conecta los puntos y da vida a las ideas. ¿Listos para escribir el próximo gran programa juntos?
            Soy Isaac Jiménez, un apasionado de la programación en busca de desafíos y soluciones creativas. Mi código es mi lienzo y los algoritmos son mi arte. Listo para resolver problemas y explorar el fascinante mundo del desarrollo
            </p>
            <div className="flex items-center justify-center md:justify-start">
               
            </div>
         </div>
         <div className="hidden md:block flex-none">
         </div>
      </div>
   )
}

export default Banner
