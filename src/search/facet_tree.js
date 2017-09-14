import React, {Component} from 'react';
import {isEmpty } from 'lodash';
import titleize from '../utils/titleize';

const toBuckets = (parent, facets) => {
  let buckets = facets.reduce((all, facet) => {
      //let value_rel = facet.value.replace(new RegExp(`^${parent.replace(/\//, '\\/')}::`), '');
      let value_rel = facet.value;
      if (!isEmpty(parent)) {
        value_rel = facet.value.replace(parent + "::", '');
      }

      let parts = value_rel.split("::");
      let key = parts[0];

      all[key] = all[key] || {parent: null, children: []};
      if (parts.length > 1 && parts[1] !== "") {
        all[key].children.push(facet);
      } else if (parts.length > 0 ){
        all[key].parent = facet;
      }  else {
        console.log("What in the world?");
      }
      return all;
    }, {});
  return buckets;
}

class FacetTree extends Component {
  render () {
    let facets = this.props.facets;
    let parent = this.props.parent || "";

    if (!facets || facets.length === 0) {
      return null;
    }

    // Sort them into buckets
    // Slice off the parent to make it "relative"
    let buckets = toBuckets(parent, facets);

    let primaries = Object.keys(buckets).sort();

    return <ul>
        {primaries.map((primary, indx) => {
          let inputid = `input-${parent}-${indx}`;
          let children = buckets[primary].children;
          let facet = buckets[primary].parent;
          let display = titleize(primary);
          let child_parent = parent +"::"+primary
          if (isEmpty(parent)) {
            child_parent = primary;
          }

          return <li key={primary+  "-" + indx}>
            {facet ?
              <div>
                <input id={inputid}
                  type='checkbox'
                  checked={this.props.is_checked(facet.value)}
                  onChange={(evt) => this.props.on_toggle_facet(facet.value)}/>
                <label htmlFor={inputid} >
                  <span> {display} </span>
                  <small>({facet.count})</small>
                </label>
              </div>
              :
              <label>{display}</label>}
            <FacetTree {... this.props}
                key={'children-' + indx + '-' + primary}
                parent={child_parent}
                facets={children} />
          </li>;
        })}
      </ul>;
  }
}

export default FacetTree;
