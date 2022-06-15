import React from 'react'
import jwt_decode from "jwt-decode"
import {Navigate} from 'react-router-dom'


 
function Redirector() {
    const token=localStorage.getItem('token');
    const decoded=jwt_decode(token);
    return (
        <>
        {decoded.isadmin==="admin"?<Navigate to="/adminn" replace={true} />:
        decoded.isadmin==="encadrant"?<Navigate to="/encadrant" replace={true} />:
        decoded.isadmin==="stagiaire"?<Navigate to="/stagiaire" replace={true} />:
        <p>Access denied !</p>}</>
    )
    
}

export default Redirector