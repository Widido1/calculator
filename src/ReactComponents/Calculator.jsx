import React, {useState, useEffect} from "react";
//import NumberBox from "./Number_box";
import NumericB from "./numeric_b";
import NumericB0 from "./numeric_b0";
import Operator_b from "./Operator_b";
import Operator_bAC from "./Operator_bAC";
import Screen from "./Screen";

export default function CalculatorBox(){
    const [N1, setN1] = useState(0);
    const [Op, setOp] = useState(0);
    const [N2, setN2] = useState(0);

    const addNumber = (number) => {
        let resulter = N1*10 + number;
        setN1(resulter);
        console.log("Resulter: " + resulter + " N1: " + N1);
    };
    return(
        <div id="Calculator">
            <div>
                <Screen />
            </div>

            <div id="CalculatorAC">
                <Operator_bAC/>
                <Operator_b/>
            </div>
           <div id="Calculator1-9">
                <NumericB addNumber={addNumber} value={7}/>
                <NumericB />
                <NumericB />
                <Operator_b/>
                <NumericB />
                <NumericB />
                <NumericB />
                <Operator_b/>
                <NumericB />
                <NumericB />
                <NumericB />
                <Operator_b/>
            </div>
            <div id="Calculator0">
                <NumericB0/>
                <Operator_b/>
                <Operator_b/>
            </div> 



        </div>
    );
}