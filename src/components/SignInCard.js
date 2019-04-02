import React from 'react'
import { Card, SubmitButton, Input, Label } from '../DefaultComponents'

function SignInCard () {
  return (
    <Card>
      <Label for="email">Email</Label>
      <Input id="email"></Input>
      <Label for="password">Password</Label>
      <Input type="password" id="password"></Input>
      <SubmitButton className="login" primary>Log In</SubmitButton>
    </Card>
  )
}

export default SignInCard