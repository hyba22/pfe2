import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField} from "@material-ui/core";
import axios from 'axios';
import './majinfo.css';
import { Scrollbars } from 'react-custom-scrollbars-2';

function MajInformation(props) {
  const [nomSujet, setNomSujet] = useState('');
  const [description, setDescription] = useState('');
  const [dateDebut,setDateDebut]=useState(""); 
  const [dateFin,setDateFin]=useState("");

    const [Submitted,setSubmitted]=useState(false);
    const [error,setError]=useState(false);

    const reset=()=>{
      setNomSujet(""); 
      setDescription("");
      setDateDebut("");
      setDateFin("");
  }

  useEffect(()=>{
      
      setNomSujet(props.data.nomSujet)
      setDescription(props.data.description)
      setDateDebut(props.data.dateDebut)
      setDateFin(props.data.dateFin)

  },[props])

  
    const submit=(e)=>{
        axios.put(`http://localhost:5000/sujet/update/sujet/${props.data._id}`,{
        nomSujet,
        description,
        dateDebut,
        dateFin
      }) 
        .then(res => {
          if(res.status===200){
            reset();
            setSubmitted(true);
            props.handleClose();
            props.afficherUtilisateurs();
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
    <Box sx={{ ...style, width: 1000, height:600}} className=' box-modifier' >
    <Scrollbars style={{ width: 1200, height: 550 }} >
      <h2 id="child-modal-title">Mise à jour du sujet</h2>
      <div>
      <div className='col-modifier-sujet'>
      <TextField className='text-modif-sujet'  variant="filled" id="demo-helper-text-misaligned-no-helper" 
        label="Nom"   value={nomSujet} onChange={(e)=>setNomSujet(e.target.value)}/>
      </div>
      <div className='col-modifier-sujet'>
      <textarea className='text-modif-sujet textarea' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
      </div>
      
      <div className='col-modifier-sujet'>
      <TextField className='text-modif-sujet'  variant="filled" id="demo-helper-text-misaligned-no-helper" 
       type="date"   value={dateDebut} onChange={(e)=>setDateDebut(e.target.value)}/>
      </div>
      <div className='col-modifier-sujet'>
      <TextField className='text-modif-sujet'  variant="filled" id="demo-helper-text-misaligned-no-helper" 
       type="date"   value={dateFin} onChange={(e)=>setDateFin(e.target.value)}/>
      </div>
      </div>

         <div className='button-maj'>       
         <Button className='btn-modif' variant='outlined' onClick={props.handleClose}>Fermer</Button>
        <Button className='btn-modif' variant='outlined' onClick={submit}>Modifier</Button>
        
        </div> 

       
        </Scrollbars>
        </Box>
        </Modal>
    </React.Fragment>
</>
    )
}

export default MajInformation;