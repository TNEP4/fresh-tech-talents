import { useRouter } from 'next/router';

import Head from 'next/head'
import { LockClosedIcon } from '@heroicons/react/solid'
import { RiWindyFill } from "react-icons/ri";

import Footer from '../../components/Footer';
import PrivateDisplay from '../../components/PrivateDisplay';


export default function AddProject() {

    return (
        <>
        <Head>
            <title>Add a project | Fresh-tech-talents</title>
            <meta name="description" content="Launch your career in tech, share your profile and best projects for free to hundreds of recruiters" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 h-screen' >
            <main className="pt-8 sm:pt-12 mx-auto max-w-7xl px-4 sm:px-8 pb-12 h-full text-white">
                Settings
            </main>
            <Footer />
        </div>
        </>
    )
}