
export default function OperatorBAC(props){
    //ejecuta la funcion clearAc() que se le pasa como propiedad cuando se aprieta
    return(
        <div>
            <button className="bAC" onClick ={() => props.clearAc()}>AC</button>
        </div>
    )
}