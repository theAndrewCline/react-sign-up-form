import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar';

function App () {
  const [signedIn, setSignedIn] = useState(false)
  const [user, setUser] = useState(undefined)

  return (
    <Router>
      <NavBar signedIn={signedIn} user={user}></NavBar>
      <Route path='/' exact component={HomePage}></Route>
      <Route
        path='/signin'
        render={
          () => <SignInPage setSignedIn={setSignedIn}/>
        }>
      </Route>
      <Route path='/signup' component={SignUpPage}></Route>
    </Router>
  )
}

export default App
