import React, {useState, useEffect} from "react";

export default function Decimal_b(props){

    return(
        <div>
            <button className="b2" onClick={() => {props.decimaler(true); props.valueScreen(props.value);} }>.</button>
        </div>
    )
}