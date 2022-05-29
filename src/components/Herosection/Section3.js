import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Center from "../images/rezzsha.png"
import Branch from "../images/BranchAll.png"
import Trait from "./Traits";
const Section3=()=>{

    return(
   <Container>
         <Img src={Branch}/>
             <h1>TRAITS</h1>
            
           
                    
                     <Traits>


                        <Trait   animate={{fontSize:50, color:'#0E0B26', scale:3, x:200}} scale="72" trait="CLOTHES" />
                        <Trait scale="72"  trait="Body"/>
                        <Trait scale="72"  trait="Hair"/>
                        <Trait scale="72"  trait="Expression"/>
                        <Trait scale="72"  trait="Hand"/>
                        <Trait scale="72"  trait="Jwellery"/>
                        <Trait scale="72"  trait="Background"/>


   
                       


                     </Traits>
            

            
      

    </Container>

    );
}
export default Section3;
const Container= styled.div`
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
const Img=styled.img`
display:relative;
width:1fr;




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