import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from './header';
import {NotFound} from './not_found';
import Footer from './footer';

import RisingTemperatureChangesPage from './changes/rising_temperature';
import ChangesInPrecipitationChangesPage from './changes/changes_in_precipitation';
import ExtremeWeatherChangesPage from './changes/extreme_weather';
import SeaLevelRiseChangesPage from './changes/sea_level_rise';

import ChangesIndex from './changes/index';

class ChangesPage extends Component {
  render() {
    return (
      <div className='changes-page'>
        <Header />
          <div className='container'>
            <Switch>
              <Route exact path="/changes/" component={ChangesIndex} />
              <Route exact path='/changes/rising-temperatures' component={RisingTemperatureChangesPage} />
              <Route exact path='/changes/changes-in-precipitation' component={ChangesInPrecipitationChangesPage} />
              <Route exact path='/changes/extreme-weather' component={ExtremeWeatherChangesPage} />
              <Route exact path='/changes/sea-level-rise' component={SeaLevelRiseChangesPage} />
              <Route path='/' component={NotFound} />
            </Switch>
          </div>
        <Footer />
      </div>
    );
  }
}

export default ChangesPage;
