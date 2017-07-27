import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import nescaum_logo from './images/nescaum_logo.png';
import eea_logo from './images/eea_logo.png';
import esf_logo from './images/esf_logo.png';
import nyserda_logo from './images/nyserda_logo.png';
import cornell_logo from './images/cornell_logo.png';
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
          <div className='logos col-md-6'>
            <a href='www.mass.gov/eea' target="_blank">
              <img style={{height: '100px'}} src={eea_logo} />
            </a>
            <a href='www.esf.edu' target="_blank">
              <img style={{height: '100px'}} src={esf_logo} />
            </a>
            <a href='www.nescaum.org' target="_blank">
              <img style={{height: '100px'}} src={nescaum_logo} />
            </a>
            <a href='www.nyserda.org' target="_blank">
              <img style={{height: '100px'}} src={nyserda_logo} />
            </a>
            <a href='www.cornell.edu' target="_blank">
              <img style={{height: '100px'}} src={cornell_logo} />
            </a>
          </div>
          <div className='content col-md-6'>
            <Link to='/about#about_macc'> About MACCC</Link>
            <p className='hidden-md-down'>
              The Massachussetts Climate Change Clearinghouse (MACCC) is a regional gateway to data and information relevant to climate change adaptation and mitigation across Massachusetts State. It provides climate science data and literature and other resources for policy-makers, practitioners, and the public, to support scientifically sound and cost-effective decision making.
              <Link to='/about#about_macc'> More ... </Link>
            </p>
            <label> Email <Link to='mailto:info@maccc.org'> info@maccc.org</Link> </label>
            <label> Tel <Link to='tel:1234567890'> 123.456.7890</Link> </label>
            <Link className='btn btn-sm btn-primary' to='/content-suggestions'>Content Suggestions</Link>
            <Link className='btn btn-sm btn-primary' to='/feedback'>Provide Feedback</Link>
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
