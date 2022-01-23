import React,{useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import BasicView from './components/BasicView/BasicView';
import Decrypted from './components/Decrypted'
import Encryted from './components/Encryted';
import UserLogin from './components/UserLogin/UserLogin';
import Logged from './components/Logged/Logged';
import About from './components/About/About'
import GenericUser from './components/GenericUser/GenericUser';
import SignIn from './components/SingIn/SignIn';


function App() {
 /////////////////////////////////////////////////////////////////
//state from GenericUser component
//define the state for the user input in GenericUser component
 const [stringtToEncript, setStringtToEncript]= useState('')//lift this state up to App/UserLogin component

 //////////////////////////////////////////////////////
 //state to lift up to the parent component( App, and down to UserLogin)
 //State for the SignIn component
const [credentials, setCredentials]= useState({
    name:'',
    lastName:''
})
//state for set auth
   const[authorisation,setAuthorisation]= useState(false)
   const logOut = () =>{
        setAuthorisation(false)//change state
        setCredentials(() => {
          return {
            name: '',
            lastName: ''
          }
        }
        )
    }


  return (
  <Router >
      {/* Application views are rendered here */}
      <Route  path ="/">{/* this is the first view when entering the app*/}
      <BasicView logOut = {logOut} />
      </Route>
      <Route path ='/userlogin'>
        <UserLogin
         state={stringtToEncript}
         stateSignIn={credentials}
         setCredentials= {setCredentials}
         authorisation= {authorisation}
         setAuthorisation= {setAuthorisation}
         />
      </Route>
      <Route path ='/desencriptado'>
        <Decrypted state={stringtToEncript} authorisation= {authorisation}/>
      </Route>
      <Route path='/encriptado'>
        <Encryted state={stringtToEncript} authorisation= {authorisation}/>
      </Route>
      <Route path='/logged'>
        <Logged />
      </Route>
      <Route path ='/about'>
        <About />
      </Route>
      <Route path ="/user" >
        <GenericUser
          setStringtToEncript={setStringtToEncript}
          credentials= {credentials}
          authorisation= {authorisation}
           />
    </Route>
    <Route path="/signin">
      <SignIn stateSignIn={credentials} onHandleSubmit={setCredentials}/>
     </Route> 
  </Router>
  
  );
}

export default App;
