import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { RiWindyFill } from "react-icons/ri";

const tabs = [
    { name: 'Projects', href: '#', count: '52', current: true },
    { name: 'Talent Profiles', href: '#', count: '38', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

export default function ProjectList() {
  return (
    <div>
      <div className='h-10 flex flex-col space-y-12'>
            <div className=' rounded-sm flex flex-row shadow-xl hover:shadow-xl hover:shadow-green-400/60 cursor-pointer'>
                <div className=''>
                    <img className='object-cover object-center h-40 w-80 rounded-tl-sm rounded-bl-sm' src='https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80' />
                </div>
                <div className='flex flex-col py-2 px-4 text-zinc-50 w-full'>
                    <div className='flex justify-between flex-row w-full items-center'>
                        <div className='float-left'>
                            <h1 className='text-xl font-medium'>Project name 1</h1>
                        </div>
                        
                        <div className='float-right space-x-4 flex flex-row'>
                            <p>React</p>
                            <p>Nextjs</p>
                            <p>Tailwind</p>
                            <p>Firebase</p>
                        </div>
                            
                    </div>
                    
                </div>
            </div>
            <div className='bg-sky-500 h-10'>
              Test
            </div>
            <div className='bg-sky-500 h-10'>
              Test
            </div>
            <div className='bg-sky-500 h-10'>
              Test
            </div>
            <div className='bg-sky-500 h-10'>
              Test
            </div>
        </div>

    </div>
  )
}
