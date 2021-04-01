import React, { useState } from 'react';
import Companylogo from '../Companylogo/Companylogo';
import FackDataLogo from '../fakeData/Logos'
const LogosData = () => {
    const Fadata = FackDataLogo;
    const [Logos , setLogos] = useState(Fadata)
    return (
     <div className=" d-flex">
            {
            Logos.map(result => <Companylogo LogoData={result}/>)
        }
     </div>
    );
};

export default LogosData;