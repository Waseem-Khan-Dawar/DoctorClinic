import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex item-center justify-between text-sm py-4 mb-4 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt=" " />
      <ul className='hidden md:flex items-start gap-8 font-medium'>
        <NavLink to={'/'} end>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to={'/doctors'} end>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to={'/about'} end>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to={'/contact'} end>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <button>Create account</button>
    </div>
  )
}

export default NavBar