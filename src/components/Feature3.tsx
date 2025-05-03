import WhatsappSection4 from "./WhatsappSection4"

const Feature3 = () => {
  return (
    <div className='flex flex-col md:flex-row items-center mb-24'>
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">Özellik 3</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Destekleyici Geri Bildirim</h3>
              <p className="text-gray-600 mb-6">
                Dil öğrenirken hata yapmak kaçınılmazdır. LinguaBot, hatalarınızı destekleyici bir dille düzeltir ve doğrusunu öğretir, böylece özgüveninizi kaybetmeden öğrenmeye devam edersiniz.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                  <span className="text-gray-700">Dilbilgisi hatalarınız nazikçe düzeltilir</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                  <span className="text-gray-700">Daha doğal ifadeler için alternatif öneriler alın</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                  <span className="text-gray-700">Kişiselleştirilmiş açıklamalarla kalıcı öğrenme sağlayın</span>
                </li>
              </ul>
              <button className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition whatsapp-shadow inline-flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                </svg>
                Geri Bildirim Alın
              </button>
            </div>
            <WhatsappSection4 />
          </div>
  )
}

export default Feature3