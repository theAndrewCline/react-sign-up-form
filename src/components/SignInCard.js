import React, { useState, useEffect } from 'react'
import { Card, SubmitButton, Input, Label, A, H1 } from '../DefaultComponents'

function SignInCard () {
  const emailInput = React.createRef()

  const focus = useState(true)

  const setInitialFocus = () => {
    emailInput.current.focus()
  }

  useEffect(() => {
    setInitialFocus()
  }, [focus])

  return (
    <Card>
      <H1>Sign In</H1>
      <Label for="email" ref={emailInput}>Email</Label>
      <Input id="email"></Input>
      <Label for="password">Password</Label>
      <Input type="password" id="password"></Input>
      <SubmitButton className="signin" primary>Sign In</SubmitButton>
      <A id="signup" href="/signup">Don't have an account? Sign Up Here</A>
    </Card>
  )
}

export default SignInCard