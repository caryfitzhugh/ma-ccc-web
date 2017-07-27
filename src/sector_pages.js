import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import AgricultureForestrySectorPage from './sectors/agriculture_forestry';
import BuildingsSectorPage from './sectors/buildings';
import CoastalZonesSectorPage from './sectors/coastal_zones';
import EconomySectorPage from './sectors/economy';
import EducationSectorPage from './sectors/education';
import EnergySectorPage from './sectors/energy';
import LocalGovernmentSectorPage from './sectors/coastal_zones';
import NaturalResourcesHabitatsSectorPage from './sectors/natural_resources_habitats';
import PublicHealthSectorPage from './sectors/public_health';
import PublicSafetyEmergencyResponse from './sectors/public_safety_emergency_response';
import RecreationSectorPage from './sectors/recreation';
import TransportationSectorPage from './sectors/transportation';
import WaterResourcesSectorPage from './sectors/water_resources';

import SectorsPage from './sectors/index';

class SectorPages extends Component {
  render() {
    return (
      <div className='sector-page'>
        <Header />
          <div className='container'>
            <Switch>
              <Route exact path="/sectors/" component={SectorsPage} />
              <Route path="/sectors/agriculture-forestry" component={AgricultureForestrySectorPage} />
              <Route path='/sectors/buildings' component={BuildingsSectorPage} />
              <Route path='/sectors/coastal-zones' component={CoastalZonesSectorPage} />
              <Route path='/sectors/economy' component={EconomySectorPage} />
              <Route path='/sectors/education' component={EducationSectorPage} />
              <Route path='/sectors/energy' component={EnergySectorPage} />
              <Route path='/sectors/local-government' component={LocalGovernmentSectorPage} />
              <Route path='/sectors/natural-resources-habitats' component={NaturalResourcesHabitatsSectorPage} />
              <Route path='/sectors/public-health' component={PublicHealthSectorPage} />
              <Route path='/sectors/public-safety-emergency-response' component={PublicSafetyEmergencyResponse} />
              <Route path='/sectors/recreation' component={RecreationSectorPage} />
              <Route path='/sectors/transportation' component={TransportationSectorPage} />
              <Route path='/sectors/water-resources' component={WaterResourcesSectorPage} />
              <Route path='/' children={
                <h1> Not Found </h1>
              }/>
            </Switch>
          </div>
        <Footer />
      </div>
    );
  }
}

export default SectorPages;
