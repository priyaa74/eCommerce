import React, { useEffect, useState } from 'react'
import './ProductCard.css'


function ProductCard({image,category,title,price,addToCart}) {


  

    return(
        <div className='productContainer'>
            <div className='imgBox'>
                <img className='imgClass' src={image} alt={category} />
            </div>
            <div className='detailsBox' >
               <h4>{category}</h4> 
               <p>{title}</p>
               <p style={{color:'rgb(12, 148, 182)'}}>Rs. {price}</p>
               <h3
                style={{color:'white',backgroundColor:"rgb(12, 148, 182)",cursor:'pointer', textAlign:"center"}}>{addToCart}</h3>
            </div>
        </div>
    
    )
  
}

export default ProductCard