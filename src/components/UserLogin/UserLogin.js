import {React,useState} from 'react';
import './UserLogin.css'
//import Logged from './Logged'
import GenericUser from '../GenericUser/GenericUser';
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';

const genericUser={ name:'user',
     lastName:'user'

}

export default function UserLogin ({state,onHandleChange}) {
//state for
const[authorisation,setAuthorisation]= useState(false)
//state for generic user
//let[user,setUser] = useState('')
//let [lastName, setLastName] = useState('')
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
    console.log('imprimo userCredentials '+Object.values(inputCredentials))

        //if the user is a generic one
        if(Object.values(inputCredentials).join('')===Object.values(genericUser).join('')){
            setAuthorisation(() => true)
            //switch state to true which show the <Logged/> component
             setUserCredentials(prev=> {
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
        
        //////////////////////////////////////////
        //lo que estaba antes
    /*
    let userName = e.target.querySelector('input[name="username"]').value;
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
*/  
        
      
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