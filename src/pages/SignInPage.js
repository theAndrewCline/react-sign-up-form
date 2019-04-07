import React from 'react'
import { Page } from '../DefaultComponents';
import SignInCard from '../components/SignInCard';
import { Redirect } from 'react-router-dom'

function SignInPage ({ signedIn, setSignedIn }) {
  const handleSignIn = (evt) => {
    evt.preventDefault()
    setSignedIn(true)
  }

  if (signedIn) {
    return <Redirect to='/user' />
  } else {
    return (
      <Page>
        <SignInCard handleSubmit={handleSignIn}></SignInCard>
      </Page>
    )
  }
}

export default SignInPage