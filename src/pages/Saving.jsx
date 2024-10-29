import savingimage from "../assets/Screenshot4.png"
import Save from "../component/Save/Save"

const Saving =()=>{
    return(
        <div>
           <Save text="Save money as you spend it, seriously." word="You can't avoid spending. That's how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow" input="See all our Savings >"  image={savingimage} color="card3" link="" />
        </div>
    )
}
export default Saving