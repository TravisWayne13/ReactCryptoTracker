import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import CurrencyDisp from '../../components/CurrencyDisp'
import CurrencyListContext from '../../utils/CurrencyListContext'
import CryptoAPI from '../../utils/CryptoAPI'
import axios from 'axios'

const { addFav } = CryptoAPI

const CurrencyPage = _ => {


const [ currencyState, setCurrencyState ] = useState({
    currencyList: [ ],
    userInfo: sessionStorage.getItem('userInfo') || ''
  })

const [value, setValue] = useState('')


  useEffect(() => {
    axios.get('https://data.messari.io/api/v1/assets')
      .then(({ data }) => {
        let currencyList = data.data
        console.log(currencyList)
        setCurrencyState({ ...currencyState, currencyList })
        })
      .catch(e => console.error(e))
    setInterval(() => {
      axios.get('https://data.messari.io/api/v1/assets')
      .then(({ data }) => {
        let currencyList = data.data
        setCurrencyState({ ...currencyState, currencyList })
        })
      .catch(e => console.error(e))
    }, 3000)
    }, [value])


    currencyState.handleFav = event=> {
      console.log(event.currentTarget.id)
      let userInfo = JSON.parse(currencyState.userInfo)
      console.log(userInfo.userId)
      addFav({currency: event.currentTarget.id, user: userInfo.userId})
        .then(() => console.log('success'))
        .catch(e => console.error(e))
    }


  return (
    <CurrencyListContext.Provider value={currencyState}>
      <NavBar />
      <CurrencyDisp />
    </CurrencyListContext.Provider>
  )
}

export default CurrencyPage