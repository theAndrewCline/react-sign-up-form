import React from 'react'
import { Nav, NavLI, NavUL } from '../DefaultComponents'


function NavBar ({ signedIn }) {
  const SignedInItems = (
    <NavLI>Sign Out</NavLI>
  )

  const SignedOutItems = (
    <NavLI>Sign In</NavLI>
  )

  return (
    <Nav className="NavBar">
      <NavUL>
        {signedIn ? SignedInItems : SignedOutItems}
      </NavUL>
    </Nav>
  )
}

export default NavBar 