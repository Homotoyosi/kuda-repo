import Service from "../component/Service/Service"
import serviceimage from "../assets/Screenshot2.png"

const Servicepage =()=>{
    return(
        <div>
           <Service text="Your Phone + our app + a debit card = a simple life." word="We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves" input="Open An Account in Minutes >"  image={serviceimage} color="card1" link="" />
        </div>
    )
}
export default Servicepage