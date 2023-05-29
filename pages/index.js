import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/homepage/Featured'
import Services from '../components/homepage/Services'
import Mirage from '../components/homepage/Mirage'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      <Services />
      <Mirage />

      
    </div>
  )
}
