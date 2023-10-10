import React from 'react'

const Education = () => {
   return (
      <div className="p-6 md:p-10 bg-base-100 rounded-xl flex flex-col gap-8 md:gap-10">
         <div className="flex flex-col gap-6 xl:flex-row xl:justify-between">
            <div className="pl-3 xl:pl-0 border-l-2 xl:border-l-0 border-base-content/10 w-full xl:max-w-[315px]">
               <h5 className="text-lg text-base-content font-semibold">
                  Universidad de Antioquia
               </h5>
               <div className="flex items-center gap-4 mt-2 xl:mt-3">
                  <p className="text-base text-base-content">Estudiante</p>
                  <p className="text-xs font-medium text-primary px-3 py-1 bg-primary/10 w-fit rounded-md">
                     2014 - Hoy
                  </p>
               </div>
            </div>
            <div className="w-full">
               <h5 className="text-lg font-medium text-base-content">
                  Ingeniería de Sistemas
               </h5>
               <p className="mt-2 lg:mt-4 text-base-content/50">
                  Pregrado de ingeniería de sistemas en la universidad más grande de Antioquia con la tercera versión del pénsum.
               </p>
            </div>
         </div>
         <div className="flex flex-col gap-6 xl:flex-row xl:justify-between">
            <div className="pl-3 xl:pl-0 border-l-2 xl:border-l-0 border-base-content/10 w-full xl:max-w-[315px]">
               <h5 className="text-lg text-base-content font-semibold">
                  Liceo Salazar y Herrera
               </h5>
               <div className="flex items-center gap-4 mt-2 xl:mt-3">
                  <p className="text-base text-base-content">Estudiante</p>
                  <p className="text-xs font-medium text-primary px-3 py-1 bg-primary/10 w-fit rounded-md">
                     2002 - 2012
                  </p>
               </div>
            </div>
            <div className="w-full">
               <h5 className="text-lg font-medium text-base-content">
                  Bachiller Académico
               </h5>
               <p className="mt-2 lg:mt-4 text-base-content/50">
               Estudio de educación básica, desde el preescolar hasta terminar el bachiller.
               </p>
            </div>
         </div>
      </div>
   )
}

export default Education
