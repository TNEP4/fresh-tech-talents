import { useRouter } from 'next/router';

import Head from 'next/head'
import { LockClosedIcon } from '@heroicons/react/solid'
import { RiWindyFill } from "react-icons/ri";

import Navbar from '../../components/Navbar';


export default function SignIn() {

    return (
        <>
        <div className='bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 h-screen' >
            <Navbar />
        </div>
        </>
    )
}