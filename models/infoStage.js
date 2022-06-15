const mongoose = require ('mongoose');
const Schema=mongoose.Schema;

const InfoSchema = new Schema({
  

    name:{
        type: Schema.Types.ObjectId,
        ref : "Sujet"

    },

    description:{
        type: Schema.Types.ObjectId,
        ref : "Sujet"

    },
    nom: {
        type: Schema.Types.ObjectId,
        ref : "users"
    },

    prenom: {
        type: Schema.Types.ObjectId,
        ref : "users"
    }

})

module.exports = Info = mongoose.Model("Info", InfoSchema);