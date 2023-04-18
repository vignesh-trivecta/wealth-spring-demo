import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Page Name */}
      <Head>
        <title>Wealth Spring | Home</title>
        <meta property="og:title" content="Wealth Spring | Home" key="title" />
      </Head>
      
      {/* Welcome Page */}
      <div className='m-5'>
        <h1 className='text-center'>Welcome to Wealth Spring!</h1>
        <p  className='text-center mt-5'><Link href='./auth/login'>Click Here to Login</Link></p>
      </div>
    </div>
  )
}
