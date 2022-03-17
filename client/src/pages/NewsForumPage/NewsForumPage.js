import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import ForumPostDisp from '../../components/ForumPostDisp'
import ForumPostForm from '../../components/ForumPostForm'
import CryptoAPI from '../../utils/CryptoAPI'
import NewsForumContext from '../../utils/NewsForumContext';

const { getNewsPosts } = CryptoAPI

const NewsForumPage = _ => {

  const [ forumState, setForumState ] = useState({
    newsForumPost: [ ]
  })

  useEffect(() => {
    getNewsPosts()
    .then(({data}) => {
      let newsForumPost = data
      setForumState({ ...forumState, newsForumPost })
    })
    .catch(e => console.error(e))
  }, [])

  return (
    <NewsForumContext.Provider value={forumState}>
      <NavBar />
      <ForumPostForm />
      <ForumPostDisp />
    </NewsForumContext.Provider>
  )
}

export default NewsForumPage