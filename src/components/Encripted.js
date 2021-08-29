import React from 'react';
import { NavLink } from 'react-router-dom';
import './encript.css'



export default function Encripted (props) {
/* función para encriptar btoa('string') */
const initialWord= props.initialWord // here it receives the props initialWord passed as a prop to <Encripted /> in App.js
 const encodedString= btoa(initialWord)
 
    return (
       <main>
         <h1>{encodedString}</h1>
         <NavLink to ='./desencriptado' className='list'> Desencriptado</NavLink>
         <NavLink to ='./user' className="list">Volver</NavLink>
       </main>
        
    
  
    )
}