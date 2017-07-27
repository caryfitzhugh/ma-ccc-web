import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './sectors.css';

class Sectors extends Component {
  constructor (props) {
    super(props)
    this.state = {current_index: 0};
  }
  render() {
    return <div className='container-fluid sectors no-select '>
      <div className='container'>
        {(this.props.sectors || []).map ( (sector, indx) => {
          return (<Link to={sector.href || "#"} key={indx} className='sector col-6 col-md-3 col-lg-2 '>
            <div className='icon'>{sector.icon}</div>
            <label> {sector.name}</label>
          </Link>);
        })}
      </div>
    </div>
  }
}

export default Sectors;
