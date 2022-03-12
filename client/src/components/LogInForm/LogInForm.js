import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import UserContext from '../../utils/UserContext'

const LogInForm = _ => {

  const { usernameLogin, 
          passwordLogin,
          usernameSignUp,
          passwordSignUp,
          email,  
          handleLogInInput, 
          handleSignUpInput, 
          handleLoginForm, 
          handleSignUpForm, 
        } = useContext(UserContext)

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
      <TextField id="standard-basic" label="Username" value={usernameLogin} onChange={handleLogInInput} name="usernameLogin" />
      <TextField id="standard-password-input" type="password" label="Password" value={passwordLogin} onChange={handleLogInInput} name="passwordLogin"/>
      <Button variant="contained" color="primary" onClick={handleLoginForm}>
        Log In
      </Button>
    </form>
    <h3>Need an account? Sign up!</h3>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Email" value={email} onChange={handleSignUpInput} name="email" />
      <TextField id="standard-basic" label="Username" value={usernameSignUp} onChange={handleSignUpInput} name="usernameSignUp" />
      <TextField id="standard-password-input" type="password" label="Password" value={passwordSignUp} onChange={handleSignUpInput} name="passwordSignUp"/>
      <Button variant="contained" color="primary" onClick={handleSignUpForm}>
        Sign Up!
      </Button>
    </form>
    </Container>
  )
}

export default LogInForm