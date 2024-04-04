import React, {useState, useEffect} from "react";
import Number_box from "./Number_box";
import Numeric_b from "./numeric_b";
import Clear_b from "./clear_b";
import Result_b from "./Result_b";

export default function Calculator(){

    return(
        <div id="Calculator">
            <section>
                <Number_box/>
            </section>
            <section>
                <Numeric_b value="7" />
                <Numeric_b value="8" />
                <Numeric_b value="9" />
            </section>
            <section>
                <Numeric_b value="4" />
                <Numeric_b value="5" />
                <Numeric_b value="6" />
            </section>
            <section>
                <Numeric_b value="1" />
                <Numeric_b value="2" />
                <Numeric_b value="3" />
            </section>
            <section>
                <Numeric_b value="0" />
            </section>
        </div>
    );
}