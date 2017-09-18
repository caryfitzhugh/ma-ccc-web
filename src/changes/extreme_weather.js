import React, { Component } from 'react';
import ChangesLayout from './layout';
import SearchLink from '../utils/search_link';
import extreme_weather_img from '../images/home_page/carousel/extreme_weather.jpg';
import titleize from '../utils/titleize';

const EffectLink = (props) => {
  return <li>
    <SearchLink params={{effects: ["ma::extreme weather::"+props.effect]}}>
      {titleize(props.effect)}
    </SearchLink>
  </li>;
};

class ExtremeWeatherChangesPage extends Component {
  render() {
    let showcased_resources = null;
    // title: "Highlighted Resources",
    // collection_name: "MA/agriculture/highlighted_resources",

    return (<ChangesLayout
        title="Extreme Weather"
        active_layers="ma_historical_extreme_precipitation,ma_projected_extreme_precipitation"
        image={extreme_weather_img}
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/pcpn_2/ANN/MA/'
        sections={[
          {title: "Changes",
           id: "changes",
           content: <div>
            <ul>
              <EffectLink effect='hurricanes'/>
              <EffectLink effect="nor'easters"/>
              <EffectLink effect='intense winter storms'/>
              <EffectLink effect='ice storms'/>
              <EffectLink effect='heavy precipitation events'/>
              <EffectLink effect='high wind'/>
              <EffectLink effect='tornadoes'/>
              <EffectLink effect='microbursts'/>
              <EffectLink effect='hail'/>
              <EffectLink effect='drought'/>
              <EffectLink effect='wildfire'/>
              <EffectLink effect='extreme heat'/>
              <EffectLink effect='extreme cold'/>
            </ul>
          </div>,
          subsections: []
          }
        ]} >

        <h4><em>Content Pending</em></h4>
        </ChangesLayout>
    );
  }
}

export default ExtremeWeatherChangesPage;
