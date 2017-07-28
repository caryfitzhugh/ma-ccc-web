import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from './header';
import {NotFound} from './not_found';
import Footer from './footer';

import GHGReductionPlanningActionPage from './actions/ghg_reduction_planning';
import HazardMitigationActionPage from './actions/hazard_mitigation';
import BudgetingForClimateChangeActionPage from './actions/budgeting_for_climate_change';
import TownPlanningActionPage from './actions/town_planning';

import ActionsIndex from './actions/index';

class ActionsPage extends Component {
  render() {
    return (
      <div className='actions-page'>
        <Header />
          <div className='container'>
            <Switch>
              <Route exact path="/actions/" component={ActionsIndex} />
              <Route exact path='/actions/ghg-reduction-planning' component={GHGReductionPlanningActionPage} />
              <Route exact path='/actions/hazard-mitigation' component={HazardMitigationActionPage} />
              <Route exact path='/actions/budgeting-for-climate-change' component={BudgetingForClimateChangeActionPage} />
              <Route exact path='/actions/town-planning' component={TownPlanningActionPage} />
              <Route path='/' component={NotFound} />
            </Switch>
          </div>
        <Footer />
      </div>
    );
  }
}

export default ActionsPage;
