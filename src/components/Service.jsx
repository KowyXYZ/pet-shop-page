import React from 'react'
import { service } from '../assets'

function Service() {
  return (
    <div className='bg-[#FFF9F4] py-6'>
        <div className='mx-6 sm:mx-16 md:mx-24 flex flex-col items-center text-center justify-center'>
             <p className='font-black sm:text-[40px] md:text-[40px] text-[30px]'>Out The Best Serivce</p>
             <p className='text-[gray] text-[14px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <img className='w-[620px]' src={service} alt="service" />
            <div className='hidden sm:flex md:flex gap-10 text-[gray] text-[14px]'>
                <p>Pet Clinic</p>
                <p>Pet Hotel</p>
                <p>Pet Grooming</p>
                <p>Pet Sitter</p>
                <p>Pet Training</p>
            </div>
        </div>

    </div>
  )
}

export default Service