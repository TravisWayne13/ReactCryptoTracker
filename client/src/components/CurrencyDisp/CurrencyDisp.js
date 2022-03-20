import React, { useContext } from 'react'
import CurrencyListContext from '../../utils/CurrencyListContext'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import GradeIcon from '@material-ui/icons/Grade'
import IconButton from '@material-ui/core/IconButton'
import NumberFormat from 'react-number-format' 
import './CurrencyDisp.css'

const CurrencyDisp = _ => {

  const textColor = '#07070A'
  const backgroundColor = '#E6E8E6'

  const { currencyList, handleFav } = useContext(CurrencyListContext)

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: textColor,
      background: backgroundColor
    },
  }))

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center">
        {
          currencyList.map(currency => 
            <Grid item xs>
              <Paper id="card"className={classes.paper}>
                <h4>{currency.name}</h4>
                <p>Price: 
                <NumberFormat value={currency.metrics.market_data.price_usd}
                displayType={'text'}
                decimalScale={2}
                thousandSeparator={true}
                prefix={'$'}/>
                </p>
                <p>All Time High:
                <NumberFormat value={currency.metrics.all_time_high.price} 
                displayType={'text'}
                decimalScale={2}
                thousandSeparator={true}
                prefix={'$'} /></p>
                <p>Cycle Low: 
                <NumberFormat value={currency.metrics.cycle_low.price}
                displayType={'text'}
                decimalScale={2}
                thousandSeparator={true}
                prefix={'$'} />
                </p>
                <p>MCAP: 
                <NumberFormat value={currency.metrics.marketcap.current_marketcap_usd}
                displayType={'text'}
                decimalScale={2}
                thousandSeparator={true}
                prefix={'$'} /></p>
                <p>24H:
                <NumberFormat value={ currency.metrics.market_data.percent_change_usd_last_24_hours }
                displayType={'text'}
                decimalScale={1}
                thousandSeparator={true}
                prefix={'%'} 
                style={{color: currency.metrics.market_data.percent_change_usd_last_24_hours  > 0 ? 'green' : 'red'}}/>
                </p>
              <IconButton id={currency.symbol} onClick={handleFav} aria-label="chart">
                <GradeIcon />
              </IconButton>    
            </Paper>
          </Grid>
          )
        }
      </Grid>
    </div>
  )
}

export default CurrencyDisp
