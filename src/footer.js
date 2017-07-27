import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import nescaum_logo from './images/nescaum_logo.png';
import eea_logo from './images/eea_logo.png';
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
          <div className='col-md-6 logos'>
            <a href='www.mass.gov/eea' target="_blank">
              <img style={{height: '100px'}} src={eea_logo} />
            </a>
            <a href='www.nescaum.org' target="_blank">
              <img style={{height: '100px'}} src={nescaum_logo} />
            </a>
          </div>
          <div className='col-md-6 content'>
            <label> About </label>
            <Link to='/about#about_macc'> About MACCC</Link>
            <Link className='btn btn-primary' to='/content-suggestions'>Content Suggestions</Link>
            <Link className='btn btn-primary' to='/feedback'>Provide Feedback</Link>
          </div>
          <div className='col-md-3 content'>
            <label> Email </label>
            <Link to='mailto:info@maccc.org'> info@maccc.org</Link>
            <label> Tel </label>
            <Link to='tel:1234567890'> 123.456.7890</Link>
          </div>
        </div>
      </div>
      <div className='row copyright'>
        &copy; 2017 <Link to='www.mass.gov/eea'>MA EEA</Link>
      </div>
    </div>;
  }
}

export default Footer;
