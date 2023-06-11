import Image from 'next/image'
import React from 'react'
import { BsArrowRightShort, BsTruck } from 'react-icons/bs'
import ServiceCard from './ServiceCard'


const Services = () => {
    const info = [
        {
            id: 1,
            pic: 'pic1.png',
            icon: 'truck',
            title: 'Coporate Moving',
            text: ' Our key focus and goal is to understand our clients experience from their point of view.',
        },
        {
            id: 2,
            pic: 'pic2.png',
            icon: 'warehouse',
            title: 'Household Moving',
            text: ' Our key focus and goal is to understand our clients experience from their point of view.',
        },
        {
            id: 3,
            pic: 'pic3.png',
            icon: 'plane',
            title: 'International Moving',
            text: ' Our key focus and goal is to understand our clients experience from their point of view.',
        },
        {
            id: 4,
            pic: 'pic4.png',
            icon: 'truck2',
            title: 'Moving Resouces',
            text: ' Our key focus and goal is to understand our clients experience from their point of view.',
        },
    ]
  return (
    <div className='w-full h-full flex items-center justify-center my-12'>
        <div className='max-w-[1720px] flex flex-col md:flex-row items-center w-full justify-center md:justify-evenly px-4'>
            <div className='flex flex-col items-start justify-center'>
                <h2 className='mb-2 text-lg'>TAYLOR MOVERS IS A PREMIER <br /> MOVING COMPANY IN KENYA</h2>
                <p className='max-w-[565px]'>
                    Whether moving within Nairobi or around the globe, Taylor movers Kenya will have a custom tailored moving solution for you.
                </p>
            </div>
                <div  className='flex flex-row w-full overflow-x-auto max-w-[924px] my-4 md:my-0'>
                    {info.map((inf) => (
                        <ServiceCard key={inf.id} inf={inf}/>
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Services