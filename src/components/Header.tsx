import Whatsapp from './whatsapp'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-green-50 to-teal-50 py-16 md:py-24'>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='bg-[#EFFDF9]'>
          <Navbar />
        </div>
        <div className='bg-[#EFFDF9] flex flex-col md:flex-row items-center'>
          <div className='row-span-1' >
            <div className="font-bold flex flex-wrap text-4xl md:text-5xl mb-6">
              <span className="text-black mr-1">WhatsApp'ta</span>
              <span className='bg-gradient-to-r from-[#24CC69] to-[#148E7E] text-transparent z-10 bg-clip-text mx-1'>
              <span className="bg-gradient-to-r from-[#24CC69] to-[#148E7E] text-transparent z-10 bg-clip-text mx-1">Dil</span>
              <span className="mx-1 bg-gradient-to-r from-[#24CC69] to-[#148E7E] text-transparent z-10 bg-clip-text"> Pratiği</span>
              </span>
              <br />
              <span className="text-black"> Yapmanın En Kolay Yolu</span>
            </div>
            <div>
              <p className='text-lg text-gray-600 mb-8'>
                Yapay zeka destekli chatbot ile istediğiniz dilde, istediğiniz zaman pratik yapın. Sadece bir WhatsApp mesajı kadar uzağınızda!
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-4'>
              <button className='bg-green-500 cursor-pointer hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition flex items-center justify-center whatsapp-shadow'>
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
                </svg>
                WhatsApp'ta Başla
              </button>
              <button className='border cursor-pointer border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-600 px-8 py-3 rounded-full font-medium transition flex items-center justify-center'>
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.5 3v18l7-4.5v-9z M17 14.5l4-2.5v-9l-4 2.5"></path>
                </svg>
                Demo İzle
              </button>

            </div>
          </div>
          <Whatsapp />

        </div>
      </div>
    </header>
  )
}

export default Header