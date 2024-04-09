import React, {useState, useEffect} from "react";

export default function NumericB(){  
    const [bNumber, setbNumber] = useState(0);
    const createbNumber = () => setbNumber(number);
    
    return (    
        <button class="b1" onClick={addNumber(bNumber)}>B1</button>
    );
        

};


