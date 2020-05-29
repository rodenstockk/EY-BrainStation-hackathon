import React from 'react';
import './MobileApp.scss';
import topIcon from '../../assets/mobile-top-right.PNG';

const MobileApp = () => {

    return (
        <>
        <section>
            <div className='mobileheader'>
                <span>9:27</span>
                <img src={topIcon} />
            </div>

            <div className='page1Hero'>
                <img src=''/>
                <div className='sushiBistro'>
                    <h1>Sushi Bistro</h1>
                    <img src=''/>
                    <div className='sushiBistro__btm'>
                        <div className='sushiBistro__btm-prep'>
                            <h4>Prepare Time</h4>
                            <span>25 min</span>
                        </div>
                        <div className='sushiBistro__btm-open'>
                            <h4>Open Time</h4>
                            <span>11:00 AM</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='page1Section'>
                <div className='page1Section__nav'>
                    <span>Info</span>
                    <span>Menu</span>
                    <span>Review</span>
                </div>
                <div className='page1Section__featured'>
                    <h2>FEATURED</h2>
                    <div className='page1Section__featured-list'>
                        <div className='whiteBox'></div>
                    </div>
                    <div className='page1Section__featured-list'>
                        <div className='whiteBox'></div>
                    </div>
                </div>
            </div>

            <div className='footer'></div>


        </section>



        </>
    )

}


export default MobileApp;