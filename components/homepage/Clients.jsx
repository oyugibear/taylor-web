import Image from 'next/image'
import React, { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'

const Clients = () => {
    const [openBanking, setOpenBanking] = useState(true)
    const [openTech, setOpenTech] = useState(false)
    const [openOil, setOpenOil] = useState(false)

  return (
    <div className='w-full h-full my-12 py-12 px-4 md:px-8 flex items-center justify-center'>
       <div className='flex flex-col max-w-[1440px] w-full'>
            <h2 className='text-xl mb-2'>Our Clients</h2>
            <hr className='border border-[#DB421B] w-[50px] mb-4'/>

            <p className='max-w-[1000px]'>
                We have a diversified portfolio of moving services in Kenya that include residential moving, corporate moving, office moving and industrial moving services. Whether your moving within Nairobi, moving anywhere in Kenya or International moving; Taylor Movers Kenya has as solution Tailor Made for you.
            </p>

            <div className='flex flex-col mt-12'>
                <div className='flex flex-col'>
                    <button className='flex items-center   py-2 rounded-md  mb-2' onClick={() => setOpenBanking(prev => !prev)}>
                        { openBanking ? <BiChevronRight className='transform rotate-90 text-[#DB421B]' /> : <BiChevronRight className='text-[#DB421B]'/> }
                        <p className='text-sm pl-4'>Banking/ Education</p>
                    </button>
                    {openBanking ? (
                        <div className='flex flex-row items-center overflow-x-auto mt-4'>
                            <Image src='/assets/Clients/1.png' alt='Banking' width={122} height={122} className='w-full max-w-[122px] h-[122px] object-cover mr-4' />
                            <Image src='/assets/Clients/2.png' alt='Banking' width={122} height={122} className='w-full max-w-[122px] h-[122px] object-cover mr-4' />
                            {/* <Image src='/assets/Clients/3.png' alt='Banking' width={122} height={122} className='w-full max-w-[122px] h-[122px] object-cover mr-4' /> */}
                            <Image src='/assets/Clients/4.png' alt='Banking' width={122} height={122} className='w-full max-w-[122px] h-[122px] object-cover mr-4' />
                            <Image src='/assets/Clients/5.png' alt='Banking' width={122} height={122} className='w-full max-w-[122px] h-[122px] object-cover mr-4' />
                        </div>
                    ) : null}
                    
                </div>
                <div className='flex flex-col my-12'>
                    <button className='flex items-center   py-2 rounded-md  mb-2' onClick={() => setOpenTech(prev => !prev)}>
                        { openTech ? <BiChevronRight className='transform rotate-90 text-[#DB421B]' /> : <BiChevronRight className='text-[#DB421B]'/> }
                        <p className='text-sm pl-4'>Tech Hubs</p>
                    </button>
                    {openTech ? (
                        <div className='flex flex-row items-center overflow-x-auto mt-4'>
                            <Image src='/assets/Clients/6.png' alt='Banking' width={122} height={122} className='w-full max-w-[122px] h-[122px] object-cover mr-4' />
                            <Image src='/assets/Clients/7.png' alt='Banking' width={122} height={122} className='w-full max-w-[122px] h-[122px] object-cover mr-4' />
                            <Image src='/assets/Clients/8.png' alt='Banking' width={122} height={122} className='w-full max-w-[122px] h-[122px] object-cover mr-4' />
                            <Image src='/assets/Clients/9.png' alt='Banking' width={122} height={122} className='w-full max-w-[122px] h-[122px] object-cover mr-4' />
                            <Image src='/assets/Clients/10.png' alt='Banking' width={122} height={122} className='w-full max-w-[122px] h-[122px] object-cover mr-4' />
                        </div>
                    ) : null}

                </div>
                <div className='flex flex-col'>
                    <button className='flex items-center   py-2 rounded-md  mb-2' onClick={() => setOpenOil(prev => !prev)}>
                        { openOil ? <BiChevronRight className='transform rotate-90 text-[#DB421B]' /> : <BiChevronRight className='text-[#DB421B]'/> }
                        <p className='text-sm pl-4'>Goevrnamental/ Oil</p>
                    </button>
                    {openOil ? (
                        <div className='flex flex-row items-center overflow-x-auto mt-4'>
                            <Image src='/assets/Clients/11.png' alt='Banking' width={122} height={122} className='w-full max-w-[122px] h-[122px] object-cover mr-4' />
                            <Image src='/assets/Clients/12.png' alt='Banking' width={122} height={122} className='w-full max-w-[122px] h-[122px] object-cover mr-4' />
                            <Image src='/assets/Clients/13.png' alt='Banking' width={122} height={122} className='w-full max-w-[122px] h-[122px] object-cover mr-4' />
                            <Image src='/assets/Clients/14.png' alt='Banking' width={122} height={122} className='w-full max-w-[122px] h-[122px] object-cover mr-4' />
                        </div>
                    ) : null}

                </div>
            </div>
        </div> 
    </div>
  )
}

export default Clients