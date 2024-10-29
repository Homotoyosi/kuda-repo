import "./Access.css"
const Access =(props)=>{
    return(
        <div>
            <div className={`accesswrap ${props.color}`}>
                <img src={props.image} alt="" />
                <div className="accessbox">
                    <h1>{props.text}</h1>
                    <p>{props.word}</p>
                    <a href={props.link} target="_blank"> <h4>{props.input}</h4></a>
                 </div>
            </div>
        </div>
    )
}
export default Access