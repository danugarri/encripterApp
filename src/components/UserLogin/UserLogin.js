import {React,useState} from 'react';
import './UserLogin.css'
//import Logged from './Logged'
import GenericUser from '../GenericUser/GenericUser';
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';

//inititialised credentials for a generic user
const genericUser={ 
    name:'user',
    lastName:'user'

}

export default function UserLogin ({state,onHandleChange}) {
//state for
const[authorisation,setAuthorisation]= useState(false)
//state for generic user
//state with object
const [userCredentials,setUserCredentials]=useState({ 
     name:'',
     lastName:''
    })



//selecting user input to authorise
const authorize= e => {
    e.preventDefault()

    const inputCredentials={
        name:e.target.querySelector('input[name="username"]').value,
        lastName:e.target.querySelector('input[name="userlastname"]').value
    }

        //if the user is a generic one
        if(Object.values(inputCredentials).join('')===Object.values(genericUser).join('')){
            setAuthorisation(() => true)
            //switch state to true which show the <Logged/> component
             setUserCredentials(()=> {
                 return(
             {
                 name:e.target.querySelector('input[name="username"]').value,
                 lastName: e.target.querySelector('input[name="userlastname"]').value
             })})
        }  
        //if this user is not registered
        
        if(Object.values(inputCredentials).join('')!==Object.values(genericUser).join('')){
            setAuthorisation(false)
            swal(`Lo sentimos ${inputCredentials.name} ${inputCredentials.lastName}, no estás registrado`)
              //function to reset the input field
        function reset (e) {
           e.target.querySelector('input[name="username"]').value= ''
           e.target.querySelector('input[name="userlastname"]').value =''
        }
       
        //call reset function
        reset(e)
        }
    }

// variable containing the view to show if there is not authorised user
const login= (<form onSubmit={authorize}>
    <label htmlFor="username" >Nombre</label>
    <input  name="username" type="text" autoFocus/>
    <label htmlFor="userlastname">Apellidos</label>
    <input  name="userlastname" type="text"/><br></br>
    <input type="submit" value="Iniciar sesión"/>
    <NavLink to='./signin'>Registrase</NavLink> 
</form>)

//event listener to logout when click on button tag
const logOut = () =>{
    setAuthorisation(false)//change state
}

//when type the correct userName show logged 
    return (
        <div>{ !authorisation ? 
            <div>
                {login}  
               
                <h4>Si no estás registrado prueba con: </h4>
                <p>Nombre: user</p>
                <p>Apellidos: user</p> 
            </div> :
                <div>
                <h4>Hola  {userCredentials.name} {userCredentials.lastName}</h4>
                {console.log('el saludo a :'+Object.values(userCredentials))}
                <GenericUser  state={state} onHandleChange={onHandleChange}/>{/*props to pass down to GenericUser*/}
                <button id ="logOut" onClick={logOut}>Salir</button> 
                </div>
            }</div>
    )
}