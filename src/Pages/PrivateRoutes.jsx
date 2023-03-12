import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function PrivateRoutes({children}){
  const Auth = useSelector((storedata)=>{
    return storedata.AuthReducer.isAuth ;
  })
    if(Auth){
        return children;
    }
    else{
        alert("Please Login to access!");
        return <Navigate to="/" />
    }
     
    
}