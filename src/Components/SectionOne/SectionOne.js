import React from 'react';
import Data from '../Data/Data';
import './SectionOne.css'

import Currancy from '../Currancy/Currancy';
import Countdown from '../Countdown/Countdown';

const SectionOne = () => {
    return (
      <div className = "container">
        <div className="container ContentColor d-flex justify-content-between">
         <div className="col-6 fullContent">
         <h4> Stoke -Ico Landing for a cryptocurrency business</h4> 
           <p>It will be as simple as occidental in fact to an English person, it
             will seem like simplified as a skeptical Cambridge</p>
             <button className="stylebuttonOne" ><span className="btnContenOne">Get Whitepaper</span></button>
             <button className="stylebuttonTwo"><span className="btnContenTwo">How it work</span></button>
       
         </div>

            <div>
              <Countdown/>
            </div>
          
        
      </div>
     
              <div className=" d-flex">
                 <Currancy/>
                 <Currancy/>
                 <Currancy/>

               </div>

       
       
      </div>
      
    );
};

export default SectionOne;