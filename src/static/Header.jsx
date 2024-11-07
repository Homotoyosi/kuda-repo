import { MdArrowDropDown } from "react-icons/md"
import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi";
const Header =()=>{
    return(
        <Container>
            <LogoNav>
                <Logo>
                    <img src="kudabank.png" alt="" />
                </Logo>
                <Navigation>
                    <nav>
                        <span>Personal</span>
                        <MdArrowDropDown size={20} />
                    </nav>
                    <nav>
                        <span>Business</span>
                        <MdArrowDropDown size={20} />  
                    </nav>
                    <nav>
                        <span>Company</span>
                        <MdArrowDropDown size={20} />
                    </nav>
                    <nav>
                        <span>Help</span>
                        <MdArrowDropDown size={20} />
                    </nav>
                </Navigation>

            </LogoNav>
            <ButtonNav>
                <SignIn>Sign In</SignIn>
                <JoinBtn>Join Kuda</JoinBtn>
                <ConBtn>
                    <img src="nigeria.png" alt="" />
                </ConBtn>
                <SideNav>
                  <GiHamburgerMenu />
                </SideNav>

            </ButtonNav>


        </Container>
    )
}
export default Header

const Container = styled.div`
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
@media (max-width: 800px) {
    width: 100%;
}
`
const LogoNav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 800px) {
    margin-left: 0px;
}
`
const Logo = styled.div`
margin: 0px 80px 0px 80px;
img{
    width: 80px;
}
@media (max-width: 800px) {
    margin: 0px 80px 0px 30px; 
}
`
const Navigation = styled.div`
display: flex;
gap: 30px;

nav{
    display: flex;
    color: #40196D;
    span{
        margin-right: 3px;
        font-size: 13px;
        font-weight: 600;
    }
}
@media (max-width: 800px) {
    display: none;
  }
`
const ButtonNav = styled.button`
display: flex;
align-items: center;
background-color: transparent;
border: none;
gap: 30px;
margin-right: 20px

`
const SignIn = styled.button`
background-color: transparent;
border: none;
color: #40196D;
font-weight: 600;
@media (max-width: 800px) {
    display: none;
  }
`
const JoinBtn = styled.button`
background-color: #40196D;
color: white;
width: 120px;
height: 40px;
border-radius: 10px;
border: none;
@media (max-width: 800px) {
    display: none;
  }
`
const ConBtn = styled.button`
background-color: #9BB4B8;
outline: none;
border: none;
height: 40px;
width: 40px;
border-radius: 50%;
align-items: center;
img{
    width: 25px;
    padding: 7px 0px   
}
`
const SideNav = styled.div`
  display: none; 

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`
