import React, {useState, useEffect} from "react";
//import NumberBox from "./Number_box";
import NumericB from "./numeric_b";
import NumericB0 from "./numeric_b0";
import Operator_b from "./Operator_b";
import Operator_bAC from "./Operator_bAC";
import Screen from "./Screen";
import Result_b from "./Result_b";
import Decimal_b from "./Decimal_b";

export default function CalculatorBox(){
    const [N1, setN1] = useState(0);
    const [Op, setOp] = useState("default_O");
    const [N2, setN2] = useState(0);
    const [R, setR] = useState(0);
    const [targetN, setTargetN] = useState("N1");
    const [isDecimal, setIsDecimal] = useState(false);
    const [decimal, setDecimal] = useState([0, 0.1]);
    const [screenN, setScreenN] = useState("");
    
    const valueScreen = (value) => {
        if(targetN == "N1"){
            setScreenN(value);
        }
        setScreenN(screenN + value);
    }

    const clearAc = () => {
        setR(0); setN1(0); setN2(0); setOp("default_0"); setTargetN("N1"); setScreenN("");
        console.clear();
        console.log("Cleared Calculator!");
    }
    const decimaler = () => {
        setIsDecimal(true);
    }
    const result = () =>{
        if(Op == "+"){
            setR(N1 + (N2+decimal[0]));
        }else if(Op == "-"){
            setR(N1 - (N2+decimal[0]));
        }else if(Op == "*"){
            setR(N1 * (N2+decimal[0]));
        }else if(Op == "/"){
            setR(N1 / (N2+decimal[0]));
        }else if(Op == "default_O"){
            setR(N1);
        }
        setN1(0); setN2(0);
        setOp("default_O"); setTargetN("N1"); setIsDecimal(false); setDecimal([0, 0.1])
        console.log("The result: "+ R + " the Operator: "+Op);
    }

    const addNumber = (number) => {
        if(targetN == "N1"){
            if(isDecimal){
                let des = (decimal[0]) + (number*decimal[1]);
                let ndes = decimal[1] * 0.1; 
                setDecimal([des, ndes]);
            }else{
                let resulter = N1*10 + number;
                setN1(resulter);
                console.log("Resulter: " + resulter + " N1: " + N1 +" Operator: " + Op);
                setR(0);
            }

        }else if(R != 0){
            setN1(R);
            setR(0);
            if(isDecimal){
                let des = (decimal[0]) + (number*decimal[1]);
                let ndes = decimal[1] * 0.1; 
                setDecimal([des, ndes]);
            }else{
                let resulter = N2*10 + number;
                setN2(resulter);
                console.log("Resulter 2: " + resulter + " N2: " + N2 +" Operator: " + Op);
            }        
        }else{
            setR(0);
            if(isDecimal){
                let des = (decimal[0]) + (number*decimal[1]);
                let ndes = decimal[1] * 0.1; 
                setDecimal([des, ndes]);
            }else{
                let resulter = N2*10 + number;
                setN2(resulter);
                console.log("Resulter 2: " + resulter + " N2: " + N2 +" Operator: " + Op);
            }

        }
        
    };
    const addResult = () =>{
        if(Op == "+"){
            let res = N1 + (N2+decimal[0]);
            setR(res); console.log("Result: " + res);
        }else if(Op == "-"){
            let res = N1 - (N2+decimal[0]);
            setR(res); console.log("Result: " + res);
        }else if(Op == "*"){
            let res = N1*(N2+decimal[0]);
            setR(res); console.log("Result: " + res);
        }else if(Op == "/"){
            let res = N1/(N2+decimal[0]);
            setR(res); console.log("Result: " + res);

        }
    }
    const addOperator = (button_O) =>{
        setIsDecimal(false);
        if(targetN == "N1"){
            setN1(N1 + decimal[0]); setDecimal([0, 0.1]);
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
            setN1(0); setN2(0); setOp(button_O); setDecimal([0, 0.1]); console.log(" Operator: "+ Op);
        }
    }
    return(
        <div id="Calculator">
            <div>
                <Screen valueScreen={valueScreen} R={R} screenN={screenN}/>
            </div>

            <div id="CalculatorAC">
                <Operator_bAC clearAc={clearAc}/>
                <Result_b result={result}/>
            </div>
           <div id="Calculator1-9">
                <NumericB addNumber={addNumber} valueScreen={valueScreen} value={7}/>
                <NumericB addNumber={addNumber} valueScreen={valueScreen} value={8}/>
                <NumericB addNumber={addNumber} valueScreen={valueScreen} value={9}/>
                <Operator_b addOperator={addOperator} valueScreen={valueScreen} value={"+"}/>
                <NumericB addNumber={addNumber} valueScreen={valueScreen} value={4}/>
                <NumericB addNumber={addNumber} valueScreen={valueScreen} value={5}/>
                <NumericB addNumber={addNumber} valueScreen={valueScreen} value={6}/>
                <Operator_b addOperator={addOperator} valueScreen={valueScreen} value={"-"}/>
                <NumericB addNumber={addNumber} valueScreen={valueScreen} value={1}/>
                <NumericB addNumber={addNumber} valueScreen={valueScreen} value={2}/>
                <NumericB addNumber={addNumber} valueScreen={valueScreen} value={3}/>
                <Operator_b addOperator={addOperator} valueScreen={valueScreen} value={"*"}/>
            </div>
            <div id="Calculator0">
                <NumericB0 addNumber={addNumber} valueScreen={valueScreen} value={0}/>
                <Decimal_b decimaler={decimaler} valueScreen={valueScreen} value={"."}/>
                <Operator_b addOperator={addOperator} valueScreen={valueScreen} value={"/"}/>
            </div> 



        </div>
    );
}