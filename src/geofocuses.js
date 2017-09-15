import {API_HOST} from './utils/fetch';
import fetch from 'isomorphic-fetch';

const GeofocusCache = {};
const GeofocusLoading = {};
/*
  returns Promise when returned
*/
const getGeofocusGeoJSON = (id) => {
  return new Promise((success, error) => {
    if (GeofocusCache[id]) {
      success(GeofocusCache[id]);
    } else {
      if (GeofocusLoading[id]) {
        GeofocusLoading[id].push({success, error});
      } else {
        GeofocusLoading[id] = [{success, error}];

        fetch(`${API_HOST}/geofocuses/${id}/geojson`)
          .then((response) => {
            if (response.ok) {
              let json =  response.json();
              GeofocusCache[id] = json;
              GeofocusLoading[id].forEach((prom) => {
                prom.success(GeofocusCache[id]);
              });
            } else {
              GeofocusLoading[id].forEach((prom) => {
                prom.error("Failed to load");
              });
            }
          });
      }
    }
  });
}

export { getGeofocusGeoJSON };
