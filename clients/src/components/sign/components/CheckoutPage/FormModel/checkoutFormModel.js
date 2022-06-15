export default {
  formId: 'checkoutForm',
  formField: {
    nom: {
      name: 'nom',
      label: 'Nom',
      requiredErrorMsg: 'Nom est obligatoire'
    },
    prenom: {
      name: 'prenom',
      label: 'Prénom',
      requiredErrorMsg: 'Prénom est obligatoire',
    },
   dateNaiss: {
      name: 'dateNaiss',
      label: 'Date de naissance',
      requiredErrorMsg: 'Date de naissance est obligatoire'
    },
    cin: {
      name: 'cin',
      label: 'CIN',
      requiredErrorMsg: 'CIN est obligatoire'
    },
    ville: {
      name: 'ville',
      label: 'Ville',
      requiredErrorMsg: 'Ville est obligatoire'
    },
    civilite: {
      name: 'civilite',
      label: 'Civilité',
      requiredErrorMsg: 'Civilité est obligatoire'
    },
    universite: {
      name: 'universite',
      label: 'Université',
      requiredErrorMsg: 'universite is required',
      invalidErrorMsg: 'Université est obligatoire'
    },
    type_stage: {
      name: 'type_stage',
      label: 'Type de stage',
      requiredErrorMsg: 'Type de stage est obligatoire'
    },
    niveau: {
      name: 'niveau',
      label: 'Niveau',
      requiredErrorMsg: 'Niveau est obligatoire'
    },
    sujet: {
      name: 'sujet',
      label: 'Sujet',
      requiredErrorMsg: 'Choisir un sujet est obligatoire'
    },
    specialite: {
      name: 'specialite',
      label: 'Specialité',
      requiredErrorMsg: 'Spécilité est obligatoire',
     
    },
    duree: {
      name: 'duree',
      label: 'Durée',
      requiredErrorMsg: 'Durée en mois est obligatoire',
      invalidErrorMsg: ''
    },
    email: {
      name: 'email',
      label: 'Email',
      requiredErrorMsg: ' Email est obligatoire',
      invalidErrorMsg: ''
    },
    password: {
      name: 'password',
      label: 'Mot de passe',
      requiredErrorMsg: 'Mot de passe obligatoire',
      invalidErrorMsg: ''
    },
    confirmpass: {
      name: 'confirmpass',
      label: 'Confirmer mot de passe',
      requiredErrorMsg: 'Tapez le meme mot de passe',
      invalidErrorMsg: ''
    }
  }
};
