import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
         <div>
            <img src="" alt="" />
            <h3>APP NAME</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <form >
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Fullname' />
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input type="password" placeholder='Confirm password' />
            <input type="submit" value="Register" />
            <p>Already have an account? <Link style={{textDecoration:"none" }} to="/"> Login </Link> </p>
        </form> 
    </div>
  )
}

export default SignUp