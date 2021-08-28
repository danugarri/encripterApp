import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Desencripted () {
/* función para encriptar btoa('string') y atob('string')*/
    return (<main>
                <h1> Te quiero</h1>
                <NavLink to ='./encriptado'>Encriptado</NavLink>
            </main>
        
    )
}
/*como me va a dar verguenza que otras personas vean esto, voy a ahcer un Login sólo para daniela. tendrán
que introducir su nombre completo y sólo si es daniela podrá ver la aplicación*/