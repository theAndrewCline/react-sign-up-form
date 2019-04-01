import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => props.primary ? '#00FFA2' : '#D1D1D1'};
  padding: 1em;
  border: none; 
  border-radius: 5px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
`