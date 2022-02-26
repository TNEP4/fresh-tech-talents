import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { RiWindyFill } from "react-icons/ri";



const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
]


export default function Hero() {
  return (
    <div>
      <div className="relative overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={10}
                height={10}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={2} height={2} className="text-black/80" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={10}
                height={10}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={2} height={2} className="text-black/80" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a  className="flex flex-row items-center" href="#">
                      <RiWindyFill className='h-6 w-6 mr-1 text-green-400' />
                    {/* <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    /> */}
                    <h1 className='text-white font-extrabold tracking-tight text-md sm:text-2xl'>Fresh-tech-talents</h1>
                  </a>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 space-x-4">
              
                <span className="inline-flex rounded-full shadow">
                  <Link href='/talent-signin'>
                    <a
                      className="inline-flex items-center px-3 py-1 text-sm sm:px-6 sm:py-2 sm:text-base border border-transparent font-bold rounded-full text-zinc-50 hover:text-green-400 hover:underline  focus:outline-none focus:ring-2 focus:ring-offset focus:ring-green-500"
                    >
                      Sign in
                    </a>
                  </Link>
                </span>
                <span className="inline-flex rounded-full shadow">
                  <Link href='/talent-signup'>
                    <a
                      className="inline-flex items-center px-3 py-1 text-sm sm:px-6 sm:py-2 sm:text-base border border-transparent font-bold rounded-full text-zinc-900 hover:text-black bg-zinc-50 shadow-lg hover:shadow-lg hover:shadow-green-400/80 active:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-green-500"
                    >
                      Sign up
                    </a>
                  </Link>
                </span>
                
              </div>
            </nav>
          </div>
        </Popover>

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 pt-8">
          <div className="text-center">
            <h1 className="text-3xl tracking-tight font-extrabold text-zinc-50 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Find rising tech talents</span>{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-green-400 xl:inline">open to work.</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-bold text-zinc-50 text-xs sm:text-lg md:mt-5 md:text-2xl md:max-w-3xl">
                Launch your career in tech, showcase your best projects.
            </p>
            <div className="mt-4 max-w-md mx-auto sm:flex sm:justify-center md:mt-16">
              <div className="rounded-full shadow">
                <Link href='/talent-signin'>
                <a
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-bold rounded-full text-zinc-900 bg-gradient-to-br from-green-500 to-green-400 md:py-2 md:text-lg md:px-8 shadow-lg shadow-zinc-200/20 hover:shadow-lg hover:shadow-zinc-200/50"
                >
                  I am a talent
                </a>
                </Link>
              </div>
              <div className="mt-3 rounded-full shadow sm:mt-0 sm:ml-6">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-bold rounded-full text-green-500 bg-zinc-50 shadow-xl hover:shadow-lg hover:shadow-green-400/60 md:py-2 md:text-lg md:px-8"
                >
                  I am a recruiter
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
      

    </div>
  )
}
