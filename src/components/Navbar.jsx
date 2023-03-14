import React, { useState } from 'react'
import './Navbar.css';
import { useSelector,useDispatch } from 'react-redux';
import { FaShoppingCart,FaUserCircle } from 'react-icons/fa'
import { IconContext } from "react-icons";
import { logout } from '../Redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const UserMenu= ()=> { 
    const dispatch= useDispatch();
    const nav= useNavigate();
    return(<div className='user'>
    <p onClick={()=>{dispatch(logout())
    nav('/')}}>Logout</p>
   <Link style={{textDecoration:'none',color:'rgb(12, 148, 182)'}} to='/profile'> <p>Profile</p></Link>
    <Link style={{textDecoration:'none',color:'rgb(12, 148, 182)'}} to='/codeChallenge'><p>Code Challenge</p></Link>
</div>)
}

function Navbar() {
    const [showDiv, setShowDiv]= useState(false);
   
    const handleClick=()=> {
        setShowDiv(!showDiv);
        }
    

    const getData= useSelector((state)=> state.CartReducer.carts.length)
    
   
    return (
        <>
        <div className='Nav'>
            <div className='logo'>Logo</div>
            <div className='cart'>
                    <IconContext.Provider
                     value={{ color: " rgb(12, 148, 182)", size:'3em', className: "navIcon" }}>
                        <div>
                          <Link to='/cart'> <FaShoppingCart /></Link> 
                             <FaUserCircle onClick={handleClick}/>
                            
                        </div>
                    </IconContext.Provider>
                <div className='badge'>{getData}</div>
            </div>
        </div>
         {showDiv ? <UserMenu/> : null}
         </>
    )
}



export default Navbar