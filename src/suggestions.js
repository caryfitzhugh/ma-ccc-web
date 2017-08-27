import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class SuggestionsPage extends Component {
  render() {
    return (
      <div className='about-page'>
        <Header />
          <div className='container'>
            <h1>Suggestions</h1>
          </div>
        <Footer />
      </div>
    );
  }
}

export default SuggestionsPage;
