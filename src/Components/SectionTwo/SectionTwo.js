import React from 'react';
import './SectionTwo.css';
import Shapebitcoin from '../img/ShapeBitcoin.png'
import ShapeWallet from '../img/Wallet.png'
import Logos from '../Logosdata/LogosData'
const SectionTwo = () => {
    return (
        <div className="container">
            <h2 className="AboutUs">About us</h2>
            <h1 className=" WhatisICOToken"> What is ICO Token?</h1>
            <div className="d-flex">
                <div className="col-6 mt-2">
                     <h2 className="BestCryptocurren"><b>Best ICO for your cryptocurren</b></h2>
                     <p className="cryptocurrenDetails"> If several languages coalesce, the grammar of the resulting that of
                       the individual new common language will be more simple and
                       regular than the existing.</p>
                       <p className="wouldNecessary">It would be necessary to have</p>
                       <div className="d-flex">
                       <div className="ReadMeBtn">
                             <p className="ReadMeContent">Read More</p>
                       </div>
                       <div className="WorksBtn">
                             <p className="WorksBtnContent">How It Works</p>
                       </div>
                       </div>
                       <div className="d-flex InvestamountMain">
                           <div className="InvestAmountFull">
                               <h2 className="InvestAmount"><b>$ 6.2 M</b></h2>
                               <p className="InvestAmountContent">Invest amount</p>
                           </div>
                           <div>
                               <h2 className="userId"><b>16245</b></h2>
                               <p className="UserName">users</p>
                           </div>

                       </div>
                </div>
                <div className="col-6 d-flex mt-5">
                    <div>
                    <div className="LandingBoxStyle">
                          <div>
                              <div className="ShapebitcoinImgStyle">
                                  <img src={Shapebitcoin} alt=""/>
                              </div>
                              <h2 className="LandingContentStyle"><b>Landing</b></h2>
                              <p className="iustoblanditiisStyle">At vero eos et accusamus et iustoblanditiis</p>
                          </div>
                    </div>
                    <div className="LearnMoreBox">
                        <h2 className="LearnMoreBoxContent"><b>Learn More</b></h2>
                    </div>
                    </div>
                    
                    <div className="WalletBox">
                    <div className="WalletBoxStyle">
                          <div>
                              <div className="WalletImgStyle">
                                  <img src={ShapeWallet} alt=""/>
                              </div>
                              <h2 className="WalletContentStyle"><b>Wallet</b></h2>
                              <p className="iustoblanditiisStyleWallet">Quis autem vel eum iurereprehenderit</p>
                          </div>
                    </div>
                    <div className="LearnMoreBox">
                        <h2 className="LearnMoreBoxContent"><b>Learn More</b></h2>
                    </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div>
               <Logos />
            </div>
        </div>
    );
};

export default SectionTwo;