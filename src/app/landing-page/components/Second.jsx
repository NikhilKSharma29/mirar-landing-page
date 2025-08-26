import React from 'react'
import Btn from './btn'
import {TbMoneybag} from 'react-icons/tb'
import {CgNotes} from 'react-icons/cg'
import {LuSearchSlash} from 'react-icons/lu'
import {BsGraphUpArrow} from 'react-icons/bs'
const Second = () => {
  return (
    <div className='bg-white py-12 md:py-20 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32'>
      <div className='max-w-7xl mx-auto'>
        <div className='mt-10 flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16'>
          {/* Image Section - On left for desktop, bottom for mobile */}
          <div className='w-full lg:w-1/2 flex justify-center order-2 lg:order-1'>
            <img 
              className='w-full max-w-lg h-auto rounded-2xl md:rounded-3xl shadow-lg object-cover'
              src="/images/receipt.png" 
              alt="Receipt showing order details" 
            />
          </div>
          
          {/* Content Section - On right for desktop, top for mobile */}
          <div className='w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-center order-1 lg:order-2'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-snug'>
              Food delivery platforms are taking your hard-earned revenue.
            </h1>
            
            <div className='space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl lg:text-xl text-gray-700'>
              <p><TbMoneybag className='inline mr-2 text-3xl text-[#367FEA] md:text-2xl lg:text-3xl sm:text-2xl'/> Commissions that crush margins</p>
              <p><CgNotes className='inline mr-2 text-3xl text-[#367FEA] md:text-2xl lg:text-3xl sm:text-2xl'/> No access to your own customer data</p>
              <p><BsGraphUpArrow className='inline mr-2 text-3xl text-[#367FEA] md:text-2xl lg:text-3xl sm:text-2xl'/> Forced to raise prices just to survive</p>
              <p><LuSearchSlash className='inline mr-2 text-3xl text-[#367FEA] md:text-2xl lg:text-3xl sm:text-2xl'/> Your brand hidden behind their app</p>
            </div>
            
            <p className='text-lg sm:text-xl md:text-2xl lg:text-xl text-gray-800'>
              Do you want to retain all your order value?
            </p>
            
            <div className='flex justify-center lg:justify-center pt-2'>
              <Btn />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Second