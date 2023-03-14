import React, { useEffect, useState } from 'react'
import productAction from '../Redux/ProductReducer/productAction'
import {useDispatch,useSelector} from 'react-redux'
import ProductCard from './ProductCard';
import './ProductCard.css'
import { ADD,DLT,REMOVE } from '../Redux/CartReducer/cartAction';

function Products() {
    const dispatch= useDispatch();

    const productData= useSelector((storeData)=>{
        return storeData.ProductReducer.products;
    })

    useEffect(()=>{
        productAction(productData,dispatch)
    },[])
  return (
    <div>
        <div className='productTitle'>
        <h1 style={{textAlign:'center', margin:'80px auto',fontSize:'40px'}}>Products</h1>
        </div>
        <div className='products'>
         {productData.map((ele,index)=>{
            return(
                <div key={ele.id}>
                    <ProductCard 
                    element={ele}
                    image={ele.image}
                    category={ele.category}
                    title={ele.title}
                    price={ele.price}
                    addToCart= { 
                        <div onClick={()=>dispatch(ADD(ele))}>Add to Cart</div> }/>
                </div>
            
            )
         })}
        </div>
    </div>
  )
}

export default Products