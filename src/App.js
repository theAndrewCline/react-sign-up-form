import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'

function App () {
  const [signedIn, setSignedIn] = useState(false)

  return (
    <Router>
      <Route path='/' exact component={HomePage}></Route>
      <Route path='/signin/' component={SignInPage}></Route>
      <Route path='/signup/' component={SignUpPage}></Route>
    </Router>
  )
}

export default App
