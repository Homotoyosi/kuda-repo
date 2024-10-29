import servicingimage from "../assets/Screenshot3.png"
import Servicing from "../component/Servicing/Servcing"

const Servicingpage =()=>{
    return(
        <div>
           <Servicing text="It's your money, we just help you manage it." word="Save it, spend it. It's up to you. Whatever you choose to do with your money, we'll make sure it's done better and free of charge. We take responsibility for that." image={servicingimage} color="card2" />
        </div>
    )
}
export default Servicingpage