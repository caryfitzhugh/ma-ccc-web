import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from './header';
import {NotFound} from './not_found';
import Footer from './footer';

import DataPage from './data/data';
import DocumentsPage from './data/documents';
import MapsPage from './data/maps';

class ActionsPage extends Component {
  render() {
    return (
      <div className='actions-page'>
        <Header />
          <div className='container'>
            <Switch>
              <Route exact path='/data/maps' component={MapsPage} />
              <Route exact path='/data/documents' component={DocumentsPage} />
              <Route exact path='/data/data' component={DataPage} />
              <Route path='/' component={NotFound} />
            </Switch>
          </div>
        <Footer />
      </div>
    );
  }
}

export default ActionsPage;
