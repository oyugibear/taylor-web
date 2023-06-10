import Image from 'next/image'
import { BsCalendar, BsShare } from 'react-icons/bs'
import React from 'react'
import Link from 'next/link'

const BlogCard = () => {
  return (
        <Link href={`/Blog/${1}`}>
    <div  className='flex flex-col md:flex-row my-6'>
        <Image src='/assets/Blogs/b1.png' width={350} height={350} className='mb-6 md:mb-0 cursor-pointer'/>
        <div className='flex flex-col px-2 md:ml-4'>
            <p className='text-xs mb-2'>General Moving</p>
            <h3>
                COVID-19 PRECAUTIONARY MEASURES FOR MOVING SERVICES
            </h3>
            <hr className='w-[50px] border border-[#DB421B] my-4'/>
            <div className='flex flex-wrap items-center'>
                <div className='mb-4 md:mb-0 flex flex-row items-center justify-center h-full px-2 border-gray-200 border-r'>
                    <Image src='/assets/Blogs/p1.png' width={35} height={35} className=' md:mb-0'/>
                    <p className='ml-2'>Adii White</p>
                </div>
                <div className='mb-4 md:mb-0 flex flex-row items-center justify-center h-full px-4 border-gray-200 border-r'>
                    <BsCalendar size={20} className=' md:mb-0 text-[#DB421B]'/>
                    <p className='ml-2'>22/12/23</p>
                </div>
                <div className='mb-4 md:mb-0 flex flex-row items-center justify-center h-full px-2 '>
                    <BsShare size={20} className=' md:mb-0 text-[#DB421B]'/>
                    <p className='ml-2'>Share</p>
                </div>
            </div>
            <p className='mt-4 text-slate-300'>
                To ensure the safety of our customers and that of our team, we&apos;ve implemented some safety 
                measures to ensure safety in the COVID-19 period. 1.Upon client making inquiry, our customer 
                care representative advises the client that we shall do video or photos as a survey if possible. 
                The survey that was previously physical ensures that
            </p>
        </div>
    </div>
        </Link>
  )
}

export default BlogCard