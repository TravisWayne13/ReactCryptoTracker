import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import ForumDisp from '../../components/ForumDisp'
import ForumContext from '../../utils/ForumContext'

const ForumPage = _ => {

  const [ newsForumState, setNewsForumState ] = useState({ })



  return (
    <ForumContext.Provider value={newsForumState}>
      <NavBar />
      <ForumDisp />
    </ForumContext.Provider>
  )
}

export default ForumPage