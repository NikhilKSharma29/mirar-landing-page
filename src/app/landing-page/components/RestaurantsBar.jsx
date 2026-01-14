"use client";
import React from 'react';
import Image from 'next/image';

const RestaurantsBar = () => {
  
  const restaurants = [
    {
      id: 1,
      name: 'Numero Uno Coffee Roasters',
      logo: '/restaurantsBar/Numero-Uno.png',
      alt: 'Numero Uno Coffee Roasters logo'
    },
    {
      id: 2,
      name: 'Cochimo',
      logo: '/restaurantsBar/cochimo.png',
      alt: 'Cochimo logo'
    },
    {
      id: 3,
      name: 'BabyCake',
      logo: '/restaurantsBar/babycake.png',
      alt: 'BabyCake logo'
    },
    {
      id: 4,
      name: 'Dough Bros',
      logo: '/restaurantsBar/dough.png',
      alt: 'Dough Bros Pizza & Doughnuts logo'
    }
  ];

  return (
    <section className="w-full bg-[#191919] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout - Single Row */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center">
          {restaurants.map((restaurant) => (
            <div 
              key={restaurant.id}
              className="relative w-full h-24 lg:h-32 flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={restaurant.logo}
                alt={restaurant.alt}
                fill
                className="object-contain"
                style={{ filter: 'brightness(1.1)' }}
              />
            </div>
          ))}
        </div>

        {/* Mobile Layout - 2 Columns Grid */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:hidden">
          {restaurants.map((restaurant) => (
            <div 
              key={restaurant.id}
              className="relative w-full h-20 sm:h-24 flex items-center justify-center transition-transform duration-300 active:scale-95"
            >
              <Image
                src={restaurant.logo}
                alt={restaurant.alt}
                fill
                className="object-contain"
                style={{ filter: 'brightness(1.1)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsBar;