const productAction=(productData, dispatch)=>{
    if(productData.length === 0){
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            dispatch({
                type:"PRODUCTS",
                data,
            });
        })
    }
}

export default productAction;