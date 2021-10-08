import React from 'react';
import { NavLink } from 'react-router-dom';
import './BasicView.scss'


export default function BasicView () {

    return (
        <header className="basicView">
             <h1> The Encripter App</h1>
             <NavLink to ='./'  className="nav-basicView">Home</NavLink>
             <NavLink to ='./userLogin'  className="nav-basicView"> Iniciar Sesión</NavLink>
             <NavLink to ='./about'  className="nav-basicView"> About</NavLink>
            <NavLink to ='./signin'  className="nav-basicView"> Registrarse</NavLink>
             
        </header>
            
             
             
    
    )
}