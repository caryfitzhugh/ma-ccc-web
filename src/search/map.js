import React, { Component } from 'react';
import { withRouter } from 'react-router'
import Facets from './facets';
import SearchPagination from './search_pagination';
import MapListToggle from './maplist_toggle';
import './map.css';

class SearchMapPage extends Component {
  render() {

    return (
    <div className='search-map'>
      <Facets {... this.props} />
      <div className='search-map-content'>
        <MapListToggle {... this.props} />
        <img alt='map' src='http://placehold.it/800x800' />
        <SearchPagination {... this.props} />
        <h1>
        Maps
        </h1>
        <h3> Search Query is: {this.props.params.query} </h3>
        <p> Will show the map view, showing the top 20 results of the search / facet query </p>
        <pre>{JSON.stringify(this.props.search_results)}</pre>
      </div>
    </div>
    );
  }
}

export default withRouter(SearchMapPage);
