import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from './header';
import {NotFound} from './not_found';
import Footer from './footer';

import FloodingChangesPage from './changes/flooding';
import ExtremeWeatherChangesPage from './changes/extreme_weather';
import HeatWavesChangesPage from './changes/heat_waves';
import DroughtChangesPage from './changes/drought';
import SeasonalChangesPage from './changes/seasonal';

import ChangesIndex from './changes/index';

class ChangesPage extends Component {
  render() {
    return (
      <div className='changes-page'>
        <Header />
          <div className='container'>
            <Switch>
              <Route exact path="/changes/" component={ChangesIndex} />
              <Route exact path='/changes/flooding' component={FloodingChangesPage} />
              <Route exact path='/changes/extreme-weather' component={ExtremeWeatherChangesPage} />
              <Route exact path='/changes/heat-waves' component={HeatWavesChangesPage} />
              <Route exact path='/changes/drought' component={DroughtChangesPage} />
              <Route exact path='/changes/seasonal' component={SeasonalChangesPage} />
              <Route path='/' component={NotFound} />
            </Switch>
          </div>
        <Footer />
      </div>
    );
  }
}

export default ChangesPage;
