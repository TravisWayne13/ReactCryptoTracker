import React, { createContext } from 'react'

const NewsContext = createContext({
  news: [ ],
  newsStory: ''
})

export default NewsContext