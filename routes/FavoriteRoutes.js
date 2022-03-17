const { Favs } = require('../models')

module.exports = app => {
  app.post('/api/favorites', (req, res) => {
    Favs.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })

  app.get('/api/favorites/user/:id',(req, res) => {
    Favs.find({'user': req.params.id})
      .then(currency => res.json(currency))
      .catch(e => console.error(e))
  })

  app.delete('/api/favorites/:currency', (req, res) => {
    Favs.deleteOne({ currency: req.params.currency })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })
}