import { Fragment } from 'react'
import { Metadata } from 'next'
import Banner from '@/components/banner/Banner'
import Education from '@/components/education/Education'
import Experience from '@/components/experience/Experience'
import PortfolioCards from '@/components/portfolioCard/PortfolioCards'
import FlipCard from '@/components/flipCard/FlipCard'
import SmallSubtitle from '@/components/subtitle/SmallSubtitle'

export const metadata: Metadata = {
   title: 'Welcome to our Website',
   description:
      'Explore our comprehensive guides, tutorials, and resources to help you master Topic. Start your journey today with us',
}

 const skills = [
   {
      title: "Desarrollo de Software",
      subskills: [
         "Java",
         "Python"
      ],
      desc: `Programación en lenguajes como Java, Python o C++.
      Resolución de problemas algorítmicos y estructuras de datos.
      Conocimiento de metodologías de desarrollo ágil, como Scrum.`
   },
   {
      title: "Desarrollo Web",
      subskills: [
         "HTML",
         "CSS"
      ],
      desc: `Desarrollo front-end con HTML, CSS y JavaScript.
      Uso de marcos de trabajo como React, Angular o Vue.js.
      Conocimiento de servidores web y bases de datos para el desarrollo back-end.`
   },
   {
      title: "Análisis de Datos",
      subskills: [
         "Python",
         "Pandas"
      ],
      desc: `Uso de herramientas como Python y R para análisis de datos.
      Conocimiento de estadísticas y técnicas de minería de datos.`
   },
   {
      title: "Seguridad Informática",
      subskills: [
         "Kali Linux",
         "Pentest"
      ],
      desc: `Hacking ético y pruebas de penetración, Conocimiento de vulnerabilidades y medidas de seguridad.
      Experiencia en configuración de firewalls y sistemas de detección de intrusos.`
   },
   {
      title: "Mobile Apps",
      subskills: [
         "Kotlin",
         "Swift"
      ],
      desc: `Desarrollo para plataformas móviles como Android (Java o Kotlin) o iOS (Swift).
      Diseño de interfaces de usuario móviles atractivas.
      Conocimiento de desarrollo multiplataforma con herramientas como Flutter.`
   },
   {
      title: "AI/DL",
      subskills: [
         "Tensorflow",
         "PyTorch"
      ],
      desc: `Programación en Python y bibliotecas como TensorFlow o PyTorch.
      Creación y entrenamiento de modelos de aprendizaje automático.`
   }
]

export default function Home() {
   return (
      <Fragment>
         <div id="home">
            <Banner />
            <div className="mt-16 md:mt-24 xl:mt-28">
               <div id="service">
                  <SmallSubtitle
                     title="Servicios"
                     description="Habilidades:
                     Programación en lenguajes como Java, Python o C++.
                     Resolución de problemas algorítmicos y estructuras de datos.
                     Conocimiento de metodologías de desarrollo ágil, como Scrum."
                  />
                  {/* FlipCard section  */}
                  <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                     {skills.map((item: any, index: any) => (
                        <div key={item.title}>
                           <FlipCard title={item.title} values={item.subskills} desc={ item.desc } />
                        </div>
                     ))}
                  </div>
               </div>
               {/* education section  */}
               <div className="mt-16 md:mt-24 xl:mt-28">
                  <div className="mb-10 xl:mb-12">
                     <SmallSubtitle
                        title="Educacion"
                        description="Mi educación ha sido una herramienta valiosa que me ha permitido aprender y crecer a lo largo de la vida."
                     />
                  </div>
                  <Education />
               </div>
               {/* experience section  */}
               <div className="mt-16 md:mt-24 xl:mt-28" id="experience">
                  <div className="mb-10 xl:mb-12">
                     <SmallSubtitle
                        title="Experiencia"
                        description="Habilidades:
                        Desarrollo front-end con HTML, CSS y JavaScript.
                        Uso de marcos de trabajo como React, Angular o Vue.js.
                        Conocimiento de servidores web y bases de datos para el desarrollo back-end."
                     />
                  </div>
                  <Experience />
               </div>
            </div>
            {/* portfolio section  */}
            <div className="mt-16 md:mt-24 xl:mt-28" id="portfolio">
               <h2 className="text-2xl md:text-3xl xl:text-5xl text-base-content font-bold text-center">
                  Portafolio
               </h2>
               <p className="md:max-w-[438px] text-center text-base text-base-content/60 mx-auto mt-4">
               Mi portafolio muestra mi trabajo y logros en un vistazo
               </p>
            </div>
            <PortfolioCards/>
         </div>
      </Fragment>
   )
}
