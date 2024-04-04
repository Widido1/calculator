import React, {useState, useEffect} from "react";
import NumberBox from "./Number_box";
import NumericB from "./Numeric_b";

export default function Calculator(){

    return(
        <div id="Calculator">
            <section>
                <NumberBox/>
            </section>
            <section>
                <NumericB value="7" />
                <NumericB value="8" />
                <NumericB value="9" />
            </section>
            <section>
                <NumericB value="4" />
                <NumericB value="5" />
                <NumericB value="6" />
            </section>
            <section>
                <NumericB value="1" />
                <NumericB value="2" />
                <NumericB value="3" />
            </section>
            <section>
                <NumericB value="0" />
            </section>
        </div>
    );
}