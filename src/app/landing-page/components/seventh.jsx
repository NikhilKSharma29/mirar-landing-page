import React from 'react'
import Btn from './btn'

const Seventh = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/man.jpg" 
          alt="Restaurant owner using our service" 
          className="w-full h-full object-cover object-right md:object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center px-4">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Go Live in a Few Clicks, Start{' '}
            <span className="whitespace-nowrap">Saving on Every Order</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Your AI agents will be ready to take orders, solve complaints, arrange delivery,
            and boost your Google reviews, all within minutes.
          </p>
    
          {/* CTA Button */}
          <div className="mt-8 flex justify-center">
            <Btn className="px-8 py-3 text-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Seventh