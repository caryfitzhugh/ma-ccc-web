import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {isEmpty} from 'lodash';
import {ResourcePublishDate} from './../utils/publish_date';
import md from 'marked';
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
  return props.items.length > 0 ? <div key={`subsection-${props.name}`} className='subsection'>
    <label>{props.name}</label>
    <div className='items'>
      {props.items.map( (item, indx) => {
          return <div className='item' key={indx}>
              <Link to={`/search/?${props.facet}=${encodeURIComponent(item)}`}> {item}</Link>
            </div>;
        })}
    </div>
  </div> : null;
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
          <span className='publication'>{ResourcePublishDate(resource)}</span>
          <ContentTypes content_types={resource.content_types} />
          <h1>{resource.title}</h1>
          <h5>{resource.subtitle}</h5>
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

            <Subsection name='Actions' facet="actions" items={resource.actions} />
            <Subsection name='Climate Changes' facet="climate_changes" items={resource.climate_changes} />
            <Subsection name='Effects' facet="effects" items={resource.effects} />
            <Subsection name='Keywords' facet="keywords" items={resource.keywords} />
            <Subsection name='Sectors' facet="sectors" items={resource.sectors} />
            <Subsection name='Strategies' facet="strategies" items={resource.strategies} />
        </div>);
    }
  }
}

export default ResourcesDetailPage;
