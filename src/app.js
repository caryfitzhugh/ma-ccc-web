import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './home_page';
import SectorPages from './sector_pages';

import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/sectors/" component={SectorPages} />
            <Route path='/' children={
              <h1> Not Found </h1>
            }/>
          </Switch>
        </div>
      </BrowserRouter>);
  }
}

export default App;
