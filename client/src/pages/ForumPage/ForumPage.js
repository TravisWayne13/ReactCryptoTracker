import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import ForumDisp from '../../components/ForumDisp'
import NewsForumContext from '../../utils/NewsForumContext'
import CryptoAPI from '../../utils/CryptoAPI'

const { getNewsPosts } = CryptoAPI

const ForumPage = _ => {

  const [ newsForumState, setNewsForumState ] = useState({ })

  newsForumState.handleGetNewsPosts = () => {
    getNewsPosts()
      .then(({data}) => console.log(data))
      .catch(e => console.error(e))
  }

  return (
    <NewsForumContext.Provider value={newsForumState}>
    <NavBar />
    <ForumDisp />
    </NewsForumContext.Provider>
  )
}

export default ForumPage