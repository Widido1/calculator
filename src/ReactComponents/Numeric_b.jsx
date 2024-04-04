import React, {useState, useEffect} from "react";

export default function NumericB(n){
    const [number, setnumber] = useState(n);

    return (
        <div>    
            <button class="b1">{n}</button>
        </div>
    );
        

};


