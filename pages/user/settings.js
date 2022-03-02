import { useRouter } from 'next/router';
import React, {useEffect, useState, useContext} from 'react';
import { UserContext} from '../../utils/context';
import Head from 'next/head'
import { LockClosedIcon } from '@heroicons/react/solid'
import { RiWindyFill } from "react-icons/ri";
import { useAuthState } from 'react-firebase-hooks/auth';
import Footer from '../../components/Footer';
import PrivateDisplay from '../../components/PrivateDisplay';
import { auth } from '../../utils/firebase';


export default function Settings() {

    const router = useRouter();


    // Sign out button
    function SignOutButton() {
        auth.signOut();
        router.push('/');

    }


    return (
        <>
        <Head>
            <title>Add a project | Fresh-tech-talents</title>
            <meta name="description" content="Launch your career in tech, share your profile and best projects for free to hundreds of recruiters" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 h-screen' >
            <main className="pt-8 sm:pt-12 mx-auto max-w-6xl px-4 sm:px-8 pb-12 h-full text-white">
                <div className='mt-4'>
                    <button className='bg-zinc-800 rounded-full px-6 py-2 hover:bg-zinc-600'
                    onClick={SignOutButton}
                    >
                        Sign out
                    </button>
                </div>
            </main>
            <Footer />
        </div>
        </>
    )
}