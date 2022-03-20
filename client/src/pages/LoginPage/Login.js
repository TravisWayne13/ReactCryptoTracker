import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import LogInForm from '../../components/LogInForm'
import CryptoAPI from '../../utils/CryptoAPI'
import UserContext from '../../utils/UserContext';

const { 
  loginUser, 
  authorize, 
  registerUser } = CryptoAPI

const Login = _ => {

  const [ userState, userSetState ] = useState({
    usernameLogin: '',
    passwordLogin: '',
    usernameSignUp: '',
    passwordSignUp: '',
    token: '',
    loginError: false,
  })


  userState.handleLogInInput = e => {
    userSetState({...userState, [e.target.name]: e.target.value})
  }

  userState.handleSignUpInput = e => {
    userSetState({...userState, [e.target.name]: e.target.value})
  }

  userState.handleSignUpForm = event => {
    event.preventDefault()
    registerUser({username: userState.usernameSignUp, email: userState.email, password: userState.passwordSignUp})
    .then(({data}) => {
      userSetState({...userState, token: data.token})
      // Set User info in session storage
      sessionStorage.setItem('userInfo', JSON.stringify(data))
    })
    .catch(e => console.error(e))
  }

  userState.handleLoginForm = e => {
    e.preventDefault()
    console.log('test')
    loginUser({username: userState.usernameLogin, password: userState.passwordLogin})
      .then(({data}) => {
        if (!data) {
          userSetState({...userState, loginError: true})
        } else {
          userSetState({...userState, token: data.token })
          // Set User info in session storage
          sessionStorage.setItem('userInfo', JSON.stringify(data))
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    // Check if user is Authorized if token exists
    if (userState.token !== '') {
      authorize(userState.token)
        .then(res => {
          console.log(res)
          window.location.href = '/currency'
        })
        .catch(err => {
          console.error(err)
        })
    }
  }, [userState.token])

  return (
    <UserContext.Provider value={userState}>
      <NavBar />
      <LogInForm />
    </UserContext.Provider>
  )
}

export default Login