import React from 'react';

import Hero from '../Hero/Hero';
import GPS from '../GPS/GPS';
// import Blank from '../Blank/Blank';
import CleanEats from '../CleanEats/CleanEats';
// import Feedback from '../Feedback/Feedback';
import Function from '../Function/Function';

import './Main.scss'


const Main = () => {

    return (
        <>
        <Hero />
        <CleanEats />
        <GPS />
        {/* <Blank />
        <Feedback /> */}
        <Function />
        </>
    )

}


export default Main;