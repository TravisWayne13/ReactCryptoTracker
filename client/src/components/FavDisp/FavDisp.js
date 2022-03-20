import React, { useContext } from 'react'
import FavContext from '../../utils/CurrencyListContext'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import BarChartIcon from '@material-ui/icons/BarChart'
import RemoveIcon from '@material-ui/icons/Remove'
import IconButton from '@material-ui/core/IconButton'
import NumberFormat from 'react-number-format' 
import { makeStyles } from '@material-ui/core/styles'
import './FavDisp.css'



const FavDisp = _ => {

  const textColor = '#07070A'
  const backgroundColor = '#E6E8E6'

  const useStyles = makeStyles((theme) => ({
    root: {
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: textColor,
      background: backgroundColor
    },
  }))

  const classes = useStyles()

  const { favList, handleDeleteFav } = useContext(FavContext)

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="left">      
        {
          favList.map(currency => 
            <Grid item xs>
              <Paper id="card" className={classes.paper}>
                <h4>{currency.data.name}</h4>
                <p>Price: 
                <NumberFormat value={currency.data.market_data.price_usd}
                displayType={'text'}
                decimalScale={2}
                thousandSeparator={true}
                prefix={'$'} /></p>
                <p>All Time High:
                <NumberFormat value={currency.data.all_time_high.price} 
                displayType={'text'}
                decimalScale={2}
                thousandSeparator={true}
                prefix={'$'} /></p>
                <p>Cycle Low: 
                <NumberFormat value={currency.data.cycle_low.price}
                displayType={'text'}
                decimalScale={2}
                thousandSeparator={true}
                prefix={'$'} />
                </p>
                <p>MCAP: 
                <NumberFormat value={currency.data.marketcap.current_marketcap_usd}
                displayType={'text'}
                decimalScale={2}
                thousandSeparator={true}
                prefix={'$'} /></p>
                <p>24H:
                <NumberFormat value={currency.data.market_data.percent_change_usd_last_24_hours}
                displayType={'text'}
                decimalScale={1}
                thousandSeparator={true}
                prefix={'%'}
                style={{color: currency.data.market_data.percent_change_usd_last_24_hours  > 0 ? 'green' : 'red'}} />
                </p>
              <IconButton onClick={() => handleDeleteFav(currency.data.symbol)} aria-label="chart">
                <RemoveIcon />
              </IconButton>    
            </Paper>
          </Grid>
          )
        }
      </Grid>
    </div>
  )
}

export default FavDisp