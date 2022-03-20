import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import CurrencyListContext from '../../utils/CurrencyListContext'
import CryptoAPI from '../../utils/CryptoAPI'
import FavDisp from '../../components/FavDisp'
import axios from 'axios'

const { getFavs, deleteFav } = CryptoAPI

const FavPage = _ => {

  const [ currencyState, setCurrencyState ] = useState({
    favList: [ ]
  })

  useEffect(() => {
    getFavs(JSON.parse(sessionStorage.getItem('userInfo')).userId)
      .then(({data: name}) => {
        name.forEach(currency => {
          axios.get(`https://data.messari.io/api/v1/assets/${currency.currency}/metrics`)
            .then(({data}) => {
              let favList = currencyState.favList
              favList.push(data)
              if (favList.length === name.length ) {
                setCurrencyState({ ...currencyState, favList})
              }
            })
            .catch(e => console.error(e))
        })
      })
  }, [ ])

  currencyState.handleDeleteFav = (currency) => {
    deleteFav(currency)
      .then(() => window.location.reload())
      .catch(e => console.error(e))
  }
  
  return (
    <CurrencyListContext.Provider value={currencyState}>
      <NavBar />
      <FavDisp />
    </CurrencyListContext.Provider>
  )
}

export default FavPage