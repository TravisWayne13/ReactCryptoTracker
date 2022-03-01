import React from 'react'
import NavBar from './components/NavBar'
import axios from 'axios'

axios.get('https://data.messari.io/api/v1/assets')
  .then(({ data }) => {
    console.log(data)
  })
  .catch(e => console.error(e))

const App = () => {

  return (
    <>
    <NavBar />
    </>
  )
}

export default App