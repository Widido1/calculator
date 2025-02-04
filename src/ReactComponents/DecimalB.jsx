export default function DecimalB(props){
    //pone en true el boolean de decimal y agrega el "." a la pantalla
    return(
        <div>
            <button className="b2" onClick={() => {props.decimaler(true); props.valueScreen(props.value);} }>.</button>
        </div>
    )
}