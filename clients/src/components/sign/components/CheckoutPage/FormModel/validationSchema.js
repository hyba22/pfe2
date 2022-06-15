import * as Yup from 'yup';
import moment from 'moment';
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

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [nom.name]: Yup.string().required(`${nom.requiredErrorMsg}`),
    [prenom.name]: Yup.string().required(`${prenom.requiredErrorMsg}`),
    [dateNaiss.name]: Yup.string().required(`${dateNaiss.requiredErrorMsg}`),
    [cin.name]: Yup.string().required(`${cin.requiredErrorMsg}`).max(8,"le longueur est 8").min(8,"longueur est 8"),
    [civilite.name]: Yup.string().required(`${civilite.requiredErrorMsg}`),

    [ville.name]: Yup.string()
      .required(`${ville.requiredErrorMsg}`),}),
  Yup.object().shape({
    [universite.name]: Yup.string().required(`${universite.requiredErrorMsg}`),
    [type_stage.name]: Yup.string().required(`${type_stage.requiredErrorMsg}`),
    [niveau.name]: Yup.string().required(`${niveau.requiredErrorMsg}`),
    [sujet.name]: Yup.string().required(`${sujet.requiredErrorMsg}`),
    [specialite.name]: Yup.string().required(`${specialite.requiredErrorMsg}`),
    [duree.name]: Yup.string().required(`${duree.requiredErrorMsg}`),
}),
Yup.object().shape({
  [email.name]: Yup.string().required(`${email.requiredErrorMsg}`).email('Format email invalide'),
  [password.name]: Yup.string().required(`${password.requiredErrorMsg}`),
  [confirmpass.name]: Yup.string().required(`${confirmpass.requiredErrorMsg}`),
})
];
