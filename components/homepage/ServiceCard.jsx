import Image from 'next/image'
import React from 'react'
import { BsArrowRightShort, BsTruck } from 'react-icons/bs'

const ServiceCard = () => {
  return (
    <div className='flex flex-col mt-6 md:mt-0 bg-[#DB421B] rounded-xl max-w-[212px] h-full mr-4'>
        <div className='flex flex-col w-full h-full max-w-[212px] max-h-[308px] bg-[#DB421B] rounded-xl'>
            <div className='w-[212px] h-[151px] rounded-t-xl'>
                {/* <div className='w-full object-cover items-center z-0  h-full max-h-[151px] max-w-[212px] rounded-t-xl bg-[#DB421B]/30 absolute'/> */}
                <Image src='/assets/home/services/pic1.png' alt='services picture' width={212} height={151} />
            </div>
        </div>
        <div className='flex flex-col items-start justify-center px-4 mt-4 py-2'>
            <BsTruck size={30} className='text-white'/>
            <p className='mt-4 text-white font-light'>Coporate moving</p>
            <p className='mt-2 text-white'>
                Our key focus and 
                goal is to understand 
                our clients experience 
                from their point of view. 
            </p>
            <button className='px-4 py-2 bg-white flex flex-row items-center w-full text-[#DB421B] max-w-[100px] rounded-2xl my-4'>
                View
                <BsArrowRightShort className='text-[#DB421B] ml-2'/>
            </button>
        </div>
    </div>
  )
}

export default ServiceCard