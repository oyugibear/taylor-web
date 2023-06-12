import React, { useState } from 'react'
import Featured from '../components/Blog/Featured'
import BlogCard from '../components/Blog/BlogCard'


const Blog = () => {
    const [categorieType, setCategoriesType] = useState('all')
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <Featured />
        <div className='max-w-[1440px] w-full h-full flex flex-col items-start justify-start py-12 my-12 px-4 md:px-8'>
            <div className='flex flex-col mb-6'>
                <h2 className='text-2xl mb-2'>Our Blog</h2>
                <p>
                    Moving can be a daunting task, even for the most experienced movers. With that in mind, we&apos;ve pulled 
                    together some resources that can come in handy, whether you are moving with us or not. The Taylor 
                    Movers blog is your one-stop information shop for all issues related to your move. Our moving articles 
                    will alleviate your stress and connect you with the best moving resources on the web. Everything is right 
                    at your fingertips. Our mission: provide moving tips that save you time and money during the journey into 
                    your new home or office!
                </p>
            </div>

            <div className='flex flex-col  mt-6 w-full'>
                <h3 className='text-[#DB421B] mb-2 text-lg'>Categories</h3>
                <div className='flex flex-row pr-6   w-full overflow-x-auto pb-6 mr-6 '>
                    <div onClick={() => setCategoriesType('Document storage')} className=' mr-6 hover:antialiased cursor-pointer w-fit'>
                        <p className='whitespace-nowrap'>Document storage</p>
                        <hr className='border border-[#DB421B] w-[50px] hover:w-[80px] duration-150'/>
                    </div>
                    <div onClick={() => setCategoriesType('General Moving')} className=' mr-6 hover:antialiased cursor-pointer w-fit'>
                        <p className='whitespace-nowrap'>General Moving</p>
                        <hr className='border border-[#DB421B] w-[50px] hover:w-[80px] duration-150'/>
                    </div>
                    <div onClick={() => setCategoriesType('House Moving')} className=' mr-6 hover:antialiased cursor-pointer w-fit'>
                        <p className='whitespace-nowrap'>House Moving</p>
                        <hr className='border border-[#DB421B] w-[50px] hover:w-[80px] duration-150'/>
                    </div>
                    <div onClick={() => setCategoriesType('Office Moving')} className=' mr-6 hover:antialiased cursor-pointer w-fit'>
                        <p className='whitespace-nowrap'>Office Moving</p>
                        <hr className='border border-[#DB421B] w-[50px] hover:w-[80px] duration-150'/>
                    </div>
                </div>
                <h3 className='text-[#DB421B] mb-2 mt-8'>Search By Tag</h3>
                <div className='flex flex-row pr-6   w-full overflow-x-auto pb-6 mr-6 '>
                    <button onClick={() => setCategoriesType('Document storage')} className='bg-[#DB421B]/60 rounded-full mr-6 hover:antialiased cursor-pointer w-fit py-2 px-4 flex items-center justify-center text-white'>
                        <p className='whitespace-nowrap'>Document storage</p>
                    </button>
                    <button onClick={() => setCategoriesType('Document storage')} className='bg-[#DB421B]/60 rounded-full mr-6 hover:antialiased cursor-pointer w-fit py-2 px-4 flex items-center justify-center text-white'>
                        <p className='whitespace-nowrap'>Document storage</p>
                    </button>
                    <button onClick={() => setCategoriesType('Document storage')} className='bg-[#DB421B]/60 rounded-full mr-6 hover:antialiased cursor-pointer w-fit py-2 px-4 flex items-center justify-center text-white'>
                        <p className='whitespace-nowrap'>Document storage</p>
                    </button>
                    <button onClick={() => setCategoriesType('Document storage')} className='bg-[#DB421B]/60 rounded-full mr-6 hover:antialiased cursor-pointer w-fit py-2 px-4 flex items-center justify-center text-white'>
                        <p className='whitespace-nowrap'>Document storage</p>
                    </button>
                </div>

                <div className='flex flex-col w-full mt-12'>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Blog