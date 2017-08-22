import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import photo1 from '../images/changes_1.jpg'
import photo2 from '../images/changes_2.jpg'

class ChangesPage extends Component {
  render() {
    return (
      <div className='changes-page'>
        <h1> Changes Page </h1>
        <p> List all the changes here! </p>
        <img src={photo1} className='' alt='changes' title='changes'/>

        <p> We will have an image, off to the right.  <br/>
        Maybe a set of highlighted resource results next</p>
        <img src={photo2} className='' alt='changes' title='changes'/>

        <h3> Then each change will have a link to it's page </h3>
        <p> will have a photo, some text, the top few results from that search, and then a link to search and a link to a sector page </p>
        <ul>
          <li><Link to="/changes/flooding"> Flooding </Link> </li>
          <li><Link to="/changes/extreme-weather"> Extreme Weather </Link> </li>
          <li><Link to="/changes/heat-waves"> Heat Waves </Link> </li>
          <li><Link to="/changes/drought"> Drought </Link> </li>
          <li><Link to="/changes/seasonal"> Seasonal Changes </Link> </li>
        </ul>
      </div>
    );
  }
}

export default ChangesPage;
