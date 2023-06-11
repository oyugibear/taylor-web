import Image from 'next/image'
import React, { useState } from 'react'
import Featured from '../components/Contacts/Featured'
import Testimonials from '../components/homepage/Testimonials'

const Contacts = () => {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')

    const handleClick = (e) => {
        e.preventDefault()

    }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <Featured />
        <div className='w-full h-full flex flex-col items-center justify-center max-w-[1440px]'>
            <div className='py-12  flex flex-col px-4'>
                <h1 className='mb-4 md:mb-12 text-xl'>Feel Free To Contact Us</h1>
                <p>
                    We are here to assist you with any inquiries you may have regarding Taylor
                    Movers and the services we provide. Please feel free to contact us by filling 
                    out the form below, and we will respond to your message as promptly as possible.
                </p>
                <div className='my-4 py-4 flex flex-col md:flex-row justify-between'>
                    <div className='flex flex-col'>
                        <h3 className='mb-4 text-lg text-gray-500'>Main Office Contact Details</h3>
                        <p className='mb-2 text-[#DB421B]'>Nairobi Office: </p>
                        <p className='mb-4 text-sm'>
                            Nazarene Complex Suite 1, Central Church of The Nazarene
                            <br />
                            Ngong Road,
                            <br />
                            Nairobi, Kenya
                            <br />
                            Tel: 0721410517
                            <br />
                            Email: info@taylorea.com
                        </p>
                        <p className='mb-2 text-[#DB421B]'>Mombasa Office: </p>
                        <p className='mb-2 text-sm'>
                            Moi Avenue,
                            <br />
                            Ivory Building, 2nd Floor
                            <br />
                            Mombasa Kenya.
                            <br />
                            Tel: 0758590998
                            <br />
                            Email: msacc@taylorea.com
                        </p>
                    </div>
                    <Image src='/assets/Contacts/map.png' width={669} height={368} className=' w-full md:max-w-[669px]  my-4' />
                </div>
            </div>
            <div className='flwe flex-col w-full px-4 mb-4'>
                <h3 className='text-lg mb-4'>Contact Us</h3>
                <form onSubmit={(e) => handleClick(e)} className='w-full flex flex-col'>
                    <div className='flex flex-col md:flex-row w-full max-w-[800px] justify-between'>
                        <div className='border border-slate-300 rounded-xl relative w-full max-w-[351px] mb-4 md:mr-2'>
                            <input type='text' value={fname} onChange={() => setFname(fname)} className='px-4 py-2 rounded-xl' />
                            <label className='absolute top-[-8px] bg-white left-5 text-xs px-2 text-gray-400'>
                                First Name
                            </label>
                        </div>
                        <div className='border border-slate-300 rounded-xl relative w-full max-w-[351px] mb-4 md:mr-2'>
                            <input type='text' value={lname} onChange={() => setLname(lname)} className='px-4 py-2 rounded-xl' />
                            <label className='absolute top-[-8px] bg-white left-5 text-xs px-2 text-gray-400'>
                                Last Name
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row w-full max-w-[800px] justify-between'>
                        <div className='border border-slate-300 rounded-xl relative w-full max-w-[351px] mb-4 md:mr-2'>
                            <input type='text' value={email} onChange={() => setEmail(email)} className='px-4 py-2 rounded-xl' />
                            <label className='absolute top-[-8px] bg-white left-5 text-xs px-2 text-gray-400'>
                                Email
                            </label>
                        </div>
                        <div className='border border-slate-300 rounded-xl relative w-full max-w-[351px] mb-4 md:mr-2'>
                            <input type='text' value={number} onChange={() => setNumber(number)} className='px-4 py-2 rounded-xl' />
                            <label className='absolute top-[-8px] bg-white left-5 text-xs px-2 text-gray-400'>
                                Phone Number
                            </label>
                        </div>
                    </div>

                    <textarea value={message} onChange={() => setMessage(message)} cols="30" rows="10" className='my-4 border border-grey-500 rounded-xl w-full max-w-[351px] md:max-w-[800px]'/>

                    <button type='submit' className='px-4 py-2 bg-[#E25B3B] text-white max-w-[130px]'>
                        Submit
                    </button>
                </form>
            </div>

            <div className='mt-8'>
                <Testimonials />
            </div>
        </div>
    </div>
  )
}

export default Contacts