const { model, Schema } = require('mongoose')

const User = require('./User.js')(model, Schema)
const Comment = require('./Comments.js')(model, Schema)
const Favs = require('./Favorites.js')(model, Schema)
const NewsForum = require('./News.js')(model, Schema)

module.exports = {User, Comment, Favs, NewsForum}
