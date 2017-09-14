import QString from 'query-string';
import {LatLngBounds } from 'leaflet';
import {reduce } from 'lodash';
import {APIDateToDate, dateToAPIDate} from '../utils/publish_date';
import {STATE} from '../utils/fetch';

const paramsToQString = (params) => {
    let query = {
      page: params.page || 1,
    };
    if (params.bounds) {
      query.bounding_box = params.bounds.toBBoxString();
    }
    if (params.query) {
      query.query = params.query;
    }
    if (params.published_on_end) {
      query.published_on_end = dateToAPIDate(params.published_on_end);
    }
    if (params.published_on_start) {
      query.published_on_start = dateToAPIDate(params.published_on_start);
    }

    ["actions", "authors", "climate_changes", "effects", "content_types", "geofocus",
      "keywords", "publishers", "sectors", "strategies", "states"].forEach((key) => {
        if (params.facets && params.facets[key]) {
          let vals = reduce(params.facets[key], (all, val, key) => {
              if (val) {
                return all.concat(key);
              } else {
                return all;
              }
            }, []).join(',');

          query[key] = vals;
        }
      });

    query.states = STATE;
    query.per_page = 20;

    query = Object.keys(query).reduce(function(a,k){
      if (query[k] && query[k] !== "") {
        a.push(k+'='+encodeURIComponent(query[k]));
      }
      return a
    },[]).join('&')

    return query;
}

const paramsFromQString = (str) => {
  let params = QString.parse(str);
  let parsed = {facets: {}}

  parsed.query = params.query;
  parsed.page = parseInt(params.page || "1", 10);

  let bbox_s = params.bounding_box;
  if (bbox_s) {
    let bbox = bbox_s.split(",").map((v) => { return parseFloat(v); });
    //swlng,swlat,nelng,nelat
    try {
      parsed.bounds = new LatLngBounds([
        [bbox[1], bbox[0]],
        [bbox[3], bbox[2]],
      ]);
    } catch(e) { parsed.bounds = null; }

  }

  parsed.published_on_end = params.published_on_end ? APIDateToDate(params.published_on_end) : null;
  parsed.published_on_start = params.published_on_start ? APIDateToDate(params.published_on_start) : null;

  ["actions", "authors", "climate_changes", "effects", "content_types", "geofocus",
    "keywords", "publishers", "sectors", "strategies", "states"].forEach((key) => {
      if (params[key]) {
        parsed.facets[key] = {}
        params[key].split(",").forEach((v) => {
          parsed.facets[key][v] = true;
        });
      } else {
        parsed.facets[key] = {};
      }
    });

  return parsed;
}

export {paramsToQString, paramsFromQString};
