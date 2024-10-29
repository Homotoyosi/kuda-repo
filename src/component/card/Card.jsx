const Card = (props)=>{
    return(
        <div>
            <div>
                <h1>{props.text}</h1>
                <p>{props.word}</p>
            </div>
        </div>
    )
}
export default Card