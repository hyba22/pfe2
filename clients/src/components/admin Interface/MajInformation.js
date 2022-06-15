import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField,} from "@material-ui/core";
import axios from 'axios';
import './majInfo.css';
import { Scrollbars } from 'react-custom-scrollbars-2';


function MajInformation(props) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaiss, setDateNaiss] = useState('');
  const [ville, setVille] = useState('');
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
  const [statut, setStatut] = useState("");

   // const [acctype,setacctype]=useState('')
    const [Submitted,setSubmitted]=useState(false);
    const [error,setError]=useState(false);

    const reset=()=>{
      setNom(""); 
      setPrenom("");
      setDateNaiss("");
      setVille("");
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
       
  }

  useEffect(()=>{
      
      setNom(props.data.nom)
      setPrenom(props.data.prenom)
      setUniversite(props.data.universite)
      setCin(props.data.cin)
      setVille(props.data.ville)
      setNiveau(props.data.niveau)
      setSpecialite(props.data.specialite)
      setDateNaiss(props.data.dateNaiss)
      setDemande(props.data.demande)
      setCv(props.data.cv)
      setPhoto(props.data.photo)
      setEmail(props.data.email)
      setType(props.data.type)
      setDuree(props.data.duree)
      setCivilite(props.data.setCivilite)
  
  },[props])

  
    const submit=(e)=>{
        axios.put(`http://localhost:5000/users/update/${props.data._id}`,{
        nom,
        prenom,
        cin, 
        dateNaiss,
        ville, 
        civilite, 
        universite, 
        niveau,
        specialite,
        type,
        sujet, 
        duree, 
        demande, 
        cv, 
        photo,
        email,
        password,
        statut
      }) 
        .then(res => {
          if(res.status===200){
            reset();
            setSubmitted(true)
            props.loaddata()
            props.handleClose()
          }
          else{
            setError(true)
           
            setSubmitted("")
          }
      })
      .catch(err =>  {setError(true)
       
        setSubmitted("")
   })
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        pt: 2,
        px: 4,
        pb: 3,
      };
  return (<>   
  <React.Fragment>
    <Modal
    hideBackdrop
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="child-modal-title"
    aria-describedby="child-modal-description"
    >
<Box sx={{ ...style, width: 1000, height:500 }} className=' box-modifier' >
<Scrollbars style={{ width: 1200, height: 450 }} >
  <h2 id="child-modal-title">Mise à jour du compte</h2>
  
      <div className='col-modifier'>
      <TextField className='text-modif'  variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="Nom"   value={nom} onChange={(e)=>setNom(e.target.value)}/>
      <TextField className='text-modif' variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="prenom"   value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
      </div>

      <div className='col-modifier'>
      <TextField className='text-modif'variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="CIN"   value={cin} onChange={(e)=>setCin(e.target.value)}/>
         <TextField className='text-modif'variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="Civilité"   value={civilite} onChange={(e)=>setCivilite(e.target.value)}/>
      </div>

      <div className='col-modifier'>
      <TextField className='text-modif' variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label=""   value={dateNaiss} type="date" onChange={(e)=>setDateNaiss(e.target.value)}/>
      <TextField className='text-modif' variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="Ville"   value={ville} onChange={(e)=>setVille(e.target.value)}/>
 
      </div>

      <div className='col-modifier'>
      <TextField className='text-modif' style={{m: 1}} variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="Université"   value={universite} onChange={(e)=>setUniversite(e.target.value)}/>
      <TextField className='text-modif' variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="Niveau"   value={niveau} onChange={(e)=>setNiveau(e.target.value)}/>
      </div>

      <div className='col-modifier'>
      <TextField className='text-modif' variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="Spécialité"   value={specialite} onChange={(e)=>setSpecialite(e.target.value)}/>
      <TextField className='text-modif' variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="Type de stage"   value={type} onChange={(e)=>setType(e.target.value)}/>
      </div>

      <div className='col-modifier'>
      <TextField className='text-modif' variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="Durée"   value={duree} onChange={(e)=>setDuree(e.target.value)}/>
      <TextField className='text-modif' variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="" type="file"  value={demande} onChange={(e)=>setDemande(e.target.value)}/>
     </div>
     <div className='col-modifier'>
     <TextField className='text-modif' variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="" type="file"  value={cv} onChange={(e)=> setCv(e.target.value)}/>
      <TextField className='text-modif' variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="" type="file"  value={photo} onChange={(e)=> setPhoto(e.target.value)}/>
      </div>

      <div className='col-modifier'>
      <TextField className='text-modif' variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="Email"   value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <TextField className='text-modif' variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="Mot de passe"  type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

      </div>

         <div className='button-maj'>       
        
        <Button className='btn-modif' variant='outlined' onClick={props.handleClose}>Fermer</Button>
        <Button className='btn-modif' variant='outlined' onClick={submit}>Mettre à jour</Button>
        </div> 
</Scrollbars>
</Box>
</Modal>
    </React.Fragment>
</>
    )
}

export default MajInformation;