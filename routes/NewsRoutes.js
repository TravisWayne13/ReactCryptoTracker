const { NewsForum } = require('../models')

module.exports = app => {
  app.post('/api/newsforum', (req, res) => {
    NewsForum.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.get('/api/newsforum', (req, res) => {
    NewsForum.find()
      .then(posts => res.json(posts))
      .catch(e => console.error(e))
  })
}