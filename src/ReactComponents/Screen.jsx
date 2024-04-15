import React, {useState, useEffect} from "react";

export default function Screen(props){

    return(
        <div id="CalculatorScreen">
            <div id="Screen1" >{props.screenN}</div>
            <div id="Screen2" >{props.R}</div>
        </div>

    );
}