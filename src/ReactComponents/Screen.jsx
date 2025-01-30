import React from "react";

export default function Screen(props){
    //usa dos pantallas, la que va llevando registro de la operacion y la del resultado

    return(
        <div id="CalculatorScreen">
            <div id="Screen1" >{props.screenN}</div>
            <div id="Screen2" >{props.R}</div>
        </div>

    );
}