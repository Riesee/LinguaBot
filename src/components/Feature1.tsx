import WhatsappSection2 from './WhatsappSection2'

const Feature1 = () => {
  return (
    <div className='flex flex-col md:flex-row items-center mb-24'>
          <div className='md:w-1/2 mb-10 md:mb-0 md:pr-10'>
            <div className='inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4'>
              Özellik 1
            </div>
            <h3 className='text-2xl md:text-3xl font-bold mb-4'>Sesli Mesaj ile Telaffuz Pratiği</h3>
            <p className='text-gray-600 mb-6'>
            Dil öğrenmenin en önemli parçalarından biri doğru telaffuzdur. LinguaBot'a sesli mesaj göndererek telaffuzunuzu geliştirebilir ve anında sesli geri bildirim alabilirsiniz.
            </p>
            <ul className='space-y-3 mb-8'>
              <li className='flex items-start'>
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                </svg>
                <span className='text-gray-700'>Doğal konuşma pratiği yapın</span>
              </li>
              <li className='flex items-start'>
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                </svg>
                <span className='text-gray-700'>Telaffuz hatalarınızı anında düzeltin</span>
              </li>
              <li className='flex items-start'>
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                </svg>
                <span className='text-gray-700'>Aksan ve tonlama üzerine kişiselleştirilmiş geri bildirim alın</span>
              </li>
            </ul>
            <button className='bg-green-500 cursor-pointer hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition whatsapp-shadow inline-flex items-center'>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"></path>
              </svg>
              Sesli Pratik Yapın
            </button>
          </div>
          <WhatsappSection2 />
        </div>
  )
}

export default Feature1