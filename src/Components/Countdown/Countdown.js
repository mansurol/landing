import React from 'react';
import Data from '../Data/Data';
import './Countdown.css'
const Countdown = () => {
    return (
        <div>
              <div className="box">
           <div className="title">
              <h5 className="titleColor">ICO Countdown time</h5>
              
           </div>
           <h6 className="timeLeftColor">Time left to Ico : </h6>
             <Data/>
            <div className="tokenBtn">
                <h5>Get Token</h5>
              </div>     
              <div className="ETHstyle">
                  <h5>1 ETH = 2235 SKT</h5>
                </div>  
                <div className="d-flex fullParsentance">
                   <span className="lowPersentance">15%</span>
                   <span className="midPersentance">30%</span>
                   <span className="HighPersentance">5234.43</span>

                </div>
                <div className="proggressBarStyle d-flex">
                      <span className="proggressBgColor"></span>

                </div>

            </div>
        </div>
    );
};

export default Countdown;