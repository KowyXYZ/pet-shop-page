import React from 'react'
import { cat_dog, cat_home, cat_space } from '../assets'

function CatService() {
  return (
    <div  className='py-6 mx-6 sm:mx-16 md:mx-24 flex flex-col justify-center items-center'>
        <p className='text-[#FFDC26] text-[18px] font-bold'>Our Service</p>
        <p className='font-black sm:text-[40px] md:text-[40px] text-[30px]'>How Does It Work</p>
        <div className='flex flex-col md:flex-row sm:flex-row'>
            <div className='text-center flex justify-center items-center flex-col'>
                <img className='w-64' src={cat_home} alt="cat-home" />
                <p className='text-[18px] text-semibold'>Expirienced</p>
                    <p className='text-[14px] text-[gray]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='text-center flex justify-center items-center flex-col'>
                <img className='w-64' src={cat_dog} alt="cat-home" />
                <p className='text-[18px] text-semibold'>With Heart</p>
                    <p className='text-[14px] text-[gray]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='text-center flex justify-center items-center flex-col'>
                <img className='w-64' src={cat_space} alt="cat-home" />
                <p className='text-[18px] text-semibold'>Best Service</p>
                    <p className='text-[14px] text-[gray]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
  )
}

export default CatService