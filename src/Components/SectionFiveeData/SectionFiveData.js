import React, { useState } from 'react';
import SectionFive from '../SectionFive/SectionFive';
import './SctionFiveData.css'
import SecData from '../fakeData/SectionFiveFData'
const SectionFiveData = () => {
    const [data,setData] = useState(SecData);
    return (
        <section className="SectionFiveDataFullDiv">
        <div className="container" >
      
             <div>
                <h2 className="SectionFiveHeaderStyle ">Team</h2>
                <h3 className="SectionFiveHeaderTwoStyle mt-5"><b>Meet our team</b></h3>
            </div>
            <div className="d-flex mt-5 container">
                {
                    data.map(resultFive => <SectionFive SectionFDataPass={resultFive}/>)
                }
            </div>
           
        </div>
        </section>
    );
};

export default SectionFiveData;