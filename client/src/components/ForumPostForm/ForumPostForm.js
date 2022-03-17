import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import NewsForumContext from '../../utils/NewsForumContext';

const ForumPostForm = _ => {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
  const classes = useStyles()


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="title" variant="outlined" />
      <TextField
          id="outlined-multiline-static"
          label="Post"
          multiline
          rows={4}
          variant="outlined"
        />
      <Button variant="outlined" color="primary">
      Post
      </Button>
    </form>
  )
}

export default ForumPostForm