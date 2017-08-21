import React, { Component } from 'react';
import {sortBy, get, isEmpty} from 'lodash';
import immutable from 'object-path-immutable';
import FacetsModal from './facets_modal';
import './facets.css';

/*
  Facet Group has 3 inputs:
    query_selected <- comes from query / URL
    user_selected <- comes from state
    all_facets <- comes from search results

  and on_toggle_facet - which will set the state.
*/
class FacetGroup extends Component {
  is_checked(val) {
    let is_checked = false;
    if (this.props.user_selected[val] === undefined) {
      is_checked = this.props.query_selected[val];
    } else {
      is_checked = this.props.user_selected[val];
    }
    return is_checked || false;
  }

  render() {
    let limit = 1;
    let facets = this.props.all_facets || [];
    let checked_facets = [];
    let unchecked_facets = [];
    facets.forEach((facet) => {
      if (this.is_checked(facet.value)) {
        checked_facets.push(facet);
      } else {
        unchecked_facets.push(facet);
      }
    });

    checked_facets = sortBy(checked_facets, (facet) => { return facet.value});
    unchecked_facets = sortBy(unchecked_facets, (facet) => { return facet.value});


    let shown_facets = checked_facets.concat(unchecked_facets.slice(0,Math.max(limit, checked_facets.length)));

    return <div key={'facet-' + this.props.name} className='facet-group'>
      <h3>{this.props.name}</h3>
      <ul>
        {shown_facets.map((facet,indx) => {
          let is_checked = this.is_checked(facet.value);
          let inputid = `input-${this.props.name}-${indx}`;

          return <li key={facet.value}>
                    <input id={inputid}
                      type='checkbox'
                      checked={is_checked}
                      onChange={(evt) => this.props.on_toggle_facet(facet.value)}/>
                    <label htmlFor={inputid} >
                      <span> {facet.value} </span>
                      <small>({facet.count})</small>
                    </label>
                 </li>;
        })}
        { facets.length > limit ?
          <li>
            <FacetsModal title={this.props.name}
              on_toggle_facet={this.props.on_toggle_facet}
              is_checked={this.is_checked.bind(this)}
              facets={facets}
              />
          </li>
          : null}
      </ul>

    </div>;
  }
}


class Facets extends Component {
  constructor (props) {
    super(props)
    this.state = {facets: {} };
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
    let facets = Object.assign({}, this.props.params.facets, this.state.facets);
    let params = {page: 1, query: this.props.params.query,
                  facets: facets};
    this.props.onNewSearch(params);
  }

  clear_search() {
    this.setState({facets: {}});
    this.props.onNewSearch({query: this.props.params.query, page: 1});
  }


  toggle_facet(id,val) {
    this.setState((prevState, props) => {
      let path = ["facets", id, val];
      if (get(prevState, path)) {
        return immutable.set(prevState, path , null);
      } else {
        return immutable.set(prevState, ["facets", id, val], true);
      }
    });
  }

  render() {
    let state_facets = this.state.facets || {};
    let params = this.props.params || {};
    let search_results = this.props.search_results;
    let facets = [['sectors','Sectors'] ,
      ['strategies', "Strategies"],
      ['actions', 'Actions'],
      ['climate_changes', "Climate Changes"],
      ['effects', "Effects"],
      ['authors', "Authors"],
      ['formats',"Types"],
      ['keywords', "Keywords"],
      ['publishers', "Publishers"]];
    return <div className={this.props.className + ' search-facets'}>
      <div className='controls'>
        <button onClick={(evt) => {this.apply_filters()}}
                className={'btn btn-sm btn-block btn-primary ' + (this.pending_search() ? ' ' : 'disabled')}>
          Apply Filters
        </button>

        <button onClick={(evt) => {this.clear_search()}}
                className={'btn btn-sm btn-block btn-secondary ' + (this.active_filters() ? ' ' : 'disabled')}>
          Clear Filters
        </button>
      </div>
      {facets.map ((vals) => {
          let id = vals[0];
          let name = vals[1];
          let user_selected_facets = state_facets[id] || {};
          let query_selected_facets = params[id] || {};
          let all_facets = (search_results.facets || {})[id] || [];

          return <FacetGroup key={id}
                             id={id}
                             name={name}
                             apply_filters={() => { this.apply_filters() }}
                             user_selected={user_selected_facets}
                             query_selected={query_selected_facets}
                             all_facets={all_facets}
                             on_toggle_facet={(val) => this.toggle_facet(id,val)} />

        })}
    </div>
  }
}

export default Facets;
