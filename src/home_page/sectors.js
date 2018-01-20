import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './sectors.css';

class Sectors extends Component {
  constructor (props) {
    super(props)
    this.state = {current_index: 0};
  }
  render() {
    let classes = 'sector ';

    return <div className='container-fluid sectors no-select '>
      <div className='container sectors-container'>
        <Link to="/sectors" id='explore_sectors' className={"explore-title " + classes}>
          <h2>Explore<br/>Sectors</h2>
        </Link>

        {(this.props.sectors || []).map ( (sector, indx) => {
          return (<Link to={sector.href || "#"} key={indx} className={classes}>
            <div className='icon'>{sector.icon}</div>
            <label> {sector.name}</label>
          </Link>);
        })}
      </div>
    </div>
  }
}

export default Sectors;
