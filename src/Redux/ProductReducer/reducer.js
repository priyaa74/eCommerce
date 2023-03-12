const initialState={
    products:[],
};

const reducer=(state= initialState,action)=>{
    switch(action.type){
        case "PRODUCTS":
          return  state={
                ...state,
                products:action.data,
            };
            break;
    }
    
    return state;
}

export {reducer};