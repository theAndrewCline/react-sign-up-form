import styled from 'styled-components'

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
  margin-top: auto;
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

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  width: 100vw;
  background: #3F4546;
`