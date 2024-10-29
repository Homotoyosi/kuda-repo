import "./Hello.css"
const Hello =(props)=>{
    return(
        <div>
            <div className={`savecontainer ${props.color}`}>
                <div className="savecontent">
                    <h1>{props.text}</h1>
                    <p>{props.word}</p>
                    <a href={props.link} target="_blank"> <h4>{props.input}</h4></a>
                 </div>
                    <img src={props.image} alt="" />
            </div>
        </div>
    )
}
export default Hello