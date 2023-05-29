import Image from 'next/image'
import React from 'react'
import { BsTruck } from 'react-icons/bs'

const Mirage = () => {
  return (
    <div className='w-full h-full my-12 py-12 flex items-center justify-center'>
        <div className='flex flex-col max-w-[1720px] px-2 w-full'>
            <h2 className='text-xl pb-2'>Our Mirage of Services</h2>
            <hr className='w-[100px] border-[#DB421B] border'/>

            <p className='w-full max-w-[800px] mt-6'>
                We specialize in local and international relocations. Taylor Movers is a privately held firm committed to 
                excellence through providing relocations, transportation, warehousing, expatriate mobility services 
                and logistics services efficiently.
            </p>

            <div className='flex flex-col md:flex-row mt-12'>
                <div className='w-full h-full max-w-[383px] md:max-w-[519px] max-h-[289px] md:max-h-[458px]'>
                    <div className=' rounded-lg bg-[#DB421B]/40 py-8 w-full max-w-[279px] md:max-w-[340px] h-full md:max-h-[275px] max-h-[173px] mx-auto p-2 flex flex-row justify-center items-center absolute z-10'>
                        <div className='flex flex-col '>
                            <BsTruck />
                            <p className='mt-4'>Household moving</p>
                        </div>
                    </div>                  
                    <Image src='/assets/home/mirage/pic.png' alt='Our services' width={383} height={289} className='w-full h-full' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mirage