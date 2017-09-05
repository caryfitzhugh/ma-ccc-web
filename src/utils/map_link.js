import React, { Component } from 'react';
import {Link}  from 'react-router-dom';

class MapLink extends Component {
  render() {
    let path = '/map?';
    if (this.props.sector) {
      path += `sectors=${this.props.sector}&`;
    }
    if (this.props.active_layers) {
      path += `active-layers=${this.props.active_layers}&`;
    }
    return ( <Link className={this.props.className}
                target="_blank"
                to={path}>{this.props.children}</Link> );
  }
}

export default MapLink;
