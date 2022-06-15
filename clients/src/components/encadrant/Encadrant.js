import React , {useState,useEffect} from 'react';
import jwt_decode from 'jwt-decode'
import Ajoutersuj from './ajoutersuj';
import Consultsuj from './consulsuj';
import SideBarEncadrant from './SideBarEncadrant';
import Home from './Home';
import ConsulterStagiaire from './ConsulterStagiaire';
import Evaluation from './Evaluation';

function Encadrant() {
  const [user,setUser]=useState('')
  useEffect(()=>{
    let x=localStorage.getItem('token')
    
    if(x!==null){
      const decoded=jwt_decode(x)
      setUser(decoded.isadmin);
    }
  },[])
    const [inactive, setInactive] = useState(false);
    const [active, setActive] = useState('');
  
    const handleCallback = (childData) =>{
      setActive(childData);
      console.log(childData);
  }
 if(user==='encadrant'){
  return (
    <div>
    <div className='div-side'>
    
    <SideBarEncadrant
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
          active
          parentCallback = {handleCallback}
        />
        {
        active==="Ajouter des sujets"?<Ajoutersuj/>:
        active==="Consulter les sujets"?<Consultsuj/>:
        active==="Consulter les stagiaires"?<ConsulterStagiaire/>:
        active==="Evaluer les stagiaires"?<Evaluation/>:
        
        <Home/>}
    </div>
    </div>
  )
 }
 else{
  return <p>access denied !</p>
 }
}

export default Encadrant