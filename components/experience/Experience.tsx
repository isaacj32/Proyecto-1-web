import React from 'react'

const Experience = () => {
   return (
      <div className="p-6 md:p-10 bg-base-100 rounded-xl flex flex-col gap-8 md:gap-10">
         {ExperienceData.map((item: any, index: number) => (
            <div key={index}>
               <div
                  className={`flex flex-col gap-6 xl:flex-row xl:justify-between ${
                     index + 1 === ExperienceData.length
                        ? ''
                        : 'border-b border-base-content/10 pb-8 xl:pb-10'
                  }`}
               >
                  <div className="pl-3 xl:pl-0 border-l-2 xl:border-l-0 border-base-content/10 w-full xl:max-w-[315px]">
                     <h5 className="text-lg text-base-content font-semibold">
                        {item.company}
                     </h5>
                     <div className="flex items-center gap-4 mt-2 xl:mt-3">
                        <p className="text-base text-base-content">Student</p>
                        <p className="text-xs font-medium text-primary px-3 py-1 bg-primary/10 w-fit rounded-md">
                           {item.time}
                        </p>
                     </div>
                  </div>
                  <div className="w-full">
                     <h5 className="text-lg font-medium text-base-content">
                        {item.post}
                     </h5>
                     <p className="mt-2 lg:mt-4 text-base-content/50">
                        {item.description}
                     </p>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}

export default Experience

const ExperienceData = [
   {
      company: 'UdeA',
      time: 'Jan 2017 - Dec 2017',
      post: 'Lead Mobile Developer',
      description:
         'Creación de aplicación móvil por medio de flutter entre yo y 2 compañeros más para el proyecto integrador 1 de la Universidad de Antioquia en el que pueden visualizar el artículo creado en el siguiente link https://shorturl.at/emzR9',
   },
   {
      company: 'Asergas',
      time: 'Jan 2016 - Dec 2016',
      post: 'Lead Web Developer',
      description:
         'Creación página asergas.com por medio de WordPress',
   },
   {
      company: 'Testing',
      time: 'Jan 2015 - Dec 2015',
      post: 'Web Developer',
      description:
         'Pruebas aprendiendo a crear templates de WordPress, desplegando en hostings gratis usando MySQL como motor de base de datos',
   },
]
