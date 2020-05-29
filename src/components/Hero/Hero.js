import React from 'react';
import './Hero.scss'

import slider from  '../../assets/ellipses.png';
import hero from '../../assets/hero-img.jpg';
import next from '../../assets/next.svg'
import back from '../../assets/back.svg'

const Hero = () => {

    return(
        <section className="hero">
        <div className="hero__ctn">
            <div className="hero__copy-ctn">
                <img className="hero__back" src={back} alt=""/>
                <h3 className="hero__copy">
                Find a safe and risk free dining experince, in a post covid world. 
                </h3>
                <img className="hero__slider-btn" src={slider} alt=""/>
            </div>
        </div>
        <div className="hero__img-ctn">
            <img className="hero__img" src={hero} alt=""/>
            <img className="hero__next" src={next} alt=""/>
        </div>
    </section>
    )

}


export default Hero;