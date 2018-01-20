import React, { Component } from 'react';
import ChangesLayout from './layout';
import sea_level_rise_img from '../images/changes/sea_level_rise.jpg';
import slr_graph from '../images/changes/slr_graph.jpg';
import slr_image from '../images/changes/slr_image.jpg';
import slr_storm_surge_image from '../images/changes/slr_storm_surge_image.jpg';
import {searchURL} from '../search/utils';
import './sea_level_rise.css';

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
          {title:"From the Global to the Local",
           id: "from_global_to_local",
           content: <div>
            <p>Sea level rise is happening at a global scale, primarily as a result of rising average temperatures.  Warmer ocean temperatures are causing ocean waters to expand, while warmer temperatures on land are accelerating the melting of glaciers and polar ice sheets, further increasing the volume of ocean waters.  Changes in ocean currents are also contributing to the melting of sea ice at the poles. </p>
            <p>Scientists estimate that on average, global sea levels have risen eight inches since 1900.  This rise has made low lying coastal areas, and areas along rivers near coasts, significantly more vulnerable to coastal flooding during storms and even during daily high tides. </p>
            <p>While globally sea level rise has accelerated, the impact of sea level depends on local factors and geographies.  The local impacts from sea level rise along our coast will be shaped by regional ocean currents, wind patterns, land and shoreland elevations, geomorphic processes such as subsidence and accretion rates (sinking and accumulation of sediment), and tidal zones.</p>
            <p>Communities in coastal locations can learn what is projected for their area given different future scenarios for greenhouse gas emissions by examining the resilient MA <a href="/map">interactive map for Massachusetts</a>, and other coastal sea level rise tools.</p>
           </div>,
           subsections: []
          },
          {title: "Historic and Projected Change in Massachusetts",
           href: searchURL({facets: { climate_changes: ["ma::sea level rise::"]}}),
           id: "sea_level_rise_projected_changes",
           content: <div>
            We have data for historic and current sea levels from tide gauge stations along the Massachusetts coast.  Researchers from the Northeast Climate Science Center at UMass Amherst have developed projections to show how much and how quickly average sea levels are likely to rise at these gauges under different emissions scenarios.  There is little variability in the projections among different stations.
            <div style={{width: '80%', margin: '5% 10%'}} >
              <img alt='graph of SLR projections' style={{width: "100%"}} src={slr_graph}></img>
              <h6>Figure 1: Sea level rise projections at the Nantucket tide gauge site. Projection curves are given for the medium (RCP 4.5) and high (RCP 8.5) emissions scenarios, at multiple levels of likelihood, in feet relative to mean sea level in 2000. These projections of sea level rise do not include potential contributions from significant losses of the Antarctic ice sheet.  </h6>
            </div>

            <p>By 2100, sea level rise is projected to range between 2.2 to 4.3 feet in the Nantucket area under a high emissions scenario.  These Massachusetts sea level rise projections do not include potential contributions from significant losses of the Antarctic ice sheet.  </p>
            <img alt='img of slr map' className='col-md-6 col-sm-12' style={{float: 'right'}} src={slr_image}></img>
            <p>For low elevation coastal areas, even a rise of less than a foot can produce significant new risks for development and infrastructure such as the electrical grid and storm and wastewater systems near the shore.  Sea level rise is already causing more frequent coastal flooding in low lying areas across the world</p>

            <p>Sea level rise driven by climate change will exacerbate many other existing coastal hazards, like severe storms and storm surge, tidal inundation and salt water intrusion, which could produce billions of dollars of impacts for Massachusetts.</p>
           </div>,
           subsections: []
          },
          {title: "Learn more about Sea Level Impacts",
           id: "learn_more",
           content: <div></div>,
           subsections: [
            {name: "Coastal Flooding and Erosion",
              href: searchURL({facets: { climate_changes: ["ma::sea level rise::coastal flooding"]}}),
              id: 'coastal_flooding_and_erosion',
              content: <p>With rising sea levels, more regular flooding of developed and natural low-lying coastal areas is expected to occur due to more frequent tidal inundation.  There will be increased erosion of existing coastal landforms (e.g., beaches and dunes).  Damage to coastal engineering structures (e.g, seawalls) and more frequent flooding of coastal properties and neighborhoods may occur as tidal range and wave energy increases. </p>
            },
            {name: "Storm Surge",
              href: searchURL({facets: { climate_changes: ["ma::sea level rise::storm surge"]}}),
              id: 'storm_surge',
              content: <div>
                <p>As water levels rise, coastal storm surge events will cause inundation of larger areas, and will occur more frequently.  Storm surges can damage or destroy coastal engineering structures, critical infrastructure such as wastewater treatment plants or transportation systems,, and private property.  </p>
                <img alt='slr storm surge map' className='col-md-6 col-sm-12' style={{float: 'left'}} src={slr_storm_surge_image}></img>
                <p>Massachusetts has highways, subway systems and rail lines located close to the coast that would be impacted by storm surge</p>
                <p>Coastal storm surge can also create serious risks for public safety during severe or sudden storm events.  Other potential climate impacts, such as <a href="/changes/extreme-weather">increasing intensity of coastal storms like Nor’easters or even hurricanes</a>, could further increase the damage from future storm surges.</p>
              </div>
            },
            { name: "Salt-water Intrusion",
              href: searchURL({facets: { climate_changes: ["ma::sea level rise::storm surge"]}}),
              id: "salt_water_intrusion",
              content: <p>Salt-water intrusion refers to the increased penetration of salt-water into estuarine habitats, such as salt marshes and freshwater wetlands.  It could alter the composition of the plant species and affect the wildlife that depend on these ecosystems. Water resources (such as drinking water) could also be impacted by salt-water intrusion and by the corrosion of important infrastructure.</p>
            },
           ]
          }
        ]} >


        <p>Climate change will drive rising sea levels, and rising seas will have wide ranging impacts for communities, natural resources, and infrastructure along the 192 miles of the Commonwealth’s coastline.  The data and resources available through the Clearinghouse will allow municipal staff, elected officials, community groups, property owners and others to:</p>
        <ol>
          <li>Understand the extent of future sea level rise based on current climate projections and different greenhouse gas emission scenarios;</li>
          <li>Assess the vulnerability from sea level rise to property, infrastructure, natural resources, and local economies up and down the Commonwealth’s coast; and</li>
          <li>Take steps now to plan, prepare and build coastal resilience as cost-effectively as possible.</li>
        </ol>
      </ChangesLayout>
    );
  }
}

export default SeaLevelRiseChangesPage;
