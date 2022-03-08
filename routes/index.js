module.exports = app => {
  require('./UserRoutes.js')(app)
  require('./CommentRoutes.js')(app)
}