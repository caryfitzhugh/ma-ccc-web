import React, { Component } from 'react';
import {Link}  from 'react-router-dom';

class SearchLink extends Component {
  render() {
    let path = `/search?${JSON.stringify(this.props.params)}`
    return ( <Link className={this.props.className}
                to={path}>{this.props.children}</Link> );
  }
}

export default SearchLink;
