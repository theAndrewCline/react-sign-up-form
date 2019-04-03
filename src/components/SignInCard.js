import React from 'react'
import { Card, SubmitButton, Input, Label, A, H1 } from '../DefaultComponents'

function SignInCard () {
  return (
    <Card>
      <H1>Sign In</H1>
      <Label for="email">Email</Label>
      <Input id="email"></Input>
      <Label for="password">Password</Label>
      <Input type="password" id="password"></Input>
      <SubmitButton className="signin" primary>Sign In</SubmitButton>
      <A id="signup" href="/signup">Don't have an account? Sign Up Here</A>
    </Card>
  )
}

export default SignInCard