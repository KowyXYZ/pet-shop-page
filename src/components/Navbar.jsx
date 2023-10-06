import React, { useState } from 'react'
import {logo, menu, close} from '../assets'


function Navbar() {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='relative sm:mx-16 md:mx-24 mx-6 py-6 flex justify-between items-center '>
        <img onClick={() => {window.scrollTo(0, 0)}} className='cursor-pointer w-32 object-contain' src={logo} alt="logo" />

        <div className='hidden sm:flex md:flex xl:flex text-[16px] gap-7   items-center text-center'>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#grooming">Pet Grooming</a>
          <a href="#sitting">Pet Sitter</a>
          <a href="#training">Pet Training</a>
          <p>+62 899-782-6957 <br/><span className='text-[#FFDC26]'>10:00 - 19:00</span></p>
        </div>

        <div className='sm:hidden z-10 xl:hidden md:hidden flex justify-center items-center'>
          <img className='invert w-6 h-6' onClick={() => setToggle(!toggle)}  src={toggle ? close : menu} alt="hamburger menu" />
      
          <div className={`${toggle ? 'flex' : 'hidden'}  absolute top-[70px] flex-flex-col text-center bg-[#fff] right-0 rounded-2xl gap-4 p-4 flex-col border-2 border-[#FFDC26]`}>
            <a href="/">Home</a>
            <a href="#">About</a>
            <a href="#">Pet Grooming</a>
            <a href="#">Pet Sitter</a>
            <a href="#">Pet Training</a>
            <p>+62 899-782-6957 <br/><span className='text-[#FFDC26]'>10:00 - 19:00</span></p>
          </div>
        </div>
    </nav>
  )
}

export default Navbar