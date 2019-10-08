import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import nescaum_logo from './images/nescaum_logo.png';
import eea_logo from './images/eea_logo.png';
import esf_logo from './images/esf_logo.png';
import pri_logo from './images/pri_logo.jpg';
import cornell_logo from './images/cornell_logo.png';
import ma_logo from './images/ma_seal.png';
import './footer.css';

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {current_index: 0};
  }
  render() {
    return <div className='container-fluid footer'>
      <div className='footer-content container'>
        <div className='row'>
          <div className='logos col-md-2'>
            <a href='http://www.mass.gov/eea' rel="noopener noreferrer" target="_blank">
              <img className='primary-logo' alt='MA EEA seal'  src={eea_logo} />
            </a>
            <a href='http://www.mass.gov' rel="noopener noreferrer" target="_blank">
              <img className='primary-logo' alt='MA govt seal'  src={ma_logo} />
            </a>
          </div>
          <div className='content col-md-10'>
            <Link to='/about#about_macc'> About resilient MA</Link>
            <p className='hidden-md-down'>
              The Massachusetts Climate Change Clearinghouse (resilient MA) is a gateway to data and information relevant to climate change adaptation and mitigation across the state. It provides the most up-to-date climate change science and decision support tools for the Commonwealth to support scientifically sound and cost-effective decision making for policy-makers, practitioners, and the public.
              <Link to='/about#about_macc'> More ... </Link>
            </p>
            <label> Email <a href='mailto:EEA-DL-MassClimateChange@MassMail.State.MA.US'> EEA-DL-MassClimateChange@MassMail.State.MA.US </a> </label>
            <div className='row'>
              <span className='col-md-1'>&nbsp;</span>
              <Link className='col-md-5 btn btn-sm btn-primary' to='/suggestions'>Content Suggestions</Link>
              <span className='col-md-1'>&nbsp;</span>
              <Link className='col-md-5 btn btn-sm btn-primary' to='/comments'>Provide Feedback</Link>
              <span className='col-md-1'>&nbsp;</span>
            </div>
          </div>
        </div>
      </div>
      <div className='row copyright'>
        &copy; 2017 <a href='https://www.mass.gov/orgs/executive-office-of-energy-and-environmental-affairs'>MA EEA</a>
      </div>
    </div>;
  }
}

export default Footer;
