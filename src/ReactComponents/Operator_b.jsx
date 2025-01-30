import React, {useState, useEffect} from "react";

export default function Operator_b(props){
    //asigna el operador que se encuentra en el props.value al operator y se lo agrega a la pantalla
    const [operator, setOperator] = useState("n/a");

    useEffect(()=>{
        setOperator(props.value);
    }, []);

    return(
        <div>
            <button className="b2" onClick={() => {props.addOperator(operator); props.valueScreen(operator);}}>{operator}</button>
        </div>
    )
}