import Image from 'next/image'
import React from 'react'
import { BsArrowRightShort, BsTruck } from 'react-icons/bs'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='w-full h-full flex items-center justify-center my-12'>
        <div className='max-w-[1720px] flex flex-col md:flex-row items-center w-full justify-center md:justify-evenly px-2'>
            <div className='flex flex-col items-start justify-center'>
                <h2 className='mb-2 text-lg'>TAYLOR MOVERS IS A PREMIER <br /> MOVING COMPANY IN KENYA</h2>
                <p className='max-w-[565px]'>
                    Whether moving within Nairobi or around the globe, Taylor movers Kenya will have a custom tailored moving solution for you.
                </p>
            </div>
            <div className='flex flex-row w-full overflow-x-auto max-w-[924px] my-4 md:my-0'>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    </div>
  )
}

export default Services