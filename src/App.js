import React, { Component } from 'react';
import './App.css';
import { Button } from './DefaultComponents';

class App extends Component {
  render () {
    return (
      <div>
        <Button className="submit" primary>Submit</Button>
      </div>
    )
  }
}

export default App
