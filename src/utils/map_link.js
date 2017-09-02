import React, { Component } from 'react';
import {Link}  from 'react-router-dom';

class MapLink extends Component {
  render() {
    let path = `/map?sectors=${this.props.sector}`
    return ( <Link className={this.props.className}
                target="_blank"
                to={path}>{this.props.children}</Link> );
  }
}

export default MapLink;
