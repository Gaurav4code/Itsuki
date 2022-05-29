
import React , {useState} from "react";
import styled,{css} from "styled-components";

import { motion } from "framer-motion";

const Slider = ({config}) =>{

   const[ imageIndex,setimageIndex]=useState(0)

   const next =() =>{
       setimageIndex ((state)=>(state += 1));
       if(imageIndex === config.length-1) setimageIndex(0);
   }
   const prev =() =>{
    setimageIndex ((state)=>(state -=1));
    if(imageIndex === 0) setimageIndex(config.length-1);
}

    return(
   <Container>
       
       

       <SubContain>
       <NavButton  left onClick={prev}>
      
      <i class="fa-solid fa-chevron-left"></i>
      </NavButton>
    

      
       <Template>

        <ImageContainer initial={{x:-250}} animate={{x:0}} src={config[imageIndex].image}/>
         <Title >
          <h1> {config[imageIndex].title}  </h1>
        </Title>
      
        <Text>
         <h3> {config[imageIndex].content} </h3>
        </Text>
       
             

       
       
       </Template>
      
       
       <NavButton right onClick={next}>
      
       <i class="fa-solid fa-chevron-right"></i>
       </NavButton>
       </SubContain>
       
      
   </Container>

    );
}
export default Slider;


const  Container=styled.div`

margin-top:60px;
border:solid green 6px;
display:flex;
height:100vh;


`;


const SubContain=styled.div`
display:flex;
justify-content:space-around;
width:100%;
postion:relative;
`;


const Template=styled(motion.div)`
border:solid 6px yellow;
position:relative;
width:1427px;;
height:100%;
display: flex;
flex-direction:column;
 
align-self:center;
  text-align:left;

`;




const Title =styled(motion.div)`
 position:absolute;
 height:90px;
width:1227px;
margin-top:90px;


display:flex;

 h1{
   font-size:50px;
   margin-left:90px;
 }
 border:solid blue 2px;
 
`;
const Text=styled.div`
align-self: center;
margin-top:300px;

border:solid 3px yellow;
position:absolute;
width:1227px;
text-align:left;

color:white;
font-family: 'Amiko', sans-serif;
font-size:18px;
 color:white;
 position:abs
 bottom:5%;

h3{
    font-family: 'Amiko', sans-serif;
    font-weight: 400;
font-size: 25px;
line-height: 35px;
}
`;
const  ImageContainer=styled(motion.img)`

width:1427px;
height:727px;
object-fit:cover;
display:block;
position:absolute;

`;
const NavButton=styled.button`
margin-top:400px;


width:35px;
height:35px;
outline:none;
border:none;
background:none;
cursor:pointer;
padding:0;


font-size:70px;
border-radius:50%;
color:white;
box-shadow:0px 4px 60px 20px rgba(3,3,3,0.9),
   inset 0  --3em 3em rgba(3,3,3,0.5);
transfor:translate(0,-50%);

`;


  


       
   

      export const DotContainer =styled.div`
      display:flex;
      gap:5px;
      justify-content:center;
      align-items:center;
      position:absolute;
      bottom:3%;
      left:50%;
      transform:translate(-50%,0);
      `;
      
    
         
      export const Dot = styled.div`
          width:10px;
          height:10px;
          border-radius:50%;
          background-color:white;
          
          
          `;     