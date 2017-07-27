import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SectorsPage extends Component {
  render() {
    return (
      <div className='sectors-page'>
        <h1> Sectors Page </h1>
        <p> List all the sectors here! </p>
        <p> We will have an image, off to the right.  <br/>
        Maybe a set of highlighted resource results next</p>

        <h3> Then each sector will have a link to it's page </h3>
        <p> will have a photo, some text, the top few results from that search, and then a link to search and a link to a sector page </p>
        <ul>
          <li><Link to="/sectors/agriculture-forestry"> Agriculture & Forestry </Link></li>
          <li><Link to="/sectors/buildings"> Buildings </Link> </li>
          <li><Link to="/sectors/coastal-zones"> Coastal Zones </Link> </li>
          <li><Link to="/sectors/economy"> Economy </Link> </li>
          <li><Link to="/sectors/education"> Education </Link> </li>
          <li><Link to="/sectors/energy"> Energy </Link> </li>
          <li><Link to="/sectors/local-government"> Local Government </Link> </li>
          <li><Link to="/sectors/natural-resources-habitats"> Natural Resources / Habitats </Link> </li>
          <li><Link to="/sectors/public-health"> Public Health </Link> </li>
          <li><Link to="/sectors/public-safety-emergency-response"> Public Safety / Emergency Response </Link> </li>
          <li><Link to="/sectors/recreation"> Recreation </Link> </li>
          <li><Link to="/sectors/transportation"> Transporation </Link> </li>
          <li><Link to="/sectors/water-resources"> Water Resources </Link> </li>
        </ul>
      </div>
    );
  }
}

export default SectorsPage;
