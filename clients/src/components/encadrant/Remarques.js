import './remarques.css';
import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField} from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from 'axios';

function Remarques(props) {
   const [note, setNote]= useState("");
   const [remarques,setRemarques] = useState("");

   const reset=()=>{
    setNote(""); 
    setRemarques("");
   
}

   const ajouterRemarques=()=>{
    axios.put(`http://localhost:5000/users/add/remarques/${props.data._id}`,{note, remarques})
    .then(res => {if(res.status===200){
        reset();
        props.handleClose();
    }})
    .catch(err => console.error(err))
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

return(
<React.Fragment>
    <Modal
    hideBackdrop
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="child-modal-title"
    aria-describedby="child-modal-description"
    >
    <Box sx={{ ...style, width: 600, height:400}} className=' box-evaluation' >
    
      <h2 id="child-modal-title">Note et remarques</h2>

      <div className='col-evaluation'>
    
        <FormControl fullWidth className='note'>
  <InputLabel id="demo-simple-select-label">Note</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={note}
    label="Note"
    onChange={(e)=>setNote(e.target.value)}
  >
    <MenuItem value={0}>0</MenuItem>
    <MenuItem value={1}>1</MenuItem>
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={3}>3</MenuItem>
    <MenuItem value={4}>4</MenuItem>
    <MenuItem value={5}>5</MenuItem>
    <MenuItem value={6}>6</MenuItem>
    <MenuItem value={7}>7</MenuItem>
    <MenuItem value={8}>8</MenuItem>
    <MenuItem value={9}>9</MenuItem>
    <MenuItem value={10}>10</MenuItem>
    <MenuItem value={11}>11</MenuItem>
    <MenuItem value={12}>12</MenuItem>
    <MenuItem value={13}>13</MenuItem>
    <MenuItem value={14}>14</MenuItem>
    <MenuItem value={15}>15</MenuItem>
    <MenuItem value={16}>16</MenuItem>
    <MenuItem value={17}>17</MenuItem>    
    <MenuItem value={18}>18</MenuItem>
    <MenuItem value={19}>19</MenuItem>
    <MenuItem value={20}>20</MenuItem>
  </Select>
</FormControl>
      </div>
      <div className='col-evaluation'>
      <TextareaAutosize className='zone-text'   variant="filled" id="demo-helper-text-misaligned-no-helper" 
        placeholder='Ecrire vos remarques'  value={remarques} onChange={(e)=>setRemarques(e.target.value)}/>
      </div>

         <div className='button-evalu'>       
        <Button className='btn-evalu' variant='outlined' onClick={()=>ajouterRemarques()}>Envoyer</Button>
        <Button className='btn-evalu' variant='outlined' onClick={()=>props.handleClose() }>Fermer</Button>
  
        </div> 

       
      
        </Box>
        </Modal>
    </React.Fragment>

    )
}

export default Remarques