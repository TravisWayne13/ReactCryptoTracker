const { Comment } = require('../models')
const passport = require('passport')

module.exports = app => {
  app.post('/api/comments', (req, res) => {
    Comment.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })
}