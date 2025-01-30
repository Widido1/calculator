import React from "react";

export default function NumericB0(props){  
    
    return (    
        <button className="b0" onClick={()=>{props.addNumber(0); props.valueScreen(props.value);}}>0</button>
    );
        

};