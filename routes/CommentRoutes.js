const { Comment } = require('../models')
const passport = require('passport')

module.exports = app => {

  app.post('/api/comments', (req, res) => {
    Comment.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.get('/api/comments/:id', (req, res) => {
    Comment.find({'forumref': req.params.id})
      .then(posts => res.json(posts))
      .catch(e => console.error(e))
  })

}