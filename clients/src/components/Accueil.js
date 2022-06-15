import React,{useEffect} from 'react';
import './css/accueil.css';
import Header from './Header';
import ReactTypingEffect from 'react-typing-effect';
import img1 from "../assets/signup.png";
import circle from "../assets/circle.png";

function Accueil() {
  useEffect(()=>{
    localStorage.removeItem('token')
  },[])
  return (
    <div className='accueil'>
        <Header/>
        <div className='home-accueil'> 
           
            <ReactTypingEffect speed="200" typingDelay="500" eraseDelay="2000" eraseSpeed="80" className='text-effect'
            text={["BIENVENUE CHEZ LA POSTE"]}
             />
      </div>
      <div className='acueil-div'>
      <div className='div-image'>
      <img src={img1} className="img1" alt='' />
      <img src={circle} className="rotate" alt=''/>
      </div>

      <div className='paragraphe'>

        <h1 className='h1-acc'>Postuler maintenant vos demandes de stage en ligne</h1>
           <p>La Poste met à la disposition des étudiants un ensemble de services en ligne.</p>
           <div className='div-span'>
           <span className='span-i'>
           <i>1</i>
           Inscrivez-vous
           </span>
           <span className='span-i'>
           <i>2</i>
           Bénéficiez d'une expérience avec la poste tunisienne 
           </span>
           <span className='span-i'>
           <i>3</i>
           Nos services incluent tous les domaines 
           </span>
           <span className='span-i'>
           <i>4</i>
           Apprenez  des nouvelles compétences 
           </span>
           </div>
      </div>
      </div>
    </div>
  )
}

export default Accueil;