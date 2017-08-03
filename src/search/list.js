import React, { Component } from 'react';
import Facets from './facets';
import SearchPagination from './search_pagination';
import MapListToggle from './maplist_toggle';
import SearchResult from './search_result';

import './list.css';


class SearchListPage extends Component {

  render() {
    let results = this.props.search_results.resources || [];

    return (
    <div className='search-list'>
      <Facets {... this.props} />
      <div className='search-list-content'>
        <MapListToggle {... this.props} />
        <SearchPagination {... this.props} />
        <div className='search-results'>
          {results.map((res) => {
            return <SearchResult key={res.docid} {... res} />
            })}
        </div>
      </div>
    </div>
    );
  }
}

export default SearchListPage;
