import Image from 'next/image'
import React from 'react'
// import bgImg from '../../public/assets/wellness/bgImg.png'

const Featured = () => {
  return (
    <div className='w-full text-center relative flex items-center justify-center'>
        <div className=' rounded-lg bg-black/40 py-8 w-full max-w-[350px] md:max-w-[924px] h-full max-h-[202px] mx-auto p-2 flex flex-row justify-center items-center absolute z-10'>
            <div className='flex flex-row justify-center items-center'>
                <Image src='/assets/home/apos.svg' alt='apostrophes' width={40} height={40} />
                <h1 className=' md:text-3xl hidden md:block text-start text-xl text-white font-light pl-4'>
                TAYLOR MOVERS IS A PREMIER <br /> MOVING COMPANY IN KENYA
                </h1>
                <h1 className='md:hidden md:text-3xl text-start text-xl text-white font-light pl-4'>
                TAYLOR MOVERS IS A PREMIER  MOVING COMPANY IN KENYA
                </h1>
            </div>
            

            {/* <button className='px-8 py-2 rounded-full bg-[#5BDADD] text-white mt-8'>
                <p className='text-lg'>Book a package</p>
            </button> */}
        </div>
        {/* <div className='w-full object-cover items-center  h-full min-h-[500px] bg-black/30 absolute'/> */}
        <Image src="/assets/home/bg.png" width={500} height={500} alt='Taylor Movers' className='w-full object-cover items-center min-h-[500px] max-h-[500px]'/>
    </div>
  )
}

export default Featured