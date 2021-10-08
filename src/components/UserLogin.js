import {React,useState} from 'react';
import './UserLogin.css'
//import Logged from './Logged'
import GenericUser from './GenericUser';
import swal from 'sweetalert';

// defined a generic user
const genericUser= ['user','user']

export default function UserLogin ({state,onHandleChange}) {
//state for
const[authorisation,setAuthorisation]= useState(false)
//state for generic user
let[user,setUser] = useState('')
let [lastName, setLastName] = useState('')

//selecting user input to authorise
const authorize= e => {
    e.preventDefault()
    let userName = e.target.querySelector(
      'input[name="username"]').value;
    let userlastname= e.target.querySelector('input[name="userlastname"]').value
  
    //if the user is a generic one
    if( userName===genericUser[0] && userlastname===genericUser[1] ){
        setUser(() => userName)
        setAuthorisation(() => true)
         //switch state to true which show the <Logged/> component
        setLastName( () => userlastname)
    }
    //if this user is not registered
    if( (userName !==genericUser[0] && userlastname===genericUser[1])||
    (userName !==genericUser[0] && userlastname !==genericUser[1]) ||
    (userName ===genericUser[0] && userlastname!==genericUser[1])){
        setAuthorisation(false)
        swal(`Lo sentimos ${userName} ${userlastname} no estás registrado`)

        //function to reset the input field
        function reset (e) {
           e.target.querySelector('input[name="username"]').value= ''
           e.target.querySelector('input[name="userlastname"]').value =''

        }
        //call reset function
        reset(e)
    }
}
// variable to show if there is not authorised user
const login= (<form onSubmit={authorize}>
    <label htmlFor="username" >Nombre</label>
    <input  name="username" type="text" autoFocus/>
    <label htmlFor="userlastname">Apellidos</label>
    <input  name="userlastname" type="text"/><br></br>
    <input type="submit" value="Iniciar sesión"/>
</form>)

//event listener to logout when click on button tag
const logOut = () =>{
    setAuthorisation(false)//change state
}

//when type the correct userName show logged 
    return (
        <div>{ !authorisation ? 
            <div> {login}
                <h4> Prueba con: </h4>
                <p>Nombre: user</p>
                <p>Apellidos: user</p> 
            </div> :
                <div>
                <h4>Hola {user} {lastName}</h4>
                <GenericUser  state={state} onHandleChange={onHandleChange}/>{/*props to pass down to GenericUser*/}
                <button id ="logOut" onClick={logOut}>Salir</button> 
                </div>
            }</div>
    )
}