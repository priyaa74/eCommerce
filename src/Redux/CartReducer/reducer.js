let initialState= {
    carts: []
};


 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART":

        const ItemIndex = state.carts.findIndex((item)=> item.id === action.payload.id);

        if(ItemIndex >= 0){
            state.carts[ItemIndex].qnty +=1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            const temp = {...action.payload,qnty:1}
             return {
                ...state,
                carts: [...state.carts, temp]
            }
        }

           

        case "RMV_CART":
            const data = state.carts.filter((el)=>el.id !== action.payload); 
            // console.log(data);

            return {
                ...state,
                carts:data
            }

        case "RMV_ONE":
            const ItemIndex_dec = state.carts.findIndex((item)=> item.id === action.payload.id);
   
            if(state.carts[ItemIndex_dec].qnty >= 1){
                const dltitems = state.carts[ItemIndex_dec].qnty -= 1
                console.log([...state.carts,dltitems]);

                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else if(state.carts[ItemIndex_dec].qnty === 1 ){
                const data = state.carts.filter((el)=>el.id !== action.payload);

                return {
                    ...state,
                    carts:data
                }
            }

        default:
            return state
    }
}

export {reducer};