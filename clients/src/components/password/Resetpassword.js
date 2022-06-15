import React from 'react';
import './resetpassword.css';
import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function Resetpassword() {
	const [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const id = useParams();
    const [showPassword,setShowPassword]= useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.put(`http://localhost:5000/users/resetpassword/${id.id}`,{password})
		.then(res=>{
			if(res.status===200){
				setMsg('votre mot de passe est modifié avec success')
			}
			else{
				setMsg('un erreur est occuré');
			}
		})
		.catch(err=>setMsg('un erreur est occuré 2'))
	};

	return (
		<Fragment className="fragment">
			
				<div className="reset-password">
					<form className="form-reset" onSubmit={handleSubmit}>
						<h2>Changez votre mot de passe</h2>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled" className='password-field'>
                           <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                             <FilledInput
                              id="filled-adornment-password"
                              type={showPassword ? 'text' : 'password'}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              endAdornment={
                              <InputAdornment position="end">
                              <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                              >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                           </IconButton>
                          </InputAdornment>
                          }
                          />
                         </FormControl>
					
						{error && <div className="{styles.error_msg}">{error}</div>}
						{msg && <div className="{styles.success_msg}">{msg}</div>}
						
                        <div className='button-class'>
                          <Button variant="contained" type="submit" className='submit-button' endIcon={<SendIcon />}>
                           Envoyer
                          </Button> 
                        </div>
      
					</form>
				</div>
			
				
		
		</Fragment>
	);
};



export default Resetpassword;