import React from 'react'
import jwt_decode from "jwt-decode"
//import Administrateur from  './adminComponents/Administrateur';
import { Navigate } from "react-router-dom";

function Admin() {
 
    const token=localStorage.getItem('token');
    if(token===null){
      return(
        <h2>Access denied</h2>
      )
    }
    else{
      const decoded=jwt_decode(token);
      if(decoded.userType==='admin'){
        return (
          <Navigate to="/adminn" />
        ) 
      }
      else{
        return(
          <h2>Permission denied !</h2> 
        )
      }
    }
   
}
export default Admin