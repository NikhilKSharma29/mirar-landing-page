import React, { useState } from 'react';
import Image from 'next/image';

const Chatpage = () => {

    return (
        <section id='howitworks' className="w-full bg-gradient-to-b from-[#FFE28B] to-[#ED8B4D] py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Heading */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-4 md:mb-6 text-black leading-tight">
                       See How Customers Order<br/> With Mirar AI
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed px-4">
                        Try a real conversation. Chat with Mirar ai and see how it shows the<br className='hidden md:block'/> menu, answers questions, and takes an order, just like it would for your<br className='hidden md:block'/> customers. 
                    </p>
                </div>

               
                <div className="w-full md:max-w-5xl lg:max-w-6xl mx-auto flex justify-center items-center">
                    <div className="w-full md:rounded-3xl overflow-hidden">

                        <Image
                            src="/images/chatImg.png"
                            alt="chat section image"
                            width={1920}
                            height={1080}
                            className="object-cover hidden md:block"
                            priority
                        />
                        <Image  
                            src="/images/mobileChat.png"
                            alt="chat section image"
                            width={1920}
                            height={1080}
                            className="object-cover md:hidden"
                            priority
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chatpage;