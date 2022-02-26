import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import { HashLink as Link } from 'react-router-hash-link';

import crearch from "../../Assets/Images/logo_crearch.png";
import saujon from "../../Assets/Images/saujon1.jpg";

const navigation = [
  { name: 'Votre projet', to: '#project' },
  { name: "L'offre", to: '#offer' },
  { name: 'Contact', to: '#contact' },
]

export default function Hero() {
  return (
    <div className="bg-white" id="hero">
      <header>

        {/*top menu*/}
        
        <Popover className="relative bg-white">
          <div className="flex justify-end items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-center md:space-x-10 lg:px-8">

            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">              
              {navigation.map((item) => (
                <Link key={item.name} to={item.to} className="text-base font-medium text-gray-500 hover:text-gray-900">
                  {item.name}
                </Link>
              ))}
            </Popover.Group>            
          </div>

          {/*burger menu*/}

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-30 top-0 right-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 h-screen">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-end">
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-end text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-1 gap-4 text-right">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>

      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-yellow-50" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-t-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={saujon}
                    alt="Locaux professionnels réalisés par notre architecte après expertise immobilière"
                  />
                  <div className="absolute inset-0 bg-blue-200 mix-blend-multiply" />
                </div>
                <div className="relative px-4 pb-12 pt-16 sm:px-6 sm:pt-24 lg:pt-32 lg:px-8">
                  <h1 className="text-left text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Faites vous conseiller sur  </span>
                    <span className="block text-yellow-400"> vos choix immobiliers ! </span>
                  </h1>
                  <div className='max-w-sm'>
                  <p className="mt-12 text-left text-xl text-white sm:max-w-3xl">
                    Achat, vente et transformations, entre particuliers ou professionnels...
                  </p>
                  <p className="text-left text-xl text-white sm:max-w-3xl mt-2">
                    Découvrez des solutions éclairées qui s'adaptent à vos besoins. 
                  </p>
                  </div>
                  <div className="mt-32 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-around ">
                    <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-96">
                      <Link 
                        to="#offer"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-yellow-50 sm:px-8"
                      >
                        Découvrez l'Offre
                      </Link>
                      <Link 
                        to="#contact"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 bg-opacity-80 hover:bg-opacity-90 sm:px-8"
                      >
                        Contactez-nous
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-yellow-50 z-50">
            <div className="max-w-7xl mx-auto pt-12 transform -rotate-3">
              <img className='mx-auto w-11/12 mt-12 lg:mt-0 lg:w-3/12 ' src={crearch} alt="Logo de la société d'aritecte Crearch, spécialisée dans l'estimation de biens immobiliers" />
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
