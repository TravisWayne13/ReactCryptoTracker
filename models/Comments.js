module.exports = (model, Schema) => {

  const Comment = new Schema({
    comment: { type: String, required: true },
    forumref: { type: Schema.Types.ObjectId, ref: 'Forum' },
    user: String,
  }, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}})

  return model('Comment', Comment)
}