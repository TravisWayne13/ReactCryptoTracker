const { model, Schema } = require('mongoose')

const User = require('./User.js')(model, Schema)
const Comment = require('./Comments.js')(model, Schema)

module.exports = {User, Comment}
