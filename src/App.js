import React, { useState } from 'react'
import './App.css'
import SignInPage from './pages/SignInPage';

function App () {
  const [signedIn, setSignedIn] = useState(false)

  return (
    <div>
      {signedIn ? <h1>Ready To Go</h1> : <SignInPage></SignInPage>}
    </div>

  )
}

export default App
