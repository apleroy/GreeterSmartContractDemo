import React from "react";
require('dotenv').config()  


const Test = () => {
    return (
        <div id="container">

            <p id="status">{process.env.REACT_APP_API_END_POINT}</p>
    
            
        </div>
    );
    
};
    
export default Test;