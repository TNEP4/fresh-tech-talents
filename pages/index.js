import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Hero from '../components/Hero'
import CardSlideshow from '../components/CardSlideshow'
import PublicDisplay from '../components/PublicDisplay'

export default function Home() {
  return (
    <div className='bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800'>
      <Head>
        <title>Fresh-tech-talents | Launch your career in tech</title>
        <meta name="description" content="Find rising tech talents open to work. Launch your career in tech, showcase your best projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <CardSlideshow />
      <PublicDisplay />

    </div>
  )
}
