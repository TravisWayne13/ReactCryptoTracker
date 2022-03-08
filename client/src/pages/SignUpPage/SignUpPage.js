import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import SignUp from '../../components/SignUp'
import UserContext from '../../utils/UserContext'
import CryptoAPI from '../../utils/CryptoAPI'

const { registerUser, authorize } = CryptoAPI

const SignUpPage = _ => {

  const [ userState, userSetState ] = useState({
    username: '',
    email: '',
    password: '',
    token: ''
  })

  userState.handleInputChange = event => {
    userSetState({...userState, [event.target.name]: event.target.value})
  }

  userState.handleFormSubmit = event => {
    event.preventDefault()
    console.log(userState)
    registerUser({username: userState.username, email: userState.email, password: userState.password})
    .then(({data}) => {
      userSetState({...userState, token: data.token})
      // Set User info in session storage
      sessionStorage.setItem('userInfo', JSON.stringify(data))
    })
    .catch(e => console.error(e))
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
      <SignUp />
    </UserContext.Provider>
  )
}

export default SignUpPage