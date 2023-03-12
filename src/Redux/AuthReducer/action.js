import { LOGIN_FAILURE,LOGIN_SUCCESS,LOGIN_REQUEST,LOGOUT } from "./actionTypes"
const loginRequest=(payload)=>{
    return{
        type:LOGIN_REQUEST,
        payload:payload
    }
}
const loginSuccess=(payload)=>{
    return{
        type:LOGIN_SUCCESS,
        payload:payload
    }
}
const loginFailure=(payload)=>{
    return{
        type:LOGIN_FAILURE,
        payload:payload
    }
}
const logout=(payload)=>{
    return{
        type:LOGOUT,
        payload:payload
    }
}

export {loginFailure,loginRequest,loginSuccess,logout};