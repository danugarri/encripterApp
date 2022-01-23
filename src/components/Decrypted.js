import React from 'react';
import { NavLink,Redirect } from 'react-router-dom';
import './encript.css'


export default function Decrypted ({state,authorisation}) {
/* función para encriptar btoa('string') y atob('string')*/


    return (
        <main>
            {
            
                authorisation ? 
                <>
                <h1 >{atob(state)} </h1>
                <NavLink to ='./encriptado' className="list">Encriptado</NavLink>
                <NavLink to ='./user' className="list">Volver</NavLink>
                </>
                : <Redirect to= 'userLogin'></Redirect>
                
            }
        </main>
        
    )
}
