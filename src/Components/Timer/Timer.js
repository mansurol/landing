import React from 'react';
import './Timer.css'
const Timer = (props) => {
    const {name , number} = props.mansurol
    return (
        <div>
            <div className="boxTwo">
                <h2 className="styleNumber">{number}</h2>
                <div className="NameStyleDiv">
                <h2 className="NameStyle">{name}</h2>
                </div>
                
            </div>
        </div>
    );
};

export default Timer;