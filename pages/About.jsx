import React from 'react'
import Featured from '../components/About/Featured'
import Clients from '../components/homepage/Clients'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full h-full'>
      <Featured />
      <div className='w-full h-full flex items-center justify-center py-12 my-12 px-4 md:px-8'>
          <div className='w-full max-w-[1440px] flex flex-col items-center md:flex-row'>
            <div className='flex flex-col  items-center justify-center md:justify-start'>
              <h1 className='text-xl mb-6 text-center w-full md:text-start'>Who We Are</h1>
              <p className='text-center md:text-start max-w-[500px] lg:max-w-[820px]'>
                TAYLOR MOVERS IS A MULTINATIONAL CORPORATION HEADQUARTERED IN ATLANTA, GEORGIA
                U.S.A. WITH OUR EAST AFRICAN OFFICES IN NAIROBI, KENYA. WE ARE A TRANSPORTATION
                ENTERPRISE, SPECIALIZING IN LOGISTICS, CLEARING AND FORWARDING AND RELOCATION OF 
                PERSONAL AND CORPORATE EFFECTS BOTH LOCALLY AND INTERNATIONALLY.
                {/* We specialize in local and international relocations. Taylor Movers is a privately held firm committed
                to excellence through providing relocations, transportation, warehousing, expatriate mobility services
                and logistics services efficiently.
                <br />
                <br />
                As a premium relocation and logistics service provider, we rank second to none in providing solutions 
                which manage to balance between cost, safety and reliability while ensuring client satisfaction. 
                We seek to distinguish ourselves by providing the most flexible and reliable services to our client&apos;s. 
                Our global agency network enables clients to benefit from a package tailored to meet the ever-changing needs
                and time requirements of our clients.
                <br />
                <br />
                On completion of each service, an independently administered survey program measures our success, through 
                the eyes of our customers. We depend on feedback from previous and return customers in improving our services. 
                To date, over 98% of the customers that moved with Taylor Movers would “use us again” or refer us to their 
                families and friends. At Taylor Movers, customer satisfaction is our main concern. */}
              </p>
              {/* <hr className='border border-[#DB421B] w'/> */}
            </div>
            <div className='flex flex-col md:flex-row py-8 md:py-16 px-4 items-center justify-center md:justify-evenly md:px-6 md:ml-4 bg-[#DB421B] rounded-xl text-white w-full max-w-[650px] mt-8 md:mt-0'>
              <div className='flex flex-col text-center w-full md:text-start md:mr-2'>
                <h3 className='mb-2 text-lg font-bold'>
                  Our Vision
                </h3>
                <p className=''>
                  Continuous pursuit of excellence in customer satisfaction.
                </p>
              </div>
              <div className='flex flex-col text-center w-full md:text-start mt-8 md:mt-0'>
                <h3 className='mb-2 text-lg font-bold'>
                  Our Mission
                </h3>
                <p className=''>
                  To lead in innovation, development and delivery of customer centered relocation services in Africa.
                </p>
              </div>
            </div>
          </div>
      </div>
      <div className='w-full h-full flex items-center justify-center py-12 my-12 px-4 md:px-8'>
          <div className='w-full max-w-[1440px] flex flex-col md:flex-row justify-between'>
            <div className='flex flex-col  items-center justify-center md:justify-start'>
              <div className='flex flex-col w-full mb-6'>
                <h1 className='text-xl mb-2 text-center w-full md:text-start'>What We Do</h1>
                <hr className='border border-[#DB421B] w-[100px]'/>
              </div>
              <p className='text-center md:text-start max-w-[500px] lg:max-w-[820px] md:mr-4'>
               
                We specialize in local and international relocations. Taylor Movers is a privately held firm committed
                to excellence through providing relocations, transportation, warehousing, expatriate mobility services
                and logistics services efficiently.
                <br />
                <br />
                As a premium relocation and logistics service provider, we rank second to none in providing solutions 
                which manage to balance between cost, safety and reliability while ensuring client satisfaction. 
                We seek to distinguish ourselves by providing the most flexible and reliable services to our client&apos;s. 
                Our global agency network enables clients to benefit from a package tailored to meet the ever-changing needs
                and time requirements of our clients.
                <br />
                <br />
                On completion of each service, an independently administered survey program measures our success, through 
                the eyes of our customers. We depend on feedback from previous and return customers in improving our services. 
                To date, over 98% of the customers that moved with Taylor Movers would “use us again” or refer us to their 
                families and friends. At Taylor Movers, customer satisfaction is our main concern.
              </p>
              
            </div>
            <div className='flex flex-col md:flex-row  items-center justify-center relative md:justify-evenly md:ml-4 md:h-[500px] bg-[#DB421B] rounded-[800px] text-white w-full max-w-[500px] mt-8 md:mt-0'>
              <Image src='/assets/About/sa1.png' width={300} height={300} className='w-full h-full rounded-3xl'/>
              <div className='absolute bottom-0 bg-[#DB421B]/30 text-white flex flex-col max-h-[189px] w-full py-10 px-4 md:px-8 rounded-3xl rounded-tr-none'>
                <h3 className=' text-xl'>Mr. Benjamin Njuia</h3>
                <p className='font-italic text-sm'>SVP Marketing</p>
              </div>
            </div>
          </div>
      </div>
      <Clients />
    </div>
  )
}

export default About