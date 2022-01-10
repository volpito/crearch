/* This example requires Tailwind CSS v2.0+ */
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'
import { HashLink as Link } from 'react-router-hash-link';

const supportLinks = [
  {
    name: 'Analyse',
    to: '#contact',
    description:
      'Tous les aspects de votre projet seront analysés en détail, afin de vous éviter les déconvenues une fois l’affaire engagée.',
    icon: NewspaperIcon,
    CTA: 'Prendre rendez-vous'
  },
  {
    name: 'Dialogue',
    to: '#contact',
    description:
      'Vos attentes concernant le projet seront exprimées sans détours afin d’éviter tout regret lors de sa réalisation.', 
    icon: PhoneIcon,
    CTA: 'Parlons-en'
  },
  {
    name: `Des idées en plus`,
    to: '#contact',
    description:
      'L’aménagement, la transformation ou l’appropriation du lieu seront autant d’occasion de stimuler notre imagination au service de votre projet.',
    icon: SupportIcon,
    CTA: 'Obtenez un devis'
  },
]

export default function Offer() {
  return (
    <div className="bg-white" id="offer">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt="work-group brainstorming together"
          />
          <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Notre prestation </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Nous sommes là pour regarder, écouter et vous accompagner dans ce domaine si particulier
            dont nous connaissons tous les rouages.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contactez-nous
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-white rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <Link to={link.to} className="text-base font-medium text-gray-50 hover:text-gray-200">
                <div className="p-6 bg-blue-500 hover:bg-blue-600 rounded-bl-2xl rounded-br-2xl md:px-8">
                  {link.CTA}<span aria-hidden="true"> &rarr;</span>
                </div>
                </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
