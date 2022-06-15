import React,{useState} from 'react';
import axios from "axios";
import './ajoutsuj.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


function Ajoutersuj(props) {
    const [nomSujet,setNomSujet]=useState("");
    const [description,setDescription]=useState("");
    const [dateDebut,setDateDebut]=useState(""); 
    const [dateFin,setDateFin]=useState("");



    const reset=()=>{
        setNomSujet("");
        setDescription(""); 
        setDateDebut("");
        setDateFin("");
    };

    const ajouterSujet=()=>{
        axios.post("http://localhost:5000/sujet/add/sujet",{nomSujet,description,dateDebut,dateFin})
        .then(res => {if(res.status===200){
            reset();
            props.afficherUtilisateurs()
        }} )
        .catch(err => console.error(err))
    }

  return (
        <div className='ajout-sujet'>
        <div className='sujet-box' style={{height:"600px"}}>
        <div className='sujetss'>
        <h3>Ajouter un sujet</h3>
        <div className='ajout-div2'>
        
        <TextField variant="standard" id="demo-helper-text-misaligned-no-helper" 
        value={nomSujet}
        onChange={(e)=>setNomSujet(e.target.value)}   
          
          label="Nom"
        
        />
        </div>
        
        <div className='ajout-div2'> 
        
          <TextareaAutosize className='zone-text'
          
               aria-label="empty textarea"
               placeholder="Description"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
              
                />
        </div>

        <div className='ajout-div2'>
        <label>Date de début</label>
        <TextField variant="standard" type="date" id="demo-helper-text-misaligned-no-helper" 
        value={dateDebut}
        onChange={(e)=>setDateDebut(e.target.value)}   
          
        
        
        />
        </div>

        <div className='ajout-div2'>
        <label>Date de fin</label>
        <TextField variant="standard" type="date" id="demo-helper-text-misaligned-no-helper" 
        value={dateFin}
        onChange={(e)=>setDateFin(e.target.value)}   
          
          
        
        />
        </div>
    
        <div className='butns-sujets'>
        <Button variant='outlined' className='button-suj' onClick={()=>reset()}>Annuler</Button>
        <Button variant='outlined' className='button-suj' onClick={()=>ajouterSujet()}>Ajouter</Button>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Ajoutersuj;