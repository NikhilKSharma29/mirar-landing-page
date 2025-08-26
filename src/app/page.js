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
const page = () => {
    
    return (
        <div className='main w-full'>

            {/* nav */}
            <Navbar />
            {/* hero */}
            <Hero />
            {/* second section */}
            <Second />


            {/* third section */}
            <Third />

            {/* fourth section */}
            <Fourth />

            { /* fifth section */}
            <Fifth />

            { /* sixth section */}
            <Sixth />

            {/* seventh section */}
            <Seventh />

           



            {/* footer section */}
            <Footer />

        </div>
    )
}

export default page