import React from 'react';
import Btn from './btn';

const Hero = () => {
  return (
    <section className="relative w-full h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop Background */}
        <img 
          src="/images/header.gif" 
          alt="Restaurant dining scene" 
          className="hidden md:block w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Mobile Background */}
        <img
          src="/images/mobscreen.gif"
          alt="Restaurant dining scene"
          className="md:hidden w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-2 md:pt-0 pb-20 md:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-start">
          {/* Text Content - 70% width on desktop, full width on mobile */}
          <div className="w-full lg:w-[70%] lg:pr-12 xl:pr-20 text-center lg:text-left md:mt-0">
            <div className="max-w-3xl mx-auto lg:mx-0 text-center -mt-32 md:mt-0 lg:mt-0">
              <h1 className="text-3xl text-4xl sm:text-5xl lg:text-5xl text-white">
                Stop Losing 30–40% to food Delivery Apps.
                <br className="hidden sm:inline" />
                Keep 100% of your Orders.
              </h1>
              <p className="text-white mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed px-12">
                Mirar AI turns WhatsApp, Messenger & Instagram into your full-time ordering team taking orders, payments, delivery, onsite and kerbside pickup, and customer reviews automatically.
              </p>
              <div className="mt-6 sm:mt-8 flex justify-center lg:justify-center">
                <Btn className="px-8 py-3 text-sm sm:text-base" />
              </div>
            </div>
          </div>
          {/* Right side spacer - 30% */}
          <div className="hidden lg:block lg:w-[30%]"></div>
        </div>
      </div>
     
    </section>
  );
};

export default Hero;