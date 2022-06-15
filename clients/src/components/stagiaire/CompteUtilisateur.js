import { TextField,} from "@material-ui/core";
import React,{useEffect,useState, useRef} from 'react';
import jwt_decode from 'jwt-decode'
import Alert from '@mui/material/Alert';
import MajCompte from './MajCompte';
import './profile.css';
import axios from 'axios';
import user from "../../assets/profileuser.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import './compte.css'
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

function CompteUtilisateur() {
 const verifier=(identifiant)=>{
    console.log(entercodemail)
    console.log(codemail)
    if(parseInt(entercodemail)===parseInt(codemail)){
      setmsgverif(
    
       'email verifier'
        
      )
  
      axios.put(`http://localhost:5000/users/update/${identifiant}`,{isverified:"true"})
      .then(res => {
          if(res.status===200){
          
          console.log('Success')
          }
          else{
           console.log('Failed')
          }
      })
  
    }
  else {
    setmsgverif(
  
     'code invalide'
      
    )}}
      
  const [users,setusers]=useState([]) 
  
  const [id,setId]=useState('')
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
   
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [email,setEmail]=useState('');
  const [nom,setnom]=useState('');
  const [prenom,setprenom]=useState('');
  
  const [verif,setverif]=useState('');
  const [codemail,setcodemail]=useState(0);
  const [entercodemail,setentercodemail]=useState(0);
  const [ msgverif, setmsgverif]=useState("");
  const [user,setUser]=useState({})
  const handleUser=()=>{
    const token=localStorage.getItem('token')
    const decoded=jwt_decode(token);
    axios.get(`http://localhost:5000/users/findone/${decoded.id}`)
    .then(res=>{setUser(res.data);console.log(res.data)})
    .catch(err=>console.error(err))
  }
  useEffect(()=>{
    handleUser();
    setEmail(email);
    setnom(nom);
    setprenom(prenom);
    setverif(verif);
    setcodemail(codemail)
    if (verif==='false')
{
  setmsgverif(
  
 
  'Veuillez verifier votre boite mail'
  )
}
else {
  setmsgverif(
  
    'email verifié'
  
  )
}
  },[])
  return (
    <>
  <div className={verif=='false'?'verr':"alll"}>
       
      <div className="content">
        
      <div className='alert-compte'>
{verif=='false'?
 <Alert severity="info">{msgverif}!</Alert>:null}
 </div>
 
        <Row>
          <Col md="7" className="profile-box">
            <Card className="card-user" >

              <CardBody>
                <div className="author">
                  <a href="#" onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon className="user-icon" icon={faUserAlt} />
                    <h5 className="title">{user.nom} {user.prenom}</h5>
                  </a>
                </div>
              
                <p className="description-mail text-center">
                  Adresse mail : {user.email}
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div >
                  
     
      { verif==='false'? 
        <TextField
        id="entrer le code de validation"
        label="entrer le code de validation"
        variant="standard"
        placeholder="entrer le code de validation"
        fullWidth
        margin="normal"
        onChange={(e)=>{setentercodemail(e.target.value)}} value={entercodemail}
        type='number'
      />
     
  
      :''}
      { verif==='false'? 
   <br></br>

      :''}
       { verif==='false'? 
        <Button 
        color="primary"
       variant="outlined" onClick={() => verifier(id)}>valider</Button>
    

      :''}
     { verif==='false'? 
   <br></br>

      :''}

             </div>
                  <div className="buttons-profile">
                  <Button
                  style={{textAlign:'center'}}
                        className="btn-round"
                        color="primary"
                       variant="outlined"
                        onClick={()=>handleOpen()}
                      >
                        Modifier votre Profil
                      </Button>
                      <MajCompte open={open} data={id} handleClose={handleClose}/>
                 
                </div>
              </CardFooter>
            </Card>
           
          </Col>
        
        </Row>
      
      </div></div>
    </>
  );
}

export default CompteUtilisateur;
