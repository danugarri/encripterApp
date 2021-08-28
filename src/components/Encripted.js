import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Encripted () {
/* función para encriptar btoa('string') */
 const encodedString= btoa('Te quiero')
    return (
       <main>
         <h1>{encodedString}</h1>
         <NavLink to ='./desencriptado'> Desencriptado</NavLink>
       </main>
        
    
  
    )
}