const Navbar = () => {
  return (
    <nav className='flex justify-between items-center mb-16'>
        <div className='flex items-center'>
            <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"></path>
            </svg>
            <span className='ml-2 text-xl font-bold text-gray-800'>LinguaBot</span>
        </div>
        <div className='hidden md:flex space-x-6'>
            <a href="#features" className='text-gray-600 hover:text-green-600 transition'>Özellikler</a>
            <a href="#how-it-works" className='text-gray-600 hover:text-green-600 transition'>Nasıl Çalışır</a>
            <a href="#testimonials" className='text-gray-600 hover:text-green-600 transition'>Kullanıcı Yorumları</a>
            <a href="#pricing" className='text-gray-600 hover:text-green-600 transition'>Fiyatlandırma</a>
        </div>
        <button className='bg-green-500 cursor-pointer hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition whatsapp-shadow'>
        Hemen Başla
        </button>

    </nav>
  )
}

export default Navbar