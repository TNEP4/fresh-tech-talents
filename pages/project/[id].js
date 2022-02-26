import Head from 'next/head'
import Image from 'next/image'


export default function PublicProject() {
  return (
    <div className='bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 min-h-screen'>
      <Head>
        <title>Fresh-tech-talents | Launch your career in tech</title>
        <meta name="description" content="Find rising tech talents open to work, browse their best projects and profile for free." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <p className='text-white pt-10 pl-80'>Public talent project page</p>

    </div>
  )
}
