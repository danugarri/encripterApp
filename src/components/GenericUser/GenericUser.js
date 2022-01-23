import React from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';



const GenericUser=  ({setStringtToEncript,credentials,authorisation}) => {


    const {name,lastName} = credentials;
    //event handler function
    const handleChange = (event) => {
        event.preventDefault()
            //input captured
        const initString = event.target.value
        console.log( initString)
        setStringtToEncript(btoa(initString))//replaced original setState with the prop sent from UserLogin
    }
    //Encripted word:

    const userView= (<main>
        <span>Hola {name} {lastName}</span>
        <h1> Encriptemos algo</h1>
        <form >
            <label htmlFor ="encriptar">Introduce una palabra para encriptar</label>
            <input name ="encriptar" type="text" onChange={handleChange}/>
            <NavLink to ="encriptado"  > Ver detalles</NavLink>
        
        </form>
    </main>)

    return (
    <div>
        { authorisation ?
            userView
        : <Redirect to= 'userLogin'></Redirect>
        }
     
    </div> 
    )
}
export default GenericUser

   