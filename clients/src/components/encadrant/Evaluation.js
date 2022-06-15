import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table
} from "reactstrap"; 
import './evaluation.css';
import React,{useEffect,useState, useRef} from 'react';
import Remarques from './Remarques';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'


function Evaluation() {
    const [id,setId]=useState('');
    const [identifiant,setIdentifiant]=useState('');
    const [affiche,setAffiche]=useState([]) ;
    const [afficher,setAfficher]=useState([]) ;
    const [mention, setMention]= useState("");
    const [note, setNote] = useState("");

    
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  


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

   const afficheStagiaires=()=>{
       axios.get("http://localhost:5000/users/findall")
       .then(res=>{ setAfficher(res.data)
    console.log(res.data)
    })
    .catch(err=>console.error(err))
   };

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
    //  afficherUtilisateurs();
     afficheStagiaires();
    },[])
    const [activated,setActivated]=React.useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = (el) => {
      setOpen(true);
      setId(el)
    };
    const handleClose = () => {
      setOpen(false);
      afficheStagiaires();
    };
    
const handleMention = (id,ment) => {
  axios.put(`http://localhost:5000/users/mention/${id}`,{mention:ment})
  .then(res => {
    if(res.status===200){
      afficheStagiaires();
    }
  })
  .catch(err => console.log("not working !"))
}

      return (
<main id="site-main" className='site-main'>
<div className="containerrs">
   
    <div className="cadre-table-scrollregler">
    <Card className='table-card'>
              <CardHeader>
                <CardTitle tag="h4">Evaluation des stagiaires</CardTitle>
              </CardHeader>
            
    <CardBody>
                <Table responsive>
                <thead className="text-primary">
                <tr>
                    <th>ID</th>
                    <th>Nom et Prénom</th>
                    <th>Sujet</th>
                    <th>Excellent</th>
                    <th>Très Bien </th>
                    <th>Bien </th>
                    <th>Satisfaisant</th>
                    <th>A améliorer</th>
                    <th>Non satisfaisant</th>
                    <th>Note ../20</th>
                    <th>Remarques et anticipations </th>
                    <th>Modifier</th>
                </tr>
            </thead>
            <tbody>
            {afficher.map(el=>{
              
                return ( 
                <>
                  {el.isAdmin==="stagiaire"?
                    <tr key={el._id}>
                    <td>{el._id}</td>
                      <td>{el.nom}{' '}{el.prenom} </td>
                      <td>{el.sujet}</td>
                      {el.mention===''?
                      <>
                      <td className='mention'>
                        <button className='btn-mention' onClick={()=>handleMention(el._id,'excellent')} ><span className='span-mention'><i className='bi bi-check-square'></i></span></button>
                      </td>    <td className='mention'>
                        <button className='btn-mention' onClick={()=>handleMention(el._id,'tres bien')} ><span className='span-mention'><i className='bi bi-check-square'></i></span></button>
                      </td>    
                      <td className='mention'>
                        <button className='btn-mention' onClick={()=>handleMention(el._id,'bien')} ><span className='span-mention'><i className='bi bi-check-square'></i></span></button>
                      </td>    
                      <td className='mention'>
                        <button className='btn-mention' onClick={()=>handleMention(el._id,'satisfaisant')} ><span className='span-mention'><i className='bi bi-check-square'></i></span></button>
                      </td>    
                      <td className='mention'>
                        <button className='btn-mention' onClick={()=>handleMention(el._id,'a ameliorer')} ><span className='span-mention'><i className='bi bi-check-square'></i></span></button>
                      </td>    
                      <td className='mention'>
                        <button className='btn-mention' onClick={()=>handleMention(el._id,'non satisfaisant')} ><span className='span-mention'><i className='bi bi-check-square'></i></span></button>
                      </td>    
                      </>
                      :el.mention==='excellent'?
                      <>
                      <td className='mention'>
                        <a className='btn-mention'><span className='span-mention'><i className='bi bi-check-square'></i></span></a>
                      </td>
                      <td className='mention'>
                      </td>    
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      </>:el.mention==='tres bien'?
                        <>
                        <td></td>
                        <td className='mention'>
                        <a className='btn-mention'><span className='span-mention'><i className='bi bi-check-square'></i></span></a>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                        </>
                      :el.mention==='bien'?
                      <>
                      <td></td>
                    <td></td>
                    <td className='mention'>
                      <a className='btn-mention'><span className='span-mention'><i className='bi bi-check-square'></i></span></a>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                      </>
                      :el.mention==='satisfaisant'?
                       <>
                       <td></td>
                     <td></td>
                     <td></td>
                     <td className='mention'>
                       <a className='btn-mention'><span className='span-mention'><i className='bi bi-check-square'></i></span></a>
                     </td>
                     <td></td>
                     <td></td>
                       </>:el.mention==='a ameliorer'?
                        <>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='mention'>
                        <a className='btn-mention'><span className='span-mention'><i className='bi bi-check-square'></i></span></a>
                        </td>
                        <td></td>
                        </>
                       :el.mention==='non satisfaisant'?
                       <>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       
                       <td></td>
                       <td className='mention'>
                       <a className='btn-mention'><span className='span-mention'><i className='bi bi-check-square'></i></span></a>
                       </td>
                       </>:null
                    }
                       
                         <td>{el.note}</td>
                         <td>{el.remarques}</td>
  
                      <td className='note-remarques'> <a onClick={()=>handleOpen(el)} className="btn border-shadowupdate update-evalu">
                          <span className="text-gradient"><FontAwesomeIcon icon={faPencilAlt} /></span> </a></td>
                     
              </tr>
                  :null}
                    <Remarques afficherUtilisateurs={afficherUtilisateurs} open={open} data={id} handleClose={handleClose}/> 
                </>
                    
                  )
                
    })}     
   </tbody>
          
   </Table>
              </CardBody>
              </Card>
              </div>
</div>
</main>)

}

export default Evaluation;