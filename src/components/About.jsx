import React from 'react'
import { about, logo } from '../assets'

function About() {
  return (
    <div className='flex flex-col mt-16 mx-6 sm:mx-16 md:mx-24 justify-center items-start'>
        <img className='object-contain w-64' src={logo} alt="logo" />
        <p className='w-[300px] sm:w-[500px] md:w-[550px] mt-4 text-[gray] text-[14px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam asperiores autem unde tempore quaerat nostrum itaque quasi commodi aperiam, quo laudantium sapiente odit accusamus fugiat perspiciatis fuga corrupti placeat officiis?
        </p>
        <img className='border-2 w-1/2' src={about} alt="" />
    </div>
  )
}

export default About