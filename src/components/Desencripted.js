import React from 'react';
import { NavLink } from 'react-router-dom';
import './encript.css'


export default function Desencripted (props) {
/* función para encriptar btoa('string') y atob('string')*/
const initialWord= props.initialWord

    return (<main>
                <h1 >{initialWord} </h1>
                <NavLink to ='./encriptado' className="list">Encriptado</NavLink>
                <NavLink to ='./user' className="list">Volver</NavLink>
            </main>
        
    )
}
