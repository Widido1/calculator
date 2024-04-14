import React, {useState, useEffect} from "react";

export default function Operator_bAC(props){

    return(
        <div>
            <button className="bAC" onClick ={() => props.clearAc()}>AC</button>
        </div>
    )
}