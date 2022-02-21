import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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


export default function CardSlideshow() {
  return (
    <div>
        <main className="ml-8 sm:mt-5 pb-20">
        <div className="snap-x snap-mandatory flex w-full overflow-scroll px-2 py-5">
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0 h-40 flex items-center justify-center text-8xl">1</div>
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0  h-40 flex items-center justify-center text-8xl">2</div>
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0 h-40 flex items-center justify-center text-8xl">3</div>
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0 h-40 flex items-center justify-center text-8xl">4</div>
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0 h-40 flex items-center justify-center text-8xl">5</div>
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0 h-40 flex items-center justify-center text-8xl">6</div>
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0 h-40 flex items-center justify-center text-8xl">7</div>
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0 h-40 flex items-center justify-center text-8xl">8</div>
        </div>
        <div className="snap-x snap-mandatory flex w-full overflow-scroll py-5">
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0 h-40 flex items-center justify-center text-8xl">1</div>
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0  h-40 flex items-center justify-center text-8xl">2</div>
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0 h-40 flex items-center justify-center text-8xl">3</div>
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0 h-40 flex items-center justify-center text-8xl">4</div>
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0 h-40 flex items-center justify-center text-8xl">5</div>
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0 h-40 flex items-center justify-center text-8xl">6</div>
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0 h-40 flex items-center justify-center text-8xl">7</div>
            <div className="snap-start mr-4 bg-zinc-100 shadow-xl hover:shadow-lg hover:shadow-green-400/60 rounded-sm w-80 flex-shrink-0 h-40 flex items-center justify-center text-8xl">8</div>
        </div>
        </main>

    </div>
  )
}
