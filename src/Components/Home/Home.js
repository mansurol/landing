import React from 'react';
import SectionTwo from '../SectionTwo/SectionTwo';
import SectionThree from '../SectionThree/SectionThree';
import SectionFourData from '../SectionfourData/SectionfourData';
import SectionFiveData from '../SectionFiveeData/SectionFiveData';
import SectionSixData from '../SectionSixData/SectionSixData';
import SectionSeven from '../SectionSeven/SectionSeven'
import Footer from '../Footer/Footer'


const Home = () => {
    return (
        <div>
             <SectionTwo/>
             <SectionThree/>
             <SectionFourData/>
             <SectionFiveData/>
             <SectionSixData/>
             <SectionSeven/>
             <Footer/>

        </div>
    );
};

export default Home;