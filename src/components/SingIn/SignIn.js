import React,{useState} from "react";


const SignIn= ()=>{
//this component wil be rendered by App and i need to add a NavLink component in UserLogin

//state to lift up to the parent component( App, and down to UserLogin)
const [credentials, setCredentials]= useState({
    name:'',
    lastName:''
})
//submit event handler
const handleSubmit =(event)=>{
    event.preventDefault()
    //console.log(event.target.querySelector('input[name="name"]').value)
    //console.log(event.target.querySelector('input[name="lastname"]').value)
    let userName=event.target.querySelector('input[name="name"]').value
    let userlastname=event.target.querySelector('input[name="lastname"]').value
    //managing registered users
    setCredentials(prev =>{//function to be replaced with the props from UserLogin
        //console.log('las credenciales introducidas son : '+Object.values(credentials))
        if(Object.values(credentials)!==''){

            return (
                {...prev,
                name:userName,
                lastName:userlastname
                })}
                
        
        else{
            return ('NO has introducido ningún dato')
        }
    }
    )
     //function to reset the input field
        function reset (event) {
           event.target.querySelector('input[name="name"]').value= ''
           event.target.querySelector('input[name="lastname"]').value =''

        }
        //call reset function
        reset(event)
    
    console.log(credentials)
}
    return(
        <main>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="name" >Nombre</label>
                <input type="text" name="name" />
                <label htmlFor="lastname"> Apellido</label>
                <input type="text" name="lastname" /><br/>
                <input type="submit" value="Registrarse"/>
            </form>
            <h1>Tus credenciales son: </h1>
            <ul>
                {Object.entries(credentials).map((elem,index)=><li key={index}>{elem}</li>)}    
            </ul>
            {console.log('las credenciales introducidas son : '+Object.values(credentials))}
            {console.log('el estado es '+ Object.values(credentials))}
        </main>
    )
}

export default SignIn