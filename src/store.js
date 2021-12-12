import { createStore } from "redux";
// import { Provider } from "react"; esto se usaría en el app.js para envolver el componente <App /> con <Provider></Provider>
import { useSelector } from "react-redux";

export const store = createStore({
   reducer1: () => 'en el caso de que vaya a tener varios reducers',
    reducer : () => 'si sólo voy a tener 1. no pasar 1 objeto sino 1 argumeneto reducer'
})


// ** Initial State and Reducer **

//Initial State

const initialState= {
     genericUser:{
      name: "user",
      lastname: "user"
    } ,
    userCredentials :{
         name:'',
        lastName:''
    },
    authorisation: false,
    process: false,
    stringtToEncript: '',
    submit: '',
   
  }
  
 
 //Reducer
  /*
  export const reducer = (state = initialState,action) => {
    switch(action.type) {
      case 'registry' : {
        //determina una recarga
        return  {
          ...state,
        userCredentials:action.payload//lo que viene de la acción más abajo
        }
      }
      default :
      return null
    }
}
*/

  //REACT CODE

//RENDER function to display component
/*const render = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <Ui  state= {store.getState()}/>
      <Instructions />
    </React.StrictMode>,
      document.getElementById('root')
  )
}
*/
  
//function component
  /*const Ui = (props) =>{
      const state= props.state

      //function listeners
        //example
      const gotSupplies = () =>{
          store.dispatch(actionGather)

      }
      */




  
  
//call to render() function
//render()

//subscribe render() function to store

//store.subscribe(render)


//Actions

  //example
   const setRegisteredUser= {
    type: 'registry',
    payload: {
      userCredentialsName: "lo que venga del submit",
       userCredentialsLastname : "igual"
    }

  }
