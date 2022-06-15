import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';


export default function AddressForm(props) {
  const {
    formField: {
      nom,
      dateNaiss,
      prenom,
      ville,
      cin,
      civilite,
    }
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField variant='filled' name={nom.name} label={nom.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField variant='filled' name={dateNaiss.name} type='date' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField variant='filled' name={prenom.name} label={prenom.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField variant='filled' name={ville.name} label={ville.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField variant='filled' name={cin.name} label={cin.label} fullWidth />
        </Grid><Grid item xs={12} sm={6}>
          <InputField variant='filled' name={civilite.name} label={civilite.label} fullWidth />
        </Grid>
        </Grid>
    </React.Fragment>
  );
}
