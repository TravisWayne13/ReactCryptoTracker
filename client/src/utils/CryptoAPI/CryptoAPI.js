import axios from 'axios'

const CryptoAPI = {

// comment routes
  getComments: (id) => axios.get(`/api/comments/${id}`),
  addComment: (comment) => axios.post('/api/comments', comment),
// forum routes
  getNewsPosts: (id) => (axios.get(`/api/forums/topic/${id}`)),
  addForumPost: (post) => axios.post('/api/forums', post),
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