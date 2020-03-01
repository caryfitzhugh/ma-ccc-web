import React, { Component } from 'react';
import {ResourceRemapping} from '../utils/resource_remapping';
import { Link } from 'react-router-dom';
import { API_HOST } from '../utils/fetch';
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
      {this.props.title ? <h2>
          <a id={this.props.id}>
            {this.props.title}
          </a>
        </h2> : null}
        <div>
          {this.props.content}
        </div>
        <ul>
          {resources.map((res, i) => {
            let img = <img alt='showcased resource' src={res.image}/>;
            let label = <label>{res.title}</label>;

            let href = null;
            let external = false;

            // If there is an href on the resource:
            if (res.href) {
              external = true;
              href = res.href;
            } else {
              if (ResourceRemapping[res.title]) {
                href = ResourceRemapping[res.title];
              } else {
                href = `/resources/${res.docid}`;
              }
            }

            return <li className='resource' key={i}>
                {external ?
                    <a className='img-link'href={href}> {img}</a> :
                    <Link className='img-link'to={href}> {img} </Link>}

                {external ?
                    <a className='label-link'href={href}> {label}</a> :
                    <Link className='label-link'to={href}> {label} </Link>}
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default ShowcaseResources;
