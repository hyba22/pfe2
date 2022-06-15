import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';
import axios from 'axios'

export default function SelectForm(props) {
  const [suj, setSuj] = useState([])
  const sujetParser = (data) => {
    let x = []
    data.map(el => {
      let y = { value: el.nomSujet, label: el.nomSujet }
      x.push(y)
      return null
    })
    return x;
  }
  useEffect(() => {
    axios.get('http://localhost:5000/sujet/allsujet')
      .then(res => setSuj(sujetParser(res.data)))
      .catch(err => console.error(err))
  }, [suj])
  const stage = [
    {
      value: 'ete',
      label: 'Eté'
    },
    {
      value: 'pfe',
      label: 'PFE'
    },
    {
      value: 'pfa',
      label: 'PFA'
    },
  ];
  const niv = [
    {
      value: 'l1',
      label: 'Licence 1'
    },
    {
      value: 'l2',
      label: 'Licence 2'
    },
    {
      value: 'l3',
      label: 'Licence 3'
    },
    {
      value: 'm1',
      label: 'Master 1'
    },
    {
      value: 'm2',
      label: 'Master 2'
    }
  ];
  const {
    formField: { universite, type_stage, niveau, sujet, specialite, duree }
  } = props;

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField variant='filled' name={universite.name} label={universite.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            variant='filled'
            name={type_stage.name}
            label={type_stage.label}
            data={stage}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            variant='filled'
            name={niveau.name}
            label={niveau.label}
            data={niv}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            variant='filled'
            name={sujet.name}
            label={sujet.label}
            data={suj}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField variant='filled' name={specialite.name} label={specialite.label} fullWidth />
        </Grid><Grid item xs={12} sm={6}>
          <InputField variant='filled' name={duree.name} label={duree.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
