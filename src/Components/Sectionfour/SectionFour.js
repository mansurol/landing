import React from 'react';
import './Sectionfour.css'
import ArrowDown from  '../img/arrow-down.png'

const SectionFour = (props) => {
  const {Dates,Company,Platform} = props.Sectionfourdata;
  return (
    <section>
       <div className="container">
         
         
         <div className="mt-5">
           
           <small className="AllDateStyle">{Dates}</small>
            <h2 className="NameOfPlatfromStyle ">{Company}</h2>
           
           <div className="p-3 arrowDownBox">
           <div className="ArrowDownStyle">
                <img src={ArrowDown} alt="ArrowDown"/>
            </div>
           </div>
            
            
            <p className="DetailsOfPlatfromStyle">{Platform}</p>
         </div>

     
         
        
    </div>
    </section>
    
  );
};

export default SectionFour;