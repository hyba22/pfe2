const express = require("express");
const crypto = require("crypto");
const sendEmail = require('../mailer')
const router=express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport=require("passport");
const Users = require("../models/Users");

 
//sign up user
router.post("/add/user",(req,res)=>{
const {nom,
      prenom,
      cin, 
      dateNaiss,
      ville, 
      civilite, 
      universite, 
      niveau,
      specialite,
      type,
      sujet, 
      duree, 
      demande, 
      cv, 
      photo,
      email,
      password,
      statut,
      userType,
      departement,
      telephone,
      isAdmin,
      mention,
      note,
      remarques
} = req.body
Users.findOne({email}).then((account) =>{
    if (account) return res.sendStatus(409);
    else {
        const accounts = new Users({
            nom,
            prenom,
            cin, 
            dateNaiss,
            ville, 
            civilite, 
            universite, 
            niveau,
            specialite,
            type,
            sujet, 
            duree, 
            demande, 
            cv, 
            photo,
            email,
            password,
            statut,
            userType,
            departement,
            telephone,
            isAdmin,
            mention,
            note,
            remarques
        })
        //crypt the code
        bcrypt.genSalt(10 , (err , salt) =>{
            bcrypt.hash(password , salt ,(err,hash)=>{
                accounts.password=hash;
                accounts.save()
                .then((newacc) => res.json(newacc))
                .catch((err) => console.error(err))
            })
        })

    }
}) 
    .then(result => console.log(result))
    .catch(err => console.log(err))
    })


 //login user !
router.post("/login" , (req , res)=>{
    const {email , password} = req.body;
    Users.findOne({email}).select("+password").then(user =>{
        if(!user) res.sendStatus(404) 
        else {
            bcrypt.compare(password,user.password)
            .then(isMatched =>{
                if (isMatched){
                    const payload={id:user._id, email : user.email,isadmin:user.isAdmin,usertype:user.userType}
                    jwt.sign(payload , "session" , {expiresIn:3600}, (err ,token)=>{
                        if(err) res.sendStatus(500)
                        else {
                            res.json({token : token})
                        }
                    })
                }else{
                    res.sendStatus(400)
                }
            })
        }
    }).catch(err => res.send('server error'))
})

// validate token
router.get("/validate" , passport.authenticate("jwt" , {session:false}) ,(req,res)=>{
    res.send(req.user)
})

// find all users 
router.get('/findall',  async (req, res) => {
    try {
      const data = await Users.find();
      res.status(201).json(data);
    } catch (error) {
      console.log(error.message);
    }
  });
router.post('/findcount',(req,res)=>{
  const {status,isAdmin}=req.body;
  Users.find({statut:status,isAdmin})
  .then(data=>res.send(data)).catch(err=>console.error(err))

})

// find one user 
router.get('/findone/:id', async (req, res) => {
  Users.findOne({ _id: req.params.id })
  .then(data=>{res.send(data)})
  .catch(err=>console.error(err))
  });

// update user's informations
 router.put('/update/:id', async (req,res)=>{
  const id=req.params.id
  const {nom,prenom,email,ville,universite,password}=req.body;
  if(password===''){
    Users.findByIdAndUpdate({_id:id},{nom:nom,prenom:prenom,email:email,ville:ville,universite:universite})
    .then(data=>res.send(data))
    .catch(err=>console.error(err))
  }
  else{
    const pass = await bcrypt.hash(req.body.password, 8);
      Users.findByIdAndUpdate({_id:id},{nom:nom,prenom:prenom,email:email,ville:ville,universite:universite,password:pass})
      .then(data=>res.send(data))
      .catch(err=>console.error(err))
  }
 });

// delete user
router.delete('/delete/:id', async (req, res) => {
    try {
      await Users.deleteOne({ _id: req.params.id });
      res.status(201).json({ message: "User deleted with success" });
    } catch (error) {
      console.log(error.message);
    }
  });

  router.put("/status/:id",(req,res)=>{
    const id=req.params.id;
    const {accepted}=req.body;
    Users.findByIdAndUpdate({_id:id},{statut:accepted})
    .then(data=>res.send(data))
    .catch(err=>console.error(err));
  })

  router.put("/mention/:id",(req,res)=>{
    const id=req.params.id;
    const {mention}=req.body;
    Users.findByIdAndUpdate({_id:id},{mention})
    .then(data=>res.send(data))
    .catch(err=>console.error(err));
  })
router.get('/user/:id',(req,res)=>{
  const id=req.params.id;
  Users.findById({_id:id})
  .then(data=>res.send(data))
  .catch(err=>console.error(err))
})
  router.put("/add/remarques/:id",(req,res)=>{
    const id=req.params.id;
    const {note,remarques}=req.body;
    Users.findByIdAndUpdate({_id:id},{note,remarques})
    .then(data=>res.send(data))
    .catch(err=>console.error(err));
})
router.post('/getid',(req,res)=>{
  const {email}=req.body;
  Users.findOne({email})
  .then(data=>res.send(data._id))
  .catch(err=>console.log(error))
})
router.put('/resetpassword/:id',async (req,res)=>{
  const id=req.params.id;
  const pass = await bcrypt.hash(req.body.password, 8);
      Users.findByIdAndUpdate({_id:id},{password:pass})
      .then(data=>res.send(data))
      .catch(err=>console.error(err))
})

module.exports=router;