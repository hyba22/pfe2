import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import './majcompte.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import jwt_decode from 'jwt-decode'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
function MajCompte(props) {
  const [nom,setNom]=useState("");
  const [prenom, setPrenom] = useState('');
  const [universite, setUniversite] = useState('');
  const [ville,setVille]=useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cv, setCv] = useState("");
  const [photo, setPhoto] = useState("");
  const [Submitted,setSubmitted]=useState(false);
  const [error,setError]=useState(false);
  const reset=()=>{
       
  }
  const getUser=()=>{
    const token=localStorage.getItem('token')
    const decoded=jwt_decode(token);
    axios.get(`http://localhost:5000/users/findone/${decoded.id}`)
    .then(res=>{
      setNom(res.data.nom);
      setPrenom(res.data.nom);
      setVille(res.data.ville);
      setEmail(res.data.email);
    })
    .catch(err=>console.error(err))
  }
  useEffect(()=>{
     getUser();
  },[props])

    const submit=(e)=>{
      e.preventDefault();
      const token=localStorage.getItem('token')
      const decoded=jwt_decode(token);
        axios.put(`http://localhost:5000/users/update/${decoded.id}`,{nom,prenom,ville,universite,email,password})
        .then(res => {
            if(res.status===200){
              setSubmitted(true)
              console.log(res.status)
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
        top: '48%',
        left: '58%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        pt: 2,
        px: 4,
        pb: 3,
      };
  return (
<>
<React.Fragment>
        <Modal
        hideBackdrop
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 1000, height:550 }} className="update-box">
        <Scrollbars style={{ width: 1000, height: 500 }}>
        <Col md="17">
            <Card className="card-user">
        <CardHeader className='card-header'>
                <CardTitle tag="h5">Modifier vos données</CardTitle>
              </CardHeader>
         
           
              <CardBody>
                <Form>
                 
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Nom</label>
                        <Input

                          placeholder="Nom"
                          type="text"
                          value={nom}
                          onChange={(e)=>setNom(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Prénom</label>
                        <Input
                          value={prenom}
                          onChange={(e)=>setPrenom(e.target.value)}
                          placeholder="Prénom"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                 
                
                  

                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Ville</label>
                        <Input
                          placeholder="Ville"
                          type="text"
                          value={ville}
                          onChange={(e)=>setVille(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Université</label>
                        <Input
                        value={universite}
                        onChange={(e)=>setUniversite(e.target.value)}
                          placeholder="Université"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                          placeholder="Email"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Mot de passe</label>
                        <Input
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                          placeholder="Mot de passe"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                 
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>CV</label>
                        <Input
                          placeholder="CV"
                          type="file"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Photo</label>
                        <Input
                          
                          placeholder="Photo"
                          type="file"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
                      <div className="update ml-auto mr-auto">
                        <Button
                        className="btn-roundd"
                        color="primary"
                        onClick={(e)=>submit(e)}
                      >
                        Mettre à jour
                      </Button>
                      <Button    className="btn-roundd"
                        color="primary" onClick={props.handleClose}>Fermer
                      </Button>
                      </div>
                     
                    
                      
            </Scrollbars>
        </Box>
        
      </Modal>
            </React.Fragment>
      
</>
    )
}

export default MajCompte