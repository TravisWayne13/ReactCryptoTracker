import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import NewsDisp from '../../components/NewsDisp'
import axios from 'axios'
import NewsContext from '../../utils/NewsContext'


const NewsPage = _ => {

  const [ newsState, setNewsState ] = useState({
    news: [ ]
  })

  useEffect(() => {
    axios.get('https://data.messari.io/api/v1/news')
      .then(({data}) => {
        let news = data.data
        setNewsState({ ...newsState, news })
      })
      .catch(e => console.error(e))
  }, [])



  return (
    <NewsContext.Provider value={newsState}>
      <NavBar />
      <NewsDisp />
    </NewsContext.Provider>
  )
}

export default NewsPage