import React,{useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import BasicView from './components/BasicView/BasicView';
import Desencripted from './components/Desencripted'
import Encripted from './components/Encripted';
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
  return (
  <Router >
      {/* Application views are rendered here */}
      <Route path ="/">{/* this is the first view when entering the app*/}
      <BasicView />
      </Route>
      <Route path ='/userlogin'>
        <UserLogin state={stringtToEncript} onHandleChange={setStringtToEncript}/>
      </Route>
      <Route path ='/desencriptado'>
        <Desencripted state={stringtToEncript}/>
      </Route>
      <Route path='/encriptado'>
        <Encripted state={stringtToEncript} />
      </Route>
      <Route path='/logged'>
        <Logged />
      </Route>
      <Route path ='/about'>
        <About />
      </Route>
      <Route path ="/user" >
        <GenericUser state={stringtToEncript} onHandleChange={setStringtToEncript}/>
    </Route>
    <Route path="/signin">
      <SignIn stateSignIn={credentials} onHandleSubmit={setCredentials}/>
     </Route> 
  </Router>
  
  );
}

export default App;
