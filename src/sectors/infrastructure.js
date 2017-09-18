import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/infrastructure.jpg';


class InfrastructureSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
    };

    return (
      <SectorDetailLayout
        title="Infrastructure"
        image={sector_image}
        image_credit="FEMA/Alberto Pillot"
        showcased_resources={showcased_resources}
        >
          <h4><em>Content Pending</em></h4>
        </SectorDetailLayout>
    );
  }
}

export default InfrastructureSectorPage;
