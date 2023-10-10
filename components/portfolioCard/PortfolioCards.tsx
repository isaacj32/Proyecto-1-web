'use client'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PortfolioCards = () => {
   const [portfolioData, setPortfolioData] = useState(data)
   const [caregory, seCategory] = useState('All categories')

   const filterData = (title: string) => {
      seCategory(title)
      if (title === 'All categories') {
         setPortfolioData(data)
      } else {
         const filterData = data.filter((item: any) => item.category === title)
         setPortfolioData(filterData)
      }
   }

   return (
      <Fragment>
         <div className="mt-8 md:mt-12">
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
               {portfolioData.map((item: any, index: any) => (
                  <div key={index}>
                     <div className="relative group">
                        <Image
                           src={item.src}
                           alt=""
                           className="w-full rounded-xl"
                           width={324}
                           height={324}
                        />
                        <span
                           className="bg-primary/80 w-full h-full absolute top-0 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition group-hover:duration-500"
                        >
                           <svg
                              className="text-primary-content"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M16 6V26M26 16H6"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              />
                           </svg>
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Fragment>
   )
}

export default PortfolioCards

const portfolioMenu = [
   {
      id: 1,
      title: 'All categories',
   },
   {
      id: 2,
      title: 'UI Design',
   },
   {
      id: 3,
      title: 'Web Templates',
   },
   {
      id: 4,
      title: 'Logo',
   },
   {
      id: 5,
      title: 'Branding',
   },
]

const data = [
   {
      id: 1,
      src: '/1.jpg',
      category: 'UI Design',
      title: 'Proyecto 1',
      description: 'Descripción corta del Proyecto 1.'
   },
   {
      id: 2,
      src: '/2.jpg',
      category: 'Web Templates',
   },
   {
      id: 3,
      src: '/1.jpg',
      category: 'Logo',
   },

]
