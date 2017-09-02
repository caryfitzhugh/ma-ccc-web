import React, { Component } from 'react';
import ChangesLayout from './layout';
import rising_temperatures_img from '../images/home_page/carousel/rising_temperatures.jpg';
import SearchLink from '../utils/search_link';

const EffectLink = (props) => {
  return <li>
    <SearchLink params={{effects: ["MA::Rising Temperature::"+props.effect]}}>
      {props.effect}
    </SearchLink>
  </li>;
};

class RisingTemperatureChangesPage extends Component {
  render() {
    let showcased_resources = null;
    // title: "Highlighted Resources",
    // collection_name: "MA/agriculture/highlighted_resources",

    return (<ChangesLayout
        title="Rising Temperatures"
        active_layers=""
        image={rising_temperatures_img}
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/maxt/ANN/MA/'
        sections={[
          {title: "Changes",
           id: "changes",
           content: <div>
            <ul>
              <EffectLink effect='cloud cover'/>
              <EffectLink effect='cloud distribution'/>
              <EffectLink effect='soil moisture'/>
              <EffectLink effect='evaporation'/>
              <EffectLink effect='snow cover'/>
              <EffectLink effect='ice cover'/>
              <EffectLink effect='snowpack'/>
              <EffectLink effect='snowfall'/>
              <EffectLink effect='annual temperatures'/>
              <EffectLink effect='seasonal temperatures'/>
              <EffectLink effect='extreme cold events'/>
              <EffectLink effect='extreme heat events'/>
              <EffectLink effect='growing season length'/>
              <EffectLink effect='peak winds'/>
              <EffectLink effect='Wildfire'/>
              <EffectLink effect='in-stream temperature'/>
              <EffectLink effect='ocean temperature'/>
              <EffectLink effect='lake and pond temperature'/>
              <EffectLink effect='snowmelt'/>
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

export default RisingTemperatureChangesPage;
