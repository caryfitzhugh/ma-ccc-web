import React, { Component } from 'react';
import {Link}  from 'react-router-dom';

class DatagrapherLink extends Component {
  render() {
    // /datagrapher/?c=Temp/state/gdd50/ANN/MA/
    let path = `/datagrapher/?c=${encodeURIComponent(this.props.file)}`

    return ( <Link className={this.props.className}
                target="_blank"
                to={path}>{this.props.children}</Link> );
  }
}

export default DatagrapherLink;
