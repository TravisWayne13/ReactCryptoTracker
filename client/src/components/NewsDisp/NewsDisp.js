import React, { useContext } from 'react'
import NewsContext from '../../utils/NewsContext'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const NewsDisp = _ => {


  const { news } = useContext(NewsContext)

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
      console.log(panel)
  };
  return (
    <div className={classes.root}>
      {
        news.map(news =>     
        <Accordion  expanded={expanded === `${news.title}`} onChange={handleChange(`${news.title}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon id={news.author.name}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography className={classes.heading}>{news.title}</Typography>
          <Typography className={classes.secondaryHeading}>{news.author.name}</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
            {news.content}
          </Typography>
        </AccordionDetails>
      </Accordion>)
      }
  </div>
  )
}

export default NewsDisp