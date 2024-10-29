import "./Service.css"
const Service =(props)=>{
    return(
        <div>
            <div className={`servicecontainer ${props.color}`}>
                <div className="servicecontent">
                    <h1>{props.text}</h1>
                    <p>{props.word}</p>
                    <a href={props.link} target="_blank"> <h4>{props.input}</h4></a>
                 </div>
                    <img src={props.image} alt="" />
            </div>
        </div>
    )
}
export default Service