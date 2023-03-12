import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import {loginSuccess,loginFailure,loginRequest} from '../Redux/AuthReducer/action'
import { useNavigate } from 'react-router-dom';
import {reduxStore} from '../Redux/Store'
function Login() {
    const inputStyle={
        border:'transparent',
        borderBottom:'2px solid rgb(12, 148, 182)',
        margin: '10px auto',
    }

const [state,setState]= useState({
    username:"",
    password:""
})
const dispatch= useDispatch();
const nav= useNavigate();
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
    dispatch(loginSuccess(result.token))
    nav('/home');

    }catch(error){
        dispatch(loginFailure());
    console.log(error);
    alert("Invalid credentials! Try again");
    }
}

  return (
    <div style={{display:'flex',flexDirection:'row',gap:'40px',margin:'120px 120px'}}>
        <div style={{backgroundColor:'rgb(12, 148, 182)',width:'40%',height:'400px'}} >
    </div>
           <div >
            <div style={{backgroundColor:'rgb(12, 148, 182)',borderRadius:'50%',width:'15%', height:'15%'}}></div>
            <h3>APP NAME</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <form style={{display:'flex',flexDirection:'column'}} onSubmit={handleSubmit}>
            <input style={inputStyle} type="text" placeholder='Username' 
            onChange={(e)=>{setState({...state,username: e.target.value})}} />
            <input style={inputStyle} type="password" placeholder='Password' 
            onChange={(e)=>{setState({...state,password:e.target.value})}} />
            <input style={{backgroundColor:'rgb(12, 148, 182)',color:'white',margin: '10px auto', border:'transparent',width:'40%',borderRadius:'5px'}} type="submit" value="Login" />
            <p style={{textAlign:'center'}}>Don't have an account?
                 <Link style={{textDecoration:"none"}} to= '/signup'>Sign up</Link> </p>
        </form>
        </div>
    </div>
  )
}

export default Login