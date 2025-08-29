import { ArrowLeft, ArrowRight, Bell, Share, ShoppingCart, User } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import Btn from './btn';

const steps = [
  
  {
    id: 1,
    icon: <User size={48} className="text-blue-500" />,
    title: 'Step 1 — Sign Up',
    description: 'Choose your plan: Starter, Growth and Pro. Create your account and enjoy 7 days free service to see the value of Mirar AI.'
  },
  {
    id: 2,
    icon: <Share size={48} className="text-blue-500" />,
    title: 'Step 2 — Connect Your Socials',
    description: 'Link your phone, WhatsApp, Messenger, and Instagram channels in seconds.'
  },
  {
    id: 3,
    icon: <Bell size={48} className="text-blue-500" />,
    title: 'Step 3 — Upload Your Menu',
    description: 'Add your food items, prices, and photos. Mirar AI trains itself instantly.'
  },
  {
    id: 4,
    icon: <ShoppingCart size={48} className="text-blue-500" />,
    title: 'Step 4 — Choose Fulfillment Options',
    description: 'Offer in-store pickup, curbside delivery, or connect to  our partner riders. Customers pick their preference right in the chat.'
  },
  {
    id: 5,
    icon: <ShoppingCart size={48} className="text-blue-500" />,
    title: 'Step 5 — Start Taking Order',
    description: 'From the moment you go live, customers can place orders via phone, WhatsApp, Messenger, or Instagram messages with AI handling payment, delivery, and reviews automatically.From the moment you go live, customers can place orders via phone, WhatsApp, Messenger, or Instagram messages with AI handling payment, delivery, and reviews automatically.'
  },

];

const Fourth = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationDuration = 300; // ms

  
  
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setVisibleSteps(mobile ? 1 : 3);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextStep = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    if (isMobile) {
      setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentStep((prev) => 
        prev + 1 <= steps.length - visibleSteps ? prev + 1 : 0
      );
    }
    setTimeout(() => setIsAnimating(false), animationDuration);
  };

  const prevStep = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    if (isMobile) {
      setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
    } else {
      setCurrentStep((prev) => 
        prev > 0 ? prev - 1 : steps.length - visibleSteps
      );
    }
    setTimeout(() => setIsAnimating(false), animationDuration);
  };

  const goToStep = (index) => {
    setCurrentStep(index);
  };

  const StepCard = ({ step }) => (
    <div className="flex flex-col items-center h-full md:h-[55vw] lg:h-[45vw] xl:h-[35vw]  px-4">
      <div className="w-32 h-32 md:w-36 md:h-36 flex items-center justify-center rounded-full bg-[#F2F2F2] mx-auto">
        {step.icon}
      </div>
      <h3 className="mt-6 font-bold text-lg md:text-lg text-center">
        {step.title}
      </h3>
      <p className="mt-2 text-gray-600 text-sm md:text-xs lg:text-base max-w-xs mx-auto text-center">
        {step.description}
      </p>
    </div>
  );

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 text-center bg-white">
      {/* Title */}
      <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 text-black">
        Getting Started With Mirar AI
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 md:mb-16 text-black">
        No coding. No complicated setup. Mirar AI is built so any restaurant can
        start taking AI-powered orders the same day.
      </p>

      {/* Steps Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="relative overflow-hidden w-full max-w-6xl">
          {/* Left Arrow */}
          <button 
            onClick={prevStep}
            className="absolute left-0 top-1/4 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow"
            aria-label="Previous step"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Steps Wrapper */}
          <div className="relative w-full overflow-hidden">
            <div 
              className={`flex transition-transform duration-${animationDuration} ease-in-out`}
              style={{
                transform: isMobile ? `translateX(-${currentStep * 100}%)` : 'none',
                display: isMobile ? 'flex' : 'grid',
                gridTemplateColumns: isMobile ? 'none' : 'repeat(3, 1fr)',
                gap: isMobile ? '0' : '2rem'
              }}
            >
              {isMobile 
                ? steps.map((step) => (
                    <div key={step.id} className="w-full flex-shrink-0">
                      <StepCard step={step} />
                    </div>
                  ))
                : steps.slice(currentStep, currentStep + 3).map((step) => (
                    <StepCard key={step.id} step={step} />
                  ))
              }
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextStep}
            className="absolute right-0 top-1/4 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow"
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
        <Btn onClick={() => openModal()}/>
      </div>
    </section>
  )
}

export default Fourth