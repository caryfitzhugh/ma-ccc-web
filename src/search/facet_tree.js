import React, {Component} from 'react';
import {should_display, strip_state} from '../resources/utils.js';

const FacetTree = (props) => {
  let facets = props.facets;
  let parent = props.parent || "";
  // Sort them into buckets
  let buckets = facets.reduce((all, facet) => {
      // Slice off the parent to make it "relative"
      let value_rel = facet.value.replace(new RegExp(`$${parent}`));
      let parts = value_rel.split("::");
      let key = parts[0];
      all[key] = all[key] || [];
      all[key].push(facet);
      return all;
    }, {});

   let primaries = Object.keys(buckets).sort();

   return <ul>
      {primaries.map((primary, indx) => {
        let inputid = `input-${parent}-${indx}`;
        let children = buckets[primary];

        return <li>
          <input id={inputid}
            type='checkbox'
            checked={props.is_checked(parent.value)}
            onChange={(evt) => props.on_toggle_facet(parent.value)}/>
          <label htmlFor={inputid} >
            <span> {parent.value} </span>
            <small>({parent.count})</small>
          </label>
          <FacetTree {...props} facets={children} />
        </li>;
      })}
    </ul>;

  return
      <ul>
        {facets.map((facet,indx) => {
          let is_checked = props.is_checked(facet.value);
          let inputid = `input-${props.name}-${indx}`;

          return <li key={facet.value}>
                    <input id={inputid}
                      type='checkbox'
                      checked={is_checked}
                      onChange={(evt) => this.props.on_toggle_facet(facet.value)}/>
                    <label htmlFor={inputid} >
                      <span> {this.props.prefixed ? strip_state(facet.value) : facet.value} </span>
                      <small>({facet.count})</small>
                    </label>
                 </li>;
        })}
     </ul>
};

export default FacetTree;
