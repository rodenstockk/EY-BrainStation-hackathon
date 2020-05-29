import React from 'react';
import './Footer.scss';
import FB from '../../assets/FB.png';
import IG from '../../assets/IG.png';
import TW from '../../assets/TW.png';
import YT from '../../assets/YT.png';

const Footer = () => {

    return (
        <footer>
        <h4>Follow us on</h4>
        <div className='footerBox'>

            <img src={FB} />
            <img src={TW} />
            <img src={YT} />
            <img src={IG} />
        </div>
        </footer>
    )

}


export default Footer;