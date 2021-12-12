import React, {useState} from 'react';
import { Redirect, NavLink } from 'react-router-dom';



const GenericUser=  ({state,},submitState,setSubmit) => {
    const [process, setProcess] = useState(false);
    /*
//defined the state for the user input in GenericUser component
 const [stringtToEncript, setStrintToEncript]= useState('')//lift this state up to UserLogin component and then to App*/
/*//state for submit
const [submit,setSubmit]= useState('')
*/
//event handler function
/*const handleChange = (event) => {
    event.preventDefault()
        //input captured
    const initString = event.target.value
    console.log( initString)
    onHandleChange(btoa(initString))//replaced original setState with the prop sent from UserLogin
}
*/
//submit evnt handler
const handleSubmit= (event) =>{
    event.preventDefault()
    const input =event.target.querySelector('input[name ="encriptar"]').value
    console.log(input)
    setSubmit(btoa(input))
}
//handlerClick to set process true
const handlerClickProcess = () =>setProcess(true);
if(process === true){
    <Redirect to ="encriptado" />
}

const userView= (
    <main>
        <h1> Encriptemos algo</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor ="encriptar">Introduce una palabra para encriptar</label>
            <input name ="encriptar" type="text" />{/*hay que cambiar el evento porque al cambiar de path se pierde el evento*/}
            <input type="submit" value="Procesar" onClick ={handlerClickProcess}/>
            <NavLink to ="encriptado"  > Ver detalles</NavLink>
            {console.log(process)}
        </form>
    </main>
)

    return (<div>
        {userView}{/*let's encript*/}
        {/*this line show the encripted word {state}*/}
        {console.log(submitState)}
    </div> 
    )
}
export default GenericUser

   