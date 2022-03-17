import React, { useContext } from 'react'
import NewsForumContext from '../../utils/NewsForumContext';
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const ForumPostDisp = _ => {

  const { newsForumPost } = useContext(NewsForumContext)
  console.log(newsForumPost)

  return (
    <Container>
      {
        newsForumPost.map(post =>
          <>
          <ListItem button>
            <ListItemText primary={post.title} />
          </ListItem>
          <Divider />
          </>
          )
      }
    </Container>
  )
}

export default ForumPostDisp