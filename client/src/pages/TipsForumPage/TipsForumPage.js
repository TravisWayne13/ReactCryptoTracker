import React, { useState, useEffect } from 'react'
import ForumContext from '../../utils/ForumContext'
import NavBar from '../../components/NavBar'
import ForumPostDisp from '../../components/ForumPostDisp'
import ForumPostForm from '../../components/ForumPostForm'
import CryptoAPI from '../../utils/CryptoAPI'
import { textAlign } from '@material-ui/system';

const { getNewsPosts, addForumPost, getComments, addComment } = CryptoAPI

const TipsForumPage = _ => {

  const [ forumState, setForumState ] = useState({
    newsForumPost: [ ],
    comments: [ ],
    comment: '',
    title: '',
    post:''
  })

  useEffect(() => {
    getNewsPosts("tips")
    .then(({data}) => {
      let newsForumPost = data
      setForumState({ ...forumState, newsForumPost })
    })
    .catch(e => console.error(e))

  }, [])

  forumState.handleInputChange = event => {
    setForumState({ ...forumState, [event.target.name]: event.target.value })
  }


  forumState.handleAddPost = event => {
    event.preventDefault()
    addForumPost({topic: "tips", title: forumState.title, post: forumState.post })
      .then(() => window.location.reload())
      .catch(e => console.error(e))
  }

  forumState.handleAddComment = event => {
    event.preventDefault()
    addComment({comment: forumState.comment, forumref: event.currentTarget.id, user: JSON.parse(sessionStorage.getItem('userInfo')).username })
      .then(() => window.location.reload())
      .catch(e => console.error(e))
  }

  forumState.handleGetComments = event => {
    let id = event.currentTarget.id
    getComments(id)
      .then(({data: comments}) => setForumState({ ...forumState, comments }))
      .catch(e => console.error(e))
  }




  return (
    <ForumContext.Provider value={forumState}>
      <NavBar />
      <h1 style={{ textAlign: 'center' }}>Tips Forum</h1>
      <ForumPostForm />
      <ForumPostDisp />
    </ForumContext.Provider>
  )
}

export default TipsForumPage