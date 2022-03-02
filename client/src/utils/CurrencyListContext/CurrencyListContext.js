import React, { createContext } from 'react'

const CurrencyListContext = createContext({
  currencyList: [ ],
  formatter: () => { }
})

export default CurrencyListContext