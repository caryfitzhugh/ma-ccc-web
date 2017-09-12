import React, { Component } from 'react';
import {strip_state} from '../resources/utils.js';
import {get, cloneDeep, reduce} from 'lodash';
import titleize from '../utils/titleize';
import immutable from 'object-path-immutable';
import './active_facets.css';

class ActiveFacets extends Component {
  remove_facet(id, val) {
    this.props.toggle_facet(id, val, {immediate: true});
  }

  render() {
    let active_facets =  reduce(Object.keys(this.props.params.facets), (all, facet_group_name) => {
        let facet_group = this.props.params.facets[facet_group_name];

        // Skip States!
        if (facet_group_name !== "states") {
          reduce(Object.keys(facet_group), (fall, facet) => {
            if (facet_group[facet]) {
              fall.push([facet_group_name,facet]);
            }
            return fall;
          }, all);
        }
      return all;
    },[]);

    // Want to be able to click and they are removed from facets.
    // Display them in order.
    return <ul className='active-facets'>
      {active_facets.map((afacet, indx) => {
        let type = afacet[0];
        let name = afacet[1];

        return <span key={indx} className='active-facet no-select'>
            <label>{titleize(type)}</label>
            {titleize(strip_state(name).replace("::", " / "))}
            <span className='remove' onClick={(evt) => this.remove_facet(type, name)}>
              <span className='fa fa-times-circle-o'></span>
            </span>
          </span>
      })}
    </ul>
  }
}
export default ActiveFacets;
