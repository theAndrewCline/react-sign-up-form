import React, { Component } from 'react';
import './App.css';
import SignInCard from './components/SignInCard';
import { Page } from './DefaultComponents'

class App extends Component {
  render () {
    return (
      <Page>
        <SignInCard />
      </Page>
    )
  }
}

export default App
