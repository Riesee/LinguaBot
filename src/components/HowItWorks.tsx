const HowItWorks = () => {
    return (
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasıl Çalışır?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">LinguaBot ile dil pratiği yapmak çok kolay. Sadece üç adımda başlayın.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl font-bold text-green-600">1</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">WhatsApp'ta Ekleyin</h3>
                    <p className="text-gray-600">LinguaBot'u WhatsApp kişilerinize ekleyin ve bir mesaj gönderin.</p>
                </div>

                <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl font-bold text-green-600">2</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Dilinizi Seçin</h3>
                    <p className="text-gray-600">Pratik yapmak istediğiniz dili ve seviyenizi belirtin.</p>
                </div>

                <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl font-bold text-green-600">3</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Konuşmaya Başlayın</h3>
                    <p className="text-gray-600">İstediğiniz konuda sohbet edin, sesli mesaj gönderin veya görsel paylaşın.</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks