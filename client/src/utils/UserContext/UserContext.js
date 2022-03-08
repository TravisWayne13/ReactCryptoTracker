import { createContext } from 'react'

const UserContext = createContext({
  username: '',
  email: '',
  password: '',
  token: '',
  handleInputChange: () => { },
  handleFormSubmit: () => { }
})

export default UserContext