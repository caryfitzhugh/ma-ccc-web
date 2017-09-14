import React, { Component } from 'react';
import {sortBy } from 'lodash';
import FacetsModal from './facets_modal';
import {should_display, strip_state} from '../resources/utils.js';
import FacetTree from './facet_tree';

import './facets.css';

/*
  Facet Group has 3 inputs:
    query_selected <- comes from query / URL
    user_selected <- comes from state
    all_facets <- comes from search results

  and on_toggle_facet - which will set the state.
*/
class FacetGroup extends Component {
  render() {
    let limit = 5;
    let facets = this.props.all_facets || [];

    let checked_facets = [];
    let unchecked_facets = [];

    facets.forEach((facet) => {
      let include = (this.props.prefixed && should_display(facet.value) && strip_state(facet.value).length > 0) ||
                    !this.props.prefixed;

      if (include) {
        if (this.props.is_checked(facet.value)) {
          checked_facets.push(facet);
        } else {
          unchecked_facets.push(facet);
        }
      } else {
        // Skip!
      }
    });

    checked_facets = sortBy(checked_facets, (facet) => { return facet.value});
    unchecked_facets = sortBy(unchecked_facets, (facet) => { return facet.value});

    let shown_facets = checked_facets.concat(unchecked_facets.slice(0,limit - checked_facets.length));

    let available_facets = checked_facets.concat(unchecked_facets);
    return <div key={'facet-' + this.props.name} className='facet-group'>
      <h3>{this.props.name}</h3>
      {available_facets.length === 0 ?
        <ul> <li> <span>None</span></li></ul> :
        <FacetTree
            parent={this.props.prefixed ? "ma" : null}
            facets={shown_facets}
            apply_filters={this.props.apply_filters}
            on_toggle_facet={this.props.on_toggle_facet}
            is_checked={this.props.is_checked}/>}

      { facets.length > limit ?
        <FacetsModal title={this.props.name}
          on_toggle_facet={this.props.on_toggle_facet}
          apply_filters={this.props.apply_filters}
          is_checked={this.props.is_checked}
          facets={available_facets}
          parent={this.props.prefixed ? "ma" : null}
          />
        : null}
    </div>;
  }
}


class Facets extends Component {
  constructor (props) {
    super(props)
    this.state = {facets: {} };
  }

  render() {
    let state_facets = this.props.user_facets || {};
    let params = this.props.params || {};
    let params_facets = params.facets || {};
    let search_results = this.props.search_results;
    let facets = [['sectors','Sectors', true] ,
      ['strategies', "Strategies"],
      ['actions', 'Actions', true],
      ['climate_changes', "Climate Changes", true],
      ['effects', "Effects", true],
      //['authors', "Authors"],
      ['content_types',"Types"],
      //['keywords', "Keywords"],
      //['publishers', "Publishers"]
      ];

    return <div className={this.props.className + ' search-facets'}>
      <div className='controls'>
        <button onClick={(evt) => {this.props.apply_filters()}}
                className={'btn btn-sm btn-block btn-primary ' + (this.props.pending_search() ? ' ' : 'disabled')}>
          Apply Filters
        </button>

        <button onClick={(evt) => {this.props.clear_search()}}
                className={'btn btn-sm btn-block btn-secondary ' + (this.props.active_filters() ? ' ' : 'disabled')}>
          Clear Filters
        </button>
      </div>
      {facets.map ((vals) => {
          let id = vals[0];
          let name = vals[1];
          let prefixed = vals[2];
          let user_selected_facets = state_facets[id] || {};
          let query_selected_facets = params_facets[id] || {};
          let all_facets = (search_results.facets || {})[id] || [];

          return <FacetGroup key={id}
                             id={id}
                             name={name}
                             apply_filters={() => { this.props.apply_filters() }}
                             user_selected={user_selected_facets}
                             query_selected={query_selected_facets}
                             is_checked={(val) => this.props.is_checked(id, val)}
                             prefixed={prefixed}
                             all_facets={all_facets}
                             on_toggle_facet={(val) => this.props.toggle_facet(id,val)} />

        })}
    </div>
  }
}

export default Facets;
