import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { DLT,ADD,REMOVE} from '../Redux/CartReducer/cartAction'
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'

function Cart() {
    const [data, setData]= useState([]);

    const {id}= useParams();
    const dispatch= useDispatch();

    const getData= useSelector((state)=> state.CartReducer.carts)
    console.log(getData);

    const compare=()=>{
        let compareData= getData.filter((e)=>{
            return e.id == id;
        })
        setData(compareData);
    }

    const sendData=(e)=>{
        dispatch(ADD(e));
    }

    const dlt=(id)=>{
        dispatch(DLT(id));
    }

    const remove=(item)=>{
        dispatch(REMOVE(item))
    }

    useEffect(()=>{
        compare();
    },[id])

  return (
    <div>
    <div className='productTitle'>
    <h2>My carts</h2>
    </div>
    <div className='products'>
     { getData.length===0 ? <h1 style={{textAlign:'center'}}>Your Cart is empty...</h1>:  getData.map((ele,index)=>{
        return(
            <div key={ele.id}>
                <ProductCard 
                element={ele}
                image={ele.image}
                category={ele.category}
                title={ele.title}
                price={ele.price}
                addToCart={ <div style={{cursor:"pointer",background:"rgb(12, 148, 182)",color:"white"}}>
                <span style={{fontSize:24, padding:"0 20px"}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                <span style={{fontSize:22, padding:"0 20px" }}>{ele.qnty}</span>
                <span style={{fontSize:24, padding:"0 20px"}} onClick={()=>sendData(ele)}>+</span>

                </div>}/>
               
            </div>
        )
     })}
     
    </div>
    <div style={{backgroundColor:'rgb(12, 148, 182)', color:'white', marginTop:"120px",textAlign:'center',padding:'10px',width:"15%",marginLeft:'85%'}}>Checkout<MdKeyboardDoubleArrowRight/>  </div>
</div>
  )
}

export default Cart