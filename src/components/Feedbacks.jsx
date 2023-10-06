import React from 'react'
import { feedback, woman_feedback, woman_left, woman_right } from '../assets'
import { Rate } from 'antd'

function Feedbacks() {
  return (
    <div className='py-6  bg-[#F6F6F6]'>
        <div className='mx-6 sm:mx-16 items-center md:mx-24 flex flex-col sm:flex-row md:flex-row xl:flex-row justify-center gap-44'>
            <div className='flex items-center justify-center xs:items-start md:items-start  flex-col'>
                 <p className='text-[#FFDC26] text-[18px] font-bold'>Our Reviews</p>
                 <p className='font-black sm:text-[40px] md:text-[40px] text-[30px]'>What Customers Say</p>
                <div className='mt-4 flex gap-6 items-start'>
                    <img className='w-24' src={woman_feedback} alt="woman_feedback" />
                    <div className='flex justify-start flex-col items-start'>
                        <p className='text-[20px] font-semibold'>Mba Jennie</p>
                        <div className='flex items-center justify-center gap-4'>
                           <Rate allowHalf disabled defaultValue={4.5}/> <p>4.5</p>
                        </div>
                        
                        <p className='w-[200px]'>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                    </div>
                </div>
                <div className='flex mt-10 gap-2 items-center justify-center'>

                    <div>
                        <p className='font-black py-1 px-2 bg-[#afafaf] rounded-2xl'>&#8592;</p>
                    </div>
                 

                    <div className='flex gap-2 justify-center items-center'>
                        <img className='w-12 h-12 object-contain' src={woman_left} alt="woman_left" />
                        <img className='w-16 h-16 object-contain' src={woman_feedback} alt="woman_left" />
                        <img className='w-12 h-12 object-contain' src={woman_right} alt="woman_left" />
                    </div>

                    <div>
                         <p className='font-black py-1 px-2 bg-[#afafaf] text-center rounded-2xl'>&#8594;</p>
                    </div>
                   
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <img className='xs:w-1/2 md:w-1/2 w-96 mix-blend-multiply' src={feedback} alt="feedback_cat" />
            </div>
        </div>
    </div>
  )
}

export default Feedbacks