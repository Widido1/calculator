import React, {useState, useEffect} from "react";

export default function NumericB(props){  
    const [bNumber, setbNumber] = useState(0);
    useEffect(()=>{
        setbNumber(props.value);
    }, []);
    
    
    return (    
        <button className="b1" onClick={() => {props.addNumber(bNumber); props.valueScreen(bNumber);}}>{bNumber}</button>
    );
        

};


