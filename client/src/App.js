import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CurrencyPage from './pages/CurrencyPage'
import FavPage from './pages/FavPage'
import ForumPage from './pages/ForumPage'
import LandingPage from './pages/LandingPage'
import NewsPage from './pages/NewsPage'
import Login from './pages/LoginPage'
import NewsForumPage from './pages/NewsForumPage'
import TipsForumPage from './pages/TipsForumPage'
import BeginnerForumPage from './pages/BeginnerForumPage'
import RandomForumPage from './pages/RandomForumPage'

  const App = () => {

    return (
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/currency" element={<CurrencyPage />} />
              <Route exact path="/favorites" element={<FavPage />} />
              <Route exact path="/forums" element={<ForumPage />} />
              <Route exact path="/news" element={<NewsPage />} />   
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/newsforum" element={<NewsForumPage />} />
              <Route exact path="/tipsforum" element={<TipsForumPage />} />
              <Route exact path="/beginnerforum" element={<BeginnerForumPage />} />
              <Route exact path="/randomforum" element={<RandomForumPage />} />
            </Routes>
          </div>
        </Router>
    )
  }
  
  export default App