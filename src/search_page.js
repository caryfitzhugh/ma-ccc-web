import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from './header';
import {NotFound} from './not_found';
import Footer from './footer';
import SearchMapPage from './search/map';
import SearchListPage from './search/list';
import {reduce, isEmpty, get} from 'lodash';
import immutable from 'object-path-immutable';
import {API_HOST, STATE} from './utils/fetch';
import {PropsRoute} from './utils/render';
import { LoadingOverlay } from './utils/render';
import fetch from 'isomorphic-fetch';
import {paramsToQString, paramsFromQString} from './search/utils';

import "./search_page.css";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {facets: {}, search_results: {}}
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

  navigate_to_new_search (new_params) {
    // Current path
    let path = this.props.location.pathname;
    let search = paramsToQString(Object.assign({}, this.params(), new_params));
    this.props.history.push(path + "?" + search);
  }

  pending_search() {
    return !isEmpty(this.state.facets); //deep_equal...
  }


  active_filters() {
    // Is there any difference between the query facets and the selected facets
    let sr_filters = (((this.props.search_results || {}).params || {}).filters || {});
    return !(isEmpty(this.state.facets) && isEmpty(sr_filters));
  }

  apply_filters() {
    // We need to merge the current
    let facets = Object.assign({}, this.params().facets, this.state.facets);
    let params = {page: 1, query: this.params().query,
                  facets: facets};
    this.navigate_to_new_search(params);
  }

  clear_search() {
    this.setState({facets: {}});
    this.navigate_to_new_search({query: this.props.params.query, page: 1});
  }

  toggle_facet(id,val, opts) {
    this.setState((prevState, props) => {
      let path = ["facets", id, val];

      if (this.is_checked(id, val)) {
        return immutable.set(prevState, path , false);
      } else {
        return immutable.set(prevState, ["facets", id, val], true);
      }
    }, () => {
      if (opts && opts.immediate) {
        this.apply_filters();
      }
    });
  }


  facets() {
    let unfiltered = this.state.search_results.facets || {};
    let filtered =  reduce(unfiltered, (memo, val, key) => {
      memo[key] = val;
      return memo;
      }, {});
    return filtered;
  }

  is_checked(id, val) {
    let is_checked = false;
    let user_selected = this.state.facets[id] || {};

    if (user_selected[val] === undefined) {
      is_checked = this.params().facets[id][val];
    } else  {
      is_checked = user_selected[val];
    }
    // Else false.
    return is_checked || false;
  }

  render() {
    let props = {
      params: this.params(),
      facets: this.facets(),
      user_facets: this.state.facets,
      search_results: this.state.search_results,
      onNewSearch: (params) => this.navigate_to_new_search(params),
      requesting: this.state.requesting,
      is_checked: this.is_checked.bind(this),
      apply_filters: this.apply_filters.bind(this),
      clear_search: this.clear_search.bind(this),
      toggle_facet: this.toggle_facet.bind(this),
      active_filters: this.active_filters.bind(this),
      pending_search: this.pending_search.bind(this),

    }
    return (
      <div className='search-page'>
          <Header />
          <div className='container-fluid search-page-content'>
            <LoadingOverlay loading={props.requesting} />
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
