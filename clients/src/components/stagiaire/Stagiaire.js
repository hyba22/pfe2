import React , {useState,useEffect} from 'react';
import jwt_decode from "jwt-decode"
import Home from './Home';
import CompteUtilisateur from './CompteUtilisateur';
import StagiaireSideBar from './StagiaireSideBar';
import InfoStage from './InfoStage';

function Stagiaire() {
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
  if(user==='stagiaire'){
    return (
      <div>
      <div className='div-side'>
      
      <StagiaireSideBar
            onCollapse={(inactive) => {
              setInactive(inactive);
            }}
            active
            parentCallback = {handleCallback}
          />
          {
          active==="Informations personnelles"?<CompteUtilisateur/>:  
          active==="Informations sur le stage"?<InfoStage/>:
       
          <Home/>}
      </div>
      </div>
    )
  }
  else{
    return <p>Access denied !</p>
  }
}
 export default Stagiaire;