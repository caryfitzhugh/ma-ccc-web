import {API_HOST} from './utils/fetch';
import fetch from 'isomorphic-fetch';

const GeofocusCache = {};

/*
  returns Promise when returned
*/
const getGeofocusGeoJSON = (id) => {
  return new Promise((success, error) => {
    if (GeofocusCache[id]) {
      success(GeofocusCache[id]);
    } else {
      fetch(`${API_HOST}/geofocuses/${id}/geojson`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to retrieve GeoJSON for geofocus #" + id);
          }
        })
        .then((json) => {
          GeofocusCache[id] = json;

          success(GeofocusCache[id]);
        })
        .catch((e) => {
          console.warn(e);
          error(e);
        });
    }
  });
}

export { getGeofocusGeoJSON };
