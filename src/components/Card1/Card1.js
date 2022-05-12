import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Bottom from "../images/Itsuki banner213 1.png"
import Top from "../images/layer.png"
import Center from "../images/rezzsha.png"
import Team from "../images/team 1.png"
const Card1=()=>{


    return(
   <Container>
          <Img1 src={Top} />

          <Slide>
              <Text>
               <h2>Rezzsha was the first Itsuki whose birth was a surprise.</h2>
               <h4>When Itsuki are ready to be born, the forest brings them into the physical realm through a birthing ceremony, these are the happiest times for the Itsuki and all the beings of the forest, laughter and drumbeat is heard all throughout the realm and some celebrations are rumored to have lasted months.</h4>
              </Text>
               <Img3  src={Center}/>
                
            

          </Slide>
          <Img2 src={Bottom}/>
          <Img4 src={Bottom}/>
          <Slide1>
            <h1>ITSUKI PARTY</h1>
            <TextBox>

            Each ITSUKI NFT is algorithmically generated by combining 272+ unique traits with varying rarity across categories.
            </TextBox>
            <Img5  src={Team}/>
          </Slide1>

   </Container>

    );
}
export default Card1;

const Container=styled.div`

margin-top:610px;
height:3570px;
border:solid green 3px;
background-color:#0E0B26;





`;
const Img1=styled.img`
   position:absolute;
   display:block;
   max-width:100%;
`;
const Img2=styled.img`
position:absolute;
display:block;
max-width:100%;
margin-top:-620px;

`;
const Text=styled.div`

width: 750px;
height: 483px;
left: 103px;


text-align:left;
border:solid white 2px ;

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
`;
const Slide=styled.div`
display: flex;  

margin-left:110px;
margin-top:300px;
align-items:center;
positon:absolute;
`;
const Img3=styled.img`
height:700px;


width:725px;
border:solid 4px red;

`;
const Img4=styled.img`
transform: scaleY(-1);
position:absolute;
display:block;
margin-top:230px;
max-width:100%;
`;
const Slide1=styled.div`
h1{
  
    color:white;
    font-family:'Poppins';
    margin-top:400px;
    font-size:90px;
}
`;
const TextBox=styled.div`
font-size:32px;
margin:30px 220px;
color:white;
font-family:'Poppins';
`;
const Img5=styled.img`

width:60px:
position:absolute;
display:block;
max-width:100%;
`;