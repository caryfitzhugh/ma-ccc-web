import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_HOST } from '../utils/fetch';
import fetch from 'isomorphic-fetch';
import {isEmpty} from 'lodash';
import "./collection.css";
class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {collection_result: {}}
  }

  componentWillMount() {
    let sthis = this;

    fetch(`${API_HOST}/collections/by-name/${this.props.collection_name}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to retrieve collection");
        }
      })
      .then((json) => {
        sthis.setState({collection_result: json, requesting: false, error: false});
      })
      .catch((e) => {
        console.warn(e);
      });
  }
  render() {
    let props ={
      collection_result: this.state.collection_result || {}
    }
    if (isEmpty(props.collection_result)) {
      return null;
    } else {
    return (
      <ul className='collections'>
      {props.collection_result.resources.map((res, i) => {
          return <li className='collections-resource' key={i}> <Link to={`/resources/${res.docid}`}>
            { (this.props.show_images && res.image) ? <img src={res.image}/> : null}
            <span>{res.title}</span> </Link> </li>
        })}
      </ul>
      );
    }
  }
}
export default Collection;
