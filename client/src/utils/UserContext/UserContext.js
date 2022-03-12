import { createContext } from 'react'

const UserContext = createContext({
  usernameLogin: '',
  passwordLogin: '',
  email: '',
  usernameSignUp: '',
  passwordSignUp: '',
  token: '',
  handleInputChange: () => { },
  handleFormSubmit: () => { }
})

export default UserContext