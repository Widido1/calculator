import React, {useState, useEffect} from "react";

export default function NumericB0(props){  
    
    return (    
        <button className="b0" onClick={()=>props.addNumber(0)}>0</button>
    );
        

};