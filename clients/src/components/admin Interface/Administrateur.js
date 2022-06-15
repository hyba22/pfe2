import "./admin.css";
import SideMenu from "./SideMenu";
import { useState,useEffect } from "react";
import Home from "./Home";
import ConsulterCompte from "./ConsulterCompte";
import MainDashboard from "../dashboard interface/MainDashboard";
import AjoutCompte from "./AjoutCompte";
import jwt_decode from 'jwt-decode'

function Administrateur() {
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

  if(user==='admin'){
    return (
      <div className="App">
        
        <SideMenu
            onCollapse={(inactive) => {
              setInactive(inactive);
            }}
            active
            parentCallback = {handleCallback}
          />
          {
          active==="Consulter les comptes"?<ConsulterCompte/>:
          active==="Ajouter un compte"?<AjoutCompte/>:
          active==="Dashboard"?<MainDashboard/>:
       
          
          <Home/>}
          
      </div>
    );
  }
  else{
    return(
      <p>access denied !</p>
    )
  }
}

export default Administrateur;