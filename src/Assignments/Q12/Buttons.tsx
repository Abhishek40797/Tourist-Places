type ButtonProps = {
    content : string,
    color : string
}

const Button = ({content,color}:ButtonProps)=> {
    return (
        <>
            <button style={{backgroundColor:color,border:"none",padding:"10px",margin:"5px",color:"#FFF"}}>{content}</button>
        </>
    )
}
export default Button;