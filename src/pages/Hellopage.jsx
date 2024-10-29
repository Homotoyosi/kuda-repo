import helloimage from "../assets/Screenshot6.png"
import Hello from "../component/Hello/Hello"

const Hellopage =()=>{
    return(
        <div>
           <Hello text="We're always happy to help you." word="You can chat with us on the app. slide into our DMs, tweet, leave an instagram comment, send an email or call. However you choose to reach out, there'll always be a friendly person there to make your life easy." input="Get Help >"  image={helloimage} color="card5" link="" />
        </div>
    )
}
export default Hellopage