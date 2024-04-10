import React, {useState, useEffect} from "react";

export default function NumericB(addNumber, value){  
    const [bNumber, setbNumber] = useState(0);
    useEffect((value)=>{
        setbNumber(value);
    }, []);
    
    
    return (    
        <button className="b1" onClick={() => addNumber(bNumber)}>B1</button>
    );
        

};


