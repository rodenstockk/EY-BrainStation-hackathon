import React from 'react';
import './Function.scss'

import img1 from '../../assets/img-1.jpg';
import img2 from '../../assets/img-2.jpg';
import img3 from '../../assets/img-3.jpg';
import img4 from '../../assets/img-4.jpg';


const Function = () => {

    return(
        <section className="clean-eats">
            <div className="clean-eats__ctn">
                <h3 className="clean-eats__header">Clean Eats Provides Functionalities for Restaurants </h3>
           <div className="clean-eats__card-ctn">
            <div className="clean-eats__card">
                    <h4 className="clean-eats__card-header">REAL-TIME SUGGESTIONS</h4>
                    <img className="clean-eats__img" src={img4} alt=""/>
                    <p className="clean-eats__text">Gives you real -time suggestion on the best option available in term of wait-time cleanness and quality</p>
                </div>
                <div className="clean-eats__card">
                    <h4 className="clean-eats__card-header">VIRTUAL MENUS</h4>
                    <img className="clean-eats__img" src={img3} alt=""/>
                    <p className="clean-eats__text">Update information in restaurant menu, cleanness and sanitation instantly. Change price, add products to menu and also automatically remove items.</p>
                </div>
                <div className="clean-eats__card">
                    <h4 className="clean-eats__card-header">COST AND TIME SAVING</h4>
                    <img className="clean-eats__img" src={img2} alt=""/>
                    <p className="clean-eats__text">You don’t need to pay a lot of money for the design and printing of an updated menu for your restaurant.</p>
                </div>
                <div className="clean-eats__card">
                    <h4 className="clean-eats__card-header">ANYTIME AND ANYWHERE</h4>
                    <img className="clean-eats__img" src={img1} alt=""/>
                    <p className="clean-eats__text">
                    Customers and find your restaurant menu on any digital device at any time. Your digital menu will be easily reacable and attract new visitors
                    </p>
                </div>
            </div> 
          </div>  
        </section>
    )

}


export default Function;