import React, { Component } from 'react'
import Hero from './homeComponents/Hero';
import Benefits from './homeComponents/Benefits';
import Pricing from './homeComponents/Pricing';
import DownloadApp from './homeComponents/DownloadApp';
import WhyMedflit from './homeComponents/WhyMedflit';
import Testimonials from './homeComponents/Testimonials';


function Home() {
    return(
        <div>
            <Hero/>
            <Benefits/>
            <Pricing/>
            <DownloadApp/>
            <WhyMedflit/>
            <Testimonials/>
        </div>
    )
}

export default Home