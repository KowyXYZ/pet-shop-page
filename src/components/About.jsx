import React from 'react'
import { about, logo } from '../assets'

function About() {
  return (
    <div id='about' className='flex flex-col mt-16 mx-6 sm:mx-16 md:mx-24 justify-center sm:items-start md:items-start xl:items-start items-center '>
        <img className='object-contain w-64' src={logo} alt="logo" />
        <p className='sm:text-start md:text-start xl:text-start text-center w-[300px] sm:w-[500px] md:w-[550px] mt-4 text-[gray] text-[14px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam asperiores autem unde tempore quaerat nostrum itaque quasi commodi aperiam, quo laudantium sapiente odit accusamus fugiat perspiciatis fuga corrupti placeat officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fuga earum eligendi corrupti neque doloremque id! Repudiandae iste voluptatem non, commodi excepturi est, tenetur rem odit in illum, sunt blanditiis?
        </p>
        <img className='w-screen md:-mt-64 sm:-mt-64 -mt-10 mix-blend-multiply' src={about} alt="about" />
    </div>
  )
}

export default About