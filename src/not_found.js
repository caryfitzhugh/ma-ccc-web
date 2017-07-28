import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

import {Link} from 'react-router-dom';
import './not_found.css';

export class NotFound extends Component {
  render() {
    return (
      <div className='container'>
        <div className='not-found-content col-md-6'>
          <span className='number'>404</span>
          <h1> Not Found </h1>
          <h6> We could not find <em>{this.props.match.url}</em>... </h6>
          <p> Sorry, the page you are looking for was not found or does not exist.  With so much data in the clearinghouse sometimes things get misplaced... </p>
          <Link className='btn btn-block btn-primary' to='/' >
            Go Home
          </Link>
        </div>
      </div>
    );
  }
}

export class NotFoundPage extends Component {
  render() {
    return (
    <div className='not-found-page' >
      <Header />
      <NotFound match={this.props.match}/>
      <Footer />
    </div>
    );
  }

}
