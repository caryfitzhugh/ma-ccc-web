import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import { LatLngBounds } from 'leaflet';
import gjBounds from 'geojson-bounds';
import {Map, TileLayer, GeoJSON} from 'react-leaflet';
import {getGeofocusGeoJSON} from './geofocuses';
import {compact} from 'lodash';

class GeofocusMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geofocuses: {}
    };
  }

  componentDidMount() {

  }

  geofocuses() {
    return compact((this.props.geofocuses || []).map((gfid) => {
                    let gf = this.state.geofocuses[gfid];
                    if (!gf) {
                      getGeofocusGeoJSON(gfid)
                        .then((gf) => {
                          this.setState((old) => {
                            let new_state = Object.assign({}, old);
                            new_state.geofocuses[gfid] = gf;
                            return new_state;
                          });
                        });
                    }
                    return gf;
                  }));
  }

  viewportZoomed (evt) {
    let boundsChanged = this.props.onBoundsChanged;

    if (boundsChanged && this.refs.map) {
      let new_bounds = this.refs.map.leafletElement.getBounds();
      boundsChanged(new_bounds);
    }
  }

  viewportChanged (evt) {
    let boundsChanged = this.props.onBoundsChanged;

    if (boundsChanged && this.refs.map) {
      let old_bounds = this.bounds();
      let new_bounds = this.refs.map.leafletElement.getBounds();

      // Make sure the map really does move (more than 2 px in a direction)..
      let old_center = (this.refs.map.leafletElement.latLngToLayerPoint(old_bounds.getCenter()));
      let new_center = (this.refs.map.leafletElement.latLngToLayerPoint(new_bounds.getCenter()));
      let delta_x = Math.abs(old_center.x - new_center.x)
      let delta_y =  Math.abs(old_center.y - new_center.y)

      if (delta_x > 2 || delta_y > 2) {
        boundsChanged(new_bounds);
      }
    }
  }

  bounds () {
    let geofocuses = this.geofocuses();
    let bbox = gjBounds.extent({type: "GeometryCollection", geometries: geofocuses})

    let bounds = this.props.bounds || (
        bbox[0] ?
        new LatLngBounds([[bbox[1],bbox[0]],[bbox[3], bbox[2]]]) :
        new LatLngBounds([[42.886778,-73.50821],  [41.187053, -69.858861]])
    );

    return bounds;
  }

  render() {
    let highlighted = this.props.highlight || [];
    let geofocuses = this.geofocuses();
    let bounds = this.bounds();

    return (
          <div className='geofocus-map'>
            <Map ref='map'
                onViewportChanged={(evt) => this.viewportChanged(evt)}
                onZoomEnd={(evt) => this.viewportZoomed(evt)}
                bounds={bounds} >
              <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
              {geofocuses.map((gf, i) => {
                let is_highlighted = highlighted.includes(gf.id);
                let color = is_highlighted ? "#f27421" : "#113f83";
                let style = {
                  fillColor: color,
                  color: color,
                  weight: 1,
                  opacity: 0.9,
                  fillOpacity: is_highlighted ? 0.6 : 0.5
                };
                return gf ? <GeoJSON key={i} data={gf} style={style}
                    onEachFeature={(feature, layer) => {
                      layer.bindPopup(feature.properties.name);
                    }}
                    /> : null;
              })}
            </Map>
          </div>);
  }
}

export default GeofocusMap;
