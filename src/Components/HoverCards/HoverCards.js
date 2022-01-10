import React from 'react'
import office from "../../Assets/Images/office.jpg";
import flat from "../../Assets/Images/flat.jpg";
import tools from "../../Assets/Images/tools.jpg";

function HoverCards() {

  const cards = [
    { subtitle: 'Votre projet', 
      title: 'Appartement',
      content: "Dans le cadre d'un projet de location, ou pour vous y installer durablement, l'acquisition d'un appartement et son aménagement répond à des problématiques bien spécifiques.",
      img: flat,
      className:"mr-12"
    },
    { subtitle: 'Votre projet', 
      title: 'Bureaux - commerces',
      content: "Des normes d'accès à l'optimisation de l'espace, la création ou la rénovation d'un espace de travail est un challenge à part entière qui mérite un conseil adapté.",
      img: office,
      className:"mr-12"
      },
    { subtitle: 'Votre projet', 
      title: 'Maison',
      content: "Pour avoir une vraie vision d'ensemble sur votre bâtisse, comptez sur les conseils de notre architecte DPLG qui vous accompagnera tout au long du processus.",
      img: tools,
      className:""
    } 
  ]

  return (
    <div className="bg-yellow-50 pb-20" id="project">
      <div className="max-w-7xl mx-auto sm:py-16 pt-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-left text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="block text-gray-700 sm:ml-20">Notre approche</span>
        <span className="block text-yellow-300 sm:ml-60">pour vos projets</span>
      </h2 >
      </div>
      <section className="text-gray-600 body-font hidden sm:block">
        <div className="grid-cols-3 sm:grid-cols-2 max-w-7xl flex mx-auto">
          {cards.map((item) => (
            <div key={item.title} className={item.className}>
                <div className="flex relative ">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-xl" src={item.img}/>
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-blue-300 bg-yellow-50 opacity-0 hover:opacity-100 rounded-xl">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">{item.subtitle}</h2>
                    <h1 className="title-font text-2xl font-medium text-gray-800 mb-3">{item.title}</h1>
                    <p className="leading-relaxed">{item.content}</p>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* mobile */}

      <section className="text-gray-600 body-font block sm:hidden">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-8 sm:space-y-12">
            <ul
              className="mx-auto grid grid-cols-1 gap-x-4 gap-y-8"
            >
                <li key={cards[0].title}>
                  <div className="space-y-2 mx-auto grid grid-cols-2">
                      <img className={`rounded-3xl mt-7 mx-auto h-44 object-cover shadow-2xl`} src={cards[0].img} alt={cards[0].title} />
                      <div className="space-y-2">
                        <div className="text-sm font-medium lg:text-sm">
                          <h3 className="text-blue-600 mb-2 text-lg">{cards[0].title}</h3>
                          <p className="text-gray-700 px-2">{cards[0].content}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                <li key={cards[1].title} /*style={{backgroundImage: `url(${cards[1].img})`}} className="bg-fixed bg-center bg-blue-400"*/>
                <div className="space-y-4 mx-auto grid grid-cols-2">
                  <div className="space-y-2">
                    <div className="text-sm font-medium lg:text-sm">
                      <h3 className="text-blue-600 mt-6 mb-2 text-lg">{cards[1].title}</h3>
                      <p className="text-gray-600 px-2">{cards[1].content}</p>
                    </div>
                  </div>
                  <div>
                  <img className={`rounded-3xl mx-auto h-44 object-cover shadow-xl mt-7`} src={cards[1].img} alt={cards[1].title} />
                  </div>
                </div>
              </li>
              <li key={cards[2].title}>
                <div className="space-y-4 mx-auto grid grid-cols-2">
                  <img className={`rounded-3xl bg-gray-200 mx-auto h-44 object-cover shadow-2xl mt-7`} src={cards[2].img} alt={cards[2].title} />
                  <div className="space-y-2">
                    <div className="text-sm font-medium lg:text-sm">
                      <h3 className="text-blue-600 mb-2 text-lg">{cards[2].title}</h3>
                      <p className="text-gray-500 px-2">{cards[2].content}</p>
                    </div>
                  </div>
                </div>
              </li>
              </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HoverCards
