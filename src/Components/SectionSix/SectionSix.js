import React from 'react';
import './SectionSix.css'
import Cal from '../img/Cal.png'
const SectionSix = (props) => {
    const {imgL,date,contentDetails,contentDetailsTwo} =props.ret
    return (
        <div>
            <div className="p-2 ">
            <div className="secSiximg">
                <img src={imgL} alt=""/>
            </div>
            <div>
                <div className="secSixContentDate" > 
                     
                     <p><img src={Cal} alt=""/>{date}</p>
                </div>
                <div  className="secSixContentDetails">
                    <h6><b>{contentDetails}</b></h6>
                </div>
                <div className="secSixContentFullDetails">
                    <p>{contentDetailsTwo}</p>
                </div>
                 <div className="secSixReadMore">
                     <p>Read more</p>
                 </div>

            </div>
        </div>
        </div>
    );
};

export default SectionSix;