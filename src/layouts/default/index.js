import React from 'react'

import '../../assets/css/style.css';
import '../../assets/css/media-queries.css';

import Navigation from './Navigation'
import Footer from './Footer'

const DefaultLayout = ( {children} ) => {
    return (
        <div>
            <Navigation/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}

export default DefaultLayout