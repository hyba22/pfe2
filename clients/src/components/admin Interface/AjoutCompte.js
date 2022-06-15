import React, {useState} from 'react';
import "./AjouterCompte.css";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import Button from '@mui/material/Button'; 
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import axios from 'axios' ;
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';


function AjoutCompte(props) {
    const[nom,setNom]=useState("");
    const[prenom, setPrenom] = useState('');
    const[specialite, setSpecialite] = useState('');
    const[email, setEmail] = useState("");
    const[cin, setCin] = useState("");
    const[password,setPassword]=useState("");
    const[departement, setDepartement] = useState("");
    const [telephone, setTelephone] = useState("");
    const [userType, setUserType]=useState('');
    const[isAdmin, setIsAdmin] =useState("");
    const [showPassword,setShowPassword]= useState(false);


    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
    const reset=()=>{
      setNom("");
      setDepartement(""); 
      setPrenom(""); 
      setPassword("");
      setEmail(""); 
      setSpecialite(""); 
      setCin(""); 
      setTelephone("");
      setUserType("");
      setIsAdmin("");
  };

    const createUser=()=>{
      axios.post("http://localhost:5000/users/add/user",{nom,prenom,specialite, departement,email, password, cin, telephone, userType})
      .then(res => {if(res.status===200){
          reset();
          props.afficherUtilisateurs()
      }} )
      .catch(err => console.error(err))
  }; 

    return(
    <div className='ajout'>
    <div className='add-user'>
  
    <div className='box-box ajouter' style={{height:"710px"}}>
      
    <h3>Créer un compte</h3>
    <form>

    <div className='ajout-div1'>
        
              <TextField variant="standard" id="demo-helper-text-misaligned-no-helper" 
              value={nom}
              onChange={(e)=>setNom(e.target.value)}   
                
                label="Nom"
              
              />
    </div>
    <div className='ajout-div1'>
             <TextField variant="standard" id="demo-helper-text-misaligned-no-helper" 
              value={prenom}
              onChange={(e)=>setPrenom(e.target.value)}   
                
                label="Prénom"
              
              />
         
         </div>

         <div className='ajout-div1'>
             <TextField variant="standard" id="demo-helper-text-misaligned-no-helper" 
              value={cin}
              onChange={(e)=>setCin(e.target.value)}   
                
                label="CIN"
              
              /> 
        </div>
   
         <div className='ajout-div1'>
             <TextField variant="standard" id="demo-helper-text-misaligned-no-helper" 
              value={departement}
              onChange={(e)=>setDepartement(e.target.value)}   
                
                label="Département"
              
              />
         </div>

         <div className='ajout-div1'>
             <TextField variant="standard" id="demo-helper-text-misaligned-no-helper" 
              value={specialite}
              onChange={(e)=>setSpecialite(e.target.value)}   
                
                label="Spécialité"
              
              />
         
         </div>
         <div className='ajout-div1'>
             <TextField variant="standard" id="demo-helper-text-misaligned-no-helper" 
              value={telephone}
              onChange={(e)=>setTelephone(e.target.value)}   
                
                label="Télephone"
              
              />
         
         </div>

         <div className='ajout-div1'>
             <TextField variant="standard" id="demo-helper-text-misaligned-no-helper" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}   
                
                label="Email"
              
              />
         
         </div>

         <div className='ajout-div1'>
         <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
   </div>
   <div className='ajout-div1'>
     
     <FormControl variant="standard" fullWidth>
     <InputLabel variant="standard" id="demo-simple-select-label">Type utilisateur</InputLabel>
     <Select
     required
         labelId="demo-simple-select-label"
         id="demo-simple-select"
         value={userType}
         label="Type de compte"
         onChange={(e)=>setUserType(e.target.value)}
     >
         <MenuItem value="admin">Administrateur</MenuItem>
         <MenuItem value="encadrant">Encadrant</MenuItem>
        
     </Select>
     </FormControl>
  </div>
  <div className='boutons-ajout'>
   <Button className='bt-ajout' variant='outlined' onClick={() => reset()}> Annuler </Button>
   <Button className='bt-ajout' variant='outlined' onClick={() => createUser()}> Créer </Button>
   </div>
    </form>
    </div>
     </div>
     </div>
   )
 };


export default AjoutCompte;