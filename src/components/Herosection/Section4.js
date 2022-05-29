

import React from 'react';
import styled from "styled-components"
import { useEffect,useState } from 'react';
import { questions } from "./Api";
import { MyAccordian } from '../Accordian/MyAccordian'
import {motion} from "framer-motion"

import Slider from "./Slider"
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const config =[
  
  
  { 
    title:'ITSUKI VISION',
    image:'https://i.imgur.com/hh3dG5A.png',
    content:'We at Itsuki adore nature. We believe that giving back to nature is an important element for human growth and existence.\n This extends into the animal kingdom aswell.We thrive on creating the greatest organic NFT community ever to explore and implement all the possibilities of bringing technology and nature together.'
  },
  {
    title:'Values With Nature',
    image:'https://i.imgur.com/ssrkzw1.png',
    content:'Itsuki is a japanese word which means TREE. Itsukis are here to represent forest spirits. Our goal is to create a ecosystem where a real tree will be adding values for the Itsuki community by,  Planting a real tree on every mint :  A creative way to work on the carbon netrality with Itsuki. On every mint and on secondary sales we will be planting a real tree in real life. Every tree will be connected to the holders wallet and holds the Itsuki token ID.Values : Trees give oxygen and we at Itsuki calculate the average amount of oxygen produced by the planted trees based on the rarity to airdrop ISUKI tokens which can be used in the ecosystem.'

  }
  ,{
    title:'ITSUKI MERCHANDISE',
    image:'https://i.imgur.com/ssrkzw1.png',
    content:'Members of the Itsuki forest will get the access to exclusive Itsuki merchadise.  Itsuki will be partnering with multiple brands to bridge between the physical and digital world with Itsuki artstyle. '

  },
  {
    title:'EMPOWER WOMEN ENTREPRENUERS',
    image:'https://i.imgur.com/ssrkzw1.png',
    content:'Members of the Itsuki forest will get the access to exclusive Itsuki merchadise.  Itsuki will be partnering with multiple brands to bridge between the physical and digital world with Itsuki artstyle. '
  },
  {
    title:'ITSUKI FORESTVERSE',
    image:'https://i.imgur.com/ssrkzw1.png',
    content:'Itsuki represents the forest spirits and travels withing the roots of the forest’s trees. Itsuki holders will get all the access of the Itsuki Forestverse and will able to travel to other forests. P2E Tournaments: Delivering a great gaming experience in P2E with the physical utilities is Itsuki mission.'
  },


];







export const Section4 = () => {
    


  return (
     <Container>
             <h1>ITSUKI BRANCH</h1>
             <Slider config={config} />
           


       

     </Container>


  );
};

const Container=styled.div`
margin-top:1150px;

border:solid 4px green;
height:1500px;

h1{
  
  
  text-align:center;
  color:white;
  font-family:'Poppins';
  margin-top:120px;
  font-size:90px;
  @media(max-width:786px){
      font-size:30px;
      }
      @media(max-width:480px){
      fontsize:20px;
      }
}

   

`;
const Hand=styled.div`
`;
