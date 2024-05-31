/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import {  } from 'react-loader-spinner'
import LoadingSpinner from "../components/LoadingSpinner";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location= useLocation()


if(loading){
return  <LoadingSpinner/>
}


   if (!user) {
    return <Navigate to='/login' state={location?.pathname || '/'}/>
   }
    
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoutes;