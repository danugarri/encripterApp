import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Home () {

    return (
        
        <header style={{margin:'30px auto'}}>
        <h1> The Encripter App</h1>
        <NavLink to ='./'  className="nav-basicView">Home</NavLink>
        <NavLink to ='./userLogin'  className="nav-basicView"> Iniciar Sesión</NavLink>
        <NavLink to ='./about'  className="nav-basicView"> About</NavLink>
        
   </header>
             
    
    )
}