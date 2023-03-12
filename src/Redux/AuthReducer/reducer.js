import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE, LOGOUT} from './actionTypes'
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,{type,payload}) => {
  switch(type){
    case LOGIN_SUCCESS:{
      return {...state,isAuth: true,token:payload, isLoading:false,isError:false}
    }
    case LOGIN_REQUEST:{
      return {...state,isAuth:false, isLoading:true,isError:false}
    }
    case LOGIN_FAILURE:{
      return {...state,isAuth:false, isLoading:false,isError:true}
    }
    case LOGOUT:{
      return {...state,isAuth:false, isLoading:false,isError:false}
    }
   default: 
   return state;
  }
  
};

export { reducer };