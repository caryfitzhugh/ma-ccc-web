import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from './../layouts/default';
import L from 'leaflet';
import { GeoJSON, Map, Marker, Popup, TileLayer } from 'react-leaflet';
import md from 'marked';
import './detail.css';

const map_bounds = [-73.50821,42.886778,  -69.858861, 41.187053];

const GeofocusesMap = (props) => 
  <Map bounds={props.bounds}>
    {props.geofocuses.map( (json, indx) => {
console.log(json);
      return <GeoJSON key={indx} data={json} />
    })}
  </Map>;

class ResourcesDetailPage extends Component {
  componentDidMount() {
    this.props.load_resource(this.props.match.params.docid);
  }

  componentWillReceiveProps(nextProps) { 
    this.props.load_resource(this.props.match.params.docid);
  }

  render() {
    let resource = this.props.resources_result || {};
    let geofocus_json = this.props.geofocus_json;

    return (
          <DefaultLayout>
            <h1>{resource.title}</h1>
            <h5>{resource.subtitle}</h5>
            {resource.image ? 
              <img alt={resource.title + ' example'} src={resource.image} className='col-12 col-md-5 float-right'/>
              : null}
            {resource.image ? 
              <img alt={resource.title + ' example'} src={resource.image} className='col-12 col-md-5 float-right'/>
              : null}

              {geofocus_json.length > 0 ? <GeofocusesMap geofocuses={geofocus_json} /> : null}

              <div className='content' dangerouslySetInnerHTML={{__html: md(resource.content || "")}}></div>

          </DefaultLayout>
    );
  }
}

export default ResourcesDetailPage;
