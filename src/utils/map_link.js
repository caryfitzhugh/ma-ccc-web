import React, { Component } from 'react';
import {Link}  from 'react-router-dom';

class MapLink extends Component {
  render() {
    let path = `/interactive-map?${JSON.stringify(this.props.params)}`
    return ( <Link className={this.props.className}
                target="_blank"
                to={path}>{this.props.children}</Link> );
  }
}

export default MapLink;
