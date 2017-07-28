import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from './header';
import {NotFound} from './not_found';
import Footer from './footer';

import SearchMapPage from './search/map';
import SearchListPage from './search/list';

class SearchPage extends Component {
  render() {
    return (
      <div className='actions-page'>
        <Header />
          <div className='container'>
            <Switch>
              <Route exact path='/search/map' component={SearchMapPage} />
              <Route exact path='/search' component={SearchListPage} />
              <Route path='*' component={NotFound} />
            </Switch>
          </div>
        <Footer />
      </div>
    );
  }
}

export default SearchPage;
