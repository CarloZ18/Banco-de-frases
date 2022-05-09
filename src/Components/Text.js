import React, {useState} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuoteLeft, faMinus} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import Swal from "sweetalert2";
import $ from 'jquery'
  
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

const colors=[ '#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857']

 export default function TextComponent () {
  
const [text, setText]=useState(0)
const [color, setColor]=useState(0)

const TextStyle=styled.h1`
font-size:30px;
color:${colors[color]};
margin-left:auto;
margin-right:auto;
text-align:center;
font-family: 'Courier New', Courier, monospace;
` 

const AuthorStyle = styled.p`
color:${colors[color]};
font-size:15px;
text-align:right;
margin-left:auto;
margin-right:auto;
font-family:'Arial', Courier, monospace;

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

const frases=messages.map(messages => <div><FontAwesomeIcon icon={faQuoteLeft}  style={{marginRight:'10px'}}/>{messages.frase}</div>);
const autores= messages.map(messages => <div><FontAwesomeIcon icon={faMinus} style={{fontSize:'10px', marginRight:'10px'}}/>{messages.autor}</div>);

function nuevoQuoteAnimado(){
  if(text === messages.length - 1){
    $('#text').text(nuevoQuote);
    $('#author').text(nuevoQuote);
  }else{
   $('.quote-text').animate({opacity:0}, 500, function () {
    $(this).animate({ opacity:1 }, 500);
    $('#text').text(nuevoQuote);
  });
  
$('.quote-author').animate({ opacity: 0 }, 500, function () {
  $(this).animate({opacity: 1 }, 500);
  $('#author').text(nuevoQuote);
});

 var randomColor=Math.floor(Math.random() * colors.length)
setColor(randomColor)
}

function nuevoQuote(){
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
  }
}
 
return(
      <>
<style>
 {"body {background-color:"+colors[color]+";}"};
</style>

<div className='quote-text'>
<TextStyle id='text' > {frases[text]}</TextStyle>
</div>

<div className='quote-author'>
  <AuthorStyle id='author' > {autores[text]}</AuthorStyle>
</div>        

<ContainerStyle  >
  <a id="tweet-quote" target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Dream%20big%20and%20dare%20to%20fail.%22%20Norman%20Vaughan">
    <TwitterStyle id="twitter"  className="btn btn-default  ">
      <FontAwesomeIcon icon={faTwitter}/>
    </TwitterStyle>
  </a>
 {/*Boton de cambio*/}

  <ActionStyle id="new-quote"  onClick={nuevoQuoteAnimado}><strong>Nueva frase</strong></ActionStyle> 
    
</ContainerStyle>
    </>      
    );
}; 


