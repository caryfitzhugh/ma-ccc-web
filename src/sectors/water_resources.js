import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/water_resources.jpg';

class WaterResourcesSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
    };
    return (
      <SectorDetailLayout
        title="Water Resources"
        image={sector_image}
        showcased_resources={showcased_resources}
        >
          <h4><em>Content Pending</em></h4>
        </SectorDetailLayout>
    );
  }
}

export default WaterResourcesSectorPage;
