import React, { createContext } from 'react'

const FavContext = createContext({
  favList: [ ],
  handleFav: () => { },
  handleDeleteFav: () => { }
})

export default FavContext