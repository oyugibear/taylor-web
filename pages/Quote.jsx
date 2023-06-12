import React, { useState } from 'react'
import Featured from '../components/Quote/Featured'

const Quote = () => {
    const [fname, setFname] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [moveType, setMoveType] = useState('')
    const [bedrooms, setBedrooms] = useState('')
    const [moveDate, setMoveDate] = useState('')
    const [ref, setRef] = useState('')
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <Featured />
        <div className='w-full h-full flex flex-col items-center justify-center max-w-[1440px]'>
            <div className='py-12  flex flex-col px-4'>
                <h1 className='mb-4 md:mb-12 text-xl'>Feel Free To Ask</h1>
                <p>
                    We are here to assist you with any inquiries you may have regarding Taylor
                    Movers and the services we provide. Please feel free to contact us by filling 
                    out the form below, and we will respond to your message as promptly as possible.
                </p>
            </div>
            <div className='flwe flex-col w-full px-4 mb-4'>
                {/* <h3 className='text-lg mb-4'>Contact Us</h3> */}
                <form onSubmit={(e) => handleClick(e)} className='w-full flex flex-col'>
                    <div className='flex flex-col md:flex-row w-full max-w-[800px] justify-between'>
                        <div className='border border-slate-300 rounded-xl relative w-full max-w-[351px] mb-4 md:mr-2'>
                            <input type='text' value={fname} onChange={() => setFname(fname)} className='px-4 py-2 rounded-xl' />
                            <label className='absolute top-[-8px] bg-white left-5 text-xs px-2 text-gray-400'>
                                First Name
                            </label>
                        </div>
                        <div className='border border-slate-300 rounded-xl relative w-full max-w-[351px] mb-4 md:mr-2'>
                            <input type='text' value={number} onChange={() => setNumber(number)} className='px-4 py-2 rounded-xl' />
                            <label className='absolute top-[-8px] bg-white left-5 text-xs px-2 text-gray-400'>
                                Phone Number
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
                            <input type='text' value={email} onChange={() => setEmail(email)} className='px-4 py-2 rounded-xl' />
                            <label className='absolute top-[-8px] bg-white left-5 text-xs px-2 text-gray-400'>
                                Current Location
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row w-full max-w-[800px] justify-between'>
                        <div className='border border-slate-300 rounded-xl relative w-full max-w-[351px] mb-4 md:mr-2'>
                            <input type='text' value={email} onChange={() => setEmail(email)} className='px-4 py-2 rounded-xl' />
                            <label className='absolute top-[-8px] bg-white left-5 text-xs px-2 text-gray-400'>
                                Destination Location
                            </label>
                        </div>
                        <div className='border border-slate-300 rounded-xl relative w-full max-w-[351px] mb-4 md:mr-2'>
                            <select onChange={(e) => setMoveType(e.target.value)} value={moveType} className='px-4 py-2 w-full rounded-xl'>
                                <option  onClick={() => setMoveType("Local House Move")}> Local House Move </option>
                                <option  onClick={() => setMoveType("International Move")}> International Move </option>
                                <option  onClick={() => setMoveType("Business Move")}> Business Move </option>
                                <option  onClick={() => setMoveType("Other")}> Other </option>
                            </select>
                            <label className='absolute top-[-8px] bg-white left-5 text-xs px-2 text-gray-400'>
                                Move Type
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row w-full max-w-[800px] justify-between'>
                        <div className='border border-slate-300 rounded-xl relative w-full max-w-[351px] mb-4 md:mr-2'>
                            {/* <input type='text' value={email} onChange={() => setEmail(email)} className='px-4 py-2 rounded-xl' /> */}
                            <select onChange={(e) => setBedrooms(e.target.value)} value={bedrooms} className='px-4 py-2 w-full rounded-xl'>
                                <option  onClick={() => setBedrooms("1br")}> 1br </option>
                                <option  onClick={() => setBedrooms("2br")}> 2br </option>
                                <option  onClick={() => setBedrooms("3br")}> 3br </option>
                                <option  onClick={() => setBedrooms("4br")}> 4br </option>
                                <option  onClick={() => setBedrooms("5br")}> 5br </option>
                                <option  onClick={() => setBedrooms("6br")}> 6br </option>
                                <option  onClick={() => setBedrooms("More than 6br")}> More than 6br </option>
                            </select>
                            <label className='absolute top-[-8px] bg-white left-5 text-xs px-2 text-gray-400'>
                                Number of bedrooms
                            </label>
                        </div>
                        <div className='border border-slate-300 rounded-xl relative w-full max-w-[351px] mb-4 md:mr-2'>
                            <input type='date' value={moveDate} onChange={() => setMoveDate(moveDate)} className='px-4 py-2 w-full rounded-xl' />
                            <label className='absolute top-[-8px] bg-white left-5 text-xs px-2 text-gray-400'>
                                Move Date
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row w-full max-w-[800px] justify-between'>
                        <div className='border border-slate-300 rounded-xl relative w-full max-w-[351px] mb-4 md:mr-2'>
                            <select onChange={(e) => setRef(e.target.value)} value={ref} className='px-4 py-2 w-full rounded-xl'>
                                <option  onClick={() => setRef("Referals")}> Referals </option>
                                <option  onClick={() => setRef("Social Media Pages")}> Social Media Pages </option>
                                <option  onClick={() => setRef("Internet Search")}> Internet Search </option>
                                <option  onClick={() => setRef("Door To Door Marketing")}> Door To Door Marketing </option>
                                <option  onClick={() => setRef("Taylor Mover Trucks")}> Taylor Mover Trucks </option>
                                <option  onClick={() => setRef("Previous Interactions")}> Previous Interactions </option>
                            </select>
                            <label className='absolute top-[-8px] bg-white left-5 text-xs px-2 text-gray-400'>
                                How did you hear about us
                            </label>
                        </div>
                    </div>
                    

                    {/* <textarea value={message} onChange={() => setMessage(message)} cols="30" rows="10" className='my-4 border border-grey-500 rounded-xl w-full max-w-[351px] md:max-w-[800px]'/> */}

                    <button type='submit' className='px-4 py-2 mt-4 bg-[#E25B3B] text-white max-w-[130px]'>
                        Submit
                    </button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Quote