import React from 'react';
import './SectionFive.css'
import MarkHurley from '../img/Mark Hurley.png'
import Fb from '../img/fb.png'
import Linkin from '../img/linkIn (1).png'
import Google from '../img/google.png'
const SectionFive = (props) => {
    const {Name,Jobtitle,Manphoto} = props.SectionFDataPass;
    return (
        <div>
            <div className="SectionFiveBox">
                <div className="SectionFiveBoxImgStyle">
                    <img src={Manphoto} alt="Mark Hurley"/>
                </div>
                <div className="SectionFiveBoxContentStyle">
                <h5 className="SectionFiveBoxManName"><b>{Name}</b></h5>
                 <small className="JobTitle">{Jobtitle}</small>
                </div>
                
                 <div className="SectionFiveBoxHR">
                 <hr/>
                 </div>
                
                  <div className="d-flex justify-content-around">
                  <img src={Fb} alt=""/>
                 <img src={Linkin} alt=""/>
                 <img src={Google} alt=""/>
                  </div>

            </div>
            
        </div>
    );
};

export default SectionFive;