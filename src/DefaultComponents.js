import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled.button`
  background: ${props => props.primary ? '#00FFA2' : '#D1D1D1'};
  padding: .5em 1em .5em 1em;
  margin-top: 1em;
  border: none; 
  border-radius: 5px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 14px;
  width: 150px;
  :hover {
    background: ${props => props.primary ? '#00E793' : '#D1D1D1'}

  }
`

export const SubmitButton = styled(Button)`
  margin-top: 1em;
  margin-right: auto;
  margin-left: auto;
`

export const Card = styled.form`
  display: flex;
  flex-direction: column;
  background: #E8E8E8;
  padding: 1em;
  border-radius: 5px;
  font-family: 'Lato', sans-serif;
  box-shadow:  0px 2px 4px rgba(0,0,0,.3);
  width: 300px; 
  min-height: 200px;
`

export const Input = styled.input`
  margin-top: 1em;
  padding: .5em 1em .5em 1em;
  border: none; 
  border-radius: 5px;
  font-family: 'Lato', sans-serif;
`

export const A = styled.a`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 10px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1em;
`

export const Label = styled.label`
  font-family: 'Lato', sans-serif;
  margin-top: .5em;
`

export const H1 = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 32px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
`

export const Nav = styled.nav`
  display: flex;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: white;
  background: #17202c;
  padding: 1em;
  box-shadow:  0px 2px 4px rgba(0,0,0,.3);
`

export const NavUL = styled.ul`
  display: flex;
  margin-left: auto;
  list-style-type: none;
`

export const NavLI = styled.li`
  margin-left: 1em;
`

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
`

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 64px); 
  width: 100vw;
  padding: 3em;
`