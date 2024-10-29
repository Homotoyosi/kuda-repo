import "./Servicing.css"
const Servicing =(props)=>{
    return(
        <div>
            <div className={`servicewrap ${props.color}`}>
                <img src={props.image} alt="" />
                <div className="servicebox">
                    <h1>{props.text}</h1>
                    <p>{props.word}</p>
                 </div>
            </div>
        </div>
    )
}
export default Servicing