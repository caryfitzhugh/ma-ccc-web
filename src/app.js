import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './home_page';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exect path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>);
  }
}

export default App;
