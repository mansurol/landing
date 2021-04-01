import React from 'react';
import './Currancy.css'
import Shape from '../img/Shape.png';
import Arrow from '../img/arrow-up.png'
const Currancy = () => {
    return (
        <div className="container">
             <div className="currancyBox  d-flex">
                  <div className="col-3">
                                 <div className="currancyBoxLogoRound">
                                   <div className="currancyBoxLogoRoundTwo">
                                      <img src={Shape} alt="Shape"/>
                                 </div>
                        </div>
                  </div>
                  <div>
                    <h2 className="currancyBoxContent">
                      Bitcoin
                      </h2>
                      <h2 className="currancyBoxContentNumber">
                      $ 9134.39
                      </h2>
                      <div className="d-flex">
                      <h2 className="currancyBoxContentNumberPersentenge">
                      + 0.0012 ( 0.2 % )
                      </h2>
                      <div className="ArrowStyle">
                      <img src={Arrow} alt="Arrow"/>

                      </div>
                      </div>
                      
                  </div>
             </div>

             
            
          </div>
    );
};

export default Currancy;