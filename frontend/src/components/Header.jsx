import React from 'react'
import { assets } from '../assets/assets'
const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>
        {/*------------ Left Side -------------*/}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vm] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
              Book Appointments <br/>with Expert Doctors Easily
            </p>
            <div className='flex flex-col md:flex-row item-center gap-3 text-white text-sm font-light'>
              <img className='w-28' src={assets.group_profiles} alt="" />
              <p>Simply browse through our extensive list of trusted doctors,<br />schedule your appointment hassle-free.</p>
            </div>
            <a href="" alt="">
              Book appointment <img src={assets.arrow_icon} alt="" />
            </a>
        </div>
        {/*------------ Right Side -------------*/}
        <div className='md:w-1/2 flex justify-center items-end'>
            <img className='w-full max-w-md md:max-w-lg h-auto object-contain rounded-lg ' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header