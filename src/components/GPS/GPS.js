import React from 'react';
import './GPS.scss'

import gps1 from '../../assets/gps1.png';
import gps2 from '../../assets/gps2.png';
import gps3 from '../../assets/gps3.png';
import gps4 from '../../assets/gps4.PNG';

const GPS = () => {

    return (
        <div className="gps">
            <h3>A GPS Cordinate Data function to filter your your choices in real-time</h3>
            <p>A GPS coordinate data function helps you filter the your choices on the basis of location, average wait-times and traffic around the neighbourhood. You can now make a smooth visit to a diner of your choice adhereing to social distancing standards.</p>
            <div className="cleanBox"> 
                <img src={gps1} />
                <img src={gps2} />
                <img src={gps3} id="last"/>
            </div>
            <img src={gps4} id="gps"/>
        </div>
    )

}


export default GPS;