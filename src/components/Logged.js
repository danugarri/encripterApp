import React from 'react';
import { NavLink } from 'react-router-dom';
import './Logged.css'

export default function Logged () {

    return (
        <header>
            <h1>Elige una opción</h1>
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