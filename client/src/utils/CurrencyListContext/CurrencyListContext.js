import { createContext } from 'react'

const CurrencyListContext = createContext({
  currencyList: [ ],
  handleFav: () => { }
})

export default CurrencyListContext