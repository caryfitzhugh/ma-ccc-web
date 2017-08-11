import React, { Component } from 'react';
import {L, LatLngBounds} from 'leaflet';
import 'leaflet/dist/leaflet.css';
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
  viewportChanged (evt) {
    let boundsChanged = this.props.onBoundsChanged;

    if (boundsChanged && this.refs.map) {
      let bounds = this.refs.map.leafletElement.getBounds();
      boundsChanged(bounds);
    }
  }

  render() {
    let highlighted = this.props.highlight || [];
    let geofocuses = this.geofocuses();
    let bbox = gjBounds.extent({type: "GeometryCollection", geometries: geofocuses})
    let bounds = this.props.bounds || (
        bbox[0] ?
        [[bbox[1],bbox[0]],[bbox[3], bbox[2]]] :
        [[42.886778,-73.50821],  [41.187053, -69.858861]]
    );

    return (
          <div className='geofocus-map'>
            <Map ref='map'
                onViewportChanged={(evt) => this.viewportChanged(evt)}

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
