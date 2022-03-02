import React, { useContext, useState } from 'react'
import CurrencyListContext from '../../utils/CurrencyListContext'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import BarChartIcon from '@material-ui/icons/BarChart';
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton'
import NumberFormat from 'react-number-format' 
import './CurrencyDisp.css'

const CurrencyDisp = _ => {

  const { currencyList } = useContext(CurrencyListContext)
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
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
            <Paper className={classes.paper}>
              <h4>{currency.name}</h4>
              <p>Price: 
                <NumberFormat value={currency.metrics.market_data.price_usd}
                displayType={'text'}
                decimalScale={2}
                thousandSeparator={true}
                prefix={'$'} /></p>
              <p>All Time High:
                <NumberFormat value={currency.metrics.all_time_high.price} 
                displayType={'text'}
                decimalScale={2}
                thousandSeparator={true}
                prefix={'$'} /></p>
              <p>All Time Low: 
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
                <NumberFormat value={currency.metrics.market_data.percent_change_usd_last_24_hours }
                displayType={'text'}
                decimalScale={1}
                thousandSeparator={true}
                prefix={'%'} />
                </p>
              <IconButton aria-label="chart">
                <BarChartIcon />
              </IconButton>  
              <IconButton aria-label="fav">
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
