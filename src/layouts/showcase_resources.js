import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_HOST } from '../utils/fetch';
import {isEmpty} from 'lodash';
import fetch from 'isomorphic-fetch';
import './showcase_resources.css';

class ShowcaseResources extends Component {
  constructor(props) {
    super(props);
    this.state = {collection_result: {}}
  }

  componentWillMount() {
    let sthis = this;
    if (this.props.collection_name) {
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
  }

  render() {
    let resources = this.props.resources || this.state.collection_result.resources || [{}, {},{}];

    return (
      <div className='showcase-resources'>
        <h2>
          <a id={this.props.id}>
            {this.props.title}
          </a>
        </h2>
        <div>
          {this.props.content}
        </div>
        <ul>
          {resources.slice(0,3).map((res, i) => {
            let href = `/resources/${res.docid}`;
            let img = <img alt='showcased resource' src={res.image}/>;
            let label = <label>{res.title}</label>;

            return <li className='resource' key={i}>
                {res.href ?
                    <a className='img-link'href={res.href}> {img}</a> :
                    <Link className='img-link'to={href}> {img} </Link>}

                {res.href ?
                    <a className='label-link'href={res.href}> {label}</a> :
                    <Link className='label-link'to={href}> {label} </Link>}

            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default ShowcaseResources;
