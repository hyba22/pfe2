import React,{useEffect, useState} from "react";
import './app.css';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Attente from "./components/Attente";
import Login from "./components/Login";
import Signup from './components/Signup';
import Forgetpassword from "./components/password/Forgetpassword";
import Resetpassword from "./components/password/Resetpassword";
import Contact from "./components/Contact";
import Accueil from "./components/Accueil";
import Administrateur from "./components/admin Interface/Administrateur";
import CompteUtilisateur from "../src/components/stagiaire/CompteUtilisateur"
import MainDashboard from "./components/dashboard interface/MainDashboard";
import Redirector from "./components/Redirector";
import Ajoutersuj from "./components/encadrant/ajoutersuj";
import Consultsuj from "./components/encadrant/consulsuj"
import Encadrant from "./components/encadrant/Encadrant";
import Stagiaire from "./components/stagiaire/Stagiaire";
import InfoStage from "./components/stagiaire/InfoStage";
import AjoutCompte from "./components/admin Interface/AjoutCompte";
import Sign from './components/sign/sign';

const App = () => {
    return (
       <div className="app">  
         <Router>
           <Routes>
             <Route path="/" element={<Accueil />}  />
             <Route path="/signup" element={<Sign />}  />
             <Route path="/login" element={<Login />} />
             <Route path="/attente" element={<Attente />} />
             <Route path="/forgetpassword" element={<Forgetpassword/>} />
             <Route path="/resetpassword/:id" element={<Resetpassword/>} />
             <Route path="/contact" element={<Contact/>}  />
             <Route path="/accueil" element={<Accueil/>}  />
             <Route path="/adminn" element={<Administrateur/>}  />
             <Route path="/profile" element={<CompteUtilisateur/>} />
             <Route path="/dashboard" element={<MainDashboard/>} />
            <Route path="/redirector" element={<Redirector />} />
            <Route path="/stagiaire" element={<Stagiaire/>} />
            <Route path="/encadrant" element={<Encadrant/>} />
            <Route path="/infostage" element={<InfoStage/>} />
            <Route path="/ajout" element={<AjoutCompte/>} />
           </Routes>
         </Router>
       </div>
    )
}


export default App;