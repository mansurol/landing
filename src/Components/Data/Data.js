import React, { useState } from 'react';
import fakeData from '../fakeData/fakeDataOne'
import Timer from '../Timer/Timer';
const Data = () => {  
      const Fdata = fakeData;
      const  [courses,setData] = useState(Fdata);
    return (
        <div className = "d-flex">
            {
                courses.map(result => <Timer mansurol={result}/>)
            }
        </div>
    );
};

export default Data;