import React from 'react';
import Header from './Header';
import './css/contact.css';
import courrier from '../assets/courrier.png';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';


function Contact() {
  return (
    <div>
        <Header/>

     <div className='contact'>
      
      <img src={courrier} />
       <div className='contact-section'>
        <div className='nom-prenom'>
       <TextField className='nom' sx={{m:1}} id="outlined-basic" label="Nom" variant="outlined" />
       <TextField className='prenom' sx={{m:1}} id="outlined-basic" label="Prénom" variant="outlined" />
       </div>
       <TextField className='textfield-contact' sx={{m:1}} id="outlined-basic" label="Sujet" variant="outlined" />
       <TextareaAutosize
         sx={{m:1}}
         className='long-text'
         maxRows={4}
         aria-label="maximum height"
         placeholder="Messages"   
         />

        <div className='buttons-section'>
        <Button className='contact-button' variant="outlined">Annuler</Button>
        <Button className='contact-button' variant="outlined">Envoyer</Button>

        </div>
       </div>

     </div>

    </div>
  )
}

export default Contact