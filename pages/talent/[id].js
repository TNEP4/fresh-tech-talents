import Head from 'next/head'
import Image from 'next/image'

import Profile from '../../components/Profile'

export default function PublicProfile() {
  return (
    <div className='bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 min-h-screen'>
      <Head>
        <title>Profile | Fresh-tech-talents</title>
        <meta name="description" content="Find rising tech talents open to work, browse their best projects and profile for free." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <main className="pt-8 sm:pt-12 mx-auto max-w-6xl px-4 sm:px-8 pb-12 h-full">
                <Profile />
            </main>
    </div>
  )
}

