import React, { useState, useEffect, useContext } from 'react'
import NavBar from '../../components/NavBar'
import CurrencyDisp from '../../components/CurrencyDisp'
import CurrencyListContext from '../../utils/CurrencyListContext'
import axios from 'axios'

const CurrencyPage = _ => {

const [ currencyState, setCurrencyState ] = useState({
    currencyList: [ ]
  })

  useEffect(() => {
    axios.get('https://data.messari.io/api/v1/assets')
      .then(({ data }) => {
        let currencyList = data.data
        console.log(currencyList)
        setCurrencyState({ ...currencyState, currencyList })
        })
      .catch(e => console.error(e))
    }, [])

  return (
    <CurrencyListContext.Provider value={currencyState}>
      <NavBar />
      <CurrencyDisp />
    </CurrencyListContext.Provider>
  )
}

export default CurrencyPage