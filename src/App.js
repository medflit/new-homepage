import React, { Component } from 'react';
import { BrowserRouter, Switch,  Route, HashRouter } from 'react-router-dom';
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <Routes/>
    )
  }
}

export default App;
