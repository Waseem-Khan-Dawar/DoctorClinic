import React from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();
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
        <NavLink to={'/contact'}>
          <li className='py-1'>CONTACT end</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
      </div>
    </div>
  )
}

export default NavBar