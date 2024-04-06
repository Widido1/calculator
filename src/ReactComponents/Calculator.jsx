import React, {useState, useEffect} from "react";
//import NumberBox from "./Number_box";
import NumericB from "./numeric_b";
import Operator_b from "./Operator_b";

export default function CalculatorBox(){
    return(
        <div id="Calculator">
            <NumericB />
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
    );
}