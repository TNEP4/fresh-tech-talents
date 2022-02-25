import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { RiWindyFill } from "react-icons/ri";

const tabs = [
    { name: 'Talents', href: '#', count: '52', current: true },
    { name: 'Talent Profiles', href: '#', count: '38', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

export default function TalentList() {
  return (
    <div>
      <div className='flex flex-col space-y-10 mb-10'>

          {/* Row 1 */}
          <div className='rounded-sm flex flex-row shadow-xl hover:shadow-lg hover:shadow-green-400/60 cursor-pointer border border-zinc-800/20'>
              <div className=''>
                  <img className='object-cover object-center h-40 w-80 rounded-tl-sm rounded-bl-sm' src='https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80' />
              </div>
              <div className='flex flex-col py-2 px-6 text-zinc-50 w-full'>
                  <div className='flex justify-between flex-row w-full items-center'>
                      <div className='float-left'>
                          <h1 className='text-xl font-medium'>Talent name 1</h1>
                      </div>
                      <div className='float-right space-x-4 flex flex-row text-sm'>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          React
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Nextjs
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Tailwind
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Firebase
                        </span> 
                      </div>
                  </div>
                  <div className='w-full mt-3 text-zinc-200 space-y-2'>
                    <p className='text-sm'>
                      This is the Talent overview, that will describe in one sentence what the Talent is about.
                    </p>
                    <p className='text-sm'>
                      This is the Talent description, that will describe in two sentences why the talent created the Talent, with which tool stack, and how much time it took him to complete it.
                    </p>
                  </div>
                  <div className='w-full mt-3'>
                      <div className='flex flex-row space-x-4 text-sm font-medium'>
                        <p>
                          Talent Full Name
                        </p>                 
                        <p>
                          Los Angeles, California
                        </p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-green-400 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          <svg className="-ml-0.5 mr-1 h-3 w-3 text-green-400 animate-pulse" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          OPEN TO WORK
                        </span>  
                      </div>
                  </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className='rounded-sm flex flex-row shadow-xl hover:shadow-lg hover:shadow-green-400/60 cursor-pointer border border-zinc-800/20'>
              <div className=''>
                  <img className='object-cover object-center h-40 w-80 rounded-tl-sm rounded-bl-sm' src='https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80' />
              </div>
              <div className='flex flex-col py-2 px-6 text-zinc-50 w-full'>
                  <div className='flex justify-between flex-row w-full items-center'>
                      <div className='float-left'>
                          <h1 className='text-xl font-medium'>Talent name 2</h1>
                      </div>
                      <div className='float-right space-x-4 flex flex-row text-sm'>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          React
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Nextjs
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Tailwind
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Firebase
                        </span> 
                      </div>
                  </div>
                  <div className='w-full mt-3 text-zinc-200 space-y-2 border border-zinc-800/20'>
                    <p className='text-sm'>
                      This is the Talent overview, that will describe in one sentence what the Talent is about.
                    </p>
                    <p className='text-sm'>
                      This is the Talent description, that will describe in two sentences why the talent created the Talent, with which tool stack, and how much time it took him to complete it.
                    </p>
                  </div>
                  <div className='w-full mt-3'>
                      <div className='flex flex-row space-x-4 text-sm font-medium'>
                        <p>
                          Talent Full Name
                        </p>                 
                        <p>
                          Los Angeles, California
                        </p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-green-400 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          <svg className="-ml-0.5 mr-1 h-3 w-3 text-green-400 animate-pulse" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          OPEN TO WORK
                        </span>  
                      </div>
                  </div>
              </div>
            </div>
            {/* Row 3 */}
            <div className='rounded-sm flex flex-row shadow-xl hover:shadow-lg hover:shadow-green-400/60 cursor-pointer border border-zinc-800/20'>
              <div className=''>
                  <img className='object-cover object-center h-40 w-80 rounded-tl-sm rounded-bl-sm' src='https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80' />
              </div>
              <div className='flex flex-col py-2 px-6 text-zinc-50 w-full'>
                  <div className='flex justify-between flex-row w-full items-center'>
                      <div className='float-left'>
                          <h1 className='text-xl font-medium'>Talent name 3</h1>
                      </div>
                      <div className='float-right space-x-4 flex flex-row text-sm'>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          React
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Nextjs
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Tailwind
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Firebase
                        </span> 
                      </div>
                  </div>
                  <div className='w-full mt-3 text-zinc-200 space-y-2'>
                    <p className='text-sm'>
                      This is the Talent overview, that will describe in one sentence what the Talent is about.
                    </p>
                    <p className='text-sm'>
                      This is the Talent description, that will describe in two sentences why the talent created the Talent, with which tool stack, and how much time it took him to complete it.
                    </p>
                  </div>
                  <div className='w-full mt-3'>
                      <div className='flex flex-row space-x-4 text-sm font-medium'>
                        <p>
                          Talent Full Name
                        </p>                 
                        <p>
                          Los Angeles, California
                        </p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-green-400 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          <svg className="-ml-0.5 mr-1 h-3 w-3 text-green-400 animate-pulse" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          OPEN TO WORK
                        </span>  
                      </div>
                  </div>
              </div>
            </div>
            {/* Row 4 */}
            <div className='rounded-sm flex flex-row shadow-xl hover:shadow-lg hover:shadow-green-400/60 cursor-pointer border border-zinc-800/20'>
              <div className=''>
                  <img className='object-cover object-center h-40 w-80 rounded-tl-sm rounded-bl-sm' src='https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80' />
              </div>
              <div className='flex flex-col py-2 px-6 text-zinc-50 w-full'>
                  <div className='flex justify-between flex-row w-full items-center'>
                      <div className='float-left'>
                          <h1 className='text-xl font-medium'>Talent name 4</h1>
                      </div>
                      <div className='float-right space-x-4 flex flex-row text-sm'>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          React
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Nextjs
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Tailwind
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Firebase
                        </span> 
                      </div>
                  </div>
                  <div className='w-full mt-3 text-zinc-200 space-y-2'>
                    <p className='text-sm'>
                      This is the Talent overview, that will describe in one sentence what the Talent is about.
                    </p>
                    <p className='text-sm'>
                      This is the Talent description, that will describe in two sentences why the talent created the Talent, with which tool stack, and how much time it took him to complete it.
                    </p>
                  </div>
                  <div className='w-full mt-3'>
                      <div className='flex flex-row space-x-4 text-sm font-medium'>
                        <p>
                          Talent Full Name
                        </p>                 
                        <p>
                          Los Angeles, California
                        </p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-300 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          <svg className="-ml-0.5 mr-1 h-3 w-3 text-zinc-300" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          NOT SEARCHING
                        </span>  
                      </div>
                  </div>
              </div>
            </div>
        </div>

    </div>
  )
}
