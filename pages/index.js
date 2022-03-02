import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/context";
import Hero from '../components/Hero'
import CardSlideshow from '../components/CardSlideshow'
import PublicDisplay from '../components/PublicDisplay'
import PrivateDisplay from '../components/PrivateDisplay'
import Footer from '../components/Footer'

export default function Home() {
  const { user, username } = useContext(UserContext);
  console.log(user);

  return (
    <div className='bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800'>
      <Head>
        <title>Fresh-tech-talents | Launch your career in tech</title>
        <meta name="description" content="Find rising tech talents open to work, browse their best projects and profile for free." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <CardSlideshow />
      {
      user?
      <PrivateDisplay/>
      :
      <PublicDisplay />
      }
    </div>
  )
}
