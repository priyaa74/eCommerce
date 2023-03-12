import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  const inputStyle={
    border:'transparent',
    borderBottom:'2px solid rgb(12, 148, 182)',
    margin: '10px auto',
}

  return (
    <div style={{display:'flex',flexDirection:'row',gap:'40px',margin:'120px 120px'}}>
    <div style={{backgroundColor:'rgb(12, 148, 182)',width:'40%',height:'500px'}} >
</div>
         <div>
         <div style={{backgroundColor:'rgb(12, 148, 182)',borderRadius:'50%',width:'15%', height:'15%'}}></div>
            <h3>APP NAME</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      
        <form style={{display:'flex',flexDirection:'column'}}>
            <input style={inputStyle} type="text" placeholder='Username' />
            <input style={inputStyle}  type="text" placeholder='Fullname' />
            <input style={inputStyle}  type="email" placeholder='Email'/>
            <input style={inputStyle}  type="password" placeholder='Password'/>
            <input style={inputStyle}  type="password" placeholder='Confirm password' />
            <input style= {{backgroundColor:'rgb(12, 148, 182)',color:'white',margin: '10px auto', border:'transparent',width:'40%',borderRadius:'5px'}}  type="submit" value="Register" />
            <p style={{textAlign:'center'}}>Already have an account? <Link style={{textDecoration:"none" }} to="/"> Login </Link> </p>
        </form> 
        </div>
    </div>
  )
}

export default SignUp