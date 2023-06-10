import Image from 'next/image'
import React from 'react'
import {BsClipboard, BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-full h-full'>
        <div className='bg-[#DB421B]  w-full h-full max-h-[37px] py-2 flex flex-row items-center justify-center md:px-8'>
            <div className='max-w-[1720px] flex flex-row items-end justify-end w-full px-2'>
                <div className='flex flex-row items-center text-white mr-6'>
                    <BsFillTelephoneFill className='mr-2'/>
                    <p className='font-bold text-sm'>+254 721410517</p>
                </div>
                <div className='flex flex-row items-center text-white'>
                    <MdEmail className='mr-2'/>
                    <p className='font-bold text-sm'>+254 721410517</p>
                </div>
            </div>
        </div>
        <div className='hidden md:flex w-full py-4 my-2 px-2  md:px-8  flex-row justify-center items-center'>
            <div className='max-w-[1720px] w-full flex flex-row justify-between'>
                <Image src='/assets/General/logo.svg' width={205} height={48}  alt='Taylor Movers Logo' />
                <div className='flex flex-row items-center text-sm'>
                    <Link href='/'>
                        <div className='mr-6'>
                            <p>Home</p>
                        </div>
                    </Link>
                    <Link href='/About'>
                        <div className='mr-6'>
                            <p>About Us</p>
                        </div>
                    </Link>
                    <Link href='/Services'>
                        <div className='mr-6'>
                            <p>Services</p>
                        </div>
                    </Link>
                    <Link href='/Blog'>
                        <div className='mr-6'>
                            <p>Blog</p>
                        </div>
                    </Link>
                    <Link href='/Contacts'>
                        <div className='mr-6'>
                            <p>Contacts</p>
                        </div>
                    </Link>
                    <div className='mr-6 px-4 flex flex-row items-center justify-center py-2 border border-[#DB421B] rounded-full shadow-sm shadow-[#DB421B]'>
                        <p className='text-[#DB421B]'>Request a quote</p>
                        <BsClipboard className='text-[#DB421B] ml-2'/>
                    </div>

                </div>
            </div>
        </div>
        <div className='md:hidden'>

        </div>
        <div className='bg-[#182C4D]  w-full h-full max-h-[37px] py-2 flex flex-row items-center justify-center md:px-8'>
            <div className='max-w-[1720px] flex flex-row items-center justify-center w-full py-2'>
                <p className='font-bold text-sm text-white'>Click here to chat with us now</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar