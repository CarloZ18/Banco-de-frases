import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const LayoutStyle=styled.div`
background-color:white;
border-radius:30px;
padding: 5vh;
width:50%;
margin:250px auto; 
box-shadow: 3px 3px 20px black;
@media screen and (max-width: 600px) {
padding: 6vh;
}  
`

 
function LayoutComponent() {
  
    return (
      <LayoutStyle id='quote-box' ><Text/></LayoutStyle> 
    );
    } 
export default LayoutComponent
