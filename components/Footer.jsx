import React from 'react'
import { BsArrowBarRight, BsArrowRight, BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-full h-full  px-4 py-12 flex items-center  justify-center bg-slate-200'>
      <div className='max-w-[1440px] w-full flex flex-col md:flex-row items-center md:justify-between'>
        {/* About */}
        <div className='flex flex-col items-start'>
          <h3 className='text-[#DB421B] font-light text-lg mb-4 w-full items-center justify-center text-center md:w-auto'>About us</h3>
          <p className='max-w-[390px]  mb-6 text-center md:text-start'>
            We specialize in local and international relocations. Taylor Movers is a privately held firm committed to excellence through 
            providing relocations, transportation, warehousing, expatriate mobility services and logistics services efficiently.
          </p>
          <div className='hidden md:flex flex-wrap justify-between w-full max-w-[249px]'>
            <div className='p-2 w-[44px] h-[44px] border border-[#DB421B] rounded-2xl flex items-center justify-center'>
              <BsFacebook size={20} className='text-[#727272]'/>
            </div>
            <div className='p-2 w-[44px] h-[44px] border border-[#DB421B] rounded-2xl flex items-center justify-center'>
              <BsTwitter size={20} className='text-[#727272]'/>
            </div>
            <div className='p-2 w-[44px] h-[44px] border border-[#DB421B] rounded-2xl flex items-center justify-center'>
              <BsInstagram size={20} className='text-[#727272]'/>
            </div>
            <div className='p-2 w-[44px] h-[44px] border border-[#DB421B] rounded-2xl flex items-center justify-center'>
              <BsLinkedin size={20} className='text-[#727272]'/>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className='flex flex-col items-start py-6'>
          <h3 className='text-[#DB421B] font-light text-lg mb-4 w-full items-center justify-center text-center md:w-auto'>Our Services</h3>
          <div className='flex flex-col justify-between items-center md:items-start'>
            <div className='flex flex-row items-center'>
              <BsArrowRight size={20} className='text-[#DB421B] my-2 mr-2'/>
              <p className=''>Household Moving</p>
            </div>
            <div className='flex flex-row items-center'>
              <BsArrowRight size={20} className='text-[#DB421B] my-2 mr-2'/>
              <p className=''>Office Moving</p>
            </div>
            <div className='flex flex-row items-center'>
              <BsArrowRight size={20} className='text-[#DB421B] my-2 mr-2'/>
              <p className=''>Coporate Relocation Services</p>
            </div>
            <div className='flex flex-row items-center'>
              <BsArrowRight size={20} className='text-[#DB421B] my-2 mr-2'/>
              <p className=''>Document Management</p>
            </div>
            <div className='flex flex-row items-center'>
              <BsArrowRight size={20} className='text-[#DB421B] my-2 mr-2'/>
              <p className=''>Warehousing</p>
            </div>
          </div>
        </div>
        {/* Quick Links */}
        <div className='flex flex-col items-start py-6'>
          <h3 className='text-[#DB421B] font-light text-lg mb-4 w-full items-center justify-center text-center md:w-auto'>Quick Links</h3>
          <div className='flex flex-col justify-between items-center md:items-start'>
            <div className='flex flex-row items-center'>
              <BsArrowRight size={20} className='text-[#DB421B] my-2 mr-2'/>
              <p className=''>Our Blogs</p>
            </div>
            <div className='flex flex-row items-center'>
              <BsArrowRight size={20} className='text-[#DB421B] my-2 mr-2'/>
              <p className=''>Additional Services</p>
            </div>
            <div className='flex flex-row items-center'>
              <BsArrowRight size={20} className='text-[#DB421B] my-2 mr-2'/>
              <p className=''>Insurance</p>
            </div>
            <div className='flex flex-row items-center'>
              <BsArrowRight size={20} className='text-[#DB421B] my-2 mr-2'/>
              <p className=''>Customer Care Policy</p>
            </div>
            <div className='flex flex-row items-center'>
              <BsArrowRight size={20} className='text-[#DB421B] my-2 mr-2'/>
              <p className=''>Contacts</p>
            </div>
          </div>
        </div>
        {/* Contacts */}
        <div className='flex flex-col items-center md:items-start py-6 w-full max-w-[320px] md:w-fit'>
          <h3 className='text-[#DB421B] font-light text-lg mb-4 w-full items-center justify-center text-center md:w-auto'>Business Hours</h3>
          <div className='flex flex-col justify-between items-center md:items-start w-full'>
            <div className='w-full text-slate-400'>
              <p className='text-center md:text-start'>
                Monday - Friday
                <br />    
                09.00 am - 08.00 pm.
              </p>
              <hr className='border border-[#DB421B] w-full md:max-w-[200px] my-6'/>
              <p className='text-center md:text-start'>
                Saturday - Sunday:
                <br />
                09.00 am - 12.00 am.  
              </p>
              <p className='uppercase text-center md:text-start w-full mt-4'>
                We are at your service
              </p>
            </div>
          </div>
        </div>
        {/* Socials Mobile */}
        <div className='flex flex-wrap justify-between w-full max-w-[249px] mt-10 md:hidden'>
            <div className='p-2 w-[44px] h-[44px] border border-[#DB421B] rounded-2xl flex items-center justify-center'>
              <BsFacebook size={20} className='text-gray-400'/>
            </div>
            <div className='p-2 w-[44px] h-[44px] border border-[#DB421B] rounded-2xl flex items-center justify-center'>
              <BsTwitter size={20} className='text-gray-400'/>
            </div>
            <div className='p-2 w-[44px] h-[44px] border border-[#DB421B] rounded-2xl flex items-center justify-center'>
              <BsInstagram size={20} className='text-gray-400'/>
            </div>
            <div className='p-2 w-[44px] h-[44px] border border-[#DB421B] rounded-2xl flex items-center justify-center'>
              <BsLinkedin size={20} className='text-gray-400'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer