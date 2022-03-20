import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import UserContext from '../../utils/UserContext'
import './Login.css'

const LogInForm = _ => {

  const backgroundColor = '#E6E8E6'

  const { usernameLogin, 
          passwordLogin,
          usernameSignUp,
          passwordSignUp,
          email,  
          handleLogInInput, 
          handleSignUpInput, 
          handleLoginForm, 
          handleSignUpForm, } = useContext(UserContext)

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        '& label.Mui-focused': {
          color: 'black'},
        '& .MuiInput-underline:after': {
          borderBottomColor: 'black'},
      },
    },
    paper: {
      background: backgroundColor
    },
  }));

  const classes = useStyles()

  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" color={classes.root} label="Username" value={usernameLogin} onChange={handleLogInInput} name="usernameLogin" />
          <TextField id="standard-password-input" type="password" label="Password" value={passwordLogin} onChange={handleLogInInput} name="passwordLogin"/>
          <Button variant="outlined" onClick={handleLoginForm}>
            Log In
          </Button>
        </form>
      </Paper>
    <h3>Need an account? Sign up!</h3>
    <Paper className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Email" value={email} onChange={handleSignUpInput} name="email" />
        <TextField id="standard-basic" label="Username" value={usernameSignUp} onChange={handleSignUpInput} name="usernameSignUp" />
        <TextField id="standard-password-input" type="password" label="Password" value={passwordSignUp} onChange={handleSignUpInput} name="passwordSignUp"/>
        <Button variant="outlined"  onClick={handleSignUpForm}>
          Sign Up!
        </Button>
      </form>
    </Paper>
  </Container>
  )
}

export default LogInForm