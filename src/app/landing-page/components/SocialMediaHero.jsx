import React, { useState } from 'react';
import Image from 'next/image';

const SocialMediaHero = () => {
    //   const [isPlaying, setIsPlaying] = useState(false);

    //   const handlePlayClick = () => {
    //     setIsPlaying(true);

    //     console.log('Video play clicked');
    //   };

    return (
        <section className="w-full bg-white md:pb-16 lg:pb-20">
            <div className="container mx-auto ">
                {/* Heading */}
                <div className="text-center mb-8 md:mb-12 py-12 md:py-16 lg:py-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-4 md:mb-6 text-black leading-tight">
                        Turn Social Media<br className="sm:hidden" /> Into Your<br className="hidden sm:block" /> Ordering<br className="sm:hidden" /> System
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed px-4">
                        Let customers order directly through WhatsApp, Instagram, and<br className='hidden md:block'/> Messenger. Mirar captures every order and sends it straight to your POS<br className='hidden md:block'/> automatically, accurately, and without commissions.
                    </p>
                </div>

                {/* Video Container */}
                <div className="relative w-full md:max-w-5xl lg:max-w-6xl mx-auto">
                    {/* Aspect ratio container for responsive video */}
                    <div className="relative w-full aspect-video md:rounded-3xl overflow-hidden">

                        <Image
                            src="/images/herovideo.jpg"
                            alt="Restaurant owner using tablet for social media ordering"
                            fill
                            className="object-cover"
                            priority
                        />

                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Play Button */}
                        {/* <button
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                            aria-label="Play video"
                        >
                            <div className="relative">
                                
                                <Image
                                    src="/images/playbtn.png"
                                    alt="Play icon"
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-white ml-1 transition-transform duration-300 group-hover:scale-110"
                                />

                            </div>
                        </button> */}


                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaHero;