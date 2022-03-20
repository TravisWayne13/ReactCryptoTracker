import React, { useState, useContext } from 'react'
import ForumContext from '../../utils/ForumContext'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './ForumPostForm.css'

const ForumPostForm = _ => {

  const { 
    title, 
    post, 
    handleInputChange, 
    handleAddPost } = useContext(ForumContext)

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '98%',
        '& label.Mui-focused': {
          color: 'black',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'black',
          },
          '&:hover fieldset': {
            borderColor: 'black',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'green',
          },
        },
      },
    },
  }))
  
  const classes = useStyles()


  return (
    <>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" value={title} name="title" label="title" variant="outlined" onChange={handleInputChange}/>
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
    </form>
    <div className="btnDiv">
      <Button variant="outlined" onClick={handleAddPost}>
        Post
      </Button>
    </div>
   </>
  )
}

export default ForumPostForm