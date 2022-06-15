const express = require("express");
const router=express.Router();
const Sujet=require("../models/Sujet");
router.get("/allsujet",(req,res)=>{
    Sujet.find()
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

router.post("/add/sujet",(req,res)=>{
    const {nomSujet,description,dateDebut,dateFin}=req.body;
    const sujet=new Sujet({nomSujet,description,dateDebut,dateFin})
    sujet.save()
    .then(data => res.sendStatus(200))
    .catch(err => console.error(err));
})
router.put("/update/sujet/:id",(req,res)=>{
    const {nomSujet,description, dateDebut,dateFin}=req.body;
    const id=req.params.id;
    Sujet.findByIdAndUpdate({_id:id},req.body)
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

// delete user
router.delete('/delete/:id', async (req, res) => {
    try {
      await Sujet.deleteOne({ _id: req.params.id });
      res.status(201).json({ message: "sujet deleted with success" });
    } catch (error) {
      console.log(error.message);
    }
  });


module.exports=router;