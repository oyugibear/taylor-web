import Image from 'next/image'
import React, { useState } from 'react'
import {BsClipboard, BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Navbar = () => {
    const [open, setOpen] = useState(false)

  return (
    <div className='w-full h-full'>
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
            <div className='md:hidden py-4 my-2 px-2  md:px-8  flex-row justify-center items-center'>
                <div className='w-full flex flex-row items-center justify-between'>
                    <Image src='/assets/General/logo.svg' width={105} height={48}  alt='Taylor Movers Logo' />
                    <AiOutlineMenu size={30} className='ml-4' onClick={() => setOpen(true)}/>
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
                        <div className='mr-6 px-4 flex flex-row items-center justify-center py-2 border border-[#DB421B] rounded-full shadow-sm shadow-[#DB421B] animate-pulse'>
                            <p className='text-[#DB421B]'>Request a quote</p>
                            <BsClipboard className='text-[#DB421B] ml-2'/>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className='bg-[#182C4D]  w-full h-full max-h-[37px] py-2 flex flex-row items-center justify-center md:px-8'>
                <div className='max-w-[1720px] flex flex-row items-center justify-center w-full py-2'>
                    <p className='font-bold text-sm text-white'>Click here to chat with us now</p>
                </div>
            </div>
        </div>
        <div className={open ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-50" : "" }>
            <div className={open ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white px-4 py-10 ease-in duration-200" : "fixed left-[-100%] top-0 p-10 ease-in duration-200"}>
                <div className='flex w-full items-start justify-between'>
                    <Link href='/'>
                        <Image src='/assets/General/logo.svg' alt='/' width='150' height='1' />
                    </Link>
                    <div onClick={() => setOpen(false)} className='rounded-full shadow-sm shadow-gray-400 p-1 cursor-pointer hover:animate-pulse'>
                        <AiOutlineClose />
                    </div>
                </div>

                <div className='py-4 flex flex-col'>
                    <ul>
                    
                    <Link href='/About'>
                        <li className='py-4 text-sm'>
                                About us
                        </li>
                    </Link>
                    <Link href='/Services'>
                        <li className='py-4 text-sm'>
                                Services
                        </li>
                    </Link>
                    <Link href='/Blog'>
                        <li className='py-4 text-sm'>
                                Blog
                        </li>
                    </Link>
                    <Link href='/Contacts'>
                        <li className='py-4 text-sm'>
                                Contacts
                        </li>
                    </Link>
                    <Link href='/Quote'>
                        <span className=' flex flex-row items-center w-fit text-sm justify-center py-2 shadow-b-sm shadow-[#DB421B]'>
                            <BsClipboard className='text-[#DB421B] mr-2'/>
                            Request a quote
                        </span>
                    </Link>
                    

                    
                    </ul>
                    <div className='pt-40'>
                        <p className='tracking-widest text-slate-400'> Follow us</p>
                        {/* Problem here with Fa icons */}
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <a href='https://www.linkedin.com/in/arthur-oyugi-993b81206/'>
                                    <FaInstagram />
                                </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <a href='https://github.com/oyugibear'>
                                    <FaTwitter />
                                </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <a href='mailto:jroyugi@gmail.com'>
                                    <FaFacebook />
                                </a>
                            </div>
                            {/* <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                            <BsFillPersonLinesFill/>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar