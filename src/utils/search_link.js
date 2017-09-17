import React, { Component } from 'react';
import {Link}  from 'react-router-dom';

import {simpleParamsToQString} from '../search/utils';

class SearchLink extends Component {
  render() {
    let params = this.props.params || {};
    let query = simpleParamsToQString(params);
    let path = `/search?${query}`;

    return ( <Link className={this.props.className}
                to={path}>{this.props.children}</Link> );
  }
}

export default SearchLink;
