
function Button(props){
    console.log(props);
    return(
        <button id={props.id} style={{cursor:"pointer"}}>{props.buttonText}</button>
    )
}

export default Button;