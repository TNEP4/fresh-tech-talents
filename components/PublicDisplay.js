import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { RiWindyFill } from "react-icons/ri";

import ProjectList from './ProjectList'

const tabs = [
    { name: 'Projects', href: '#', count: '52', current: true },
    { name: 'Talent Profiles', href: '#', count: '38', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

export default function PublicDisplay() {
  return (
    <div>
        <main className="mt-16 mx-auto max-w-5xl px-4 h-full">
        <div className="block">
            <div className="border-b border-zinc-600">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {tabs.map((tab) => (
                <a
                    key={tab.name}
                    href="#"
                    className={classNames(
                    tab.current
                        ? 'border-green-500 text-green-400'
                        : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:border-zinc-200',
                    'whitespace-nowrap flex py-4 px-1 border-b-2 font-bold text-md'
                    )}
                    aria-current={tab.current ? 'page' : undefined}
                >
                    {tab.name}
                    {tab.count ? (
                    <span
                        className={classNames(
                        tab.current ? 'bg-green-100 text-green-800' : 'bg-zinc-600 text-zinc-200',
                        'hidden ml-3 py-1 px-2 rounded-full text-xs font-medium md:inline-block'
                        )}
                    >
                        {tab.count}
                    </span>
                    ) : null}
                </a>
                ))}
            </nav>
            </div>
        </div>

          <div className='mt-12 pb-12'>
            <ProjectList />
          </div>
           

        </main>

    </div>
  )
}
