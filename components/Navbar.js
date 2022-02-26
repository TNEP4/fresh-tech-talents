import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { PlusSmIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useState, useEffect } from 'react';

import { RiWindyFill } from "react-icons/ri";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  // Tab state, set to project tab by default
  const [profileActive, setProfileActive] = useState("");
  const [exploreActive, setExploreActive] = useState("");
  const [settingsActive, setSettingsActive] = useState("");


  return (
    <Disclosure as="nav" className="shadow-lg border-b border-zinc-700/60 bg-zinc-900">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <Link href='/user/profile'>
                    <RiWindyFill className='block lg:hidden h-8 w-auto text-green-400 cursor-pointer' />
                  </Link>
                  {/* <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  /> */}
                  <div className="hidden lg:block">
                    <Link href='/user/profile'>
                      <a  className="lg:flex lg:flex-row items-center">
                        
                          <RiWindyFill className='h-8 w-auto mr-2 text-green-400' />
                        {/* <span className="sr-only">Workflow</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt=""
                        /> */}
                        <h1 className='text-white font-extrabold tracking-tight text-xl'>Fresh-tech-talents</h1>
                      </a>
                    </Link>
                  </div>
                  
                </div>
                <div className="hidden md:ml-10 lg:ml   -20 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  { profileActive ? 
                  <>
                  <Link href='/user/profile'>
                    <a
                      className="border-green-400 text-green-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm lg:text-base font-medium cursor-pointer"
                      onClick={(e) => { setProfileActive(true); setExploreActive(false); setSettingsActive(false); }}
                    >
                      Profile
                    </a>
                  </Link>
                  </>
                   : <>
                   <Link href='/user/profile'>
                    <a
                      className="border-transparent text-zinc-400 hover:text-zinc-200 hover:border-zinc-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm lg:text-base font-medium cursor-pointer active:text-green-400"
                      onClick={() => { setProfileActive(true); setExploreActive(false); setSettingsActive(false); }}
                    >
                      Profile
                    </a>
                  </Link>
                   </> }
                  {/* <Link href='/talent/profile'>
                    <a
                      className="border-green-400 text-green-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm lg:text-base font-medium cursor-pointer"
                    >
                      Profile
                    </a>
                  </Link> */}
                  { exploreActive ? 
                  <>
                  <Link href='/user/explore'>
                    <a
                      className="border-green-400 text-green-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm lg:text-base font-medium cursor-pointer"
                      onClick={() => { setProfileActive(false); setExploreActive(true); setSettingsActive(false); }}
                    >
                      Explore
                    </a>
                  </Link>
                  </>
                   : <>
                   <Link href='/user/explore'>
                    <a
                      className="border-transparent text-zinc-400 hover:text-zinc-200 hover:border-zinc-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm lg:text-base font-medium cursor-pointer"
                      onClick={() => { setProfileActive(false); setExploreActive(true); setSettingsActive(false); }}
                    >
                      Explore
                    </a>
                  </Link>
                   </> }
                   { settingsActive ? 
                  <>
                  <Link href='/user/settings'>
                    <a
                      className="border-green-400 text-green-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm lg:text-base font-medium cursor-pointer"
                      onClick={() => { setProfileActive(false); setExploreActive(false); setSettingsActive(true); }}
                    >
                      Settings
                    </a>
                  </Link>
                  </>
                   : <>
                   <Link href='/user/settings'>
                    <a
                      className="border-transparent text-zinc-400 hover:text-zinc-200 hover:border-zinc-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm lg:text-base font-medium cursor-pointer"
                      onClick={() => { setProfileActive(false); setExploreActive(false); setSettingsActive(true); }}
                    >
                      Settings
                    </a>
                  </Link>
                   </> }
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                <Link href='/user/addproject'>
                  <button
                    type="button"
                    className="relative inline-flex items-center px-4 py-1.5 border border-transparent text-sm font-bold rounded-full text-zinc-900 hover:text-black bg-zinc-50 shadow-lg hover:shadow-lg hover:shadow-green-400/40 active:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-green-500"
                    onClick={() => { setProfileActive(false); setExploreActive(false); setSettingsActive(false); }}
                  >
                    <PlusSmIcon className="-ml-1 mr-1 h-6 w-6" aria-hidden="true" />
                    <span>Add project</span>
                  </button>
                </Link>
                </div>
                <div className="hidden md:flex-shrink-0 md:flex md:items-center">
                  {/* <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button> */}

                  {/* Profile dropdown */}
                  {/* <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu> */}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-zinc-800 border-green-400 text-green-400 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6 cursor-pointer"
              >
                Profile
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-zinc-400 hover:bg-zinc-800 hover:border-zinc-200 hover:text-zinc-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6 cursor-pointer"
              >
                Explore
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-zinc-400 hover:bg-zinc-800 hover:border-zinc-200 hover:text-zinc-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6 cursor-pointer"
              >
                Settings
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
