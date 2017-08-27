import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class CommentsPage extends Component {
  render() {
    return (
      <div className='about-page'>
        <Header />
          <div className='container'>
            <h1>Comments</h1>
          </div>
        <Footer />
      </div>
    );
  }
}

export default CommentsPage;
