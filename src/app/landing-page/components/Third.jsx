import React from 'react'
import Btn from './btn'

const Third = () => {
  return (
    <div className='bg-gradient-to-br from-[#C3F19D] to-[#7DC243] w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-16'>
      <div className='max-w-7xl mx-auto'>
        {/* Heading Section */}
        <div className='text-center space-y-4 md:space-y-6 mb-12 md:mb-20'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24'>
            Turn WhatsApp, Messenger & Instagram Into Your Own Food Delivery Platform.
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-800 px-2 sm:px-4 md:px-12 lg:px-24 xl:px-32'>
            Stop losing money to platforms. With Mirar AI, WhatsApp, Messenger & Instagram become your direct ordering system, keeping 100% of your profit, your customer data, and your brand front and center.
          </p>
        </div>

        {/* Content Section */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12'>
          {/* Text Content */}
          <div className='w-full lg:w-1/2 text-center space-y-4 md:space-y-6 order-2 lg:order-1'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl text-[#367FEA] tracking-tighter'>01</h1>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-medium'>
              Orders That Never Slip Away
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-gray-800 max-w-2xl mx-auto'>
              Mirar AI replies instantly with your menu options, special offers, recommendations based on customer preference, and it does so in a tone that is personalised to your brand.
            </p>
            <div className='pt-2'>
              <Btn />
            </div>
          </div>

          {/* Image */}
          <div className='w-full lg:w-1/2 flex justify-center order-1 lg:order-2'>
            <img 
              className='lg:w-auto md:w-auto w-full max-w-lg h-auto max-h-[60vh] md:max-h-[70vh] rounded-3xl md:rounded-[40px] object-cover shadow-xl'
              src="/images/girl.gif" 
              alt="AI assistant taking orders" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Third