import Accessimage from "../assets/Screenshot5.png"
import Access from "../component/Access/Access"

const Accesscard =()=>{
    return(
        <div>
           <Access text="Turn off access, turn on safety." word="Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We'd like to see them try." image={Accessimage} input="Learn more about Cards  >" link="" color="card4" />
        </div>
    )
}
export default Accesscard