import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {isEmpty} from 'lodash';
import {ResourcePublishDate} from './../utils/publish_date';
import md from 'marked';
import {pretty_print, strip_state, should_display} from './utils';
import {filter } from 'lodash';
import GeofocusMap from './../geofocus_map';
import './detail.css';

const ContentTypes = (props) => {
  return <div className='content-types'>
    {props.content_types.map((ctype) => {
      return <div key={ctype} className='content-type'>
        {ctype.split("::").map((part, i) => {
          return <span key={ctype + '-' + i} className='part'> {part} </span>
        })}
        </div>;
    })}
  </div>

};

const Subsection = (props) => {
  let items = props.items;

  if (props.prefixed) {
    items = filter(items, (v) => should_display(v));
  }

  return items.length > 0 ? (
    <div key={`subsection-${props.name}`} className='subsection'>
      <label>{props.name}</label>
      <div className='items'>
        {props.items.map( (item, indx) => {
          let display = item;
          if (props.prefixed) {
            display = strip_state(item);
          }
            return <div className='item' key={indx}>
                <Link to={`/search/?${props.facet}=${encodeURIComponent(item)}`}> {pretty_print(display)}</Link>
              </div>;
          })}
      </div>
    </div>) : null;
};

class ResourcesDetailPage extends Component {
  componentDidMount() {
    this.props.load_resource(this.props.match.params.docid);
  }

  componentWillReceiveProps(nextProps) {
    this.props.load_resource(this.props.match.params.docid);
  }

  render() {
    let resource = this.props.resources_result || {};

    if (isEmpty(resource)) {
      return null;
    } else {
      return (
        <div className='resource-detail container'>
          <a className='back-to-search-results' href='javascript:history.back()'>&#8592;&nbsp; Back to Search Results</a>
          <span className='publication'>{ResourcePublishDate(resource)}</span>
          <ContentTypes content_types={resource.content_types} />
          <h1>{resource.title}</h1>
          <h5>{resource.subtitle}</h5>
          {(resource.external_data_links || []).map((wl, indx) => {
            let split = wl.split("::");
            return <a target="_blank" href={split[1]} rel='noopener noreferrer' key={indx} className='badge badge-primary'> {split[0]} </a>;
          })}
          <hr/>
          {resource.authors.length === 0 ? null :
            <div className='authors'>
              <label>by</label>
                 {resource.authors.map((author) => {
                    return <span key={author} className='author'>{author}</span>
                    })}
            </div>}

          {resource.publishers.length === 0 ? null :
            <div className='publishers'>
              <label>Published by </label>
              {resource.publishers.map((publisher) => {
                return <span key={publisher} className='publisher'>{publisher}</span>
                })}
            </div>}

          {resource.image ?
            <img alt={resource.title + ' example'} src={resource.image} className='col-12 col-md-5 float-right'/>
            : null}


          <div className='content' dangerouslySetInnerHTML={{__html: md(resource.content || "")}}></div>
          <hr/>

          {resource.geofocuses.length > 0 ? <div className='resource-map'>
                <GeofocusMap geofocuses={resource.geofocuses || []} />
              </div> : null }

            <Subsection name='Actions' facet="actions" items={resource.actions} prefixed={true} />
            <Subsection name='Climate Changes' facet="climate_changes" items={resource.climate_changes}prefixed={true}  />
            <Subsection name='Effects' facet="effects" items={resource.effects} prefixed={true} />
            <Subsection name='Keywords' facet="keywords" items={resource.keywords} />
            <Subsection name='Sectors' facet="sectors" items={resource.sectors} prefixed={true} />
            <Subsection name='Strategies' facet="strategies" items={resource.strategies} />
        </div>);
    }
  }
}

export default ResourcesDetailPage;
