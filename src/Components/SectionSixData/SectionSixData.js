import React, { useState } from 'react';
import './SectionSixData.css';
import SixFData from '../fakeData/SectionSixFData'
import SectionSix from '../SectionSix/SectionSix';
const SectionSixData = () => {
  const  [sixdata,setSixData] = useState(SixFData) 
    return (
        <section>
            <div className="container">
             <div>
                 <div className="SectionSixHeader mt-5">
                     <h6>Blog</h6>
                 </div>
                   <div className="SectionSixTitle">
                       <h5>Latest News</h5>
                   </div>
             </div>
             <div className="d-flex">
                   {
                       sixdata.map(ret => <SectionSix ret={ret}/>)
                   }
             </div>
        </div>
        </section>
    );
};

export default SectionSixData;