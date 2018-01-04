import React, { Component } from 'react';
import {Link}  from 'react-router-dom';

import {searchURL} from '../search/utils';
class SearchLink extends Component {
  render() {
    let params = this.props.params || {};
    let path = searchURL(params);

    return ( <Link className={this.props.className}
                to={path}>{this.props.children}</Link> );
  }
}

export default SearchLink;
