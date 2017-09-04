import React, { Component } from 'react';
import SearchLink from './../utils/search_link';

class EffectLink extends Component {
  render() {
    let params =  {}
    if (this.props.sector) {
      params.sectors = ["ma::"+this.props.sector]
    }
    if (this.props.effect) {
      params.effects = ["ma::"+this.props.effect]
    }
    return ( <SearchLink className={this.props.className}
              params={params}>
              {this.props.effect.split("::")[1]}
              </SearchLink>);
  }
}

export default EffectLink;
