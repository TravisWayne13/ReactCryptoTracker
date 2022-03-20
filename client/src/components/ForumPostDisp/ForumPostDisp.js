import React, { useContext } from 'react'
import ForumContext from '../../utils/ForumContext'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import './ForumPostDisp.css'


const ForumPostDisp = _ => {

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(17),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(13),
      color: theme.palette.text.secondary,
    },
  }))

  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
  };

  const { 
    newsForumPost, 
    handleGetComments, 
    comments, 
    handleAddComment, 
    handleInputChange, 
    comment } = useContext(ForumContext)

  return (
    <div className={classes.root}>
      {
        newsForumPost.map(post =>     
          <Accordion  expanded={expanded === `${post.title}`} onChange={handleChange(`${post.title}`)}>
            <AccordionSummary
              onClick={handleGetComments}
              expandIcon={<ExpandMoreIcon id={post._id}/>}
              aria-controls="panel1bh-content"
              id={post._id}>
          <div><Typography className={classes.heading}>{post.title}</Typography></div>
          <Typography className={classes.secondaryHeading}>{post.createdAt}</Typography>
         </AccordionSummary>
        <AccordionDetails >
          <Typography>
            {post.post}
          </Typography>
          {
            comments.map(comment =>
              <Card className={classes.root}>
              {comment.comment} 
              <h4>commented by: {comment.user}</h4>
              </Card>
              )
          }
        <TextField id="outlined-basic"  name="comment" value={comment} label="comment" variant="outlined" onChange={handleInputChange} />
          <p>
            <Button id={post._id} onClick={handleAddComment} variant="outlined">
              Comment
            </Button>
          </p>
        </AccordionDetails>
      </Accordion>)
      }
  </div>
  )
}

export default ForumPostDisp