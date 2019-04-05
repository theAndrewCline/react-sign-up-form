import React from 'react'
import { Nav, NavLI, NavUL } from '../DefaultComponents'
import { Link } from 'react-router-dom'


function NavBar ({ signedIn }) {
  const SignedInItems = (
    <NavLI>Sign Out</NavLI>
  )

  const SignedOutItems = (
    <NavLI><Link to="/signin">Sign In</Link></NavLI>
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