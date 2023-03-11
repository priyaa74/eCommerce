import React from 'react'
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa'
import { IconContext } from "react-icons";


function Navbar({ count = 0 }) {
    return (
        <div className='Nav'>
            <div className='logo'>Logo</div>
            <div className='cart'>
                    <IconContext.Provider
                     value={{ color: " rgb(12, 148, 182)", size:'3em', className: "navIcon" }}>
                        <div>
                            <FaShoppingCart />

                        </div>
                    </IconContext.Provider>
                <div className='badge'>{count}</div>
            </div>

        </div>
    )
}

export default Navbar