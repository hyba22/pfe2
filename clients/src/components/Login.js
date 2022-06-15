import React,{Component} from "react";
import "./css/login.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";
import Forgetpassword from "./password/Forgetpassword";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


class Login extends Component{
    constructor(){
        super(); 
        this.state={
            email:"",
            password:"",
            error:"",
            logged:false
        }
    }
    componentDidMount(){
        localStorage.clear();
    }
    login = (logdata) =>{
        axios.post('http://localhost:5000/users/login' , logdata)
        .then(res => {if (res.status === 200){
         localStorage.setItem('token' , res.data.token)
         
         this.setState({logged:true})
        }
    })
        .catch(err => this.setState({password:'',error:" Email ou mot de passe incorrecte!"}))
       }
       loginEnter = (logdata,e) =>{
        if(e.key==="Enter"){
            axios.post('http://localhost:5000/users/login' , logdata)
        .then(res => {if (res.status === 200){
         localStorage.setItem('token' , res.data.token)
         this.setState({logged:true})
         console.log(res.data.token)
        }
    })
        .catch(err => this.setState({password:'',error:"Email ou mot de passe incorrecte!"}))
        }
       }
    
       handleChange=(e)=>{this.setState({
        [e.target.name]:e.target.value
      }) 
    }
    render(){
        return(
            <div className="login-section">
                
                <div className="login-container">
                <fieldset style={{width : '700px', height:'480px'}} className="fieldset">
                <img src="https://img.icons8.com/color/50/000000/user-male-circle--v2.gif"/>
                    <h3>Login</h3>
                    <div className="form-login">
                    <TextField  onKeyDown={(e)=>this.loginEnter(this.state,e)} 
                    name="email" 
                    sx={{m:1}}
                    value={this.state.email}
                     onChange={(e)=>this.handleChange(e)}
                      className="textfield" 
                      label="Email"
                       id="custom-css-outlined-input" 
                        variant='filled' />

                    <TextField  
                    onKeyDown={(e)=>this.loginEnter(this.state,e)}
                     name="password" 
                     sx={{m:1}}
                     value={this.state.password} 
                     onChange={(e)=>this.handleChange(e)} 
                     type="password" 
                     className="textfield" 
                     label="Password" 
                     id="custom-css-outlined-pass" 
                     variant='filled' />

                   {/*<Link to="/profile"></Link>*/}
                    <Button onClick={()=>this.login(this.state)} className="button" variant="contained" endIcon={<SendIcon />}>
                        Se connecter
                        
                    </Button>
                    

                    <Link to="/forgetpassword">Mot de passe oublié?</Link>
                    
                    </div>
                    <div className="error-section">
                        <p>{this.state.error}</p>
                    </div>
                    </fieldset>
                </div>
                {this.state.logged && (<Navigate to="/redirector" replace={true} />)}
               
            </div>
        )
    }
}





export default Login;