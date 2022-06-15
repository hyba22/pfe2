import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table
} from "reactstrap"; 
import './consultercompte.css';
import React,{useEffect,useState, useRef} from 'react';
import MajInformation from './majinformation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'


function Consultsuj() {
    const [id,setId]=useState('');
    const [affiche,setAffiche]=useState([]) ;
    

    const handleDelete=(id)=>{
      axios.delete(`http://localhost:5000/sujet/delete/${id}`)
        .then(res=>{
        const newaffiche=affiche.filter(el=>el._id!==id)
        setAffiche(newaffiche);
        console.log(newaffiche);
        })
         .catch(err=>{console.log("not great");
       })
    }

   const afficherUtilisateurs=()=>{ 
    axios.get("http://localhost:5000/sujet/allsujet")
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
    

      return (
<main id="site-main" className='site-main'>
<div className="containerrs">

    <form action="/" method="POST" className='tablecompte'>
    <div className="cadre-table-scrollregler">
    <Card className='table-card'>
              <CardHeader>
                <CardTitle tag="h4">Liste des sujets</CardTitle>
              </CardHeader>
            
    <CardBody>
                <Table responsive>
                <thead className="text-primary">
                <tr>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Date de début</th>
                    <th>Date de fin</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                </tr>
            </thead>
            <tbody>
            {affiche.map(el=>{
                return ( <>
                  <tr key={el._id}>
                    <td>{el.nomSujet}</td>
                    <td>{el.description}</td>     
                    <td>{el.dateDebut}</td>
                    <td>{el.dateFin}</td>        
                    <td className='modify'> <a onClick={()=>handleOpen(el)} className="btn border-shadowupdate update">
                        <span className="text-gradient"><FontAwesomeIcon icon={faPencilAlt} /></span> </a></td>
                    <td> <a onClick={()=>handleDelete(el._id)} className="btn border-shadowdelete delete" >
                        <span className="text-gradient"><i className="bi bi-x"></i></span> </a></td>
                  </tr>
               <MajInformation afficherUtilisateurs={afficherUtilisateurs} open={open} data={id} handleClose={handleClose}/> 
                    </>
                  )
             

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

export default Consultsuj;