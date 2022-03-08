module.exports = (model, Schema) => {
  const User = new Schema({
    email: String,
    username: String,
  })

  User.plugin(require('passport-local-mongoose'))

  return model('User', User)
}