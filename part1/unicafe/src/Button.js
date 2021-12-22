const Button = (props) =>{
    console.log('button render')
    return(
        
        <button  onClick={props.clickHandler}>{props.value}</button>
        
    )
  
}

export default Button;   