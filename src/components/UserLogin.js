import {React,useState} from 'react';
import './UserLogin.css'
import Logged from './Logged'
import GenericUser from './GenericUser';

// defined a generic user
const genericUser= ['user','user']
export default function UserLogin () {
/* sólo podrá entrar daniela*/
const[authorisation,setAuthorisation]= useState(false)
//state for generic user
const[user,setUser] = useState('')

//selecting user input to authorise
const authorize= e => {
    //e.preventDefault()
    const userName = e.target.querySelector(
      'input[name="username"]').value;
    const userlastname= e.target.querySelector('input[name="userlastname"]').value
      //if the user is daniela
    if((userName==='Daniela' && userlastname==='Molines Ojeda')|| (userName==='daniela' && userlastname==='molines ojeda')){
    setAuthorisation(true)
    setUser( () =>  userName)
         //switch state to true which show the <Logged/> component
    }
    //if the user is a generic one
    if( userName===genericUser[0] && userlastname===genericUser[1] ){
        setUser(() => userName)
        setAuthorisation(() => true)
    }
    else if( (userName !==genericUser[0] && userlastname===genericUser[1])||
    (userName !==genericUser[0] && userlastname !==genericUser[1]) ){
        setAuthorisation(false)
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

//when input the correct userName show logged 
    return (
        <div>{((!authorisation && user!=='Daniela')|| (!authorisation && user!=='daniela')) ? login  : 
            (<div>
                <h4>Hola {user}</h4>
            <Logged /> <GenericUser />
           <button onClick={logOut}>Salir</button> 
            </div>) ||  (<div>
                <h4>Hola {user}</h4>
           <GenericUser />
           <button onClick={logOut}>Salir</button> 
            </div>) 
             
            }</div>
        
    )
}