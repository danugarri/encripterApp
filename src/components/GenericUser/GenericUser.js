import React from 'react';
import { NavLink } from 'react-router-dom';



const GenericUser=  ({setStringtToEncript,credentials}) => {


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

    return (<div>
        {userView}{/*let's encript*/}
        {/*this line show the encripted word {state}*/}
    </div> 
    )
}
export default GenericUser

   