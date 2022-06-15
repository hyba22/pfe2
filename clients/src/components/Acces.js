import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {Navigate} from 'react-router-dom'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { styled } from '@material-ui/styles';
import Login from './Login';

function Acces() {
  useEffect(()=>{localStorage.clear()
  setLog(false)
  },[])

const [email,setEmail]=useState("")
const [password,setPassword]=useState("");
const [error,setError]=useState(false);
const [log,setLog]=useState(false);

const reset=()=>{

    setEmail("");
    setPassword("");
    setError("");
}
const submit=()=>{
    axios.post("http://localhost:5000/users/login",{email,password})
    .then(res => {
        if(res.status===200){
            localStorage.setItem('token',res.data.token);
            setLog(true);
        }
        else{
          const timer = setTimeout(() => {
            setError(false)
          }, 3000);
        }
    })
    .catch(err =>  {setError(true)
      const timer = setTimeout(() => {
        setError(false)
      }, 3000);
    })
}
  return (
  <>
  <Login/>
  </>
    
  )
}

export default Acces;