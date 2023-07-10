
function Button(props){
const btnStyle = {
    "bg" : `${props.bgcolor}`,
    'px' : `${props.px}`,
    'py' :`${props.py}`,
    'text-color' : `${props.txtcolor}`
}
   

    return(
        <div>
            <button className={btnStyle}>{props.txt}</button>
        </div>
    )
}

export default Button