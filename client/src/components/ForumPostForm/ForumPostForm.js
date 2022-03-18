import React, { useState, useContext } from 'react'
import ForumContext from '../../utils/ForumContext'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const ForumPostForm = _ => {

  const { title, post, handleInputChange, handleAddPost } = useContext(ForumContext)
  const [value, setValue] = useState('news')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }))
  
  const classes = useStyles()


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" value={title} name="title" label="title" variant="outlined" onChange={handleInputChange}/>
      <p>
        <TextField
          id="outlined-basic"
          label="Post"
          multiline
          rows={4}
          variant="outlined"
          value={post}
          name="post"
          onChange={handleInputChange}
        />
      </p>
      <Button variant="outlined" color="primary" onClick={handleAddPost}>
        Post
      </Button>
    </form>
  )
}

export default ForumPostForm