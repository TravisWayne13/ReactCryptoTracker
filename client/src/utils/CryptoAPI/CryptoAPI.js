import axios from 'axios'

const CryptoAPI = {
// forum routes
  getNewsPosts: () => (axios.get('/api/newsforum')),
// routes for favorites 
  addFav: (currency) => axios.post('/api/favorites', currency),
  getFavs: (id) => (axios.get(`/api/favorites/user/${id}`)),
  deleteFav: (name) => (axios.delete(`/api/favorites/${name}`)),
// user routes
  registerUser: (user) => axios.post('/api/register', user),
  authorize: (token) => axios.post('/api/authorize', {}, {
    headers: { 'Authorization': 'Bearer ' + token }
  }),
  loginUser: (user) => axios.post('/api/login', user),
}

export default CryptoAPI