import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table
} from "reactstrap"; 
import './infoStage.css';
import React,{useEffect,useState, useRef} from 'react';
import jwt_decode from 'jwt-decode'

function InfoStage() {
    const identifiant = useRef();
    const [id,setId]=useState('');
    const [affiche,setAffiche]=useState([]) ;
    const [statut, setStatut] = useState("");
    const [user,setUser]=useState([])
    const [sujet,setSujet]=useState('')
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
    const handleMyInfo=()=>{
      const token=localStorage.getItem('token')
      const decoded=jwt_decode(token);
      axios.get(`http://localhost:5000/users/findone/${decoded.id}`)
      .then(res=>{setUser(res.data);console.log(res.data)})
      .catch(err=>console.error(err))
    }
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
     afficherUtilisateurs();
    handleMyInfo();
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
                <CardTitle tag="h4">Informations de stage</CardTitle>
              </CardHeader>
            
    <CardBody>
                <Table responsive>
                <thead className="text-primary">
                <tr>
                    
                    <th>Nom et Prénom</th>
                    <th>Téléphone</th>
                    <th>E-mail</th>
                    <th>Sujet</th>
                    <th>Description</th>
                    <th>Durée</th>
                   
                </tr>
            </thead>
            <tbody>
            {affiche.map(el=>{
              if(el.userType==="encadrant"){
                return ( <>
                  <tr key={el._id}>
                  
                    <td>{el.nom}{' '}{el.prenom}</td>
                    <td>{el.telephone}</td>
                    <td>{el.email}</td>
                    <td>{user.sujet}</td>
                    <td>{user.remarques}</td>
                    <td>{user.duree}</td>
                    
                  </tr>                   
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

export default InfoStage