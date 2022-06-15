import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    borderRadius:'50px'
  },
  btn:{
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor:'#3f51b5',
    color:'white',
    borderRadius:'50px',
    padding:'5px 15px',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}));
