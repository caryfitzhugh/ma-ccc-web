import React, { Component } from 'react';
import ChangesLayout from './layout';
import SearchLink from '../utils/search_link';
import sea_level_rise_img from '../images/home_page/carousel/sea_level_rise.jpg';
import titleize from '../utils/titleize';
import './sea_level_rise.css';
const ChangeLink = (props) => {
  return <SearchLink {...props} params={{facets: { climate_changes: ["ma::sea level rise::"+props.change.toLowerCase()]}}}>
    {props.children}
  </SearchLink>
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
          {title: "Learn more about Sea Level Impacts",
           id: "learn_more",
           content: <div>
            <ul>
              <li>
                <h5><ChangeLink change='coastal flooding' query='erosion'>Coastal Flooding and Erosion </ChangeLink></h5>
                <p>With rising sea levels, increased coastal flooding due to more frequent tidal inundation of low-lying areas is expected. Sea level rise will exacerbate storm effects including increased erosion of existing coastal landforms (e.g., beaches and dunes) and damage to existing or planned coastal engineering structures (e.g, seawalls) due to an increase of the tidal range and wave energy.</p>
              </li>
              <li>
                <h5><ChangeLink change='storm surge'>Storm Surge </ChangeLink></h5>
                <p>Similar to coastal flooding and erosion, relative sea level rise can have impacts during weather events by increasing the elevation of coastal storm surge due to an increase in the tidal range, wave energy, and tidal inundation. This could result in significant damage or failure of coastal engineering structures, other critical infrastructure such as public utilities, and private property. Furthermore, an increased storm surge could endanger public safety during large weather events such as Nor’easters and hurricanes.</p>
              </li>
              <li>
                <h5><ChangeLink change='salt-water intrusion'>Salt-water Intrusion </ChangeLink></h5>
                <p>Salt-water intrusion refers to an increased reach of salt-water into estuarine habitats, such as salt marshes and freshwater wetlands, and could alter the composition of the plant species and affect the wildlife that depend on these ecosystems. Water resources (such as drinking water) could also be impacted by salt-water intrusion and by the corrosion of important infrastructure.</p>
              </li>
              <li>
                <h5><ChangeLink change='ocean temperatures'>Ocean Temperatures</ChangeLink></h5>
              </li>
              <li>
                <h5><ChangeLink change='ocean acidification'>Ocean Acidification</ChangeLink></h5>
              </li>
            </ul>
          </div>,
          subsections: []
          }
        ]} >
        <p>
          Sea level rise is already causing coastal flooding and erosion in Massachusetts communities and coastal habitats. Continued sea level rise could further impact public and private infrastructure, water quality, energy systems, and public health.  Recent estimates forecast that sea levels will rise by 5 to 10 inches by 2030 and 2 to 4 feet by 2100. Sea level rise projections for Boston are shown in Table 1. These projections do not include recent modeling efforts of Antarctic ice sheet collapse, but ongoing collaboration with the UMass Amherst team will incorporate these adjustments in an upcoming updated sea level rise guidance document.
        </p>
        <p>
          As evidenced in Table 1, the projections for Boston are nearly independent of emissions scenarios <a href="#fn_1" className='footnote'>1</a> until around mid-century when they begin to significantly diverge out to 2100 based on society’s decisions related to climate mitigation. Table 1 does not include projections beyond 2100, but sea level rise will continue beyond this date, therefore longer term planning and adaptation efforts may want to consider sea level scenarios extending into the 22nd century.
        </p>
        <table className='table slr-chart'>
          <thead>
            <tr>
              <td className='blue' colSpan='2'>BOSTON</td>
              <td className='blue' >
                <label>Median</label>
                (50% percentile) <br/>
                50% Probability SLR <br/>
                exceeds
              </td>
              <td className='blue'>
                <label>Likely Range</label>
                (17th to 83rd percentiles) <br/>
                67% probability that SLR is between...
              </td>
              <td className='blue'>
                <label>99.9th</label>
                Percentile Value <br/>
                Extremely unlikely that SLR exceeds
              </td>
            </tr>
            <tr className='squeeze-down'>
              <td colSpan='2' className='blue'>
                Emissions Scenarios
              </td>
              <td > &nbsp; </td>
              <td >
                Feet (centimeters)
              </td>
              <td > &nbsp; </td>
            </tr>
            <tr className='no-wrap squeeze-up'>
              <td className='blue'> Med (RCP 4.5)</td>
              <td className='blue'> High (RCP 8.5)</td>
              <td > &nbsp; </td>
              <td>
                relative to 2000
              </td>
              <td > &nbsp; </td>
             </tr>
          </thead>
          <tbody>
            <tr className='squeeze-down'>
              <td rowSpan={2} className='blue vert-align'>2030</td>
              <td> Med </td>
              <td> 0.6ft (19cm)</td>
              <td> 0.5 - 0.8ft (14-24cm)</td>
              <td>1.2ft (37cm)</td>
            </tr>
            <tr className='squeeze-up'>
              <td> High </td>
              <td> 0.7ft (20cm)</td>
              <td> 0.4 - 0.9ft (13-26cm)</td>
              <td> 1.3ft (41cm)</td>
            </tr>

            <tr className='squeeze-down'>
              <td rowSpan={2} className='blue vert-align'>2050</td>
              <td> Med </td>
              <td> 1.1ft (33cm)</td>
              <td> 0.8 - 1.4ft (25-43cm)</td>
              <td> 2.4ft (74cm)</td>
            </tr>
            <tr className='squeeze-up'>
              <td> High </td>
              <td> 1.2ft (33cm)</td>
              <td> 0.8 - 1.5ft (25-47cm)</td>
              <td> 2.7ft (81cm)</td>
            </tr>


            <tr className='squeeze-down'>
              <td rowSpan={2} className='blue vert-align'>2070</td>
              <td> Med </td>
              <td> 1.6ft (49cm)</td>
              <td> 1.1 - 2.1ft (34-65cm)</td>
              <td> 4.5ft (138cm) </td>
            </tr>
            <tr className='squeeze-up'>
              <td> High </td>
              <td> 1.9ft (57cm) </td>
              <td> 1.2 - 2.4ft (40 - 74cm)</td>
              <td> 5.0ft (153cm)</td>
            </tr>

            <tr className='squeeze-down'>
              <td rowSpan={2} className='blue vert-align'>2100</td>
              <td> Med </td>
              <td> 2.3ft (70cm)</td>
              <td> 1.5 - 3.1ft (46-95cm)</td>
              <td> 8.2ft (250cm) </td>
            </tr>
            <tr className='squeeze-up'>
              <td> High </td>
              <td> 3.0ft (91cm) </td>
              <td> 2.0 - 4.0ft (61 - 123cm)</td>
              <td> 9.7ft (296cm)</td>
            </tr>
          </tbody>

        </table>
        <h6>Table 1 Sea Level Rise Projections for Boston</h6>
        <p>Shown here are sea level rise projections for Boston out to 2100 under medium (RCP 4.5) and high (RCP 8.5) emissions scenarios. The data are expressed in feet and centimeters relative to 2000. The projections begin to diverge around mid-century based on the differing emissions scenarios. The data shown here do not include a maximum physically plausible value, nor do they account for recent modelling of Antarctic ice sheet collapse. These data were produced by researchers from the Northeast Climate Science Center at UMass Amherst.</p>

        <p>In 2017, researchers from Northeast Climate Science Center at UMass Amherst developed downscaled projections for several tide gauge stations in Massachusetts<a href='#fn_2' className='footnote'>2</a>, which found little variability between stations.</p>
        <ol className='footnotes'>
          <li id='fn_1'> The emissions scenarios included in these projections include the representative concentration pathways (RCP) 4.5 (medium emissions scenario) and 8.5 (high emissions scenario).</li>
          <li id='fn_2'>  Massachusetts sea level rise projection locations include Boston, Buzzards Bay, Nantucket, and Woods Hole. Projections were also produced for Portsmouth, NH and Newport, RI.</li>
        </ol>
        </ChangesLayout>
    );
  }
}

export default SeaLevelRiseChangesPage;
