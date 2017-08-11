import React, { Component } from 'react';
import { withRouter } from 'react-router'
import Facets from './facets';
import SearchPagination from './search_pagination';
import MapListToggle from './maplist_toggle';
import GeofocusMap from '../geofocus_map';
import {without, uniq, flatten} from 'lodash';
import SearchResult from './search_result';
import './map.css';

class SearchMapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: null
    };
  }
  set_highlighted(active, ids) {
    this.setState((old) => {
      let updated = Object.assign({}, old).highlighted || [];
      if (active) {
        updated = updated.concat(ids);
      } else {
        updated = without(updated, ...ids);
      }
      updated = uniq(updated);

      old.highlighted = updated;
      return old;
    });
  }
  render()  {
    let geofocus_ids = uniq(flatten(((this.props.search_results || {}).resources || []).map((resource) => {
      return resource.geofocuses;
    })));
    let highlighted = (this.state || {}).highlighted || [];

    let results= this.props.search_results.resources || [];
    let search_results = this.props.search_results || {};

    let bbox = (this.props.params || {}).bounds;

    return (
      <div className='search-map'>
        <Facets {... this.props} />
        <div className='search-map-content'>
          <MapListToggle {... this.props} />
          <GeofocusMap
            bounds={bbox}
            onBoundsChanged={(bounds) => {
              try {
                if (search_results) {
                  this.props.onNewSearch(Object.assign({}, search_results.params, {page: 1, bounds: bounds}));
                }
              } catch (e) { console.warn(e); }
            }}
          geofocuses={geofocus_ids} highlight={highlighted}  />
        </div>
      </div>);
  }
}

export default withRouter(SearchMapPage);
