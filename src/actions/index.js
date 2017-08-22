
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import photo1 from '../images/actions/eel_river_restoration.jpg'
import photo2 from '../images/actions/education_1.jpg'
import photo3 from '../images/actions/education_2.jpg'

class ActionsPage extends Component {
  render() {
    return (
      <div className='actions-page'>
        <h1> Actions Page </h1>
        <img src={photo1} className='img-fluid' alt='Eel River Restoration' title='Eel River Restoration'/>
        <p> List all the actions here! </p>
        <img src={photo2} className='' alt='education' title='education'/>
        <p> We will have an image, off to the right.  <br/>
        Maybe a set of highlighted resource results next</p>
        <h3> Then each change will have a link to it's page </h3>
        <p> will have a photo, some text, the top few results from that search, and then a link to search and a link to a sector page </p>
        <img src={photo3} className='' alt='education' title='education'/>
        <ul>
          <li><Link to="/actions/ghg-reduction-planning"> GHG Reduction Planning </Link> </li>
          <li><Link to="/actions/hazard-mitigation"> Hazard Mitigation </Link> </li>
          <li><Link to="/actions/budgeting-for-climate-change"> Budgeting For Climate Change </Link> </li>
          <li><Link to="/actions/town-planning"> Town Planning </Link> </li>
        </ul>
      </div>
    );
  }
}

export default ActionsPage;
