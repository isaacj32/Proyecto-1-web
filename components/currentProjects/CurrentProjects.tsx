import Image from 'next/image'
import React from 'react'

const CurrentProjects = () => {
   return (
      <div className="rounded-[20px] bg-base-100 relative flex flex-col lg:flex-row gap-10 items-center p-0 md:p-10">
         <div className="bg-primary p-5 md:p-8 lg:p-10 rounded-[20px] w-fit flex-none -mt-32">
            <h6 className="text-2xl md:text-3xl text-primary-content font-bold">
               On Going Project
            </h6>
            <p className="text-base text-primary-content max-w-[434px] mt-4">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore
            </p>
            <Image
               src="/home-1.png"
               alt="Picture of the author"
               className="mt-8"
               width={474}
               height={334}
            />
         </div>
         <div className="p-2.5 md:p-5 xl:p-10">
            <h6 className="text-primary text-base">ABOUT ME</h6>
            <h3 className="text-2xl sm:text-3xl text-base-content mt-4">
               Hi from Rayan, Product Designer and Frontend Developer
            </h3>
            <p className="mt-6 text-base text-base-content">
               I have proficient in a range of design tools, including Figma,
               Sketch, and Adobe Creative Suite. I’m also skilled in prototyping
               tools such as InVision and Principle, which allows them to create
               interactive and dynamic designs.
            </p>
            <div className="mt-10">
               <button className="btn btn-primary border-none py-1.5 pl-6 pr-1.5 rounded-full flex items-center justify-center gap-5 w-fit">
                  <span className="text-base font-medium text-primary-content">
                     Download My CV
                  </span>
                  <span className="p-2 bg-primary-content rounded-full">
                     <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M4.5446 4.86191C5.29892 3.00533 7.18582 1.25 10 1.25C13.0271 1.25 15.6073 3.30807 16.176 6.63916C16.9468 6.73362 17.7738 6.96302 18.4651 7.40228C19.3443 7.96095 20 8.8637 20 10.1719C20 11.4372 19.461 12.3731 18.5746 12.965C17.724 13.5329 16.6079 13.75 15.4688 13.75H12.5C12.1548 13.75 11.875 13.4702 11.875 13.125C11.875 12.7798 12.1548 12.5 12.5 12.5H15.4688C16.4781 12.5 17.3151 12.3029 17.8805 11.9254C18.4101 11.5718 18.75 11.0311 18.75 10.1719C18.75 9.35544 18.3706 8.82323 17.7947 8.4573C17.1897 8.07287 16.37 7.88142 15.5941 7.84298C15.2862 7.82773 15.0354 7.5903 15.0034 7.28372C14.6885 4.27087 12.5231 2.5 10 2.5C7.61751 2.5 6.09426 4.07172 5.59516 5.62833C5.51883 5.86638 5.30798 6.03606 5.05911 6.0597C3.96283 6.16385 2.99657 6.48784 2.31922 7.0189C1.66382 7.53275 1.25 8.25934 1.25 9.28125C1.25 10.3013 1.68166 11.0823 2.3838 11.6242C3.10102 12.1776 4.12944 12.5 5.3125 12.5H7.5C7.84518 12.5 8.125 12.7798 8.125 13.125C8.125 13.4702 7.84518 13.75 7.5 13.75H5.3125C3.91744 13.75 2.60211 13.3716 1.62011 12.6137C0.623029 11.8443 0 10.7033 0 9.28125C0 7.86097 0.601806 6.77701 1.54797 6.0352C2.37401 5.38756 3.43734 5.01778 4.5446 4.86191Z"
                           fill="#F78F42"
                        />
                        <path
                           d="M7.05771 15.1873C7.3016 14.943 7.69733 14.9427 7.9416 15.1866L9.375 16.6178V8.75C9.375 8.40482 9.65482 8.125 10 8.125C10.3452 8.125 10.625 8.40482 10.625 8.75V16.6178L12.0584 15.1866C12.3027 14.9427 12.6984 14.943 12.9423 15.1873C13.1862 15.4316 13.1859 15.8273 12.9416 16.0712L10.4416 18.5673C10.1976 18.8109 9.8024 18.8109 9.5584 18.5673L7.0584 16.0712C6.81414 15.8273 6.81383 15.4316 7.05771 15.1873Z"
                           fill="#F78F42"
                        />
                        <path
                           d="M4.5446 4.86191C5.29892 3.00533 7.18582 1.25 10 1.25C13.0271 1.25 15.6073 3.30807 16.176 6.63916C16.9468 6.73362 17.7738 6.96302 18.4651 7.40228C19.3443 7.96095 20 8.8637 20 10.1719C20 11.4372 19.461 12.3731 18.5746 12.965C17.724 13.5329 16.6079 13.75 15.4688 13.75H12.5C12.1548 13.75 11.875 13.4702 11.875 13.125C11.875 12.7798 12.1548 12.5 12.5 12.5H15.4688C16.4781 12.5 17.3151 12.3029 17.8805 11.9254C18.4101 11.5718 18.75 11.0311 18.75 10.1719C18.75 9.35544 18.3706 8.82323 17.7947 8.4573C17.1897 8.07287 16.37 7.88142 15.5941 7.84298C15.2862 7.82773 15.0354 7.5903 15.0034 7.28372C14.6885 4.27087 12.5231 2.5 10 2.5C7.61751 2.5 6.09426 4.07172 5.59516 5.62833C5.51883 5.86638 5.30798 6.03606 5.05911 6.0597C3.96283 6.16385 2.99657 6.48784 2.31922 7.0189C1.66382 7.53275 1.25 8.25934 1.25 9.28125C1.25 10.3013 1.68166 11.0823 2.3838 11.6242C3.10102 12.1776 4.12944 12.5 5.3125 12.5H7.5C7.84518 12.5 8.125 12.7798 8.125 13.125C8.125 13.4702 7.84518 13.75 7.5 13.75H5.3125C3.91744 13.75 2.60211 13.3716 1.62011 12.6137C0.623029 11.8443 0 10.7033 0 9.28125C0 7.86097 0.601806 6.77701 1.54797 6.0352C2.37401 5.38756 3.43734 5.01778 4.5446 4.86191Z"
                           stroke="#F78F42"
                        />
                        <path
                           d="M7.05771 15.1873C7.3016 14.943 7.69733 14.9427 7.9416 15.1866L9.375 16.6178V8.75C9.375 8.40482 9.65482 8.125 10 8.125C10.3452 8.125 10.625 8.40482 10.625 8.75V16.6178L12.0584 15.1866C12.3027 14.9427 12.6984 14.943 12.9423 15.1873C13.1862 15.4316 13.1859 15.8273 12.9416 16.0712L10.4416 18.5673C10.1976 18.8109 9.8024 18.8109 9.5584 18.5673L7.0584 16.0712C6.81414 15.8273 6.81383 15.4316 7.05771 15.1873Z"
                           stroke="#F78F42"
                        />
                     </svg>
                  </span>
               </button>
            </div>
         </div>
      </div>
   )
}

export default CurrentProjects
