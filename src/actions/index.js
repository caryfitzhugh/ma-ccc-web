
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ActionsPage extends Component {
  render() {
    return (
      <div className='actions-page'>
        <h1> Actions Page </h1>
        <p> List all the actions here! </p>
        <p> We will have an image, off to the right.  <br/>
        Maybe a set of highlighted resource results next</p>

        <h3> Then each change will have a link to it's page </h3>
        <p> will have a photo, some text, the top few results from that search, and then a link to search and a link to a sector page </p>
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
