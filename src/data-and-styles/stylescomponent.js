import styled from 'styled-components';
import {colors} from './database'; 


/*STYLE MESSAGE*/
const TextStyle=styled.h1`
font-size:30px;
color:${(props)=>colors[props.indexColor]};
margin-left:auto;
margin-right:auto;
text-align:center;
font-family: 'Courier New', Courier, monospace;
` 

/*STYLE AUTHOR*/
const AuthorStyle = styled.p`
color:${(props)=>colors[props.indexColor]};
font-size:15px;
text-align:right;
margin-left:auto;
margin-right:auto;
font-family:'Arial', Courier, monospace;

`
/*STYLE BUTTON NEW QUOTE*/
const ActionStyle=styled.button`
background-color:${(props)=>colors[props.indexColor]};
border:none;
border-radius:5px;
font-size: 15px;
color:white;
height:40px;
cursor: pointer;
:hover{
  box-shadow: 0px 3px 5px gray;
}
`
/*STYLE BUTTON TWITTER*/
const TwitterStyle=styled.button`
background-color:${(props)=>colors[props.indexColor]};
border-radius:5px;
border:none;
height: 40px;
width: 50px;
color:white;
cursor: pointer;
:hover{
  box-shadow: 0px 3px 5px gray;
}
`
/*STYLE CONTAINER*/
const ContainerStyle=styled.div`
display: flex;
flex-direction: row;
justify-content:space-between
;`

export {TextStyle,AuthorStyle,ActionStyle,TwitterStyle,ContainerStyle}