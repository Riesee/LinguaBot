
const Whatsapp = () => {
    
    
    return (
        <div className="md:w-1/2 md:pl-10">
            <div className="bg-white rounded-3xl p-4 shadow-xl max-w-sm mx-auto">
                <div className="bg-green-500 rounded-t-2xl py-3 px-4">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"></path>
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-white font-medium">LinguaBot</p>
                            <p className="text-green-100 text-xs text-start">çevrimiçi</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 p-4 h-80 overflow-y-auto flex flex-col">
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-white self-start">
                        Merhaba! Ben LinguaBot. Hangi dilde pratik yapmak istersin?
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-[#DCF7C6] self-end justify-end flex font-poppins">
                        İngilizce pratik yapmak istiyorum
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-white self-start">
                        Harika! İngilizce pratik yapalım. Hangi konuda konuşmak istersin? Seyahat, iş hayatı, günlük konuşma?
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-[#DCF7C6] self-end justify-end flex font-poppins">
                        Seyahat hakkında konuşalım
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-white self-start">
                        Great! Let's talk about travel. Have you been to any interesting places recently? Or is there somewhere you'd like to visit?
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-[#DCF7C6] self-end justify-end flex font-poppins">
                        I want to visit Italy next summer
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-white self-start">
                        That's a wonderful choice! Italy has amazing food, art, and history. Which cities in Italy are you planning to visit?
                    </div>
                </div>
                <div className="p-3 flex items-center">
                    <input type="text" placeholder="Mesaj yazın..." className="bg-gray-100 rounded-full py-2 px-4 flex-grow text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <button className="ml-2 bg-green-500 cursor-pointer text-white rounded-full p-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Whatsapp