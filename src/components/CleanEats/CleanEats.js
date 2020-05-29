import React from 'react';
import './CleanEats.scss'

import clean1 from '../../assets/clean1.png';
import clean2 from '../../assets/clean2.png';
import clean3 from '../../assets/clean3.png';


const CleanEats = () => {

    return (
        <div className="clean">
            <h3>Why you need Clean Eats Post Covid </h3>
            <p>Clean Eats helps you filter your dining experience in the most hygienic way, showing you top rated options that are as risk free as possible. We support small and medium businesses to create a community of safe dining experiences in a post covid world.</p>
            <div className="cleanBox">
                <img src={clean1} />
                <img src={clean2} />
                <img src={clean3} id="last"/>
            </div>
        </div>
    )

}


export default CleanEats;
