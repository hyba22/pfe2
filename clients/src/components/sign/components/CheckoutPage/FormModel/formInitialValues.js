import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    nom,
      dateNaiss,
      prenom,
      ville,
      cin,
      civilite,
      universite,
      type_stage,
      niveau,
      sujet,
      specialite,
      duree,
      email,
      password,
      confirmpass,
  }
} = checkoutFormModel;

export default {
  [nom.name]: '',
  [prenom.name]: '',
  [dateNaiss.name]: '',
  [ville.name]: '',
  [cin.name]: '',
  [civilite.name]: '',
  [universite.name]: '',
  [type_stage.name]: '',
  [niveau.name]: '',
  [sujet.name]: '',
  [specialite.name]: '',
  [duree.name]: '',
  [email.name]: '',
  [password.name]: '',
  [confirmpass.name]: '',


};
