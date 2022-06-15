import React from 'react';
import './forgetpassword.css';
import { useState,useRef } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import emailjs from "@emailjs/browser";
 
function Forgetpassword() {
	const form = useRef();

  const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const [id,setId]=useState('')
	const handleSubmit = (e) => {
		e.preventDefault();
			axios.post('http://localhost:5000/users/getid',{email})
			.then(res=>{setId(`http://localhost:3000/resetpassword/${res.data}`);
				emailjs
				.sendForm(
				  "service_4fo7i64",
				  "template_q9yzxgo",
				  form.current,
				  "HriQ1zTkHteq0oVKf"
				)
				.then(
				  (result) => {
					console.log(result.text);
					setMsg('Email est envoyé')
				  },
				  (error) => {
					console.log(error.text);
				  }
				);
			})
			.catch(err=>console.error(err))
		
	}
		

	return (
		<div className="forget-password">
			<form ref={form} className="form" onSubmit={handleSubmit}>
				<h1>Forgot Password</h1>
				<TextField className='textfield-pw'  
				sx={{ m: 1}} 
				id="outlined-basic"
				label="Email" 
				variant="filled" 
				name='email'
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}/>
				<TextField sx={{ m: 1}} 
				id="outlined-basic"
				label="id" 
				variant="filled"  name="link" value={id} style={{display:'none'}} />
				
				{error && <div className="{styles.error_msg}">{error}</div>}
				{msg && <div className="{styles.success_msg}">{msg}</div>}
			<div className='button-class'>
      <Button type="submit" variant="contained" className='submit-button' endIcon={<SendIcon />}>
        Envoyer
      </Button>
      </div>
			</form>
		</div>
	);
};


export default Forgetpassword;