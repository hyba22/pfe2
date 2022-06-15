import React from 'react'
import './css/attente.css'
import Header from './Header';

function Attente() {
  return (
    <div className='attente'>
     
      <div className='box'>    
          <img src="https://img.icons8.com/ios/50/000000/hourglass-sand-bottom--v2.gif"/>
          <div className='message'> 
            <p>
            Votre compte a été créé avec succès. Nous vous 
            <br/>
            invitons à  attendre la confirmation de l’administrateur. 
            </p>
        </div>
      </div>
    </div>
  )
}

export default Attente;