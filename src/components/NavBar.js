import React from 'react'
import { Nav, NavLI, NavUL, NavLink } from '../DefaultComponents'


function NavBar ({ signedIn }) {
  const SignedInItems = (
    <>
      <NavLI>User</NavLI>
      <NavLI>Sign Out</NavLI>
    </>
  )

  const SignedOutItems = (
    <>
      <NavLI><NavLink to="/user">User</NavLink></NavLI>
      <NavLI><NavLink to="/signin">Sign In</NavLink></NavLI>
    </>
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