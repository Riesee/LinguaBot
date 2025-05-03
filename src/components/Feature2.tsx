import WhatsappSection3 from "./WhatsappSection3"

const Feature2 = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse items-center mb-24'>
          <div className='md:w-1/2 mb-10 md:mb-0 md:pl-10'>
            <div className='inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4'>
             Özellik 2
            </div>
            <h3 className='text-2xl md:text-3xl font-bold mb-4'>
            Görsel İşleme ve Tanıma
            </h3>
            <p className='text-gray-600 mb-6'>
            Görseller üzerinden dil öğrenmeyi kolaylaştırın. Bir fotoğraf gönderin ve LinguaBot o görsel hakkında konuşsun veya LinguaBot'un gönderdiği görseller üzerinden yeni kelimeler öğrenin.
            </p>
            <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                            </svg>
                            <span className="text-gray-700">Gördüğünüz nesnelerin yabancı dildeki karşılıklarını öğrenin</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                            </svg>
                            <span className="text-gray-700">Seyahat ederken karşılaştığınız tabela ve menüleri anlayın</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                            </svg>
                            <span className="text-gray-700">Görsel hafızanızı kullanarak daha etkili öğrenin</span>
                        </li>
                    </ul>
                    <button className='bg-green-500 cursor-pointer hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition whatsapp-shadow inline-flex items-center'>
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
                      </svg>
                        Görsel Tanıma Deneyin
                    </button>
          </div>
          <WhatsappSection3 />
        </div>
  )
}

export default Feature2