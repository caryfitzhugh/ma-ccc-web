import React, { Component } from 'react';
import QString from 'query-string';

class SearchListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.params = {};
  }

  componentDidMount(prevProps) {
    this.params = QString.parse(this.props.location.search);
  }

  render() {
    return (
    <div>
        <h1>
        Search Lists
        </h1>
        <h3> Search Query is: {this.params.q} </h3>
        <p> Will show the list view, showing the top 50 results of the search / facet query , then pagination too.</p>
    </div>
    );
  }
}

export default SearchListPage;
