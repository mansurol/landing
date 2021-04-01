import React, { useState } from 'react';
import './SectionfourData.css'
import FakedataFour from '../fakeData/roadmap';
import SectionFour  from '../Sectionfour/SectionFour'
import Rightarrow from '../img/Rightarrow.png'
import Leftarrow from '../img/Leftarrow.png'
const SectionfourData = () => {
    const SectionFourData = FakedataFour;
    const [Secfour,setSecfour] = useState(SectionFourData)
    return (
        <div  className="container SectionfourDataFullDiv ">
            <div >
             <small className="timelineHeaderStyle d-flex justify-content-center ">Timeline</small>
             <h2 className="timelineHeaderTwo"><b>Our Roadmap</b></h2>
         </div>
            <div className="d-flex ">
            {
                Secfour.map(res => <SectionFour Sectionfourdata={res}/>)
            }
         
            </div>
            <div className="d-flex justify-content-center p-5">
                <div className="p-1">
                <div className="Ellipes">
                <img src={Leftarrow} alt="Leftarrow"/>
                </div>
                </div>
           
              <div className="p-1">
              <div className="Ellipes">
                <img src={Rightarrow} alt="Rightarrow"/>
                </div>
              </div>
            
            </div>
            
           
        </div>
    );
};

export default SectionfourData;