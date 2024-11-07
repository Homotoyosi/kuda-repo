import { IoCard } from "react-icons/io5";
import styled from "styled-components";



const Cardlisting = ()=>{
    return(
     <Container>
        <Content>
          
            <button>
            <IoCard size={20} />
            </button>
            <h4>Order a Kuda card on the app with pickup and delivery options.</h4>
        </Content>
        <Content>
            
            <button>
            <IoCard size={20} />
            </button>
            <h4>Enjoy cashless payment options online and offline</h4>
        </Content>
        <Content>
            
            <button>
            <IoCard size={20} />
            </button>
            <h4>Pay your essential bills and buy gift cards easily.</h4>
        </Content>
        <Content>
          
            <button>
            <IoCard size={20} />
            </button>
            <h4>Get 25 free transfers to Nigerian banks every month.</h4>
        </Content>
        <Content>
         
            <button>
            <IoCard size={20} />
            </button>
            <h4>Save money automatically any time you spend.</h4>
        </Content>
     </Container>
    )
}
export default Cardlisting
const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: center;
gap: 30px;
margin-left: 100px;
margin-right: 100px;
margin-top: 50px;
@media (max-width: 800px) {
    display: block;
    flex-direction: column;
    margin: 100px 20px;

}
`
const Content = styled.div`
width: 27%;
height: 130px;
padding-left: 20px;
padding-top: 3px;
background-color:#FFFFFF ;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
@media (max-width: 800px) {
    width: 100%;
    margin-top: 30px;
}
button{
    background-color: #DFE3FF;
    width: 38px;
    height: 38px;
    color: #40196D;
    border: none;
    border-radius: 200%;
}
h4{
    font-size: 13px;
    width: 80%;
}
`