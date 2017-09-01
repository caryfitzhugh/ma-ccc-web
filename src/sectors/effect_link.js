import React, { Component } from 'react';
import SearchLink from './../utils/search_link';

class EffectLink extends Component {
  render() {
    let params =  {sectors: ["MA::"+this.props.sector],
                   effects: ["MA::"+this.props.effect]};
    return ( <SearchLink className={this.props.className}
              params={params}>
              {this.props.effect.split("::")[1]}
              </SearchLink>);
  }
}

export default EffectLink;
