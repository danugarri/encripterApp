import React, { useState } from 'react';



export default function GenericUser () {
    //define the state for the user input
    const [stringtToEncript, setStrintToEncript]= useState('')
   
//event handler function
const encript = (event) => {
   
    //input captured
const string = event.target.value
console.log( string)
setStrintToEncript(string)
}

//event listener to logout when click on button tag
/*const logOut = () =>{
    setUser(false)//change state
}
*/

const userView= (<main>
    <h1> Encriptemos algo</h1>
    <form >
        <label htmlFor ="encriptar">Introduce una palabra para encriptar</label>
        <input name ="encriptar" type="text" onChange={encript}/>
      
    </form>
    <h4>{btoa(stringtToEncript)}</h4>
  
</main>)
    return (<div>
        {userView }
    </div>
       
        
    )
}