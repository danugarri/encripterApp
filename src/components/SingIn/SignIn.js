import React,{useState} from "react";
import swal from "sweetalert";


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
    console.log(event.target.querySelector('input[name="name"]').value)
    console.log(event.target.querySelector('input[name="lastname"]').value)
    let userName=event.target.querySelector('input[name="name"]').value
    let userlastname=event.target.querySelector('input[name="lastname"]').value

     const inputCredentials={
        name:event.target.querySelector('input[name="name"]').value,
        lastName:event.target.querySelector('input[name="lastname"]').value
    }

    console.log('has introducido '+Object.values(inputCredentials))
    //managing registered users
    setCredentials(prev =>{//function to be replaced with the props from UserLogin
        
        if(Object.values(inputCredentials).join('')===''){
            swal ('NO has introducido ningún dato')
            return({...prev})
        }
            else{
                return (
                {   ...prev,
                    name:userName,
                    lastName:userlastname
                })
                
            }
        })
            
    //function to reset the input field
    function reset (event) {
       event.target.querySelector('input[name="name"]').value= ''
       event.target.querySelector('input[name="lastname"]').value =''

    }
    //call reset function
    reset(event)
    
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
            {Object.values(credentials)}
        </main>
    )
}

export default SignIn