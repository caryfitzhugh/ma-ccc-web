import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from './header';
import {NotFound} from './not_found';
import Footer from './footer';

import PlanningActionPage from './actions/planning';
import ImplementationActionPage from './actions/implementation';
import OutreachActionPage from './actions/outreach';

import ActionsIndex from './actions/index';

class ActionsPage extends Component {
  render() {
    return (
      <div className='actions-page'>
        <Header />
          <div className='container'>
            <Switch>
              <Route exact path="/actions/" component={ActionsIndex} />
              <Route exact path='/actions/planning' component={PlanningActionPage} />
              <Route exact path='/actions/implementation' component={ImplementationActionPage} />
              <Route exact path='/actions/outreach-education' component={OutreachActionPage} />
              <Route path='/' component={NotFound} />
            </Switch>
          </div>
        <Footer />
      </div>
    );
  }
}

export default ActionsPage;
