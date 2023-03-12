import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Carousel/Slider'
import Products from '../components/Products'
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Products/>
       <Link style={{textDecoration:'none'}} to='/products'> <div style={{backgroundColor:'rgb(12, 148, 182)', color:'white', marginTop:"120px",textAlign:'center',padding:'10px',width:"15%",marginLeft:'85%'}}>All Products<MdKeyboardDoubleArrowRight/>  </div></Link>
    </div>
  )
}

export default HomePage