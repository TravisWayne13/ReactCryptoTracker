import { createContext } from 'react'

const NewsContext = createContext({
  news: [ ],
  newsStory: '',
  handleGetNewsPosts: () => { }
})

export default NewsContext