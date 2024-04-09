import React, {useState, useEffect} from "react";

export default function NumericB(){  
    const [bNumber, setbNumber] = useState(0);
    const createbNumber = (number) => setbNumber(number);
    
    return (    
        <button class="b1" onClick={addNumber(bNumber)}>B1</button>
    );
        

};


