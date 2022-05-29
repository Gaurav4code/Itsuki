
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Rezshaa from "../images/rezzsha.png"
import Bottom from "../images/section-2.png"
import Top from "../images/layer.png"
const Section1=()=>{

    return(
        <Container>
        <Img1 src={Top} />
        <Text>
         <h2>Rezzsha was the first Itsuki whose birth was a surprise.</h2>
         <h4>When Itsuki are ready to be born, the forest brings them into the physical realm through a birthing ceremony, these are the happiest times for the Itsuki and all the beings of the forest, laughter and drumbeat is heard all throughout the realm and some celebrations are rumored to have lasted months.</h4>
        </Text>
         <Img  src={Rezshaa}/>
         
      

    </Container>

    );
}
export default Section1;
const Container=styled.div`
display: flex;  
border:solid red 5px;
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
const Img1=styled.img`
   position:absolute;
   display:block;
   max-width:100%;
`;

const Img=styled.img`
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