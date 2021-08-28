import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import BasicView from './components/BasicView';
import Desencripted from './components/Desencripted'
import Encripted from './components/Encripted';
import UserLogin from './components/UserLogin';
import Logged from './components/Logged';
import About from './components/About'

function App() {
  return (
    
  <Router >
      {/* Application views are rendered here */}
      <BasicView />
      <Route path ='/userlogin'>
        <UserLogin />
      </Route>
      <Route path ='/desencriptado'>
      <Desencripted />
      </Route>
      <Route path='/encriptado'>
        <Encripted />
      </Route>
      <Route path='/logged'>
        <Logged />
      </Route>
      <Route path ='/about'>
        <About />
      </Route>
    
  </Router>
  );
}

export default App;
