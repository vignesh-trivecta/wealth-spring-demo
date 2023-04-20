import Head from 'next/head'
import Link from 'next/link'
import LoginAuth from './auth/login'

export default function Home() {
  return (
    <div className='d-flex justify-content-between p-4 m-4'>
      {/* Page Name */}
      <Head>
        <title>Wealth Spring | Home</title>
        <meta property="og:title" content="Wealth Spring | Home" key="title" />
      </Head>
      
      {/* Welcome Page */}
      <div className='d-flex justify-content-between ms-5 mt-5 text-center'>
        <h1 className='text-center'>Welcome to Wealth Spring!</h1>
      </div>
      <div className='p-4 me-5'>
        <LoginAuth />
      </div>
    </div>
  )
}
