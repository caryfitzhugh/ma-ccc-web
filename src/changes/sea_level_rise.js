import React, { Component } from 'react';
import ChangesLayout from './layout';
import SearchLink from '../utils/search_link';
import sea_level_rise_img from '../images/home_page/carousel/sea_level_rise.jpg';

const EffectLink = (props) => {
  return <li>
    <SearchLink params={{effects: ["MA::Sea Level Rise::"+props.effect]}}>
      {props.effect}
    </SearchLink>
  </li>;
};

class SeaLevelRiseChangesPage extends Component {
  render() {
    let showcased_resources = null;
    // title: "Highlighted Resources",
    // collection_name: "MA/agriculture/highlighted_resources",

    return (<ChangesLayout
        title="Sea Level Rise"
        active_layers="noaa_slr"
        image={sea_level_rise_img}
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/avgt/ANN/MA/'
        sections={[
          {title: "Changes",
           id: "changes",
           content: <div>
            <ul>
              <EffectLink effect='storm surge'/>
              <EffectLink effect='ocean temperatures'/>
              <EffectLink effect='ocean acidification'/>
              <EffectLink effect='coastal flooding'/>
              <EffectLink effect='salt-water intrusion'/>
            </ul>
          </div>,
          subsections: []
          }
        ]} >

          <em>Content Waiting on UMASS </em>
        </ChangesLayout>
    );
  }
}

export default SeaLevelRiseChangesPage;
