import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import {reduce} from 'lodash';

class SearchLink extends Component {
  render() {
    let params = this.props.params;
    let query = {};
    if (params.query) {
      query.query = params.query;
    }

    ["actions", "authors", "climate_changes", "effects", "content_types", "geofocus",
      "keywords", "publishers", "sectors", "strategies", "states"].forEach((key) => {
        if (params[key]) {
          query[key] = params[key].join(",");
        }
      });

    query = Object.keys(query).reduce(function(a,k){
      if (query[k] && query[k] !== "") {
        a.push(k+'='+encodeURIComponent(query[k]));
      }
      return a
    },[]).join('&')

    let path = `/search?${query}`;

    return ( <Link className={this.props.className}
                to={path}>{this.props.children}</Link> );
  }
}

export default SearchLink;
