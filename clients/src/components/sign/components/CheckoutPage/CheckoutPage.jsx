import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import { createTheme } from '@material-ui/core/styles'
import AddressForm from './Forms/AddressForm';
import SelectForm from './Forms/SelectForm';
import Creation from './Forms/creation';
import CheckoutSuccess from './CheckoutSuccess';
import UploadFileIcon from "@mui/icons-material/UploadFile";
import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';
import axios from 'axios'
import useStyles from './styles';

const steps = ['Informations Personnelles', 'Informations Universitaires', 'Création Compte'];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;
    case 1:
      return <SelectForm formField={formField} />;
    case 2:
      return <Creation formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function _submitForm(values, actions) {
    axios.post("http://localhost:5000/users/add/user",{
    nom:values.nom,
    prenom:values.prenom,
    cin:values.cin,
    civilite:values.civilite,
    ville:values.ville,
    type:values.type_stage,
    sujet:values.sujet,
    dateNaiss:values.dateNaiss,
    email:values.email,
    password:values.password,
    demande:values.demande,
    duree:values.duree,
    universite:values.universite,
    niveau:values.niveau,
    isAdmin:'stagiaire',
    userType:'stagiaire',
    specialite:values.specialite})
    .then(res=>{
      console.log(res)
      actions.setSubmitting(false);
      window.location.replace('http://localhost:3000/attente')
    })
    .catch(err=>{console.error(err);actions.setSubmitting(false); })
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Inscription
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.btn}>
                      Précedent
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                     {isLastStep ? "s'inscrire" : 'Suivant'}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
