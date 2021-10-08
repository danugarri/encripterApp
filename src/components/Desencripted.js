import React from 'react';
import { NavLink } from 'react-router-dom';
import './encript.css'


export default function Desencripted ({state}) {
/* función para encriptar btoa('string') y atob('string')*/


    return (<main>
                <h1 >{atob(state)} </h1>
                <NavLink to ='./encriptado' className="list">Encriptado</NavLink>
                <NavLink to ='./user' className="list">Volver</NavLink>
            </main>
        
    )
}
