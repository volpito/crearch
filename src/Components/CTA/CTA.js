export default function CTA() {
  return (
    <div className="bg-yellow-50 hidden sm:block">
      <div className="bg-blue-600 max-w-6xl mx-auto ">
        <div className="max-w-5xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            <span className="block">L'expertise d'un cabinet</span>
            <span className="block">au service de votre projet immobilier </span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-yellow-100">
            Avec plus de 25 ans d'expérince dans la conception et la rénovation de biens immobiliers, nous saurons vous accompagner dans 
            l'examen de vos besoins et la mise à jour des contraites techniques et administratives.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-white hover:bg-yellow-50 sm:w-auto"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </div>
  )
}
