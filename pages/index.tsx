import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Form from './Form';
import Form2 from './Form2';
import Form3 from './Form3';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Lazy Time Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600">
            Lazy Time Manager!
          </a>
        </h1>

        <p className="my-4 text-2xl ">
          Get started by adding your to-do{' '}
        </p>
        <div className="flex flex-nowrap">
          <div className='rounded-l-lg bg-gradient-to-r from-cyan-500 to-blue-500'>
            <div className="flex-1 w-64 py-8">Other</div>
            <div className='pb-8'><Form></Form></div>
          </div>
          <div className="bg-gradient-to-l  from-indigo-500 to-blue-500">
            <div className="flex-1 w-64 py-8">Work</div>
            <Form2></Form2>
          </div>
          <div className="rounded-r-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
            <div className="flex-1 w-64 py-8">Hobby</div>
            <Form3></Form3>
          </div>
        </div>

        {/* end */}
      </main>
    </div>
  )
}

export default Home
