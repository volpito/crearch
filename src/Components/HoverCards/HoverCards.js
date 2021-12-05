import React from 'react'

function HoverCards() {

  const cards = [
    { subtitle: 'Votre projet', 
      title: 'Appartement',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kj96dJzRt1t5gjRsd_GPXgHaE8%26pid%3DApi&f=1v',
      className:"mr-12"
    },
    { subtitle: 'Votre projet', 
      title: 'Bureau',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.officelovin.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fsapphire-office-palo-alto-11.jpg&f=1&nofb=1',
      className:"mr-12"
      },
    { subtitle: 'Votre projet', 
      title: 'Maison',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.floornature.com%2Fmedia%2Fphotos%2F30%2F15103%2F06_LSD_Architects-Balcony_House_ph-Fernando-Alda_full.jpg&f=1&nofb=1',
      className:""
    } 
  ]

  return (
    <div className="bg-yellow-50 pb-20">
      <div className="max-w-7xl mx-auto sm:py-16 pt-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-left text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="block text-gray-500 sm:ml-40">Quel est votre</span>
        <span className="block text-yellow-300 sm:text-center">projet ?</span>
      </h2 >
      </div>
      <section className="text-gray-600 body-font hidden sm:block">
        <div className="grid-cols-3 sm:grid-cols-2 max-w-6xl flex mx-auto">
          {cards.map((item) => (
            <div key={item.title} className={item.className}>
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-xl" src={item.img}/>
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-yellow-200 bg-white opacity-0 hover:opacity-100 rounded-xl">
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
                      <img className={`rounded-3xl mx-auto h-44 object-cover shadow-2xl`} src={cards[0].img} alt={cards[0].title} />
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
                  <img className={`rounded-3xl mx-auto h-44 object-cover shadow-xl`} src={cards[1].img} alt={cards[1].title} />
                </div>
              </li>
              <li key={cards[2].title}>
                <div className="space-y-4 mx-auto grid grid-cols-2">
                  <img className={`rounded-3xl bg-gray-200 mx-auto h-44 object-cover shadow-2xl`} src={cards[2].img} alt={cards[2].title} />
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
