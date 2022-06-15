import React from 'react';
import './css/header.css';
import logo from '../assets/logo-laposte-TN.png';
import Sidebar from './Sidebar';
import Accueil from './Accueil';
import { Link } from 'react-router-dom';
import Contact from './Contact';

function Header() {
  return (
    <div className='header'>
        <div className='items'>
        
            <div className='logo'>
              <img  className='logo-image' src={logo} />
            </div>
               
               <Sidebar/>

               <div className='menu'>
               <ul>
                <li className="nav-list-item trans"><Link to="/accueil">Accueil</Link></li>
                <li className="nav-list-item trans"><Link to="/contact">Contact</Link></li>
               </ul>

               </div>

        </div>
      
    </div> 
  )
}

export default Header