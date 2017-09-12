import React, { Component } from 'react';
import Facets from './facets';
import SearchPagination from './search_pagination';
import MapListToggle from './maplist_toggle';
import SearchResult from './search_result';
import ActiveFacets from './active_facets';
import {Link} from 'react-router-dom';

import './list.css';


class SearchListPage extends Component {

render() {
    let results = this.props.search_results.resources || [],
        noSearchResults = <div className='no-results'>
          <p>We're sorry.  No results found for <span>"{this.props.params.query}" </span>
            with your current filter selections.</p>
          <p>Try clearing your filters to improve your results.</p>
          <p><Link replace to='/search'>Show All Results</Link></p>
          </div>;

    return (
    <div className='search-list'>
      <Facets {... this.props} />
      <div className='search-list-content'>
        <MapListToggle {... this.props} />
        <ActiveFacets {... this.props} />
        {results.length > 0 ? '': noSearchResults}
        <SearchPagination {... this.props} />
        <div className='search-results'>
          {results.map((res) => {
            return <SearchResult history={this.props.history} key={res.docid} {... res} />
            })}
        </div>
      </div>
    </div>
    );
  }
}

export default SearchListPage;
