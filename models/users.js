const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const UsersSchema= new Schema({
    nom: {
        type: String,
      },
      prenom: {
          type: String,
        },
      cin: {
          type: String,
          unique : true,
        },
      dateNaiss: {
          type: String,
      
        },
      ville: {
          type: String,
      
        },
      civilite: {
          type: String,
        
        },
      universite: {
          type: String,
         
        },
      niveau: {
          type: String,
         
        },
      specialite: {
          type: String,
          
        },     
      type: {
          type: String,
          
        }, 
      sujet: {
          type: String,
          
        }, 
      duree: {
          type: String,
         
        },
      demande: {
          type: String,
        },
      cv: {
          type: String,
        },
      photo: {
        type:String,
        
        },
      email: {
            type: String,
            
            unique: true,
        },
      password: {
            type: String,
        },  
      statut : {
          type: String,
          default: "En attente",
      },
      isAdmin: {
          type: String,
      },
      userType: {
        type : String,
      },

      departement :{
         type : String,
      },
      telephone:{
        type : String,
      },

      mention : {
        type : String,
        default:"",
      },

      note : {
        type : String,
        default:"",
      },

      remarques: {
        type : String,
        default:"",
      },

});
UsersSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

 
module.exports = Users = mongoose.model("Users",UsersSchema);; 