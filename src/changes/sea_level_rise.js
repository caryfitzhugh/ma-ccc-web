import React, { Component } from 'react';
import ChangesLayout from './layout';
import sea_level_rise_img from '../images/changes/sea_level_rise.jpg';
import slr_graph from '../images/changes/slr_graph.png';
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
              <p>We have data at several established tide gauge stations with long-term records for historic and current sea level trends along the Massachusetts coast. Researchers from the Northeast Climate Adaptation Science Center at UMass Amherst have developed probabilistic projections to show how much and how quickly future mean sea level is likely to rise at these gauges under two future atmospheric greenhouse gas emission scenarios (referred to as representative concentration pathways [RCP]). There is little variability in the projections among different stations.</p>

              <table className='table chart t-c' style={{textAlign: "center"}}>
                  <thead>
                    <tr className='blue'>
                      <th colSpan='6'> <h5>Relative mean sea level (feet NAVD88) for Woods Hole, MA</h5> </th>
                    </tr>
                    <tr className='grey'>
                      <th> Scenario </th>
                      <th> Probabilistic Projections </th>
                      <th> 2030 </th>
                      <th> 2050 </th>
                      <th> 2070 </th>
                      <th> 2100 </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='grey'> Intermediate </td>
                      <td> Unlikely to exceed (83% probability) given a high emissions pathway (RCP 8.5)</td>
                      <td> 0.6 </td>
                      <td> 1.3 </td>
                      <td> 2.3 </td>
                      <td> 4.0 </td>
                    </tr>
                    <tr>
                      <td className='grey'> Intermediate - High</td>
                      <td> Extremely unlikely to exceed (95% probability) given a high emissions pathway (RCP 8.5)</td>
                      <td> 0.8 </td>
                      <td> 1.7 </td>
                      <td> 2.9 </td>
                      <td> 5.1 </td>
                    </tr>
                    <tr>
                      <td className='grey'> High</td>
                      <td> Extremely unlikely to exceed (99.5% probability) given a high emissions pathway (RCP 8.5)</td>
                      <td> 1.1 </td>
                      <td> 2.4 </td>
                      <td> 4.2 </td>
                      <td> 7.7 </td>
                    </tr>
                    <tr>
                      <td className='grey'> Extreme <br/> (Maximum physically plausible)</td>
                      <td> Exceptionally unlikely to exceed (99.9% probability) given a high emissions pathway (RCP 8.5)</td>
                      <td> 1.3 </td>
                      <td> 3.1 </td>
                      <td> 5.4 </td>
                      <td> 10.3 </td>
                    </tr>
                  </tbody>
              </table>

              <div style={{width: '100%', margin: '5% 0%'}} >
                <img alt='graph of SLR projections' style={{width: "100%"}} src={slr_graph}></img>
                <h6 className='chart-subtitle'>Relative (or local) mean sea level projections for the Woods Hole, MA tide station based on four National Climate Assessment global scenarios with associated probabilistic model outputs from the Northeast Adaptation Climate Science Center. Each of the scenarios—Intermediate, Intermediate-High, High, and Extreme—is cross-walked with two to three probabilistic model outputs. Modeling considered two future concentrations of greenhouse gas emissions (referred to as representative concentration pathways [RCP]) and two methods of accounting for Antarctic ice sheet contributions to sea level rise. A 19-year reference time period for sea level (tidal epoch) centered on the year 2000 was used to minimize biases caused by tidal, seasonal, and inter-annual climate variability. Sea level projections for the Woods Hole tide station are referenced to the North American Vertical Datum of 1988 (NAVD88).</h6>
              </div>

              <p>By 2100, mean sea level could reach 4.0 to 10.3 feet (NAVD88) in the Woods Hole area given a high emissions pathway. </p>
              <p>For low elevation coastal areas, even a rise of a foot can produce new risks for development and infrastructure such as electrical, stormwater and wastewater systems. Sea level rise is already causing more frequent coastal flooding in low lying areas across the coast of Massachusetts.</p>
              <p>Sea level rise driven by climate change will exacerbate many other existing coastal hazards, like severe storms and storm surge, tidal inundation and salt water intrusion, which could produce billions of dollars of impacts for Massachusetts.</p>
           </div>,
           subsections: []
          },
          {title: "Learn more about Sea Level Impacts",
           id: "learn_more",
           content: <div></div>,
           subsections: [
            {name: "Coastal Flooding and Erosion",
              href: searchURL({facets: { sectors: ["ma::coastal zones"]}, query: "coastal flooding erosion"}),
              id: 'coastal_flooding_and_erosion',
              content: <p>With rising sea levels, more regular flooding of developed and natural low-lying coastal areas is expected to occur due to more frequent tidal inundation.  There will be increased erosion of existing coastal landforms (e.g., beaches and dunes).  Damage to coastal engineering structures (e.g, seawalls) and more frequent flooding of coastal properties and neighborhoods may occur as tidal range and wave energy increases. </p>
            },
            {name: "Storm Surge",
              href: searchURL({query: "'storm surge'", facets: { climate_changes: ["ma::extreme weather::storm surge", "ma::sea level rise::storm surge"]}}),
              id: 'storm_surge',
              content: <div>
                <p>As water levels rise, coastal storm surge events will cause inundation of larger areas, and will occur more frequently.  Storm surges can damage or destroy coastal engineering structures, critical infrastructure such as wastewater treatment plants or transportation systems,, and private property.  </p>
                <img alt='slr storm surge map' className='col-md-6 col-sm-12' style={{float: 'left'}} src={slr_storm_surge_image}></img>
                <p>Massachusetts has highways, subway systems and rail lines located close to the coast that would be impacted by storm surge</p>
                <p>Coastal storm surge can also create serious risks for public safety during severe or sudden storm events.  Other potential climate impacts, such as <a href="/changes/extreme-weather">increasing intensity of coastal storms like Nor’easters or even hurricanes</a>, could further increase the damage from future storm surges.</p>
              </div>
            },
            { name: "Salt-water Intrusion",
              href: searchURL({query: "saltwater intrusion salt", facets: { sectors: ["ma::coastal zones"]}}),
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
