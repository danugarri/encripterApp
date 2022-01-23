import {React} from 'react';
import './UserLogin.css'
//import Logged from './Logged'
import swal from 'sweetalert';
import { NavLink, Redirect } from 'react-router-dom';

//inititialised credentials for a generic user
const genericUser={ 
    name:'user',
    lastName:'user'
}
export default function UserLogin ({stateSignIn,setCredentials,authorisation, setAuthorisation}) {
    
  
    //selecting user input to authorise
    const authorize= e => {
        e.preventDefault()

        const inputCredentials={
            name:e.target.querySelector('input[name="username"]').value,
            lastName:e.target.querySelector('input[name="userlastname"]').value
        }
        const inputCredentialsValues=Object.values(inputCredentials)

            //if the user is a generic one
            if(inputCredentialsValues.join('')===Object.values(genericUser).join('')){
                setAuthorisation(() => true)
                //switch state to true which show the <Logged/> component
                setCredentials(()=> {
                    return(
                {
                    name:e.target.querySelector('input[name="username"]').value,
                    lastName: e.target.querySelector('input[name="userlastname"]').value
                })})
            }  
            //if the user is just registered
            
            else if(Object.values(stateSignIn).join('')!==''){
                    setAuthorisation(() => true)
                    //switch state to true which show the <Logged/> component
                setCredentials(()=> {
                    return(
                {
                    name:e.target.querySelector('input[name="username"]').value,
                    lastName: e.target.querySelector('input[name="userlastname"]').value
                })})
                    }  
            //if this user is not registered
            else if((inputCredentialsValues.join('')!==Object.values(genericUser).join(''))||(Object.values(stateSignIn).join('')==='')){
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
        <NavLink to='./signin'>Registrarse</NavLink> 
    </form>)

 console.log(authorisation)
//when type the correct userName show logged 
    return (
        <div>
            {
             !authorisation ? 
            <div>
                {login}  
               
                <h4>Si no estás registrado prueba con: </h4>
                <p>Nombre: user</p>
                <p>Apellidos: user</p> 
            </div> :
                <Redirect to= 'user'></Redirect>
            }
        </div>
    )
}