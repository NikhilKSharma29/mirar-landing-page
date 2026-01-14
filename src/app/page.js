"use client"
import React from 'react'
import Navbar from './landing-page/components/Navbar'
import Hero from './landing-page/components/Hero'
import Second from './landing-page/components/Second'
import Third from './landing-page/components/Third'
import Fourth from './landing-page/components/Fourth'
import Fifth from './landing-page/components/Fifth'
import Sixth from './landing-page/components/sixth'
import Seventh from './landing-page/components/seventh'
import Footer from './landing-page/components/Footer'
import RestaurantsBar from './landing-page/components/RestaurantsBar'
import SocialMediaHero from './landing-page/components/SocialMediaHero'
import Chatpage from './landing-page/components/Chatpage'
const page = () => {
    
    return (
        <div className='main w-full'>

            {/* nav */}
            <Navbar />
            {/* hero */}
            <Hero />

            <RestaurantsBar/>

            <SocialMediaHero/>
            {/* second section */}
            {/* <Second /> */}


            {/* third section */}
            <Third />

            {/* fourth section */}
            <Fourth />

            { /* fifth section */}
            {/* <Fifth /> */}
           <Chatpage/>
            { /* sixth section */}
            {/* <Sixth /> */}

            {/* seventh section */}
            <Seventh />

           



            {/* footer section */}
            <Footer />

        </div>
    )
}

export default page