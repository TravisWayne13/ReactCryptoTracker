module.exports = app => {
  require('./UserRoutes.js')(app)
  require('./CommentRoutes.js')(app)
  require('./FavoriteRoutes.js')(app)
  require('./ForumRoutes.js')(app)
}