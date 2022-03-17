module.exports = (model, Schema) => {

  const Favs = new Schema({
    currency: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
  })

  return model('Favs', Favs)
}