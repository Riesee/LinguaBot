
const WhatsappSection3 = () => {


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
                        What would you like to learn about today?
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-[#DCF7C6] self-end justify-end flex font-poppins">
                        I'm at a café in Paris and don't understand the menu. Can you help?
                    </div>
                    <div className="relative box-border rounded-xl p-1 max-w-[80%] mb-3 text-start bg-[#DCF7C6] self-end justify-end flex font-poppins">
                        <svg className="w-full h-48" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="300" fill="#f8f9fa"></rect>
                            <rect x="50" y="50" width="300" height="200" rx="10" fill="#e9ecef"></rect>
                            <text x="200" y="150" font-family="Arial" font-size="24" text-anchor="middle" fill="#495057">Café Menu</text>
                            <text x="200" y="180" font-family="Arial" font-size="16" text-anchor="middle" fill="#6c757d">Croissant • Café au lait • Quiche</text>
                            <text x="200" y="210" font-family="Arial" font-size="16" text-anchor="middle" fill="#6c757d">Crêpe • Pain au chocolat</text>
                        </svg>
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-white self-start">
                        I can see a French café menu! Here's what these items mean: - Croissant: A buttery, flaky pastry - Café au lait: Coffee with hot milk - Quiche: Savory pie with eggs and cream - Crêpe: Thin pancake often with sweet fillings - Pain au chocolat: Chocolate-filled pastry Would you like me to help you order something specific?
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-[#DCF7C6] self-end justify-end flex font-poppins">
                        How do I ask for a café au lait in French?
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-white self-start">
                        You can say: "Je voudrais un café au lait, s'il vous plaît." Pronunciation: "Zhuh voo-dray un ka-fay oh lay, seel voo play" Would you like to see what a café au lait looks like?
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-[#DCF7C6] self-end justify-end flex font-poppins">
                        Yes, please show me!
                    </div>
                    <div className="relative box-border rounded-xl p-1 max-w-[80%] mb-3 text-start bg-white self-start">
                        <svg className="w-full h-48" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="300" fill="#f8f9fa"></rect>
                            <circle cx="200" cy="150" r="100" fill="#6c4a32"></circle>
                            <circle cx="200" cy="150" r="85" fill="#c49a6c"></circle>
                            <ellipse cx="200" cy="120" rx="60" ry="20" fill="#f8f9fa" opacity="0.7"></ellipse>
                            <rect x="170" y="230" width="60" height="20" rx="5" fill="#6c4a32"></rect>
                            <rect x="190" y="250" width="20" height="30" rx="5" fill="#6c4a32"></rect>
                        </svg>
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-white self-start">
                        This is a café au lait - a coffee drink made with hot milk. It's similar to a latte but typically has equal parts coffee and milk. Would you like to learn how to order any other items from the menu?
                    </div>
                </div>
                <div className="p-3 flex items-center">
                    <button className="bg-gray-100 rounded-full p-3 mr-2 cursor-pointer">
                        <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
                        </svg>
                    </button>
                    <input type="text" placeholder="Mesaj yazın..." className="bg-gray-100 rounded-full py-2 px-4 flex-grow text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <button className="ml-2 bg-green-500 text-white rounded-full p-2 cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WhatsappSection3