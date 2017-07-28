import React, { Component } from 'react';
import QString from 'query-string';
import { withRouter } from 'react-router'

class SearchMapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {params: {}}
  }

  componentDidMount(prevProps) {
    this.setState({params: QString.parse(this.props.location.search)});
  }
  render() {

    return (
    <div>
        <h1>
        Maps
        </h1>
        <h3> Search Query is: {this.state.params.q} </h3>
        <p> Will show the map view, showing the top 20 results of the search / facet query </p>
    </div>
    );
  }
}

export default withRouter(SearchMapPage);
