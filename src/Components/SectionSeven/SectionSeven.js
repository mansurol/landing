import React from 'react';
import './SectionSeven.css';
import SevenCirle from '../img/SevenCircle.png';
import ShapeNine from '../img/Shape (13).png';
import ShapeFifteen from '../img/Shape (15).png';
import ShapeTtenTwo from '../img/Shape (14).png';
import ShapeSixteen from '../img/Shape (16).png'

const SectionSeven = () => {
    return (
        <div className="SectionSevenFullDiv">
   
        <div className="container pt-5">
            <div className="mb-5">
                 <h6 className="SectionSevenHeader">FAQs</h6>
                 <p className="SectionSevenTitle"> <b>Frequently asked questions</b></p>
            </div>
            <div className="d-flex">
                <div className="col-2">
                     <div className="RightSideBox">
                         <div className="RightSideBoxContent">
                         <img src={SevenCirle} alt=""/>
                               <p>General Questions</p>
                         </div>
                       <div className="RightBoxSecTwo">
                       <div className="RightBoxSecTwoimg">
                        <img src={ShapeNine} alt=""/>
                         </div>
                         <div className="Tokensale">
                         <h6 ><b>Token sale</b></h6>
                         </div>
                       </div>

                       <div>
                       <div className="RightBoxSecTwo">
                       <div className="RightBoxSecTwoimg ">
                        <h2 className="d-flex"><img src={ShapeTtenTwo} alt=""/></h2>
                         </div>
                         <div className="Tokensale">
                         <h6 ><b>Roadmap</b></h6>
                         </div>
                       </div>
                       </div>
                              
                     </div>
                </div>
                <div className="col-9">
                       <div className="LeftBoxSecSeven ">
                           <div className="LeftBoxSecSevenContentStyle">
                               <p>General Questions</p>
                           </div>
                           
                        
                               <div className="BackgrounShapeOne d-flex justify-content-between">
                                      <p className="ShapeOneContent"> What is Lorem Ipsum ?</p>
                                      <div className="ShapeOneImg">
                                             <img src={ShapeFifteen} alt=""/>
                                            </div>
                               </div>

                               <div className="LeftBoxDetails">
                               <p>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this,
                                     it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                               </div>
                           
                               <div className="BackgrounShapeOne d-flex justify-content-between">
                                      <p className="ShapeOneContent">Why do we use it ?</p>
                                      <div className="ShapeOneImg">
                                             <img src={ShapeSixteen} alt=""/>
                                            </div>
                               </div>

                               <div className="BackgrounShapeThree">
                               <div className="BackgrounShapeOne d-flex justify-content-between ">
                                      <p className="ShapeOneContent">Where does it come from ?</p>
                                      <div className="ShapeOneImg">
                                             <img src={ShapeSixteen} alt=""/>
                                            </div>
                               </div>
                               </div>

                               <div className="">
                               <div className="BackgrounShapeOne d-flex justify-content-between  BackgrounShapeFour">
                                      <p className="ShapeOneContent">Where can I get some ?</p>
                                      <div className="ShapeOneImg">
                                             <img src={ShapeSixteen} alt=""/>
                                            </div>
                               </div>
                               </div>

                            
                               

                    
                          
                       </div>
                       
                </div>
            </div>
            
        </div>
                 
        </div>
    );
};

export default SectionSeven;