import React from 'react';
import './Blank.scss';

import vmenu from '../../assets/vmenu.jpg';

const Blank = () => {

    return(
        <section className="vMenu">
            <div className="vMenu__ctn">
                <div className="vMenu__desc">
                    <h3 className="vMenu__header">A Virtual Menu to place your order from, for a contactless experience</h3>
                    <p className="vMenu__text">Our virtual menu option helps you select and place your order contactless, without the need of a waiter to serve you or touching a tradtional physical menu to pick and choose from. 
                        We kept your safety as our top priority while dining inside a restaurant. </p>
                </div>
                <div className="vMenu__points-ctn">
                    <div className="vMenu__points-row">
                        <div className="vMenu__bullets"></div>
                        <p className="vMenu__points">
                        Multifunctional and user-friendly interface with various tools for adding, editing and deleting products.
                        </p>
                    </div>
                    <div className="vMenu__points-row">
                        <div className="vMenu__bullets"></div>
                        <p className="vMenu__points">
                        Making orders by just one click with both cash and card payments
                        </p>
                    </div>
                    <div className="vMenu__points-row">
                        <div className="vMenu__bullets"></div>
                        <p className="vMenu__points">
                        Tools for hiding unavailable products and activating orders
                        </p>
                    </div>
                    <div className="vMenu__points-row">
                        <div className="vMenu__bullets"></div>
                        <p className="vMenu__points">
                        Automatic translation of menu on over 25 languages
                        </p>
                    </div>
                    <div className="vMenu__points-row">
                        <div className="vMenu__bullets"></div>
                        <p className="vMenu__points">
                        Client feedback and social media sharing options
                        </p>
                    </div>
                    <div className="vMenu__points-row">
                        <div className="vMenu__bullets"></div>
                        <p className="vMenu__points">
                        Detailed information and photo of each product
                        </p>
                    </div>
                    <div className="vMenu__points-row">
                        <div className="vMenu__bullets"></div>
                        <p className="vMenu__points">
                        Product rating analysis using Google Analytics
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Blank;

