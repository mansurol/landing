import React from 'react';
import './SectionThree.css'
import Landing from '../img/landing.png';
import Wallet from '../img/wallet (2).png'
import Greencircle from '../img/greenCircle.png'
const SectionThree = () => {
    return (
        <div className="SectionThreeStyle">
             <div className="container">
                 <div>
                 <h2 className="FeaturesContent">Features</h2>
                 <h2 className="featuresProductStyle"> <b>Key features of the product</b> </h2>

                 </div>
                 <div className="d-flex">
                 <div className="col-6 ">
                      <div className="LandingImgSTYLE">
                          <img src={Landing} alt=""/>
                    </div>                    
                 </div>
                 <div className="col-6">
                     <div className="d-flex">
                      <h2 className="numberContentStyle">01</h2>
                      <h2 className="LandingContentSTYLE"><b>Lending</b></h2>

                     </div>
                     <p className=" LandingContentDescription">If several languages coalesce, the grammar of the resulting
                       language is more simple and regular than of the individual will be
                        more simple and regular than the existing.</p>
                        <div className="d-flex">
                            <div className="GreencircleStyle">
                            <img src={Greencircle} alt=""/>
                            </div>
                         
                        <p className="LandingContentDescriptionTwo">Donec pede justo vel aliquet</p>
                        </div>
                        <div className="d-flex">
                            <div className="GreencircleStyle">
                            <img src={Greencircle} alt=""/>
                            </div>
                         
                            <p className="LandingContentDescriptionThree">Aenean et nisl sagittis</p>                        </div>
                        
                        
                      
                 </div>
                 </div>
               
                 <div className="d-flex">
                
                 <div className="col-6">
                     <div className="d-flex">
                      <h2 className="WalletnumberContentStyle">02</h2>
                      <h2 className="WalletContentSTYLE ml-3"> <b>Wallet</b></h2>

                     </div>
                     <p className="WalletContentDescription">If several languages coalesce, the grammar of the resulting
                       language is more simple and regular than of the individual will be
                        more simple and regular than the existing.</p>
                        <div className="d-flex">
                            <div>
                            <img src={Greencircle} alt=""/>
                            </div>
                         
                        <p className="LandingContentDescriptionTwo">Donec pede justo vel aliquet</p>
                        </div>
                        <div className="d-flex">
                            <div>
                            <img src={Greencircle} alt=""/>
                            </div>
                         
                            <p className="LandingContentDescriptionThree">Aenean et nisl sagittis</p>                        </div>
                        
                        
                      
                 </div>
                 <div className="col-6 ">
                      <div className="LandingImgSTYLE">
                          <img src={Wallet} alt=""/>
                    </div>                    
                 </div>
                 </div>
            </div>           
        </div>
    );
};

export default SectionThree;