import React from 'react'
import { footer, instagram, tiktok, twitter } from '../assets'

function Footer() {
  return (
    <div className='py-6 bg-[#FFDC26]'>
        <div className='mx-6 xs:mx-16 md:mx-24 flex- flex-col'>
            <div className='flex flex-col items-center justify-center'>
                <img className='md:w-1/4 w-full' src={footer} alt="footer" />
            </div>

            

            <div className='flex gap-8 items-center justify-center mt-4'>
                <div>
                    <p className='font-black text-[20px]'>Service</p>
                    <div className='text-[#fff]'>
                        <p>Location</p>
                        <p>Cat</p>
                        <p>Grooming</p>
                    </div>
                </div>

                <div >
                    <p className='font-black text-[20px]'>Support</p>
                    <div className='text-[#fff]'>
                        <p>Location</p>
                        <p>Cat</p>
                        <p>Grooming</p>
                    </div>
                </div>

               

            </div>
            <div className='flex justify-center items-center gap-4 mt-4'>
                    <img className='w-8 h-8' src={instagram} alt="instagram" />
                    <img className='w-8 h-8' src={twitter} alt="instagram" />
                    <img className='w-8 h-8' src={tiktok} alt="instagram" />
                </div>
        </div>

    </div>
  )
}

export default Footer