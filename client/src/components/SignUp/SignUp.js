import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import UserContext from '../../utils/UserContext'
import './SignUp.css'

const SignUp = _ => {

  const { username, email, password, handleInputChange, handleFormSubmit } = useContext(UserContext)

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();
  return (
    <Container maxWidth="sm">
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Email" value={email} onChange={handleInputChange} name="email" />
      <TextField id="standard-basic" label="Username" value={username} onChange={handleInputChange} name="username" />
      <TextField id="standard-password-input" type="password" label="Password" value={password} onChange={handleInputChange} name="password"/>
      <p><Button variant="contained" color="primary" onClick={handleFormSubmit}>
        Sign Up!
      </Button>
    </p></form>
    </Container>
  )
}

export default SignUp