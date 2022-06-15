
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const SujetSchema= new Schema({
    nomSujet : {
        type : String,
    },

    description:{
        type: String, 
    },

    dateDebut:{
        type : Date,
    },
    dateFin:{
        type : Date,
    },


})

 
module.exports = Sujet = mongoose.model("Sujet",SujetSchema);; 