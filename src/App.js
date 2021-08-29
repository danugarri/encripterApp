import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import BasicView from './components/BasicView';
import Desencripted from './components/Desencripted'
import Encripted from './components/Encripted';
import UserLogin from './components/UserLogin';
import Logged from './components/Logged';
import About from './components/About'
import GenericUser from './components/GenericUser';

function App(props) {
  console.log(props)
  return (
    
    
  <Router >
      {/* Application views are rendered here */}
      <BasicView />
      <Route path ='/userlogin'>
        <UserLogin />
      </Route>
      <Route path ='/desencriptado'>
      <Desencripted initialWord='palabra sin encriptar'/>
      </Route>
      <Route path='/encriptado'>
        <Encripted  initialWord='palabra sin encriptar'/>{/*it receives prop as parent component*/}
      </Route>
      <Route path='/logged'>
        <Logged />
      </Route>
      <Route path ='/about'>
        <About />
      </Route>
      <Route path ="/user" >
        <GenericUser />
    </Route>
  </Router>
  
  );
}

export default App;
