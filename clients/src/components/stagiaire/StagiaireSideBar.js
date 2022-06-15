import './stagiaireSideBar.css';
import React, { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode'
import user from "../../assets/profileuser.png";
import { IoLogOutOutline} from 'react-icons/io5';
import logo from '../../assets/logo-laposte-TN.png';


export const Items = [
  
  {
    name: "Informations personnelles",
    exact: true,
    to: "/",
    iconClassName: "bi bi-journal-plus",
    
  },
  {
    name: "Informations sur le stage",
    exact: true,
    to: "/",
    iconClassName: "bi bi-journal-plus",
    
  },
 
];

const StagiaireSideBar = (props) => {
  const [inactive, setInactive] = useState(false);
  const [activation,setActivation]=useState("");
  const [expand, setExpand] = useState(false);


  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  const onTrigger = (data) => {
    if(data!==props.active && data!=="Paramétres" && data!=="Comptes"){
      props.parentCallback(data);
    }
}

  useEffect(() => {
    let Items = document.querySelectorAll(".menu-item");
    Items.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        Items.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
onTrigger(activation);
  }, [activation,props.active]);



  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo" style={{width:'100%', height:"60px", display:"flex", justifyContent:"center"}}>
          <img src={logo} alt="webscript"  style={{height:"40px"}}/>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="bi bi-arrow-right-square-fill" style={{color: '#287bff'}}></i>
          ) : (
            <i className="bi bi-arrow-left-square-fill" style={{color: 'white'}}></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {Items.map((menuItem, index) => (
            <li onClick={(e) => {
              if (inactive) {
                setInactive(false);
              }
              onTrigger(menuItem.name);
            }}>
    <a
      onClick={() => {
         setExpand((e) => !e);
       }}
      className={`menu-item`}
    >
      <div className="menu-icon">
        <i class={menuItem.iconClassName}></i>
      </div>
      <span>{menuItem.name}</span>
    </a>
    {menuItem.subMenus && (menuItem.subMenus).length > 0 ? (
      <ul className={`sub-menu`}>
        {(menuItem.subMenus).map((menu, index) => (
          <li  key={index} onClick={(e) => {
            setActivation(menu.name)
          }
          }>
            <a >{menu.name}</a>
          </li>
        ))}
      </ul>
    ) : null}
    </li>
        ))}  
          <a
    href="/"  
      className={`menu-item`}
    >
        <div className="menu-icon">     
        <li><IoLogOutOutline/></li></div>
        <span>Déconnexion</span> </a>       
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
        <h5>admin</h5>
          <p>id user </p>
        </div>
      </div>
    </div>
  );
};

export default StagiaireSideBar;