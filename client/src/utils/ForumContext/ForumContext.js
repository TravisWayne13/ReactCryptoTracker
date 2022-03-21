import { createContext } from 'react'

const ForumContext = createContext({
  newsForumPost: [ ],
  comments: [ ],
  comment: '',
  topic: '',
  title: '',
  post: '',
  handleGetNewsPosts: () => { },
  handleGetComments: () => { },
  handleAddComment: () => { }
})

export default ForumContext