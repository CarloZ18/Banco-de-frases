import React from 'react'
import styled from 'styled-components';

const textStyle=styled.h1`  
margin: 10px;
color:orangered;
font-size:30px;
font-family: Arial, Helvetica, sans-serif;`

const authorStyle = styled.p`
font-size:17px;
color:orangered;
font-family:'Arial', Courier, monospace;`

const textComponent=function(props){
    return(
    <div><textStyle>You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.</textStyle>
    <authorStyle>Vincent Van Gogh</authorStyle>
    </div>
    );
    }

    {/*Definir los mensajes y los autores en state*/}
