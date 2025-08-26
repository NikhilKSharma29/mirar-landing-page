import { ArrowLeft, ArrowRight, Bell, Share, User } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const steps = [
  {
    id: 1,
    icon: <User size={40} className="text-blue-500" />,
    title: 'Step 1 — Sign Up',
    description: 'Choose your plan: Starter, Growth and Pro. Create your account and enjoy 7 days free service to see the value of Mirar AI.'
  },
  {
    id: 2,
    icon: <Share size={40} className="text-blue-500" />,
    title: 'Step 2 — Connect Your Socials',
    description: 'Link your phone, WhatsApp, Messenger, and Instagram channels in seconds.'
  },
  {
    id: 3,
    icon: <Bell size={40} className="text-blue-500" />,
    title: 'Step 3 — Upload Your Menu',
    description: 'Add your food items, prices, and photos. Mirar AI trains itself instantly.'
  }
];

const Fourth = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextStep = () => {
    setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const goToStep = (index) => {
    setCurrentStep(index);
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 text-center">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Getting Started With Mirar AI
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 md:mb-16">
        No coding. No complicated setup. Mirar AI is built so any restaurant can
        start taking AI-powered orders the same day.
      </p>

      {/* Steps Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="relative overflow-hidden w-full max-w-6xl">
          {/* Left Arrow */}
          <button 
            onClick={prevStep}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow hover:scale-105 transition-transform"
            aria-label="Previous step"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Steps Wrapper */}
          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: isMobile ? `translateX(-${currentStep * 100}%)` : 'none',
                display: isMobile ? 'flex' : 'grid',
                gridTemplateColumns: isMobile ? 'none' : 'repeat(3, 1fr)'
              }}
            >
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  className={`${isMobile ? 'w-full flex-shrink-0 px-4' : ''} transition-opacity duration-300`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-full bg-[#F2F2F2] mx-auto">
                      {step.icon}
                    </div>
                    <h3 className="mt-6 font-bold text-lg md:text-xl">{step.title}</h3>
                    <p className="mt-2 text-gray-600 text-sm md:text-base max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextStep}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow hover:scale-105 transition-transform"
            aria-label="Next step"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Dots Indicator */}
      {isMobile && (
        <div className="flex justify-center mt-8 space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentStep === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-12 md:mt-16">
        <a
          href="#"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow hover:scale-105 transition"
        >
          Start Free Trial Now
        </a>
      </div>
    </section>
  )
}

export default Fourth