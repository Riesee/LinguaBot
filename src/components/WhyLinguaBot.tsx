const WhyLinguaBot = () => {
    return (
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Neden LinguaBot?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Dil öğrenme yolculuğunuzda size eşlik edecek yapay zeka destekli WhatsApp asistanınız</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition feature-card">
                    <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">7/24 Erişim</h3>
                    <p className="text-gray-600">İstediğiniz zaman, istediğiniz yerden dil pratiği yapın. Sadece bir WhatsApp mesajı gönderin.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition feature-card">
                    <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Kişiselleştirilmiş Öğrenme</h3>
                    <p className="text-gray-600">Seviyenize ve ilgi alanlarınıza göre özelleştirilmiş dil pratiği yapın. Her konuşma sizin ihtiyaçlarınıza göre şekillenir.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition feature-card">
                    <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Gerçek Zamanlı Düzeltme</h3>
                    <p className="text-gray-600">Dil hatalarınız anında düzeltilir ve açıklanır. Böylece aynı hataları tekrarlamazsınız.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyLinguaBot