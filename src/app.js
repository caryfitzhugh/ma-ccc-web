import React, { Component } from 'react';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app container">
        <Header/>

      </div>
    );
  }
}

export default App;
