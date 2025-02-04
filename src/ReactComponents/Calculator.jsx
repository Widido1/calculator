import React, {useState} from "react";
import Operator_b from "./Operator_b";
import Operator_bAC from "./Operator_bAC";
import Screen from "./Screen";
import Result_b from "./Result_b";
import Decimal_b from "./Decimal_b";
import NumericB from "./Numeric_b"; 
import NumericB0 from "./Numeric_b0";


//este componente ejecuta la mayoría de las operaciones de la calculadora

export default function CalculatorBox(){
    const [N1, setN1] = useState(0); //numero 1
    const [N2, setN2] = useState(0); //numero 2
    const [Op, setOp] = useState("default_O"); //operación
    const [R, setR] = useState(0); //resultado
    const [targetN, setTargetN] = useState("N1"); // determina si el numero es el primer numero que se ingresa o el segundo, por defecto es el primero
    const [isDecimal, setIsDecimal] = useState(false); // booleano que responde si es o no decimal
    const [decimal, setDecimal] = useState([0, 0.1]); //el primer valor es el decimal que se va a agregar al numero targeteado, el segundo sirve para saber la hubicacion de cada nuevo numero dentro del decimal
    const [screenN, setScreenN] = useState(""); //contiene un string, que es lo que se muestra en la pantallita de la calculadora
    
    //=================00====================

    const valueScreen = (value) => {
        //si el numero, es el primero que se ingresa en el calculo, la pantalla muestra solo ese numero
        if(targetN == "N1"){
            setScreenN(value);
        }
        //si el numero no es el primero, muestra en la pantalla lo que ya había sumado al valor en cuestion
        setScreenN(screenN + value);
    }

    const clearAc = () => {
        //limpia la pantalla de la calculadora y resetea todos los valores del estado a su valor inicial
        setR(0); setN1(0); setN2(0); setOp("default_0"); setTargetN("N1"); setScreenN("");
        console.clear();
        console.log("Cleared Calculator!");
    }

    const decimaler = () => {
        //activa el decimal, los numeros que se ingresen despues son todos parte del decimal hasta que se añada una operacion o se pida el resultado
        setIsDecimal(true);
    }



    const addNumber = (number) => {
        // Primero determina si es el primer numero que se ingresa o si ya habia un resultado previo, para agregar el numero
        if(targetN == "N1"){
            //Si es el primer numero que se agrega a la operación, 
            if(isDecimal){
                let des = (decimal[0]) + (number*decimal[1]);
                let ndes = decimal[1] * 0.1; 
                setDecimal([des, ndes]);
            }else{
                let resulter = N1*10 + number; 
                //esto es así, para poder escribir numeros mayores a 9 correctamente, esta es la manera en la que los seres humanos escribimos los numeros en la calculadora
                //si N1 era 0, simplemente se agrega el numero, sino el numero se vuelve la unidad y el numero previo la decena.
                setN1(resulter); //se agrega un nuevo numero al primero de la operación.
                setR(0); //el resultado es 0, porque aún el numero no fue parte de ninguna operación.
            }

        }else if(R != 0){
            //Si no es el primer numero, pero ya hay un resultado.
            setN1(R); // el primer numero se vuelve el resultado.
            setR(0); // el resultado se vuelve 0.
            if(isDecimal){
                let des = (decimal[0]) + (number*decimal[1]); //suma el decimal que ya existia + el nuevo numero decimal.
                let ndes = decimal[1] * 0.1; //la primera vez el nuevo decirmal va a estar en 0.1, el proximo en 0.01, etc.
                setDecimal([des, ndes]); //guarda el decimal en des y el multiplicador para el siguiente en ndes.
            }else{
                let resulter = N2*10 + number;
                setN2(resulter); //se agrega un nuevo numero al segundo numero de la operación.
            }        
        }else{
            //si no es el primer numero ni hay resultado
            setR(0);
            if(isDecimal){
                let des = (decimal[0]) + (number*decimal[1]);
                let ndes = decimal[1] * 0.1; 
                setDecimal([des, ndes]);
            }else{
                let resulter = N2*10 + number;
                setN2(resulter);
            }

        }
        
    };

    const addOperator = (button_O) =>{
        //agrega el operador presionado, si es la primera operacion, solamente se agrega el operador, sino se calcula el resultado y luego se agrega
        setIsDecimal(false);
        if(targetN == "N1"){
            setN1(N1 + decimal[0]); setDecimal([0, 0.1]); //se le agrega el numero decimal a N1 y se resetea el multiplicador a 0.1
            switch(button_O){
                //se asigna el operador correspondiente y se pasa a targetear el numero 2
                case "+":
                    setOp("+"); setTargetN("N2");
                    break;
                case "-":
                    setOp("-"); setTargetN("N2");
                    break;
                case "*":
                    setOp("*"); setTargetN("N2");
                    break;
                case "/":
                    setOp("/"); setTargetN("N2");
                    break;
                default:
                    break
            }
        }else{
            //se calcula el resultado de todo lo anterior con addResult(), se asigna el operador correcto y resetea los demas valores
            addResult();
            setN1(0); setN2(0); setOp(button_O); setDecimal([0, 0.1]);
        }
    }

    const addResult = () =>{
        //añande el decimal al segundo numero y despues calcula la operacion asignada con N1 y N2, ese resultado lo asigna a res
        if(Op == "+"){
            let res = N1 + (N2+decimal[0]);
            setR(res);
        }else if(Op == "-"){
            let res = N1 - (N2+decimal[0]);
            setR(res);
        }else if(Op == "*"){
            let res = N1*(N2+decimal[0]);
            setR(res);
        }else if(Op == "/"){
            let res = N1/(N2+decimal[0]);
            setR(res);

        }
    }

    const result = () =>{
        //este es como el anterior pero se activa al precionar el boton = , calcula y muestra el resultado, pero resetea todo en vez de guardar el operador. 
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
        setOp("default_O"); setTargetN("N1"); setIsDecimal(false); setDecimal([0, 0.1]); setScreenN("");
    }

    return(
        <div id="Calculator">
            <div>
                <Screen valueScreen={valueScreen} R={R} screenN={screenN}/>
            </div>

            <div id="CalculatorAC">
                <Operator_bAC clearAc={clearAc}/>
                <Result_b result={result} />
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