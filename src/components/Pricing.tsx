const Pricing = () => {
    return (
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Fiyatlandırma</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">İhtiyacınıza uygun planı seçin ve hemen dil pratiğine başlayın</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold mb-4">Başlangıç</h3>
                    <div className="mb-6">
                        <span className="text-4xl font-bold">Ücretsiz</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                            </svg>
                            <span className="text-gray-700">Günlük 10 mesaj</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                            </svg>
                            <span className="text-gray-700">Temel dil pratiği</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                            </svg>
                            <span className="text-gray-700">1 dil seçeneği</span>
                        </li>
                    </ul>
                    <button className="w-full border border-green-500 text-green-600 cursor-pointer hover:bg-green-50 px-6 py-3 rounded-full font-medium transition">
                        Ücretsiz Başla
                    </button>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-green-500 transform md:-translate-y-4">
                    <div className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">En Popüler</div>
                    <h3 className="text-xl font-bold mb-4">Premium</h3>
                    <div className="mb-6">
                        <span className="text-4xl font-bold">₺49</span>
                        <span className="text-gray-500">/ay</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                            </svg>
                            <span className="text-gray-700">Sınırsız mesaj</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                            </svg>
                            <span className="text-gray-700">Sesli mesaj desteği</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                            </svg>
                            <span className="text-gray-700">Görsel tanıma</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                            </svg>
                            <span className="text-gray-700">5 dil seçeneği</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                            </svg>
                            <span className="text-gray-700">İlerleme takibi</span>
                        </li>
                    </ul>
                    <button className="w-full cursor-pointer bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition whatsapp-shadow">
                        Hemen Başla
                    </button>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold mb-4">İşletme</h3>
                    <div className="mb-6">
                        <span className="text-4xl font-bold">₺199</span>
                        <span className="text-gray-500">/ay</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                            </svg>
                            <span className="text-gray-700">5 kullanıcı için sınırsız mesaj</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                            </svg>
                            <span className="text-gray-700">Tüm Premium özellikleri</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pricing