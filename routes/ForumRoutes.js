const { Forum } = require('../models')

module.exports = app => {
  app.post('/api/forums', (req, res) => {
    Forum.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.get('/api/forums/topic/:id', (req, res) => {
    Forum.find({'topic': req.params.id})
      .then(posts => res.json(posts))
      .catch(e => console.error(e))
  })
}