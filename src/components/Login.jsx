import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {

const [state,setState]= useState({
    username:"",
    password:""
})

const handleSubmit= async(event)=>{
    event.preventDefault();
    try{
    let response= await fetch("https://fakestoreapi.com/auth/login",{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(state)
    });

    let result= await response.json();
    console.log(result);
    // navigate to homepage

    }catch(error){
    console.log(error);
    alert("Invalid credentials! Try again");
    }
}

  return (
    <div>
        <div>
            <img src="" alt="" />
            <h3>APP NAME</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Username' 
            onChange={(e)=>{setState({...state,username: e.target.value})}} />
            <input type="password" placeholder='Password' 
            onChange={(e)=>{setState({...state,password:e.target.value})}} />
            <input type="submit" value="Login" />
            <p>Don't have an account?
                 <Link style={{textDecoration:"none"}} to= '/signup'>Sign up</Link> </p>
        </form>
    </div>
  )
}

export default Login