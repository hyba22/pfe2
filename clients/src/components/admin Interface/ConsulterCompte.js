import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table
} from "reactstrap"; 
import './Consultercomptes.css';
import React,{useEffect,useState, useRef} from 'react';
import MajInformation from './MajInformation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'


function ConsulterCompte() {
    const identifiant = useRef();
    const [id,setId]=useState('');
    const [affiche,setAffiche]=useState([]) ;
    const [statut, setStatut] = useState("");
    const [dialog, setDialog] = useState({
      message: "",
      isLoading: false,
    });
    const handleDialog = (message, isLoading) => {
      setDialog({
        message,
        isLoading,
       
      });
    };
    const handleDelete=(id)=>{
      axios.delete(`http://localhost:5000/users/delete/${id}`)
        .then(res=>{
        const newaffiche=affiche.filter(el=>el._id!==id)
        setAffiche(newaffiche);
        console.log(newaffiche);
        })
         .catch(err=>{console.log("not great");
       })
    }

   const afficherUtilisateurs=()=>{ 
    axios.get("http://localhost:5000/users/findall")
    .then(res=>{ setAffiche(res.data)
        console.log(res.data)
    })
    .catch(err=>{
      console.log("data not found")
    })
  }
    useEffect(()=>{
     afficherUtilisateurs()
    },[])
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = (el) => {
      setOpen(true);
      setId(el)
    };
    const handleClose = () => {
      setOpen(false);
    };
    
const handleAccepter = (id) => {
  axios.put(`http://localhost:5000/users/status/${id}`,{accepted:"accepted"})
  .then(res => {
    if(res.status===200){
      afficherUtilisateurs();
    }
  })
  .catch(err => console.log("not working !"))

}

      return (
<main id="site-main" className='site-main'>
<div className="containerrs">
    
    <form action="/" method="POST" className='tablecompte'>
    <div className="cadre-table-scrollregler">
    <Card className='table-card'>
              <CardHeader>
                <CardTitle tag="h4">Liste des utilisateurs</CardTitle>
              </CardHeader>
            
    <CardBody>
                <Table responsive>
                <thead className="text-primary">
                <tr>
                    <th>ID</th>
                    <th>Nom et Prénom</th>
                    <th>CIN</th>
                    <th>Université</th>
                    <th>Type de stage</th>
                    <th>E-mail</th> 
                    <th>CV</th>
                    <th>Demande</th>
                    <th>Sujet</th>
                    <th>Durée de stage </th>
                    <th>Statut</th>
                    <th>Accepter</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                </tr>
            </thead>
            <tbody>
            {affiche.map(el=>{
              if(el.statut==="En attente" || el.statut==="en attente"){
                return ( <>
                  <tr key={el._id}>
                    <td>{el._id}</td>
                    <td>{el.nom}{' '}{el.prenom}</td>
                    <td>{el.cin}</td>
                    <td>{el.universite}</td>
                    <td>{el.type}</td>
                    <td>{el.email}</td>
                    <td>{el.cv}</td>
                    <td>{el.demnade}</td>
                    <td>{el.sujet}</td>
                    <td>{el.duree}</td>
                    <td>{el.statut}</td>
                    
                    <td> <a onClick={()=>handleAccepter(el._id)} className="btn border-shadowaccept accept ">
                    <span className="text-gradient" ><i className='bi bi-check-lg'></i></span> </a></td>
            
                    <td> <a onClick={()=>handleOpen(el)} className="btn border-shadowupdate update">
                        <span className="text-gradient"><FontAwesomeIcon icon={faPencilAlt} /></span> </a></td>
                    <td> <a onClick={()=>handleDelete(el._id)} className="btn border-shadowdelete delete" >
                        <span className="text-gradient"><i className="bi bi-x"></i></span> </a></td>
                
                  </tr>
               <MajInformation afficherUtilisateurs={afficherUtilisateurs} open={open} data={id} handleClose={handleClose}/> 
                   
                    </>
                  )
              }
              else{
                return ( <>
                  <tr key={el._id}>
                    <td>{el._id}</td>
                    <td>{el.nom}{' '}{el.prenom}</td>
                    <td>{el.cin}</td>
                    <td>{el.universite}</td>
                    <td>{el.civilite}</td>
                    <td>{el.email}</td>
                    <td>{el.cv}</td>
                    <td>{el.demnade}</td>
                    <td>{el.sujet}</td>
                    <td>{el.duree}</td>
                    {el.statut==="accepted"?<td>Accepté</td>:<td>{el.statut}</td>}
                    
                    <td></td>
            
                    <td> <a onClick={()=>handleOpen(el)} className="btn border-shadowupdate update">
                        <span className="text-gradient"><FontAwesomeIcon icon={faPencilAlt} /></span> </a></td>
                    <td> <a   onClick={()=>handleDelete(el._id)} className="btn border-shadowdelete delete" >
                        <span className="text-gradient"><i className="bi bi-x"></i></span> </a></td>
                
                  </tr>
                  <MajInformation afficherUtilisateurs={afficherUtilisateurs} open={open} data={id} handleClose={handleClose}/> 
                   
                    </>
                  )
              }

    })}     
   </tbody>
          
   </Table>
              </CardBody>
              </Card>
              </div>
    </form>
</div>
</main>)

}

export default ConsulterCompte;