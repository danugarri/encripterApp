import React from 'react';
import { NavLink } from 'react-router-dom';
import './encript.css'




export default function Encripted ({state}) {
/* función para encriptar btoa('string') */

 
    return (
       <main>
             
         <h1> {state}</h1>
        
         <NavLink to ='./desencriptado' className='list'> Desencriptado</NavLink>
         <NavLink to ='./user' className="list">Volver</NavLink>
       </main>
        
    
  
    )
}