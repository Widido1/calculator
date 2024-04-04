import React, {useState, useEffect} from "react";
import Result_b from "./Result_b";

export default function Number_box(){
    const [finalNumber, setFinalNumber] = useState(0);
    const [operation, setOperation] = useState(0);

    


    return(
        <div>
            <textbox>{finalNumber}</textbox>
        </div>
    );
};