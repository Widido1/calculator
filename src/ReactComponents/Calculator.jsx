import React, {useState, useEffect} from "react";
//import NumberBox from "./Number_box";
import NumericB from "./numeric_b";
import NumericB0 from "./numeric_b0";
import Operator_b from "./Operator_b";
import Operator_bAC from "./Operator_bAC";
import Screen from "./Screen";

export default function CalculatorBox(){
    const [N1, setN1] = useState(0);
    const [Op, setOp] = useState("default_O");
    const [N2, setN2] = useState(0);
    const [R, setR] = useState(0);
    const [targetN, setTargetN] = useState("N1");

    const clearAc = () => {
        setR(0); setN1(0); setN2(0); setOp("default_0");
        console.clear();
        console.log("Cleared Calculator!");
    }

    const addNumber = (number) => {
        if(targetN == "N1"){
            let resulter = N1*10 + number;
            setN1(resulter);
            console.log("Resulter: " + resulter + " N1: " + N1 +" Operator: " + Op);
            setR(0);
        }else if(R != 0){
            setN1(R);
            setR(0);
            let resulter = N2*10 + number;
            setN2(resulter);
            console.log("Resulter 2: " + resulter + " N2: " + N2 +" Operator: " + Op);
        }else{
            setR(0);
            let resulter = N2*10 + number;
            setN2(resulter);
            console.log("Resulter 2: " + resulter + " N2: " + N2 +" Operator: " + Op);
        }
        
    };
    const addResult = () =>{
        if(Op == "+"){
            let res = N1 + N2;
            setR(res); console.log("Result: " + res);
        }else if(Op == "-"){
            let res = N1 - N2;
            setR(res); console.log("Result: " + res);
        }else if(Op == "*"){
            let res = N1*N2;
            setR(res); console.log("Result: " + res);
        }else if(Op == "/"){
            let res = N1/N2;
            setR(res); console.log("Result: " + res);

        }
    }
    const addOperator = (button_O) =>{
        if(targetN == "N1"){
            switch(button_O){
                case "+":
                    setOp("+"); setTargetN("N2"); console.log("switch: Operator: +"); 
                    break;
                case "-":
                    setOp("-"); setTargetN("N2"); console.log("switch: Operator: -")
                    break;
                case "*":
                    setOp("*"); setTargetN("N2"); console.log("switch: Operator: *")
                    break;
                case "/":
                    setOp("/"); setTargetN("N2"); console.log("switch: Operator: /")
                    break;
                default:
                    break
            }
        }else{
            console.log("llegamos a addResult()");
            addResult();
            console.log(" Operator: "+ Op);
            setN1(0); setN2(0); setOp(button_O); console.log(" Operator: "+ Op);
        }
    }
    return(
        <div id="Calculator">
            <div>
                <Screen />
            </div>

            <div id="CalculatorAC">
                <Operator_bAC clearAc={clearAc}/>
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
                <Operator_b addOperator={addOperator} value={"-"}/>
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