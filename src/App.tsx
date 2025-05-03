import './App.css'
import Feature1 from './components/Feature1'
import Feature2 from './components/Feature2'
import Feature3 from './components/Feature3'
import Header from './components/Header'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import WhyLinguaBot from './components/WhyLinguaBot'

function App() {


  return (
    <>
      <Header />
      
      <section className='py-16 md:py-24 bg-white'>
        <div className='container mx-auto px-4 md:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Öne Çıkan Özellikler</h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>LinguaBot'un benzersiz özellikleriyle dil öğrenme deneyiminizi geliştirin</p>
          </div>

          <Feature1 />

          <Feature2 />

          <Feature3 />
        </div>
      </section>

      <section id='features' className='py-16 md:py-24 bg-gray-50'>
        <WhyLinguaBot />
      </section>


      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <HowItWorks />
      </section>


      <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
        <Testimonials />
      </section>


      <section id="pricing" className="py-16 md:py-24 bg-white">
        <Pricing />
      </section>



    </>
  )
}

export default App
