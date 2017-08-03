import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './maplist_toggle.css';

class MapListToggle extends Component {

  render() {
    let map_href = "/search/map"+ this.props.location.search;
    let list_href = "/search"+ this.props.location.search;
    let is_map = this.props.location.pathname === "/search/map";

    return (
    <div className='maplist-toggle'>
      <div className='button-group'>
        <Link to={map_href} className={'btn ' + (is_map ? 'btn-primary ' : 'btn-secondary')}>
          <span className='fa fa-map'></span>
        </Link>
        <Link to={list_href} className={'btn ' + (is_map ? 'btn-secondary' : 'btn-primary ')}>
          <span className='fa fa-list'></span>
        </Link>
      </div>
    </div>
    );
  }
}

export default MapListToggle;
