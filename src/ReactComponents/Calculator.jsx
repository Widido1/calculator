import React, {useState, useEffect} from "react";
import NumberBox from "./Number_box";

export default function CalculatorBox(){

    return(
        <div id="Calculator">
            <NumberBox id="Number_box"/>
        </div>
    );
}