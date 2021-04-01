import React from 'react';
import './Companylogo.css';
const Companylogo = (props) => {
    const {Photo} = props.LogoData;
    return (
        <div className = "logoStyle">
              <div className="logoBox">
              <img src={Photo} alt=""/>
              </div>
              
        </div>
    );
};

export default Companylogo;