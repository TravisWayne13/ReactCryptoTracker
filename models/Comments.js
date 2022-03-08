module.exports = (model, Schema) => {
  const Comment = new Schema({
    comment: {type: String, required: true}
  })

  return model('Comment', Comment)
}