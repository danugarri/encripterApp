import React from 'react';
import { NavLink } from 'react-router-dom';
import './Logged.css'

export default function Logged () {

    return (
        /*Esta vista siempre hace match y por eso siempre renderiza*/
        <header>
            <h1>Elige una opción</h1>
        {/*aquí se suele utilizar para mostrar un menú con los links a los componentes*/}
        <ul>
        <li>
          
           <NavLink to='/desencriptado'> Desencriptado</NavLink>
        </li>
        <li>
        <NavLink to='/encriptado'> Encriptado</NavLink>
           
        </li>
        </ul>
        </header>
        
    )
}