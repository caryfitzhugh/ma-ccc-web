import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_HOST } from '../utils/fetch';
import fetch from 'isomorphic-fetch';
import {slugify } from '../utils/string';
import './featured_data.css';

const FeaturedDataTab = (props) => {
  if (props.resources) {
    return <div className='featured-data-tab'>
      {props.resources.map((resource, indx) => {
        return <div className='resource' key={indx}>
          <Link to={`/resources/${resource.docid}/${slugify(resource.title)}`}>
            <img alt={resource.title} src={resource.image || 'https://placehold.it/800'}/>
          </Link>
          <Link className='title' to={`/resources/${resource.docid}/${slugify(resource.title)}`}>
            {resource.title}
          </Link>
        </div>
      })}
    </div>
  } else {
    return <div className='featured-data-tab'>
      <div className='loading'>
        <span className='fa fa-spinner animation-spin'></span>
      </div>
    </div>
  }
};

class FeaturedData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab_index: 0,
      collections: []
    };
  }

  componentDidMount() {
    let sthis = this;
    this.props.collections.forEach(([title, collection_name], indx) => {
      fetch(`${API_HOST}/collections/by-name/${collection_name}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to retrieve collection");
          }
        })
        .then((json) => {
          sthis.setState((old) => {
            old.collections = old.collections || {};
            old.collections[collection_name] = json;
            return old;
          });
        })
        .catch((e) => {
          console.warn(e);
        });
    });
  }

  render() {
    let resources = null;
    let selected_collection_name = this.props.collections[this.state.tab_index][1];
    if (this.state.collections[selected_collection_name]) {
      resources = this.state.collections[selected_collection_name].resources;
    }

    return (
      <div className='featured-data-display'>
        <ul className='nav nav-pills justify-content-center'>
          {this.props.collections.map(([title, _], indx) => {
            return <li key={indx} className="nav-item" >
              <a className={'nav-link ' + (indx === this.state.tab_index ? 'active' : '')} onClick={() => this.setState({tab_index: indx})}>{title}</a>
            </li>
          })}
        </ul>
        <FeaturedDataTab resources={resources} />
      </div>
      );
  }
}
export default FeaturedData;
