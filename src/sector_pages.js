import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import {NotFound} from './not_found';
import Header from './header';
import Footer from './footer';
import AgricultureSectorPage from './sectors/agriculture';
import ForestrySectorPage from './sectors/forestry';
import CoastalZonesSectorPage from './sectors/coastal_zones';
import EconomySectorPage from './sectors/economy';
import EnergySectorPage from './sectors/energy';
import LocalGovernmentSectorPage from './sectors/local_government';
import NaturalResourcesHabitatsSectorPage from './sectors/natural_resources_habitats';
import PublicHealthSectorPage from './sectors/public_health';
import PublicSafetyEmergencyResponse from './sectors/public_safety_emergency_response';
import RecreationSectorPage from './sectors/recreation';
import InfrastructureSectorPage from './sectors/infrastructure';
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
              <Route path="/sectors/agriculture" component={AgricultureSectorPage} />
              <Route path="/sectors/forestry" component={ForestrySectorPage} />
              <Route path='/sectors/coastal-zones' component={CoastalZonesSectorPage} />
              <Route path='/sectors/economy' component={EconomySectorPage} />
              <Route path='/sectors/energy' component={EnergySectorPage} />
              <Route path='/sectors/local-government' component={LocalGovernmentSectorPage} />
              <Route path='/sectors/natural-resources-habitats' component={NaturalResourcesHabitatsSectorPage} />
              <Route path='/sectors/public-health' component={PublicHealthSectorPage} />
              <Route path='/sectors/public-safety-emergency-response' component={PublicSafetyEmergencyResponse} />
              <Route path='/sectors/recreation' component={RecreationSectorPage} />
              <Route path='/sectors/infrastructure' component={InfrastructureSectorPage} />
              <Route path='/sectors/water-resources' component={WaterResourcesSectorPage} />
              <Route path='/' component={NotFound} />
            </Switch>
          </div>
        <Footer />
      </div>
    );
  }
}

export default SectorPages;
