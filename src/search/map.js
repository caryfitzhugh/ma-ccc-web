import React, { Component } from 'react';
import { withRouter } from 'react-router'
import Facets from './facets';
import MapListToggle from './maplist_toggle';
import GeofocusMap from '../geofocus_map';
import ActiveFacets from './active_facets';
import {filter, without, uniq, flatten} from 'lodash';
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
  onEachFeature(feature, layer) {
    // Want to find all resources which match?A
    let resources = (this.props.search_results || {}).resources;
    let geofocus_id = feature.properties.id;
    let associated = filter(resources, (res) => {
     return res.geofocuses.includes(geofocus_id);
    }).map((res) => {
      return `<li><a href='/resources/${res.docid}'>
                ${res.title}</a></li>`
    }).join("\n");

    let html = `
      <h2>${feature.properties.name}</h2>
      <ul class='geofocus-resource-list'>
        ${associated}
      </ul>`;
    layer.bindPopup(html);

  }
  render()  {
    let geofocus_ids = uniq(flatten(((this.props.search_results || {}).resources || []).map((resource) => {
      return resource.geofocuses;
    })));
    let highlighted = (this.state || {}).highlighted || [];

    let search_results = this.props.search_results || {};

    let bbox = (this.props.params || {}).bounds;

    return (
      <div className='search-map'>
        <Facets {... this.props} />
        <div className='search-map-content'>
          <MapListToggle {... this.props} />
          <ActiveFacets {... this.props} />
          <GeofocusMap
            bounds={bbox}
            onBoundsChanged={(bounds) => {
              try {
                if (search_results ) {
                  this.props.onNewSearch(Object.assign({}, search_results.params, {page: 1, bounds: bounds}));
                }
              } catch (e) { console.warn(e); }
            }}
            onEachFeature={this.onEachFeature.bind(this)}
          geofocuses={geofocus_ids} highlight={highlighted}  />
        </div>
      </div>);
  }
}

export default withRouter(SearchMapPage);
