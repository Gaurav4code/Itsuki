import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Img1 from "../images/ITSUKI.svg";
import Bg from "../images/bg.svg";
import covervid from "../videos/vid1.mp4";
import icon1 from "../images/twitter.svg";
import icon2 from "../images/discord.svg";

const Header =() =>{

    return(
     <Container>
      <Deo>
      <video  autoPlay  loop muted  >
      <source src={require("../videos/vid1.mp4")} type="video/mp4"/>
     </video>
        
      </Deo>
      <Navbar>
        <Icon src={Img1} />

        <Links>
           <NavLinks>HOME</NavLinks>
           <NavLinks>ART</NavLinks>
           <NavLinks>ITSUKI BRANCHES</NavLinks>
            <NavLinks><img src={icon1}/></NavLinks>
            <NavLinks><img src={icon2}/></NavLinks>
           
        
         </Links>
      </Navbar>
      <video src={require("../videos/vid1.mp4").default} autoPlay loop muted />
     

  



     </Container>


    );
}
export default Header;

const Container=styled.div`
width:1fr;
border:solid red 2px;

`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid red 3px;
  height: 40px;
  width: 1fr;
  height: 78px;
`;
const Icon = styled.img`
  border: solid blue 1px;
  background-image: url("../components/Images/ITSUKI.svg");
`;
const Links = styled.div`
  display: flex;
  justify-content:space-evenly;
  border: solid green 2px;
  width: 590px;
  height: 60px;

  margin-top: 0px;
  background: #0e0b26;
  border-radius: 50px 0px 0px 50px;
  h2 {
    color: white;
    font-family: "Poppins";
    width: 72px;
    font-size: 36px;
    height: 36px;
    margin-top: 21px;
  }
`;
const Deo = styled.div`
  
  width: 100%;
  height: 1080px;
  position: absolute;
  z-index: -2;

  
  video{

    
    width: 100%;
    
    
  }
`;
const NavLinks=styled.div`

    color: white;
    font-family: "Poppins";
  
    font-size: 15px;
    font-weight:700;
    height:26px;
    margin-top: 15px;

    

`;
const Link = styled.div`
  color: white;
  position: relative;
  width: 72px;
  height: 36px;
  margin-left: 1246px;
  margin-top: 21px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`;
