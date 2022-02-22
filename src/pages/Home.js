import React from 'react'


import Hero from './home/Hero';
import Benefits from './home/Benefits';
import Pricing from './home/Pricing';
import DownloadApp from './home/DownloadApp';
import WhyMedflit from './home/WhyMedflit';
import Testimonials from './home/Testimonials';

import DefaultLayout from '../layouts/default'

function Home() {
    return(
        <div>
            <DefaultLayout>
                <Hero/>
                <Benefits/>
                <Pricing/>
                <DownloadApp/>
                {/* <WhyMedflit/> */}
                <Testimonials/>
            </DefaultLayout>
        </div>
    )
}

export default Home