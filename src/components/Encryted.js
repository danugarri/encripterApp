import React from 'react';
import { NavLink,Redirect } from 'react-router-dom';
import './encript.css'




export default function Encripted ({state,authorisation}) {
/* function to encript: btoa('string') */

 
    return (
      <main>
        {
              authorisation ? 
              <>
            <h1> {state}</h1>
              <NavLink to ='./desencriptado' className='list'> Desencriptado</NavLink>
              <NavLink to ='./user' className="list">Volver</NavLink>
              </>
              : <Redirect to= 'userLogin'></Redirect>
              
          }
       </main>
        
    
  
    )
}