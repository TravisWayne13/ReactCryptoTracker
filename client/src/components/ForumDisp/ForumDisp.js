import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container'
import NewsForumContext from '../../utils/NewsForumContext'
import './ForumDisp.css'

const ForumDisp = _ => {

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const classes = useStyles();

  const { handleGetNewsPosts } = useContext(NewsForumContext)

  return (
    <Container>
      <List component="nav" className={classes.root} aria-label="forumTopics">
        <ListItem onClick={() => window.location.href = '/newsforum'} button >
          <ListItemText primary="News" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Tips" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="For beginners" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Random" />
        </ListItem>
      </List>
    </Container>
  )
}

export default ForumDisp