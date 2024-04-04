import React, {useState, useEffect} from "react";

export default function Result_b(){
    const [status, setStatus] = useState(false);
    const resulter = () => setStatus(!status);

    return(
        <div>
            <button id="button=" onClick={resulter}>=</button>
        </div>
    );
}