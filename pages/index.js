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
      <h1 className='text-center'>Welcome to Wealth Spring!</h1>
      <p  className='text-center'><Link href='./auth/login'>Click Here to Login</Link></p>
    </div>
  )
}
