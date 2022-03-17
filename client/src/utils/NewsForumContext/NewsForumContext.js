import React, { createContext } from 'react'

const NewsForumContext = createContext({
  newsForumPost: [ ],
  handleGetNewsPosts: () => { }
})

export default NewsForumContext