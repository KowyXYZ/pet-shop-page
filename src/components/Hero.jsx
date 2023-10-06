import React from 'react'
import { doctor, hero_img, soap } from '../assets'

function Hero() {
  return (
    <div className='flex sm:flex-row md:flex-row xl:flex-row flex-col relative justify-center md:gap-44 sm:gap-32  items-center sm:mx-16 md:mx-24 mx-6'>
        <img className='w-[350px] h-[350px]] object-contain' src={hero_img} alt="hero-image" />

        <div className='hidden sm:flex md:flex xl:flex shadow-xl absolute left-56 rounded-3xl p-2 top-[250px] bg-[#fff] gap-4'>
            <img className='w-10 h-10 object-contain' src={soap} alt="soap" />
            <div className='flex flex-col '>
                <p className='font-semibold'>Pet Grooming</p>
                <p className='w-[200px] text-[12px] text-[gray]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        <div className='hidden sm:flex md:flex xl:flex shadow-xl absolute left-0 rounded-3xl bg-[#fff] bottom-[100px] p-2 gap-4'>
            <img className='w-10 h-10 object-contain' src={doctor} alt="soap" />
            <div className='flex flex-col '>
                <p className='font-semibold'>Pet Clinic</p>
                <p className='w-[200px] text-[12px] text-[gray]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        <div className='flex flex-col space-y-4 text-center justify-center items-center'>
            <p className='text-[#FFDC26] text-[48px] font-black'>Be Glowing Be Cute</p>
            <p className='text-[gray] text-[16px] w-[300px] md:w-[500px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Proin mollis sed viverra posuere malesuada.
                  At et pharetra diam vel. Quis dignissim maecenas lectus vestibulum, sed.
                   Risus est accumsan euismod ut at consequat.
            </p>
            <button className='bg-[#ffdc26] py-2 px-6 rounded-3xl text-[#fff] font-black text-[20px]'>Contact Us</button>
        </div>
    </div>
  )
}

export default Hero