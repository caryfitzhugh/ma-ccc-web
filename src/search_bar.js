import React, { Component } from 'react';
import QString from 'query-string';
import { withRouter } from 'react-router'
import './search_bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {search_string: ""}
  }

  update_search_text(txt) {
    this.setState({search_string: txt});
  }

  handle_key_press(target) {
    if(target.key === "Enter") {
      this.do_search();
    }
  }

  submit_search(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.do_search();
  }

  do_search() {
    let qstring = QString.stringify({q: this.state.search_string});
    let path = `/search?q=${qstring}`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div className={'search-bar ' + this.props.className}>
        <div className={'input-group input-group-' + (this.props.size || 'lg')}>
          <input value={this.state.search_string}
                onChange={(evt) => { this.update_search_text(evt.target.value)}}
                onKeyDown={(evt) => this.handle_key_press(evt)}
                type='text' className='form-control' placeholder="Search for resources..."/>
          <span className='input-group-btn'>
            <button className='btn btn-primary' type='button'
                  onClick={(evt) => { this.submit_search(evt)}}>
              <span className='fa fa-search'></span>
              Search
            </button>
          </span>
        </div>
      </div>);
  }
}

export default withRouter(SearchBar);
