module.exports = (model, Schema) => {

  const Forum = new Schema({
    topic: String,
    title: { type: String, required: true },
    post: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User'},
  }, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}})

  return model('Forum', Forum)

}