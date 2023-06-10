import React from 'react'
import InFeatured from '../../components/Blog/InFeatured'

const Blog = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <InFeatured />
        <div className='max-w-[1440px] w-full h-full flex flex-col items-start justify-start py-12 my-12 px-4 md:px-8'>
            <div className='flex flex-col mb-6'>
                <h2 className='text-2xl mb-6'>Moving can be dank</h2>
                <p>
                    Moving can be a daunting task, even for the most experienced movers. With that in mind, we've pulled together some resources that can come in handy, whether you are moving with us or not. The Taylor Movers blog is your one-stop information shop for all issues related to your move. Our moving articles will alleviate your stress and connect you with the best moving resources on the web. Everything is right at your fingertips. Our mission: provide moving tips that save you time and money during the journey into your new home or office!
                    <br />
                    <br />

                    To ensure the safety of our customers and that of our team, we&apos;ve implemented some safety measures to ensure safety in the COVID-19 period.
                    <br />
                    <br />

                    1.Upon client making inquiry, our customer care representative advises the client that we shall do video or photos as a survey if possible. The survey that was previously physical ensures that you get an accurate quotation.
                    <br />
                    <br />

                    2. When planning for the moves, the operations team will ask relevant queries regarding clients possibilities of being into contact with the Virus including recent travels to parts affected.
                    <br />
                    <br />

                    3. We have a strong emphasis on disinfecting the trucks and packing materials after every move.
                </p>
            </div>

        </div>
    </div>
  )
}

export default Blog