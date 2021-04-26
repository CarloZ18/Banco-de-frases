import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';


const TwitterStyle=styled.button`
height: 40px;
width: 50px;
color:rgb(255, 255, 255);
background:orangered ;
`

const ContainerStyle=styled.div`
 display: flex;
  flex-direction: row;
  justify-content:space-between
;`



function RedesComponent() {

    return(

     //Botones//
       <ContainerStyle >

   {/*Twitter*/}
    <div >
       <a id="tweet-quote" target="_blank" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Dream%20big%20and%20dare%20to%20fail.%22%20Norman%20Vaughan"><TwitterStyle id="twitter" class="btn btn-default  ">
     <FontAwesomeIcon icon={faTwitter}/>
    </TwitterStyle>
 </a>
    </div>
    
       </ContainerStyle>
     
        );
}
{/*funcionalidad del boton*/}  

export default RedesComponent