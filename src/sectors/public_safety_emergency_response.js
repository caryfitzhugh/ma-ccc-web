import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/public_safety.jpg';

class PublicSafetyEmergencyResponse extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
    };


    return (
      <SectorDetailLayout
        title="Public Safety / Emergency Response"
        sector_name="Public Safety/Emergency Response"
        image={sector_image}
        image_credit="Massachusetts Emergency Management Agency (MEMA)"
        showcased_resources={showcased_resources}
        >
        <h4><em>Content Pending</em></h4>
        </SectorDetailLayout>
    );
  }
}

export default PublicSafetyEmergencyResponse;
