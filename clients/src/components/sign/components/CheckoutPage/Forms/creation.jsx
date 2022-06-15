import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import UploadFileIcon from "@mui/icons-material/UploadFile";
import './creation.css'
export default function Creation(props) {
  const {
    formField: {
     email,
     password,
     confirmpass
    }
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
      <Button className='btn-file sizing-button-sign'
        component="label"
        variant="outlined"
        startIcon={<UploadFileIcon />}
        sx={{ marginRight: "1rem" }}
      >
       Charger votre demande de stage
        <input type="file"  hidden accept=".jpeg, .gif, .jpg, .png" />
      </Button>
    
      <Box className='file-path'></Box>
      </Grid>
        <Grid item xs={12} sm={6}>
          <InputField variant='filled' name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
      <Button className='btn-file sizing-button-sign'
        component="label"
        variant="outlined"
        startIcon={<UploadFileIcon />}
        sx={{ width:'100%', marginRight: "1rem" }}
      >
        Charger votre cv
        <input type="file"   hidden accept=".jpeg, .gif, .jpg, .png" />
      </Button>
    
      <Box className='file-path'></Box>
      </Grid>
        <Grid item xs={12} sm={6}>
          <InputField variant='filled' name={password.name} label={password.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
      <Button className='btn-file sizing-button-sign'
        component="label"
        variant="outlined"
        startIcon={<PhotoCamera />}
        sx={{ marginRight: "1rem" }}
      >
        Charger votre photo
        <input type="file"  hidden accept=".jpeg, .gif, .jpg, .png" />
      </Button>
    
      <Box className='file-path'></Box>
      </Grid>
        <Grid item xs={12} sm={6}>
          <InputField variant='filled' name={confirmpass.name} label={confirmpass.label} fullWidth />
        </Grid>

        </Grid>
    </React.Fragment>
  );
}