import React, { Component } from 'react';
import './search_pagination.css';

class SearchPagination extends Component {

  render() {
    if (this.props.search_results.total > 0) {
      let prev_disabled =  this.props.search_results.page === 1;
      let next_disabled =  this.props.search_results.page === this.props.search_results.total_pages;
      return (
        <div className='search-pagination'>
          <span>{this.props.search_results.total} Results</span>
          <span className={'btn btn-secondary btn-sm fa fa-chevron-left ' + (prev_disabled ? 'disabled' : '')}
                onClick={() => {!prev_disabled && this.props.onNewSearch({page: this.props.search_results.page - 1})}}></span>
          <label>Page {this.props.search_results.page} of {this.props.search_results.total_pages}</label>
          <span className={'btn btn-secondary btn-sm fa fa-chevron-right ' + (next_disabled ? 'disabled' : '')}
                onClick={() => {!next_disabled && this.props.onNewSearch({page: this.props.search_results.page + 1})}}></span>
        </div>
      );
    } else {
      return false;
    }
  }
}

export default SearchPagination;
