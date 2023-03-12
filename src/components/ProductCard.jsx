import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import {useDispatch, useSelector} from 'react-redux'
import { ADD } from '../Redux/CartReducer/cartAction'
import { useParams } from 'react-router-dom';

function ProductCard({image,category,title,price,addToCart}) {
  
//   const [data, setData]= useState([]);
    const dispatch= useDispatch();

//   const getdata = useSelector((state)=> state.cartreducer.carts);
  // console.log(getdata);

//  const {id}= useParams
//   const compare = ()=>{
//     let comparedata = getdata.filter((e)=>{
//       return e.id == id
//     });
//     setData(comparedata);
//   }

  

//   const dlt = (id)=>{
//     dispatch(DLT(id));
// }

// // remove one
// const remove = (item)=>{
//   dispatch(REMOVE(item))
// }

  

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