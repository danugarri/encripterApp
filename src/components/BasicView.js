import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BasicView () {

    return (
        <header style={{margin:'30px'}}>
             <h1> Bienvenido a mi App</h1>
             <ul style ={{margin:'20px',display:'block'}} >
             <NavLink to ='./userLogin' style ={{margin:'20px',display:'block'}}> Iniciar Sesión</NavLink>
             <NavLink to ='./about' style ={{margin:'20px'}}> About</NavLink>
             
             </ul>
        </header>
    
    )
}