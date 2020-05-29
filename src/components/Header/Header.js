import React from 'react';
import './Header.scss'
import menu from '../../assets/hamburger-menu.png';

import logo from '../../assets/logo.PNG';

const Header = () => {

    return(
        <section className="header">
            <img src={logo} />
            <div className="header__ctn">
            </div>
            <nav className="header__nav">
                <button className="header__button" href="#">Login</button>
                <button className="header__button" href="#">Sign Up</button>
                <img className="header__menu-btn" src={menu} alt=""/>
            </nav>
        </section>
    )

}


export default Header;