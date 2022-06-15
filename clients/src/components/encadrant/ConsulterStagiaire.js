import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table
} from "reactstrap"; 
import './consulterStagiaires.css';
import React,{useEffect,useState, useRef} from 'react';
import {MdSearch} from "react-icons/md";



 function ConsulterStagiaire() {
    const identifiant = useRef();
    const [id,setId]=useState('');
    const [nom, setNom]= useState('');
    const [description, setDescription]= useState('');
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [telephone, setTelephone] = useState('');
    const [affiche,setAffiche]=useState([]) ;
    const [statut, setStatut] = useState("");
    const [dialog, setDialog] = useState({
      message: "",
      isLoading: false,
    });

    

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
                <CardTitle tag="h4">Liste des stagiaires</CardTitle>
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
                    
                  
                   
                </tr>
            </thead>
            <tbody>
            {affiche.map(el=>{
              if(el.userType==="stagiaire"){
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
                    <td>{el.duree} </td>
                   
                
                  </tr>                   
                    </>
                  )}
              
              

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

export default ConsulterStagiaire;