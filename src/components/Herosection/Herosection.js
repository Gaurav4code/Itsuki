import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Bottom from "../images/section-2.png"
import Top from "../images/layer.png"
import Center from "../images/rezzsha.png"
import Team from "../images/team 1.png"
import Branch from "../images/branch.png"
import Branch1 from "../images/branch2.png"
import Branch3 from "../images/BranchAll.png"
import Trait from "./Traits"
import Section3 from "./Section3"
import Slider from "./Slider"
import { Section5 } from "./Section5";
import { Section4 } from "./Section4";
import Section1  from "./Section1"
import Section2 from "./Section2";



const Herosection=()=>{


    return(
   <Container>
          
           <Section1/>
           {/* <Img2 src={Bottom}/> */}
           <Section2/>
           <Section3/>
           <Section4/>
           <Section5/>
       

   </Container>

    );
}
export default Herosection;

const Container=styled.div`
border:solid red 1px;

height:6570px;
position:absolute;
background-color:#0E0B26;

@media (max-width: 768px) {
    width:100%;
    height:auto;
    
  }
  @media (max-width: 480px) {
    width:100%;
    height:auto;
    color:blue;
  }


`;
const Img1=styled.img`
   position:absolute;
   display:block;
   max-width:100%;
`;

const Text=styled.div`

width: 750px;
height: 483px;
left: 103px;


text-align:left;


font-family:'Poppins';
h2{
    color:white;
    font-size: 42px;
    line-height: 63px;
}
h4{
    color:white;
    font-weight:100;
    font-size:20px;
    line-height: 35px;
}

@media (max-width: 768px) {
    width:400px;
    h2{
        font-size:24px;
    }
    h4{
        font-size:18px;
    }
    font-size:30px;
  }
  @media (max-width: 480px) {
    width:200px;
    font-size:15px;
  }
`;
//flex-direction: column;
const Slide=styled.div`
display: flex;  

margin-left:110px;
margin-top:300px;
align-items:center;
positon:absolute;

@media (max-width: 768px) {
    display:block;
    
  }
  @media (max-width: 480px) {
    display:block;
    
  }
`;
const Img2=styled.img`
position:absolute;
display:block;
max-width:100%;
margin-top:-620px;
@media (max-width: 768px) {
    display:block;
    height:auto;
    
  }
  @media (max-width: 480px) {
    display:block;
    height:auto;
  }

`;
const Img3=styled.img`
height:700px;


width:725px;
@media (max-width: 768px) {
    
    height:auto;
    width:400px;
    display:block;  
    margin-left:0;  
}
  @media (max-width: 480px) {
    margin-top:420px;
    height:auto;
    width:250px;
    display:block;
    margin-left:0;  
  }
`;
const Img4=styled.img`
transform: scaleY(-1);
position:absolute;
display:block;
margin-top:230px;
max-width:100%;
@media (max-width: 768px) {
  
    display:block;
    height:auto;
  }
  @media (max-width: 480px) {
    display:block;
    height:auto;
  }
`;
const Slide1=styled.div`


display:flex;

flex-direction:column;

margin-top:400px;
h1{
margin-left:600px;    
    position:absolute;
    color:white;
    font-family:'Poppins';
   
    font-size:90px;
    @media(max-width:786px){
        font-size:30px;
        }
        @media(max-width:480px){
        fontsize:20px;
        }
}

`;

const TextBox=styled.div`
font-size:32px;
margin:300px 220px;
color:white;
font-family:'Poppins';
position:absolute;
text-align: center;
@media (max-width: 768px) {
  
   font-size:12px;
   margin:10px 10px;
  }
  @media (max-width: 480px) {
font-size:12px;

text-align:center;
margin:10px 10px;
  }
`;
const Img5=styled.img`

width:60px:
position:absolute;
display:block;
max-width:100%;
margin-top:800px;

`;
const Img6=styled.img`
display:relative;
width:1fr;




`;

const Slide2= styled.div`
float:left;
margin: 0 auto;
display:flex;
flex-direction:column;
position:absolute;
h1{
  
  position:absolute;
  margin-left:800px;
  color:white;
  font-family:'Poppins';
  margin-top:200px;
  font-size:90px;
  @media(max-width:786px){
      font-size:30px;
      }
      @media(max-width:480px){
      fontsize:20px;
      }
}
`;

const Traits=styled(motion.div)`

margin:500px 150px;
display:grid;
position: absolute;
grid-template-rows: repeat(2,1fr);
grid-template-columns: repeat(4,1fr);

row-gap:30px;
colum-gap:40px;
justify-items: center;
width:1600px;
border:solid red 5px;
`;
const Slide3=styled.div`
margin-top:1150px;

h1{

  margin-left:600px;    
      position:absolute;
      color:white;
      font-family:'Poppins';
     
      font-size:90px;
      @media(max-width:786px){
          font-size:30px;
          }
          @media(max-width:480px){
          fontsize:20px;
          }
  }

`;
const Slide4=styled.div`

border:solid 4px green;
height:500px;

`;

const Slide5=styled.div`

border:solid 4px green;
height:500px;
text-align:center;
h1{



font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 72px;
line-height: 108px;
text-align: center;

color: #FFFFFF;
}
`;
