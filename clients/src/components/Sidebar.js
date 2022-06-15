import React, {useState} from 'react';
import { IoMdClose, IoMdMenu} from 'react-icons/io';
import { Link } from 'react-router-dom';
import './css/sidebar.css';

function Sidebar() {
    const [active,setActive] = useState(false)

    const activateNav = () => {
        setActive(!active) 
    }

  return (
    <div className={active ? 'nav-bar' : 'nav-bar-mobile'}>

               <div className='menu-icon' onClick={activateNav}>

                    {!active ? <IoMdMenu className='menu-open-icon'/> : <IoMdClose className='menu-close-tag'/>}

               </div> 

            <nav>
              <ul className={active ? 'ul-item-bar' : 'ul-item-no-bar'}>

                <li>
                  <Link to="/login">Log In</Link>   
                </li>
 

                <li>
                  <Link to="/signup" >Sign Up</Link>
                </li>
          
               </ul>
            </nav>

    </div>
  )
}

export default Sidebar