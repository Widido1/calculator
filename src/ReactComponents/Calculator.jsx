import React, {useState, useEffect} from "react";
//import NumberBox from "./Number_box";
import NumericB from "./numeric_b";
import NumericB0 from "./numeric_b0";
import Operator_b from "./Operator_b";
import Operator_bAC from "./Operator_bAC";
import Screen from "./Screen";

export default function CalculatorBox(){
    const [N1, setN1] = useState(0);
    const [Op, setOp] = useState("number1");
    const [N2, setN2] = useState(0);

    const addNumber = (number) => {
        if(Op == "number1"){
            let resulter = N1*10 + number;
            setN1(resulter);
            console.log("Resulter: " + resulter + " N1: " + N1);
        }else{
            let resulter = N2*10 + number;
            setN2(resulter);
            console.log("Resulter: " + resulter + " N1: " + N1);
        }
        
    };
    const addResult = () =>{

    }
    const addOperator = (button_O) =>{
        if(Op == "number1" && button_O != "="){
            switch(button_O){
                case "+":
                    setOp("+"); console.log("Operator: +")
                    break;
                case "-":
                    setOp("-"); console.log("Operator: -")
                    break;
                case "*":
                    setOp("*"); console.log("Operator: *")
                    break;
                case "/":
                    setOp("/"); console.log("Operator: /")
                    break;
            }
        }else{
            addResult();
        }
    }
    return(
        <div id="Calculator">
            <div>
                <Screen />
            </div>

            <div id="CalculatorAC">
                <Operator_bAC/>
                <Operator_b value={"="}/>
            </div>
           <div id="Calculator1-9">
                <NumericB addNumber={addNumber} value={7}/>
                <NumericB addNumber={addNumber} value={8}/>
                <NumericB addNumber={addNumber} value={9}/>
                <Operator_b addOperator={addOperator} value={"+"}/>
                <NumericB addNumber={addNumber} value={4}/>
                <NumericB addNumber={addNumber} value={5}/>
                <NumericB addNumber={addNumber} value={6}/>
                <Operator_b addOperator={addOperator}value={"-"}/>
                <NumericB addNumber={addNumber} value={1}/>
                <NumericB addNumber={addNumber} value={2}/>
                <NumericB addNumber={addNumber} value={3}/>
                <Operator_b addOperator={addOperator} value={"*"}/>
            </div>
            <div id="Calculator0">
                <NumericB0 addNumber={addNumber}/>
                <Operator_b value={"."}/>
                <Operator_b addOperator={addOperator} value={"/"}/>
            </div> 



        </div>
    );
}