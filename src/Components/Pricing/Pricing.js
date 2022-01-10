import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'
import { HashLink as Link } from 'react-router-hash-link';

function Pricing() {
  const features = [
    'Visite des lieux',
    'Rapport de visite',
    'Analyse de l’état du bien et de ses qualités techniques',
    'Examen des possibilités d’adaptation à vos besoins : transformations, agrandissements ...',
    'Informations sur les démarches éventuelles à effectuer auprès de l immeuble et/ou des services administratifs (Syndic, commune, ERP, PMR, etc ...)',
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div>
      <div className="bg-gradient-to-b from-blue-50 via-white to-white">
        {/* Pricing section with single price and feature list */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="pb-16 xl:flex xl:items-center xl:justify-between">
            <div>
              <h1 className="text-4xl font-extrabold sm:text-6xl sm:tracking-tight">
                <p className="text-gray-900">Un court dialogue vaut mieux qu'un</p>
                <p className="text-blue-400">long discours</p>
              </h1>
              <p className="mt-5 text-xl text-gray-500">
              Échangeons sans détours sur votre projet !
              </p>
            </div>
            <Link 
              to="#contact"
              className="mt-8 w-full bg-blue-400 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-blue-500 sm:mt-10 sm:w-auto xl:mt-0"
            >
              Contactez-nous !
            </Link>
          </div>
          <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
            <div>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">Nos tarifs</p>
              <p className="mt-5 text-lg text-blue-300 max-w-xs">
                Première analyse et proposition de devis à partir de 200€ 
              </p>
            </div>
            <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
              <ul role="list" className="divide-y divide-gray-200">
                {features.slice(0, 3).map((feature, featureIdx) => (
                  <li key={feature} className={classNames(featureIdx === 0 ? 'md:py-0 md:pb-4' : '', 'py-4 flex')}>
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
              <ul role="list" className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
                {features.slice(3).map((feature, featureIdx) => (
                  <li
                    key={feature}
                    className={classNames(featureIdx === 0 ? 'md:border-t-0 md:py-0 md:pb-4' : '', 'py-4 flex')}
                  >
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
