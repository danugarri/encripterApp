import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BasicView () {

    return (
        <header style={{margin:'30px auto'}}>
             <h1> The Encripter App</h1>
             <NavLink to ='./userLogin' style ={{margin:'20px 0',display:'block'}}> Iniciar Sesión</NavLink>
             <NavLink to ='./about' style ={{margin:'20px 0'}}> About</NavLink>
        </header>
            
             
             
    
    )
}