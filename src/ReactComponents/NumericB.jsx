import React, {useState, useEffect} from "react";

export default function NumericB(props){
    //asigna el boton segun el props.value que se le pase, y agrega ese valor a la pantalla  
    const [bNumber, setbNumber] = useState(props.value);
    useEffect(()=>{
        setbNumber(props.value);
    }, [props.value]);
    
    
    return (    
        <button className="b1" onClick={() => {props.addNumber(bNumber); props.valueScreen(bNumber);}}>{bNumber}</button>
    );
        

};


