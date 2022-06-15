import './css/signup.css';
import React, { useEffect,useState } from "react";
import Attente from './Attente';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import 'react-datepicker/dist/react-datepicker.css' ;
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
//import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PhotoCamera from '@mui/icons-material/PhotoCamera';


 export  default function Commander(){
  const prevBtns = document.querySelectorAll(".btn-prev");
  const nextBtns = document.querySelectorAll(".btn-next");
  const progress = document.getElementById("progress");
  const formSteps = document.querySelectorAll(".form-step");
  const progressSteps = document.querySelectorAll(".progress-step");
  let formStepsNum = 0;
  
  

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      formStepsNum++;
      updateFormSteps();
      updateProgressbar();
    });
  });
  
  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      formStepsNum--;
      updateFormSteps();
      updateProgressbar();
    });
  });

  function updateFormSteps() {
    formSteps.forEach((formStep) => {
      formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });
  
    formSteps[formStepsNum].classList.add("form-step-active");
  }
  
  function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
      if (idx < formStepsNum + 1) {
        progressStep.classList.add("progress-step-active");
      } else {
        progressStep.classList.remove("progress-step-active");
      }
    });
  
    const progressActive = document.querySelectorAll(".progress-step-active");
    progress.style.width =
      ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
  }
  const [nom,setNom]=useState("");
  const [prenom, setPrenom] = useState('');
  const [dateNaiss, setDateNaiss] = useState('');
  const [ville, setville] = useState('');
  const [cin, setCin] = useState('');
  const [civilite, setCivilite] = useState('');
  const [universite, setUniversite] = useState('');
  const [niveau, setNiveau] = useState('');
  const [specialite, setSpecialite] = useState('');
  const [duree, setDuree] = useState('');
  const [type, setType] = useState('');
  const [sujet, setSujet] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [demande, setDemande] = useState("");
  const [cv, setCv] = useState("");
  const [photo, setPhoto] = useState("");
  const [error,setError]=useState(false);
  const [confirmer, setConfirmer]= useState("");
  const [Submitted,setSubmitted]=useState(false);
  const [openSujet, setOpenSujet] = useState(false);
  const [showPassword,setShowPassword]= useState(false);
  const [openType, setOpenType] = useState(false);
  const [open, setOpen] = useState(false);
  const [openNiveau, setOpenNiveau] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [formErrors, setFormErrors] = useState([{nom:''},{email:''},{password:''}]);
  
  const validation = (values) => {
    let formErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!nom) {
      return false;
    }
    if (!email) {
      formErrors.email = "Champ obligatoire!";
      return false;
    } else if (!regex.test(email)) {
      formErrors.email = "Format d'email invalid!";
      return false
    }
    if (!password) {
      formErrors.password = "Champ obligatoire!";
      return false;
    } else if (values.password.length < 4) {
      formErrors.password = "Mot de passe doit contenir 4 caractères ou plus!";
      return false;
    } 
    return true;
  };

  
 
  const reset=()=>{
    setNom(""); 
    setPrenom("");
    setDateNaiss("");
    setville("");
    setCin("");
    setCivilite("");
    setUniversite("");
    setNiveau("");
    setSpecialite("");
    setDuree("");
    setType("");
    setSujet("");
    setEmail("");
    setPassword("");
    setPhoto("");
    setDemande("");
    setCv("");
    setConfirmer("");
}

  const submit=()=>{
  
    axios.post("http://localhost:5000/users/add/user",{nom,prenom,cin,civilite,ville,type,sujet,dateNaiss,email,password,demande,photo,cv,duree,universite,niveau,specialite})
    .then(res => {
        if(res.status===200){
          reset();
          setSubmitted(true)
          const timer = setTimeout(() => {
            setSubmitted(false)
          }, 3000);
          window.location.replace('http://localhost:3000/attente')
        }
        else{
          setError(true)
          const timer = setTimeout(() => {
            setError(false)
          }, 3000);
          setSubmitted("")
        }
    })
    .catch(err =>  {setError(true)
      const timer = setTimeout(() => {
        setError(false)
      }, 3000);
      setSubmitted("")
 })
}


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenType = () => {
    setOpenType(true);
  };
  const handleCloseType = () => {
    setOpenType(false);
  };


  const handleCloseSujet = () => {
    setOpenSujet(false);
  };

  const handleOpenSujet= () => {
    setOpenSujet(true);

  };

  const handleCloseNiveau = () => {
    setOpenNiveau(false);
  };

  const handleOpenNiveau= () => {
    setOpenNiveau(true);

  };


  const isMatch = () => {
    if (password!=0){
      if(password.value === confirmer.value ){
        console.log(200);
      }else{
        console.log("Password dont match");
      }
    }
  }


  const Input = styled('input')({
    display: 'none',
  });

  
   return(
   <div>
     {Submitted? <Alert className='success-pop' severity="success">
    <AlertTitle>Succès</AlertTitle>
      
    </Alert>:null}
 
 <form action="#" class="form-inscription" >
 <h1 className="text-center">Inscription</h1>
 
 <div className="stepper">
   <div className="progress" id="progress"></div>
   {/*Steps names*/}
   <div className="progress-step progress-step-active" data-title="Informations personnelles"></div>
   <div className="progress-step" data-title="Informations universitaires"></div> 
   <div className="progress-step" data-title="Création compte"></div>
 </div> 
 
{/*Step one*/}
 <div className="form-step form-step-active" >
 <div className="">
 
        <div className='col'>
        <TextField className='textfield '  required={true} sx={{ m: 1,minWidth:225}} id="outlined-basic" name="nom" label="Nom" variant="filled" onChange={(e)=> setNom(e.target.value) } value={nom}/> 
        <TextField className='textfield ' required={true} type="date" sx={{ m: 1,minWidth:225}}  name="dateNaiss" placeholder="" preventDefault=""  id="outlined-basic" color="" label="" variant="filled" value={dateNaiss} onChange={ (e) => setDateNaiss(e.target.value)}/>
       </div>
        
        <div className='col'>
        <TextField className='textfield' required={true} sx={{ m: 1}}  name="prenom" id="outlined-basic" label="Prénom" variant="filled" value={prenom} onChange={(e)=> setPrenom(e.target.value)}/>
        <TextField className='textfield' required={true}  sx={{ m: 1}}  name="ville" id="outlined-basic" label="Ville" variant="filled" value={ville} onChange={(e)=> setville(e.target.value)}/>
        </div>

        <div className='col'>
        <TextField className='textfield' required={true}  name="cin" sx={{ m: 1}} id="outlined-basic" label="CIN" variant="filled" value={cin} onChange={(e)=> setCin(e.target.value)} />
        <FormControl className='textfield' required={true} name="civilite" variant="filled" sx={{m:1, minWidth: 225 }}>
        <InputLabel required={true} id="demo-controlled-open-select-label">Civilité</InputLabel>
        <Select
          name='civilite'
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={civilite}
          label="Civilité"
          onChange={(e)=> setCivilite(e.target.value)}
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="f">Femme</MenuItem>
          <MenuItem value="h">Homme</MenuItem>
        </Select>
      </FormControl>
    </div>
</div>
   <div className="btns-group">  
     <Button variant='outlined' className="btnn btn-next one">Suivant</Button>
   </div>
 </div>

  {/* step 2 */}

 <div className="form-step">
 <form action="/" method="POST">
 <div className='col'>
        <TextField className='textfield' required={true} sx={{ m: 1}}  name="universite" id="outlined-basic" label="Université" variant="filled" value={universite} onChange={(e)=> setUniversite(e.target.value)}/>
        <FormControl className='textfield' required={true} variant='filled' sx={{ m: 1, minWidth: 225 }}>
        <InputLabel required={true} id="demo-controlled-open-select-label">Type de stage</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openType}
          onClose={handleCloseType}
          onOpen={handleOpenType}
          value={type}
          label="Type de stage"
          onChange={(e)=> setType(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="ete">Stage d'été</MenuItem>
          <MenuItem value="pfe">Stage PFE</MenuItem>
          <MenuItem value="pfe">Stage PFA</MenuItem>
        </Select>
      </FormControl>
        </div>

        <div className='col'>
        <FormControl className='textfield' required={true} variant='filled' sx={{ m: 1, minWidth: 225 }} >
        <InputLabel required={true} id="demo-controlled-open-select-label">Niveau</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openNiveau}
          onClose={handleCloseNiveau}
          onOpen={handleOpenNiveau} 
          value={niveau}
          label="Niveau"
          onChange={(e)=> setNiveau(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="l1">1ère année Licence</MenuItem>
          <MenuItem value="l2">2ème année Licence</MenuItem>
          <MenuItem value="l3">3ème année Licence</MenuItem>
          <MenuItem value="m1">1ère année Mastère</MenuItem>
          <MenuItem value="m2">2ème année Mastère</MenuItem>
        </Select>
      </FormControl> 
      
        <FormControl className='textfield' required={true} variant='filled' sx={{ m: 1, minWidth: 225 }} >
        <InputLabel id="demo-controlled-open-select-label">Sujet</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openSujet}
          onClose={handleCloseSujet}
          onOpen={handleOpenSujet}
          value={sujet}
          label="Sujet"
          onChange={(e)=> setSujet(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="1">Sujet 1</MenuItem>
          <MenuItem value="2">Sujet 2</MenuItem>
          <MenuItem value="3">Sujet 3</MenuItem>
        </Select>
      </FormControl>
        </div>

        <div className='col'>
        <TextField className='textfield' required={true} sx={{ m: 1}} id="outlined-basic" label="Spécialité" variant="filled" value={specialite} onChange={(e)=> setSpecialite(e.target.value)} />  
        <TextField className='textfield' required={true} sx={{ m: 1}} id="outlined-basic" label="Durée" variant="filled" value={duree}  onChange={(e)=> setDuree(e.target.value)} />
        </div>

    </form>
   <div className="btns-group step3">
     <Button variant='outlined' className="btnn btn-prev">Précédent</Button>
     <Button variant='outlined' className="btnn btn-next">Suivant</Button> 
  </div>
 </div>


 {/* step 3 */}
 <div className="form-step">
 <form action="/fileUpload/upload" method="POST" encType='multipart/form-data'>
 <div className='col'>



      <div>
      <Button className='btn-file'
        component="label"
        variant="outlined"
        startIcon={<UploadFileIcon />}
        sx={{ marginRight: "1rem" }}
      >
        Charger votre demande de stage
        <input type="file" accept='.pdf' hidden onChange={(e)=> setDemande(e.target.value)} />
      </Button>
    
      <Box className='file-path'>{demande}</Box>
      </div>
        {/*<button type='button' className='btn-file'>
        Demande de stage
        <input className='upload-field1' type='file' required={true} sx={{ m: 1}}  id="outlined-basic" name='demande' label="Demande de stage"  placeholder='Charger la demande de stage' value={demande} onChange={(e)=> setDemande(e.target.value)} />
        
        </button>
   */}
        <TextField className='textfield' required={true} sx={{ m: 1}}  id="outlined-basic" label="Email" variant="filled" value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>

        <div className='col'>
       
        <div>
      <Button className='btn-file'
        component="label"
        variant="outlined"
        startIcon={<UploadFileIcon />}
        sx={{ marginRight: "1rem" }}
      >
        Charger votre CV
        <input type="file" accept='.pdf' hidden onChange={(e)=> setCv(e.target.value)} />
      </Button>
    
      <Box className='file-path'>{cv}</Box>
      </div>
        <FormControl sx={{ m: 1 }} variant="filled" className='textfield'>
           <InputLabel required={true} htmlFor="filled-adornment-password">Mot de passe</InputLabel>
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
              onMouseDown={handleMouseDownPassword}
              edge="end"
              >
              {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
              </InputAdornment>
              }
              />
        </FormControl>
        </div>

        <div className='col'>
        <div>
      <Button className='btn-file'
        component="label"
        variant="outlined"
        startIcon={<PhotoCamera />}
        sx={{ marginRight: "1rem" }}
      >
        Charger votre photo
        <input type="file"  hidden onChange={(e)=> setPhoto(e.target.value)} accept=".jpeg, .gif, .jpg, .png" />
      </Button>
    
      <Box className='file-path'>{photo}</Box>
      </div>
      
        <FormControl sx={{ m: 1 }}  variant="filled" className='textfield'>
           <InputLabel required={true} htmlFor="filled-adornment-password">Confirmer mot de passe</InputLabel>
             <FilledInput
              id="filled-adornment-password2"
              type={showPassword ? 'text' : 'password'}
              value={confirmer}
              onChange={(e)=> setConfirmer(e.target.value)} 
              endAdornment={
              <InputAdornment position="end">
              <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              >
              {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
              </InputAdornment>
              }
              />
        </FormControl>
         </div>
    </form> 

   <div className="btns-group step3">
     <Button variant='outlined' className="btnn btn-prev">Précédent</Button>
      <Button variant='outlined' className='btnn submit' onClick={()=>submit()}> 
      s'inscrire
      </Button>
      
   </div>
 </div>

</form>
      <p>{error}</p>
      <p>{Submitted}</p>

       
 
</div>
)

}