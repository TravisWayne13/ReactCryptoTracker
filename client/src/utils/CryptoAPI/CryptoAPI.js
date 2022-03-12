import axios from 'axios'

const CryptoAPI = {
  registerUser: (user) => axios.post('/api/register', user),
  authorize: (token) => axios.post('/api/authorize', {}, {
    headers: { 'Authorization': 'Bearer ' + token }
  }),
  loginUser: (user) => axios.post('/api/login', user),
}

export default CryptoAPI