import Image from 'next/image'
import React from 'react'
import { BsAirplane, BsHouse, BsTruck } from 'react-icons/bs'

const Mirage = () => {
  return (
    <div className='w-full h-full my-12 py-12 px-4 flex items-center justify-center'>
        <div className='flex flex-col max-w-[1720px] px-2 w-full'>
            <h2 className='text-xl pb-2'>Our Mirage of Services</h2>
            <hr className='w-[100px] border-[#DB421B] border'/>

            <p className='w-full max-w-[800px] mt-6'>
                We specialize in local and international relocations. Taylor Movers is a privately held firm committed to 
                excellence through providing relocations, transportation, warehousing, expatriate mobility services 
                and logistics services efficiently.
            </p>

            <div className='flex flex-col md:flex-row mt-12 h-full justify-between  items-center relative md:overflow-x-auto'>
                <div className='w-full h-full max-w-[400px] relative md:max-w-[519px]  my-4  mx-4'>
                     <div className=' min-w-[279px] min-h-[200px] rounded-lg bg-[#DB421B]/80 py-8 w-full bottom-0 max-w-[279px]   md:max-h-[275px] mx-auto p-2  absolute z-10'>
                        <div className='flex flex-col text-white'>
                            <BsTruck size={30} />
                            <p className='mt-2 text-lg'>Household moving</p>

                            <p className='mt-2 text-sm max-w-[200px]'>
                                As your household moving company, 
                                we&apos;re probably like you in that we don&apos;t 
                                like surprises.
                            </p>

                            <button className='bg-white text-[#DB421B] text-xs rounded-full py-2 px-4 w-[100px] mt-4'>
                                View
                            </button>
                        </div>
                    </div>                  
                    <Image src='/assets/home/mirage/pic.png' alt='Our services' width={383} height={289} className='w-full h-full' />
                </div>
                <div className='w-full h-full max-w-[383px] relative md:max-w-[519px] max-h-[289px] my-4 md:max-h-[458px] mx-4 '>
                <div className=' min-w-[279px] min-h-[200px] rounded-lg bg-[#DB421B]/80 py-8 w-full bottom-0 max-w-[279px]   md:max-h-[275px] mx-auto p-2  absolute z-10'>
                        <div className='flex flex-col text-white'>
                            <BsHouse size={30} />
                            <p className='mt-2 text-lg'>Corporate moving</p>

                            <p className='mt-2 text-sm max-w-[200px]'>
                                As your household moving company, 
                                we&apos;re probably like you in that we don&apos;t 
                                like surprises.
                            </p>

                            <button className='bg-white text-[#DB421B] rounded-full py-2 px-4 w-[100px] mt-4 text-xs'>
                                View
                            </button>
                        </div>
                    </div>                  
                    <Image src='/assets/home/mirage/pic.png' alt='Our services' width={383} height={289} className='w-full h-full' />
                </div>
                <div className='w-full h-full max-w-[383px] relative md:max-w-[519px] max-h-[289px] my-4 md:max-h-[458px] mx-4 '>
                <div className=' min-w-[279px] min-h-[200px] rounded-lg bg-[#DB421B]/80 py-8 w-full bottom-0 max-w-[279px]   md:max-h-[275px] mx-auto p-2  absolute z-10'>
                        <div className='flex flex-col text-white'>
                            <BsAirplane size={30} />
                            <p className='mt-2 text-lg'>Interational moving</p>

                            <p className='mt-2 text-sm max-w-[200px]'>
                                As your household moving company, 
                                we&apos;re probably like you in that we don&apos;t 
                                like surprises.
                            </p>

                            <button className='bg-white text-[#DB421B] text-xs rounded-full py-2 px-4 w-[100px] mt-4'>
                                View
                            </button>
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