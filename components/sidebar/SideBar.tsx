import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
   return (
      <div className="bg-base-100 rounded-xl p-6">
         <div className="w-fit mx-auto relative">
            <Image
               className="rounded-full"
               src="/Profile.jpeg"
               width={100}
               height={100}
               alt="user"
            />
            <svg
               className="absolute bottom-0 right-0"
               width="25"
               height="24"
               viewBox="0 0 25 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <circle
                  cx="12.9668"
                  cy="12"
                  r="10"
                  fill="#F78F42"
                  stroke="#151B2F"
                  strokeWidth="4"
               />
            </svg>
         </div>
         <h3 className="text-base-content text-xl font-semibold text-center mt-7">
         Isaac Jiménez
         </h3>
         <p className="text-xs font-medium bg-primary/10 text-primary rounded-3xl px-3 w-fit mt-3 mx-auto py-1">
            Developer
         </p>
         {/* social link  */}
         <div className="flex items-center justify-between bg-base-100 rounded-lg px-5 py-3 mt-5">
            {Icons.map((item, index) => (
               <Link href={item.link} target="_blank" key={index}>
                  {item.icon}
               </Link>
            ))}
         </div>
         {/* info  */}
         <div className="border-b border-base-content/10 py-6 space-y-3">
            <div className="flex items-center justify-between">
               <p className="text-sm text-base-content">Email</p>
               <a
                  href="mailto: isaacj32@hotmail.com"
                  className="text-sm text-base-content/60 hover:text-primary hover:duration-300 transition"
               >
                  isaacj32@hotmail.com
               </a>
            </div>
            <div className="flex items-center justify-between">
               <p className="text-sm text-base-content">Teléfono</p>
               <a
                  href="tel:+57 311 6117542"
                  className="text-sm text-base-content/60 hover:text-primary hover:duration-300 transition"
               >
                  +57 311 6117542
               </a>
            </div>
            {content.map((item, index) => (
               <div key={index} className="flex items-center justify-between">
                  <p className="text-sm text-base-content">{item?.title}</p>
                  <span className="text-sm text-base-content/60">
                     {item?.value}
                  </span>
               </div>
            ))}
         </div>
         {/* Major Skill */}
         <div className="border-b border-base-content/10 py-6">
            <p className="text-base text-base-content">Habilidades</p>
            <div className="space-y-5 mt-5">
               {majorSkill.map((item, index) => (
                  <div key={index}>
                     <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-base-content">
                           {item?.name}
                        </p>
                        <span className="text-xs text-base-content/60">
                           {item?.value}
                        </span>
                     </div>
                     <div className="w-full h-1 bg-base-content/10 rounded-md relative mt-2">
                        <div
                           style={{
                              width: `${item?.value}`,
                           }}
                           className="rounded-md absolute bg-primary h-1"
                        ></div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         {/* extra skills */}
         <div className="border-b border-base-content/10 py-6 mb-6">
            <p className="text-base text-base-content">Más...</p>
            <div className="flex flex-wrap gap-2 mt-5">
               {extraSkills.map((item, index) => (
                  <p
                     key={index}
                     className="text-xs font-medium text-base-content/60 px-3 py-0.5 bg-base-100 rounded-md hover:bg-primary hover:text-primary-content transition hover:duration-300 cursor-pointer"
                  >
                     {item.value}
                  </p>
               ))}
            </div>
         </div>
         {/* download button  */}
         <Link
            href={'#'}
            className="flex items-center justify-center gap-8 text-base font-medium text-primary-content btn btn-primary rounded-lg py-3 text-center w-full"
         >
            Descargar mi CV
            <svg
               width="20"
               height="18"
               viewBox="0 0 20 18"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M4.5446 3.86191C5.29892 2.00533 7.18582 0.25 10 0.25C13.0271 0.25 15.6073 2.30807 16.176 5.63916C16.9468 5.73362 17.7738 5.96302 18.4651 6.40228C19.3443 6.96095 20 7.8637 20 9.17188C20 10.4372 19.461 11.3731 18.5746 11.965C17.724 12.5329 16.6079 12.75 15.4688 12.75H12.5C12.1548 12.75 11.875 12.4702 11.875 12.125C11.875 11.7798 12.1548 11.5 12.5 11.5H15.4688C16.4781 11.5 17.3151 11.3029 17.8805 10.9254C18.4101 10.5718 18.75 10.0311 18.75 9.17188C18.75 8.35544 18.3706 7.82323 17.7947 7.4573C17.1897 7.07287 16.37 6.88142 15.5941 6.84298C15.2862 6.82773 15.0354 6.5903 15.0034 6.28372C14.6885 3.27087 12.5231 1.5 10 1.5C7.61751 1.5 6.09426 3.07172 5.59516 4.62833C5.51883 4.86638 5.30798 5.03606 5.05911 5.0597C3.96283 5.16385 2.99657 5.48784 2.31922 6.0189C1.66382 6.53275 1.25 7.25934 1.25 8.28125C1.25 9.30134 1.68166 10.0823 2.3838 10.6242C3.10102 11.1776 4.12944 11.5 5.3125 11.5H7.5C7.84518 11.5 8.125 11.7798 8.125 12.125C8.125 12.4702 7.84518 12.75 7.5 12.75H5.3125C3.91744 12.75 2.60211 12.3716 1.62011 11.6137C0.623029 10.8443 0 9.70335 0 8.28125C0 6.86097 0.601806 5.77701 1.54797 5.0352C2.37401 4.38756 3.43734 4.01778 4.5446 3.86191Z"
                  fill="#131313"
               />
               <path
                  d="M7.05771 14.1873C7.3016 13.943 7.69733 13.9427 7.9416 14.1866L9.375 15.6178V7.75C9.375 7.40482 9.65482 7.125 10 7.125C10.3452 7.125 10.625 7.40482 10.625 7.75V15.6178L12.0584 14.1866C12.3027 13.9427 12.6984 13.943 12.9423 14.1873C13.1862 14.4316 13.1859 14.8273 12.9416 15.0712L10.4416 17.5673C10.1976 17.8109 9.8024 17.8109 9.5584 17.5673L7.0584 15.0712C6.81414 14.8273 6.81383 14.4316 7.05771 14.1873Z"
                  fill="#131313"
               />
               <path
                  d="M4.5446 3.86191C5.29892 2.00533 7.18582 0.25 10 0.25C13.0271 0.25 15.6073 2.30807 16.176 5.63916C16.9468 5.73362 17.7738 5.96302 18.4651 6.40228C19.3443 6.96095 20 7.8637 20 9.17188C20 10.4372 19.461 11.3731 18.5746 11.965C17.724 12.5329 16.6079 12.75 15.4688 12.75H12.5C12.1548 12.75 11.875 12.4702 11.875 12.125C11.875 11.7798 12.1548 11.5 12.5 11.5H15.4688C16.4781 11.5 17.3151 11.3029 17.8805 10.9254C18.4101 10.5718 18.75 10.0311 18.75 9.17188C18.75 8.35544 18.3706 7.82323 17.7947 7.4573C17.1897 7.07287 16.37 6.88142 15.5941 6.84298C15.2862 6.82773 15.0354 6.5903 15.0034 6.28372C14.6885 3.27087 12.5231 1.5 10 1.5C7.61751 1.5 6.09426 3.07172 5.59516 4.62833C5.51883 4.86638 5.30798 5.03606 5.05911 5.0597C3.96283 5.16385 2.99657 5.48784 2.31922 6.0189C1.66382 6.53275 1.25 7.25934 1.25 8.28125C1.25 9.30134 1.68166 10.0823 2.3838 10.6242C3.10102 11.1776 4.12944 11.5 5.3125 11.5H7.5C7.84518 11.5 8.125 11.7798 8.125 12.125C8.125 12.4702 7.84518 12.75 7.5 12.75H5.3125C3.91744 12.75 2.60211 12.3716 1.62011 11.6137C0.623029 10.8443 0 9.70335 0 8.28125C0 6.86097 0.601806 5.77701 1.54797 5.0352C2.37401 4.38756 3.43734 4.01778 4.5446 3.86191Z"
                  stroke="#131313"
               />
               <path
                  d="M7.05771 14.1873C7.3016 13.943 7.69733 13.9427 7.9416 14.1866L9.375 15.6178V7.75C9.375 7.40482 9.65482 7.125 10 7.125C10.3452 7.125 10.625 7.40482 10.625 7.75V15.6178L12.0584 14.1866C12.3027 13.9427 12.6984 13.943 12.9423 14.1873C13.1862 14.4316 13.1859 14.8273 12.9416 15.0712L10.4416 17.5673C10.1976 17.8109 9.8024 17.8109 9.5584 17.5673L7.0584 15.0712C6.81414 14.8273 6.81383 14.4316 7.05771 14.1873Z"
                  stroke="#131313"
               />
            </svg>
         </Link>
      </div>
   )
}

export default SideBar

const majorSkill = [
   {
      name: 'Html',
      value: '90%',
   },
   {
      name: 'CSS',
      value: '80%',
   },
   {
      name: 'JavaScript',
      value: '90%',
   },
   {
      name: 'Java',
      value: '70%',
   },
   {
      name: 'WordPress',
      value: '80%',
   },
]

const extraSkills = [
   {
      value: 'Bootstrap',
   },
   {
      value: 'Materialize',
   },
   {
      value: 'Sass',
   },
   {
      value: 'Swing',
   },
   {
      value: 'Java',
   },
   {
      value: 'JavaFX',
   },
   {
      value: 'SwiftUI',
   },
   {
      value: 'Git',
   },
   {
      value: 'Svn',
   },
   {
      value: 'Swift',
   },
]

const content = [
   {
      title: 'País:',
      value: 'Colombia',
   },
   {
      title: 'Ciudad:',
      value: 'Medellin',
   },
   {
      title: 'Edad:',
      value: '27 Años',
   },
   {
      title: 'Freelance:',
      value: 'Disponible',
   },
   {
      title: 'Idiomas:',
      value: 'English, Español',
   },
]

const Icons = [
   {
      link: 'https://www.facebook.com/isaac.jimenez.733',
      icon: (
         <svg
            className="text-base-content/50 hover:text-primary transition hover:duration-300"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M5.33335 8.00001H7.00002L7.66669 5.33334H5.33335V4.00001C5.33335 3.31334 5.33335 2.66668 6.66669 2.66668H7.66669V0.426677C7.44935 0.39801 6.62869 0.333344 5.76202 0.333344C3.95202 0.333344 2.66669 1.43801 2.66669 3.46668V5.33334H0.666687V8.00001H2.66669V13.6667H5.33335V8.00001Z"
               fill="currentColor"
            />
         </svg>
      ),
   },
   {
      link: 'https://www.instagram.com/isaacj32j/',
      icon: (
         <svg
            className="text-base-content/50 hover:text-primary transition hover:duration-300"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M6.99998 0.333344C8.81131 0.333344 9.03731 0.34001 9.74798 0.373343C10.458 0.406677 10.9413 0.51801 11.3666 0.683344C11.8066 0.852677 12.1773 1.08201 12.548 1.45201C12.887 1.78527 13.1493 2.1884 13.3166 2.63334C13.4813 3.05801 13.5933 3.54201 13.6266 4.25201C13.658 4.96268 13.6666 5.18868 13.6666 7.00001C13.6666 8.81134 13.66 9.03734 13.6266 9.74801C13.5933 10.458 13.4813 10.9413 13.3166 11.3667C13.1498 11.8119 12.8874 12.2151 12.548 12.548C12.2146 12.8869 11.8115 13.1492 11.3666 13.3167C10.942 13.4813 10.458 13.5933 9.74798 13.6267C9.03731 13.658 8.81131 13.6667 6.99998 13.6667C5.18865 13.6667 4.96265 13.66 4.25198 13.6267C3.54198 13.5933 3.05865 13.4813 2.63331 13.3167C2.1882 13.1497 1.785 12.8873 1.45198 12.548C1.11292 12.2148 0.850601 11.8117 0.683313 11.3667C0.51798 10.942 0.406646 10.458 0.373313 9.74801C0.34198 9.03734 0.333313 8.81134 0.333313 7.00001C0.333313 5.18868 0.33998 4.96268 0.373313 4.25201C0.406646 3.54134 0.51798 3.05868 0.683313 2.63334C0.850137 2.18813 1.11252 1.78489 1.45198 1.45201C1.78509 1.11283 2.18827 0.850496 2.63331 0.683344C3.05865 0.51801 3.54131 0.406677 4.25198 0.373343C4.96265 0.34201 5.18865 0.333344 6.99998 0.333344ZM6.99998 3.66668C6.11592 3.66668 5.26808 4.01787 4.64296 4.64299C4.01784 5.26811 3.66665 6.11596 3.66665 7.00001C3.66665 7.88407 4.01784 8.73191 4.64296 9.35703C5.26808 9.98215 6.11592 10.3333 6.99998 10.3333C7.88403 10.3333 8.73188 9.98215 9.357 9.35703C9.98212 8.73191 10.3333 7.88407 10.3333 7.00001C10.3333 6.11596 9.98212 5.26811 9.357 4.64299C8.73188 4.01787 7.88403 3.66668 6.99998 3.66668ZM11.3333 3.50001C11.3333 3.279 11.2455 3.06703 11.0892 2.91075C10.933 2.75447 10.721 2.66668 10.5 2.66668C10.279 2.66668 10.067 2.75447 9.91072 2.91075C9.75444 3.06703 9.66665 3.279 9.66665 3.50001C9.66665 3.72102 9.75444 3.93299 9.91072 4.08927C10.067 4.24555 10.279 4.33334 10.5 4.33334C10.721 4.33334 10.933 4.24555 11.0892 4.08927C11.2455 3.93299 11.3333 3.72102 11.3333 3.50001ZM6.99998 5.00001C7.53041 5.00001 8.03912 5.21072 8.41419 5.5858C8.78927 5.96087 8.99998 6.46958 8.99998 7.00001C8.99998 7.53044 8.78927 8.03915 8.41419 8.41422C8.03912 8.7893 7.53041 9.00001 6.99998 9.00001C6.46955 9.00001 5.96084 8.7893 5.58577 8.41422C5.21069 8.03915 4.99998 7.53044 4.99998 7.00001C4.99998 6.46958 5.21069 5.96087 5.58577 5.5858C5.96084 5.21072 6.46955 5.00001 6.99998 5.00001Z"
               fill="currentColor"
            />
         </svg>
      ),
   },
   {
      link: 'https://twitter.com/Isaacj32',
      icon: (
         <svg
            className="text-base-content/50 hover:text-primary transition hover:duration-300"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g clipPath="url(#clip0_5628_238)">
               <path
                  d="M14.7747 3.77068C14.2657 3.99581 13.726 4.14366 13.1734 4.20935C13.7559 3.86097 14.1918 3.31269 14.4 2.66668C13.8534 2.99201 13.254 3.22001 12.6294 3.34335C12.2098 2.8944 11.6536 2.59665 11.0473 2.4964C10.4411 2.39615 9.81866 2.49901 9.27688 2.78898C8.7351 3.07896 8.30429 3.5398 8.05145 4.09987C7.7986 4.65995 7.73787 5.28787 7.8787 5.88601C6.77011 5.83045 5.68559 5.54236 4.69556 5.04045C3.70553 4.53855 2.83212 3.83404 2.13204 2.97268C1.88423 3.39831 1.75401 3.88216 1.7547 4.37468C1.7547 5.34135 2.2467 6.19535 2.9947 6.69535C2.55204 6.68141 2.11912 6.56187 1.73204 6.34668V6.38135C1.73217 7.02515 1.95495 7.64909 2.3626 8.14739C2.77025 8.64568 3.33769 8.98766 3.9687 9.11535C3.55778 9.2267 3.12691 9.24312 2.7087 9.16335C2.88661 9.7175 3.23337 10.2021 3.70043 10.5494C4.16749 10.8967 4.73145 11.0892 5.31337 11.1C4.73502 11.5542 4.07282 11.89 3.36462 12.0881C2.65642 12.2863 1.91612 12.3428 1.18604 12.2547C2.4605 13.0743 3.9441 13.5094 5.45937 13.508C10.588 13.508 13.3927 9.25935 13.3927 5.57468C13.3927 5.45468 13.3894 5.33335 13.384 5.21468C13.9299 4.82012 14.4011 4.33136 14.7754 3.77135L14.7747 3.77068Z"
                  fill="currentColor"
               />
            </g>
            <defs>
               <clipPath id="clip0_5628_238">
                  <rect width="16" height="16" fill="white" />
               </clipPath>
            </defs>
         </svg>
      ),
   },
   {
      link: 'https://www.linkedin.com/in/isaac-jimenez-609986108/',
      icon: (
         <svg
            className="text-base-content hover:text-primary transition hover:duration-300"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g opacity="0.5">
               <g clipPath="url(#clip0_5402_824)">
                  <path
                     d="M4.62669 3.33333C4.62651 3.68695 4.48587 4.02602 4.23569 4.27594C3.98552 4.52587 3.64631 4.66617 3.29269 4.666C2.93907 4.66582 2.6 4.52517 2.35007 4.275C2.10015 4.02483 1.95985 3.68562 1.96002 3.332C1.9602 2.97837 2.10084 2.63931 2.35102 2.38938C2.60119 2.13946 2.9404 1.99915 3.29402 1.99933C3.64764 1.99951 3.98671 2.14015 4.23664 2.39032C4.48656 2.6405 4.62687 2.97971 4.62669 3.33333ZM4.66669 5.65333H2.00002V14H4.66669V5.65333ZM8.88002 5.65333H6.22669V14H8.85336V9.62C8.85336 7.18 12.0334 6.95333 12.0334 9.62V14H14.6667V8.71333C14.6667 4.6 9.96002 4.75333 8.85336 6.77333L8.88002 5.65333Z"
                     fill="currentColor"
                  />
               </g>
            </g>
            <defs>
               <clipPath id="clip0_5402_824">
                  <rect width="16" height="16" fill="white" />
               </clipPath>
            </defs>
         </svg>
      ),
   },
   
   
]
