import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CurrencyPage from './pages/CurrencyPage'
import FavPage from './pages/FavPage'
import ForumPage from './pages/ForumPage'
import LandingPage from './pages/LandingPage'
import NewsPage from './pages/NewsPage'
import axios from 'axios'

axios.get('https://data.messari.io/api/v1/assets')
  .then(({ data }) => {
    console.log(data)
  })
  .catch(e => console.error(e))

  const App = () => {
    return (
      <Router>
        <div>
          {/* <Link to="/">Home</Link>
          <Link to="/currency">Contact</Link>
          <Link to="/movie">Movie</Link> */}
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/currency" element={<CurrencyPage />} />
            <Route exact path="/favorites" element={<FavPage />} />
            <Route exact path="/forums" element={<ForumPage />} />
            <Route exact path="/news" element={<NewsPage />} />           
          </Routes>
        </div>
      </Router>
    )
  }
  
  export default App