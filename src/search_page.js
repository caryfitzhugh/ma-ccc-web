import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from './header';
import QString from 'query-string';
import {NotFound} from './not_found';
import Footer from './footer';
import SearchMapPage from './search/map';
import SearchListPage from './search/list';
import {reduce} from 'lodash';
import {API_HOST, STATE} from './utils/fetch';
import {APIDateToDate, dateToAPIDate} from './utils/publish_date';
import {PropsRoute} from './utils/render';
import { LoadingOverlay } from './utils/render';
import fetch from 'isomorphic-fetch';

import "./search_page.css";

const paramsToQString = (params) => {
    let query = {
      page: params.page || 1,
    };
    if (params.query) {
      query.query = params.query;
    }
    if (params.published_on_end) {
      query.published_on_end = dateToAPIDate(params.published_on_end);
    }
    if (params.published_on_start) {
      query.published_on_start = dateToAPIDate(params.published_on_start);
    }
    ["actions", "authors", "climate_changes", "effects", "formats", "geofocus",
      "keywords", "publishers", "sectors", "strategies", "states"].forEach((key) => {
        if (params.facets && params.facets[key]) {
          let vals = reduce(params.facets[key], (all, val, key) => {
              return all.concat(key);
            }, []).join(',');

          query[key] = vals;
        }
      });

    query.states = STATE;
    query.per_page = 50;

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

  parsed.published_on_end = params.published_on_end ? APIDateToDate(params.published_on_end) : null;
  parsed.published_on_start = params.published_on_start ? APIDateToDate(params.published_on_start) : null;

  ["actions", "authors", "climate_changes", "effects", "formats", "geofocus",
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


class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {search_results: {}}
  }

  componentDidMount() {
    let params = paramsFromQString(this.props.location.search)
    this.perform_new_search(params);
  }

  componentWillReceiveProps(nextProps) { 
    let params = paramsFromQString(nextProps.location.search)
    this.perform_new_search(params);
  }

  perform_new_search (params) {

    let query = paramsToQString(params);

console.log("Query: ", query);
console.log("params:", params);
console.log("ReqID:",  this.state.req_id);
    let sthis = this;

    if (this.state.req_id !== query) {
      this.setState({error: false, requesting: true, req_id: query}, () => {
        fetch(API_HOST + "/resources?" + query)
          .then(
            (response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error("Error Performing Resoruces Search");
              }
          }).then((json) => {
            json.resources.forEach((resource) => {
              if (resource.pubstart) {
                resource.pubstart = new Date(resource.pubstart);
              }
              if (resource.pubend) {
                resource.pubend = new Date(resource.pubend);
              }
            });
            json.total_pages = Math.ceil(json.total / json.per_page);

            try {
              // Remove the states from the response - it is transparent to the rest of the system
              delete json.params.filters.states;
            } catch (e) { }

            if (sthis.state.req_id === query) {
              sthis.setState({search_results: json, requesting: false, error: false});
            }
          })
          .catch((e) => {
            if (sthis.state.req_id === query) {
              console.warn(e);
              sthis.setState({error: true});
            }
          });
      });
    }
  }

  params() {
    return paramsFromQString(this.props.location.search);
  }

  navigate_to_new_search (params) {
    // Current path
    let path = this.props.location.pathname;
    let search = paramsToQString(params);    
    this.props.history.push(path + "?" + search);
  }

  facets() {
    let unfiltered = this.state.search_results.facets || {};
    let filtered =  reduce(unfiltered, (memo, val, key) => {
      console.warn("Need to determine how to filter these?");
      memo[key] = val;    
      return memo;
      }, {});
    return filtered;
  }
  render() {
    let props = {
      params: this.params(),
      facets: this.facets(),
      search_results: this.state.search_results,
      onNewSearch: (params) => this.navigate_to_new_search(params),
      requesting: this.state.requesting,
    }

    return (
      <div className='search-page'>
          <Header />
          <div className='container-fluid search-page-content'>
            {props.requesting ? <LoadingOverlay /> : null }
            <Switch>
              <PropsRoute exact path='/search/map' component={SearchMapPage} {... props} />
              <PropsRoute exact path='/search'   component={SearchListPage}  {... props} />
              <Route path='*' component={NotFound} />
            </Switch>
          </div>
        <Footer />
      </div>
    );
  }
}

export default SearchPage;
