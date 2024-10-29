import styled from "styled-components"
import Image from "../assets/Screenshott.png"
import { IoLogoApple } from "react-icons/io5";
import Googleplay from "../assets/icons8googleplay.png"

const Home =()=>{
    return(
        <Container>
            <Wrapper>
                <TextBox>
                    <h1>The money app for Africans.</h1>
                    <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                    <Buttons>
                        <button className="btn1">
                        <IoLogoApple size={44} />
                            <div className="text1">
                                <h5>Download on the</h5>
                                <h4>App Store</h4>
                            </div>
                        </button>
                        <button className="btn2">
                            <img src={Googleplay} alt="" />
                            <div className="text2">
                                <h5>GET IT ON</h5>
                                <h4>Google Play</h4>
                            </div>
                        </button>
                    </Buttons>
                </TextBox>
                <ImageBox>
                    <img src={Image} alt="" />

                </ImageBox>
            </Wrapper>
        </Container>
    )
}
export default Home

const Container = styled.div`
width: 100%;
height: 100vh;
`
const Wrapper = styled.div`
/* border: 1px solid red; */
display: flex;
padding-top: 50px;
`
const TextBox = styled.div`
/* border: 1px solid green; */
height: auto;
width: 50%;
margin-top: 30px;
h1{
    padding-left: 200px;
    width: 60%;
    font-size: 40px;
    line-height: 1.2;
    font-weight: 800;
    color: #40196D;
}
p{
    padding-left: 200px;
    width: 55%;
    font-weight: 500;
}
`
const Buttons = styled.div`
display: flex;
gap: 20px;
margin-left: 200px;
margin-top: 30px;
.btn1{
    display: flex;
    height: 50px;
    width: 160px;
    background-color: black;
    border: none;
    color: white;
    padding-left: 10px;
    border-radius: 10px;
.text1{
    line-height: 0;
h5{
    font-size: 8px;
    font-weight: 400;
}
h4{
    font-size: 14px;
}

}
}
.btn2{
    display: flex;
    height: 50px;
    width: 160px;
    background-color: black;
    border: none;
    color: white;
    border-radius: 10px;
    padding-left: 10px;
 img{
    width: 44px;
    height: 44px;
    padding-top: 3px;
}
.text2{
    line-height: 0;
h5{
    font-size: 8px;
    font-weight: 400;
    text-align: left;
}
h4{
    font-size: 14px;
}

}
}
`
const ImageBox = styled.div`
/* border: 1px solid purple; */
margin-left: 50px;
img{
    width: 70%;
    height: auto;
}
`