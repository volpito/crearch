import quai from "../../Assets/Images/quai.png";
import { PhoneIcon, MailIcon, UserIcon, FastForwardIcon } from '@heroicons/react/outline'
import { useState } from "react";
import axios from 'axios';

export default function ContactForm() {

  const [result, setResult] = useState(null);
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    ask: '',
    knowHow: ''
  });

  const sendEmail = event => {
    event.preventDefault();
    axios
     .post('/send', { ...state })
     .then(response => {
       setResult(response.data);
       setState({ firstName: '',
       lastName: '',
       email: '',
       company: '',
       phone: '',
       ask: '',
       knowHow: ''
      });
     })
     .catch(() => {
       setResult({ success: false, message: 'Something went wrong. Try again later'});
   });
  }   

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <div className="relative bg-blue-50 rounded-t-full" id="contact">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-contain object-center lg:absolute lg:h-full lg:block hidden"
            src={quai}
            alt="computer-drawn plan"
          />
        </div>
      </div>
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-yellow-400 uppercase tracking-wide">contact </h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-6 sm:space-y-3">
            <p className="flex text-gray-500"><UserIcon className="flex-shrink-0 h-6 w-6 text-gray-500 mr-2 hover:text-blue-600" aria-hidden="true"/> Dunoyer de Segonzac, Régine </p>
            <p className="flex text-gray-500"><FastForwardIcon className="transform rotate-45 flex-shrink-0 h-6 w-6 text-gray-500 mr-2 hover:text-blue-600" aria-hidden="true"/>Région parisienne et Grand Ouest</p>
            <p className="flex text-gray-500"><PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-500 mr-2 hover:text-blue-600" aria-hidden="true"/> 01.40.71.02.66 </p>
            <p className="flex text-gray-500"><MailIcon className="flex-shrink-0 h-6 w-6 text-gray-500 mr-2 hover:text-blue-600"/>crearch.conseil@gmail.com</p>
            <p>ou <i>via</i> le formulaire suivant :</p>
            </p>
            <form onSubmit={sendEmail} className="mt-9 mb-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Prénom
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={state.firstName}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  nom
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={state.lastName}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={state.email}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Entreprise
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="company"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={state.company}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Téléphone
                  </label>
                  <span id="phone-description" className="text-sm text-gray-500">
                    Optionnel
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    aria-describedby="phone-description"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={state.phone}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                    Quelle est votre demande ?
                  </label>
                  <span id="ask" className="text-sm text-gray-500">
                    Max. 500 caractères
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="ask"
                    name="ask"
                    aria-describedby="how-can-we-help-you"
                    rows={4}
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    defaultValue={''}
                    value={state.ask}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="knowHow" className="block text-sm font-medium text-gray-700">
                  Comment nous avez-vous connus ?
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="knowHow"
                    id="knowHow"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={state.knowHow}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-3 border border-transparent text-base font-medium shadow-sm rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                >
                  Envoyer
                </button>
              </div>
            </form>
            {result && (
              <p className={`${result.success ? 'success' : 'error'}`}>
              {result.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
