
export default function Result_b(props){
    //Ejecuta result() que se le pasa como propiedad cuando se aprieta
    return(
        <div>
            <button className="b2" onClick={()=> props.result()}>=</button>
        </div>
    );
}