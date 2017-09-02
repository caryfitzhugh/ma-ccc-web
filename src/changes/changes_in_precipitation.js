import React, { Component } from 'react';
import ChangesLayout from './layout';
import SearchLink from '../utils/search_link';
import precipitation_changes_img from '../images/home_page/carousel/precipitation_changes.jpg';


const EffectLink = (props) => {
  return <li>
    <SearchLink params={{effects: ["MA::Changes in Precipitation::"+props.effect]}}>
      {props.effect}
    </SearchLink>
  </li>;
};

class ChangesInPrecipitationChangesPage extends Component {
  render() {
    let showcased_resources = null;
    // title: "Highlighted Resources",
    // collection_name: "MA/agriculture/highlighted_resources",

    return (<ChangesLayout
        title="Changes in Precipitation"
        active_layers=""
        image={precipitation_changes_img}
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/pcpn/ANN/MA/'
        sections={[
          {title: "Changes",
           id: "changes",
           content: <div>
           <ul>
              <EffectLink effect='drought'/>
              <EffectLink effect='soil moisture'/>
              <EffectLink effect='evaportation'/>
              <EffectLink effect='streamflow'/>
              <EffectLink effect='lake levels'/>
              <EffectLink effect='hydrology'/>
              <EffectLink effect='inland flooding'/>
              <EffectLink effect='annual precipitation'/>
              <EffectLink effect='heavy precip'/>
              <EffectLink effect='coastal flooding'/>
              <EffectLink effect='seasonal precipitation'/>
              <EffectLink effect='extreme precipitation events'/>
              <EffectLink effect='snowcover'/>
              <EffectLink effect='lake ice'/>
              <EffectLink effect='flash flooding'/>
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

export default ChangesInPrecipitationChangesPage;
