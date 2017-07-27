import React, { Component } from 'react';

import './search_bar.css';

const Slide = (props) =>
  <div></div>;

class SearchBar extends Component {
  render() {
    return (<div className='container search-bar no-select'>
      <div className='input-group input-group-lg'>
        <input type='text' className='form-control' placeholder="Search for resources..."/>
        <span className='input-group-btn'>
          <button className='btn btn-primary' type='button'>
            <span className='fa fa-search'></span>
            Search
          </button>
        </span>
      </div>
    </div>);
  }
}

export default SearchBar;
