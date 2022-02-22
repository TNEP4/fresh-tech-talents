import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { React, useState } from 'react'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { RiWindyFill } from "react-icons/ri";

import ProjectList from './ProjectList';
import TalentList from './TalentList'

const tabs = [
    { name: 'Projects', href: '#', count: '52', current: true },
    { name: 'Talent Profiles', href: '#', count: '38', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


export default function PublicDisplay() {
  
  // Tab state, set to project tab by default
  const [showProjects, setShowProjects] = useState(true);
  const [showTalents, setShowTalents] = useState(false);

  // Toggle between project and talent tabs
  const talentActive = () => {
    setShowProjects(false);
    setShowTalents(true);
  }

  const projectActive = () => {
    setShowProjects(true);
    setShowTalents(false);
  }
  
  return (
    <div>
        <main className="mt-16 mx-auto max-w-5xl px-4 h-full">
        <div className="block">
            <div className="border-b border-zinc-600">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <a
                    key="projects"
                    onClick={projectActive}
                    className={classNames(
                    showProjects
                        ? 'border-green-500 text-green-400'
                        : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:border-zinc-200',
                    'whitespace-nowrap flex py-4 px-1 border-b-2 font-bold text-md cursor-pointer'
                    )}
                    aria-current={showProjects ? 'page' : undefined}
                >
                    Projects
                    <span
                        className={classNames(
                        showProjects ? 'bg-green-100 text-green-800' : 'bg-zinc-600 text-zinc-200',
                        'ml-3 py-1 px-2 rounded-full text-xs font-medium inline-block'
                        )}
                    >
                        54
                    </span>
                </a>
                <a
                    key="talents"
                    onClick={talentActive}
                    className={classNames(
                    showTalents
                        ? 'border-green-500 text-green-400'
                        : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:border-zinc-200',
                    'whitespace-nowrap flex py-4 px-1 border-b-2 font-bold text-md cursor-pointer'
                    )}
                    aria-current={showProjects ? 'page' : undefined}
                >
                    Talents
                    <span
                        className={classNames(
                        showTalents ? 'bg-green-100 text-green-800' : 'bg-zinc-600 text-zinc-200',
                        ' ml-3 py-1 px-2 rounded-full text-xs font-medium inline-block'
                        )}
                    >
                        32
                    </span>
                </a>
            </nav>
            </div>
        </div>

          <div className='mt-12 pb-12'>
            {/* Conditionally render either the project or talent list */}
            {showProjects ? <ProjectList /> : null}
            {showTalents ? <TalentList /> : null}
          </div>
           

        </main>

    </div>
  )
}
