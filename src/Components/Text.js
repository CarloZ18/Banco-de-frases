import React, {useState} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuoteLeft, faMinus, faDeaf} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import Swal from "sweetalert2";
  
const messages=[{frase:'La desobediencia aleja la presencia de Dios de nuestras vidas.',autor:'Juan Carlos Harrigan'},
    {frase:'Si tu deseas su presencia su presencia te desea a ti.',autor:'Juan Carlos Harrigan'},
    {frase:'Cada prueba representa un espacio de tiempo en donde podemos madurar en la presencia de Dios.',autor:'Juan Carlos Harrigan'},
    {frase:'No es que Dios te dejo solo; el sigue contigo, pero ahora quiere que lo conozcas de una manera diferente.',autor:'Yesenia Then'},
    {frase:'Cuando un mal pensamiento llega a ti, siempre busca anclarse en las cosas que no has superado todavia',autor:'Yesenia Then'},
    {frase:'La grandeza de la vida en Dios, no esta en pedir milagros; sino en ser un milagro para otros.',autor:'Yesenia Then'},
  {frase:'La señal de una genuina obra de Dios en tu vida es que empiezas a odiar el pecado que antes amabas y amar la justicia que antes ignorabas.',autor:'Paul Washer'},
    {frase:'Un lider es aquel que conoce el camino, anda en el camino y muestra el camino.',autor:'Jhon Maxwell'},
  {frase:'Puede que Dios no te llame a construir un arca, pero si te llama a cumplir su voluntad.',autor:'Charles Stanley'},
    {frase:'A menudo las dificultades preparan a la gente ordinaria para un destino extraordinario',autor:'Charles Stanley'},
  {frase:'Ser varón no es ser hombre. No medís a un hombre por los músculos sino por la fibra moral. Si llegas al éxito sacrificando tu hogar, no sos hombre.',autor:'Dante Gebel'}
] 

const colors=['orangered', 'pink', 'rosybrown', 'DarkSlateGray','brown', 'thistle', 'turquoise', 'salmon', 'lawngreen', 'blue', 
'DarkKhaki', 'DarkGreen', 'LightSeaGreen', 'SteelBlue', 'DodgerBlue', 'MediumSlateBlue', 'Sienna', 'Maroon']

 export default function TextComponent () {
  
  let [text, setText]=useState(0)
  let [color, setColor]=useState(0)

 
  const TextStyle=styled.h1`
font-size:30px;
color:${colors[color]};
margin-left:auto;
margin-right:auto;
text-align:center;
font-family: 'Courier New', Courier, monospace;
@media screen and (max-width:600px) {
    font-size: 20px;
}
` 

const AuthorStyle = styled.p`
color:${colors[color]};
font-size:15px;
text-align:right;
margin-left:auto;
margin-right:auto;
font-family:'Arial', Courier, monospace;
@media screen and (max-width:600px) {
  font-size: 10px;  
}
`

const ActionStyle=styled.button`
background-color:${colors[color]};
border:none;
border-radius:5px;
font-size: 15px;
color:white;
height:40px;
cursor: pointer;
:hover{
  box-shadow: 0px 3px 5px gray;
  @media screen and (max-width: 600px) {
      width: 70px;
      font-size: 12px;
    }
}
`

const TwitterStyle=styled.button`
background-color:${colors[color]};
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

const ContainerStyle=styled.div`
 display: flex;
  flex-direction: row;
  justify-content:space-between
;`
let i= 0; 
const frases=messages.map(messages => <div><FontAwesomeIcon icon={faQuoteLeft}  style={{marginRight:'10px'}}/>{messages.frase}</div>);
const autores= messages.map(messages => <div><FontAwesomeIcon icon={faMinus} style={{fontSize:'10px', marginRight:'10px'}}/>{messages.autor}</div>);
    
return(
      <>
<style>
 {"body {background-color:"+colors[color]+";}"};
</style>

        <TextStyle id='text' > {frases[text]}</TextStyle>
       <AuthorStyle id='author' > {autores[text]}</AuthorStyle>

<ContainerStyle>
        <a id="tweet-quote" target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Dream%20big%20and%20dare%20to%20fail.%22%20Norman%20Vaughan"><TwitterStyle id="twitter" class="btn btn-default  ">
     <FontAwesomeIcon icon={faTwitter}/>
    </TwitterStyle>
 </a>

 {/*Boton de cambio*/}
 
    <ActionStyle id="new-quote"  onClick={()=>{

     let randomColor=Math.floor(Math.random() * colors.length)
    while(randomColor === color){
    randomColor=Math.floor(Math.random() * colors.length )} 
      setColor(randomColor)    
    if(text === messages.length - 1){
        Swal.fire({
          title:'¡Felicidades!',
          text: 'Has culminado las frases diarias',
          icon:'success'
        })
        setText(0)  
      }else{
        setText(text + 1)
      }  
 console.log(text, color) 



//Que no se repita el mensaje
// let randomAutor=Math.floor(Math.random() * messages.length )
// let randomColor=Math.floor(Math.random() * colors.length )
// while(randomAutor === text || randomColor === color){
// randomAutor=Math.floor(Math.random() * messages.length )
// randomColor=Math.floor(Math.random() * colors.length )
// }
// setText(randomAutor) 
// setColor(randomColor) 

 
}}><strong>Nueva frase</strong> </ActionStyle> 
 
</ContainerStyle>

    </>      

    );
}; 


