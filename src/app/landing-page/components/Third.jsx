import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Btn from './btn';
import Image from 'next/image';

const contentSections = [
  {
    id: 1,
    number: '01',
    title: 'Orders That Never Slip Away',
    description: 'Mirar AI replies instantly with your menu options, special offers, recommendations based on customer preference, and it does so in a tone that is personalised to your brand.',
    image: '/images/girl.gif'
  },
  {
    id: 2,
    number: '02',
    title: 'Get Paid Instantly',
    description: 'No commissions. No middlemen. Secure payments go directly to you, all inside the same chat.',
    image: '/images/sec.gif'
  },
  {
    id: 3,
    number: '03',
    title: 'Delivery, Done For You',
    description: 'AI auto-books your preferred delivery partner.  Customers track and pay in the same chat thread, no extra steps.',
    image: '/images/three.gif'
  },
  {
    id: 4,
    number: '04',
    title: 'Complaints Resolved in Seconds',
    description: 'Cold food? Wrong order? AI handles it right away, keeping customers happy and loyal.',
    image: '/images/four.gif'
  },
  {
    id: 5,
    number: '05',
    title: 'Turn Every Order Into 5 Stars',
    description: 'After delivery, AI sends a Google review link. More 5-star ratings = higher visibility = more customers.',
    image: '/images/five.gif'
  },
  {
    id: 6,
    number: '06',
    title: 'Bring Customers Back Automatically',
    description: 'Your Agentic AI CRM remembers every customer. It sends reorder reminders, promos, and loyalty rewards — without you lifting a finger.',
    image: '/images/six.gif'
  }
];

const Third = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === contentSections.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? contentSections.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id='benefits' className='bg-gradient-to-br from-[#C3F19D] to-[#7DC243] w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-16'>
      <div className='max-w-7xl mx-auto'>
        {/* Heading Section */}
        <div className='text-center space-y-4 md:space-y-6 mb-12 md:mb-20'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 text-black'>
            Turn WhatsApp, Messenger & Instagram Into Your Own Food Delivery Platform.
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-black px-2 sm:px-4 md:px-12 lg:px-24 xl:px-32'>
            Stop losing money to platforms. With Mirar AI, WhatsApp, Messenger & Instagram become your direct ordering system, keeping 100% of your profit, your customer data, and your brand front and center.
          </p>
        </div>

        {/* Carousel Container */}
        <div className='relative w-full overflow-hidden py-8'>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className='text-white absolute left-0 top-[60%] md:top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#367FEA] to-[#74E5E6] text-gray-800 shadow-md transition-colors'
            aria-label='Previous slide'
          >
            <ArrowLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className='text-white absolute right-0 top-[60%] md:top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#367FEA] to-[#74E5E6] text-gray-800 shadow-md transition-colors'
            aria-label='Next slide'
          >
            <ArrowRight size={24} />
          </button>

          {/* Slides Container */}
          <div 
            className='flex transition-transform duration-300 ease-in-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {contentSections.map((section) => (
              <div 
                key={section.id}
                className='w-full flex-shrink-0 px-4'
              >
                <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-8 w-full max-w-5xl mx-auto'>
                  <div className='w-full md:w-1/2 space-y-6 text-center mt-8 md:mt-0'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl text-[#367FEA] tracking-tighter'>
                      {section.number}
                    </h1>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-medium'>
                      {section.title}
                    </h2>
                    <p className='text-base sm:text-lg md:text-xl text-black'>
                      {section.description}
                    </p>
                  </div>
                  <div className='w-full md:w-1/2 flex justify-center'>
                    <Image   
                      src={section.image} 
                      alt={section.title}
                      width={1920}
                      height={1080}
                      className='w-full max-w-md max-h-80 md:max-h-96 rounded-3xl shadow-xl object-cover'
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='pt-8 text-center'>
          <Btn />
        </div>
      </div>
    </div>
  );
};

export default Third;