import axios from 'axios'

const CryptoAPI = {
  registerUser: (user) => axios.post('/api/register', user),
  authorize: (token) => axios.post('/api/authorize', {}, {
    headers: { 'Authorization': 'Bearer ' + token }
  })
}

export default CryptoAPI