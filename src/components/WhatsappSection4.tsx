
const WhatsappSection4 = () => {


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
                        Let's practice talking about your hobbies. What do you like to do in your free time?
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-[#DCF7C6] self-end justify-end flex font-poppins">
                        I like to reading books and watching movies. Sometimes I playing football with my friends on weekends.
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-white self-start">
                        That sounds fun! 😊 I noticed a few small grammar points we can improve:

                        • "I like <span className="relative inline-block group">
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2  flex flex-col items-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-10">
                                <span className="bg-[#4CAF50] text-white px-2 py-[2px] rounded text-xs whitespace-nowrap">
                                    to read
                                </span>
                                <span className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#4CAF50]"></span>
                            </span>
                            <span className="bg-[#ffecb3] px-[3px] rounded-[3px] line-through text-[#e65100]">
                                to reading
                            </span>
                        </span> books" - After "like to" we use the base form of the verb

                        • "Sometimes I <span className="relative inline-block group">
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2  flex flex-col items-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-10">
                                <span className="bg-[#4CAF50] text-white px-2 py-[2px] rounded text-xs whitespace-nowrap">
                                    play
                                </span>
                                <span className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#4CAF50]"></span>
                            </span>
                            <span className="bg-[#ffecb3] px-[3px] rounded-[3px] line-through text-[#e65100]">
                                playing
                            </span>
                        </span> football" - After "I" we need the simple present tense

                        So it would be: "I like to read books and watch movies. Sometimes I play football with my friends on weekends."

                        Do you have any specific genres of books or movies you enjoy?
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-[#DCF7C6] self-end justify-end flex font-poppins">
                        Thank you for correction! I enjoy science fiction books and action movies. I read a book last week who was about space travel.
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-white self-start">
                        Science fiction and action are great choices! 👍 I noticed one more thing we can improve: • "I read a book last week <span className="relative inline-block group">
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2  flex flex-col items-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-10">
                                <span className="bg-[#4CAF50] text-white px-2 py-[2px] rounded text-xs whitespace-nowrap">
                                    that/which
                                </span>
                                <span className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#4CAF50]"></span>
                            </span>
                            <span className="bg-[#ffecb3] px-[3px] rounded-[3px] line-through text-[#e65100]">
                                who
                            </span>
                        </span> was about space travel" - We use "who" for people, but for objects like books, we use "that" or "which" So it would be: "I read a book last week that was about space travel." Space travel is fascinating! What was the title of the book? Would you recommend it?
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-[#DCF7C6] self-end justify-end flex font-poppins">
                        I understand now! The book is called "The Martian" and I recommend it because it's very exciting and realistic.
                    </div>
                    <div className="relative box-border rounded-xl p-3 max-w-[80%] mb-3 text-start bg-white self-start">
                        Perfect sentence structure! 🌟 "The Martian" is indeed a fantastic book with a great balance of science and storytelling. The author, Andy Weir, did extensive research to make the science as accurate as possible. Have you watched the movie adaptation with Matt Damon? If so, how would you compare it to the book?
                    </div>
                </div>
                <div className="p-3 flex items-center">
                    <input type="text" placeholder="Mesaj yazın..." className="bg-gray-100 rounded-full py-2 px-4 flex-grow text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <button className="ml-2 bg-green-500 text-white cursor-pointer rounded-full p-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default WhatsappSection4