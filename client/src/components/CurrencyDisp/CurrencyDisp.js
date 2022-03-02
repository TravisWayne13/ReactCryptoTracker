import React, { useContext } from 'react'
import CurrencyListContext from '../../utils/CurrencyListContext'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const CurrencyDisp = _ => {

  const { currencyList } = useContext(CurrencyListContext)
  
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })

  const classes = useStyles()

  return (
      <>
        {
          currencyList.map(currency => 
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {currency.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Price: {currency.metrics.market_data.price_usd}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                All Time High: {currency.metrics.all_time_high.price}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                All Time Low: {currency.metrics.cycle_low.price}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
               MCAP: {currency.metrics.marketcap.current_marketcap_usd}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
               24H: {currency.metrics.market_data.percent_change_usd_last_24_hours }
              </Typography>
            </CardContent>
            <CardActions>
            <IconButton aria-label="delete">
              <AddCircleOutlineIcon />
            </IconButton>            
          </CardActions>
          </Card>)
        }
      </>
  )
}

export default CurrencyDisp
