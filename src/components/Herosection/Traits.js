import React from "react";
import styled from "styled-components";


const Trait=(props)=>{


return (

    <Item>
          <h2>{props.scale}</h2>
          <h2>{props.trait}</h2>

    </Item>

);


}

export default Trait;


const Item=styled.div`
width: 300px;
height: 200px;
 
 background: linear-gradient(180deg, #171246 0%, rgba(69, 70, 18, 0) 100%);
border-radius: 10px;
h2{
    font-family: 'Murasamu Free Trial';
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 56px;
color: #FFFFFF;
}
h3{
    font-family: 'Murasamu Free Trial';
font-style: normal;
font-weight: 400;
font-size: 60px;
line-height: 70px;
text-align: center;

color: #FFFFFF;
}
`;