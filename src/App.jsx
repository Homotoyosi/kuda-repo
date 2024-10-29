import Home from "../src/pages/Home"
import Footer from "../src/static/Footer"
import Header from "../src/static/Header"
import Accesscard from "./pages/Accesscard"
import Cardlisting from "./pages/Cardlisting"
import Glasspage from "./pages/Glasspage"
import Hellopage from "./pages/Hellopage"
import Saving from "./pages/Saving"
import Servicepage from "./pages/Servicepage"
import Servicingpage from "./pages/Servicingpage"


const App =()=>{
  return(
      <div>
        <Header />
        <Home />
        <Cardlisting />
        <Servicepage />
        <Servicingpage />
        <Saving />
        <Accesscard />
        <Hellopage />
        <Glasspage />
        <Footer />
      </div>
  )
}
export default App