import React, { Component } from 'react';
import {Link}  from 'react-router-dom';

class DatagrapherLink extends Component {
  render() {
    let path = `/datagrapher`
    return ( <Link className={this.props.className}
                target="_blank"
                to={path}>{this.props.children}</Link> );
  }
}

export default DatagrapherLink;
