import React, { Component } from 'react';
import ChangesLayout from './layout';
import SearchLink from '../utils/search_link';
import precipitation_changes_img from '../images/home_page/carousel/precipitation_changes.jpg';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';
import {Footnote} from '../utils/footnotes';

class ChangesInPrecipitationChangesPage extends Component {
  render() {
    let showcased_resources = null;
    // title: "Highlighted Resources",
    // collection_name: "MA/agriculture/highlighted_resources",

    return (<ChangesLayout
        title="Changes in Precipitation"
        active_layers="ma_historical_precipitation,ma_historical_consecutive_dry_days"
        image={precipitation_changes_img}
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/pcpn/ANN/MA/'
        footnotes={[
          <span>2011 Report</span>,
          <span>Horton, R., G. Yohe, W. Easterling, R. Kates, M. Ruth, E. Sussman, A. Whelchel, D. Wolfe, and F. Lipschultz, 2014: Ch. 16: Northeast. Climate Change Impacts in the United States: The Third National Climate Assessment, J. M. Melillo, Terese (T.C.) Richmond, and G. W. Yohe, Eds., U.S. Global Change Research Program, 16-1-nn.</span>
        ]}

        sections={[
          {title: "Historic and Projected Changes in Massachusetts",
           id: "historic_and_projected_changes",
           content: <div>
           <p>Scientists can use records of rainfall amounts collected at gauges around Massachusetts to see how precipitation has changed in recent decades. Future precipitation patterns are more challenging to project than rising temperatures, but scientists are finding better methods to provide communities with information on the range of future conditions to expect, both annually and within the seasons.</p>

           <table className='table chart t-c' style={{textAlign: "center"}}>
              <thead>
                <tr className='blue'>
                  <th colSpan='2'> <h5>Climate Indicator</h5> </th>
                  <th> <h4>Observed Value</h4>1971-2000 Average</th>
                  <th> <h4>Mid-Century</h4> Projected Change in 2050s</th>
                  <th> <h4>End of Century</h4>Projected Change in 2090s</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="3" className='grey vert-align' > <strong>Days with Precipitation <br/> &gt; 1"</strong></td>
                  <td>Annual</td>
                  <td> 7 days </td>
                  <td> Increase by 10-42%<br/>8-10 more days per year</td>
                  <td> Increase by 15-55%<br/>8-11 more days per year</td>
                </tr>
                <tr>
                  <td>Winter</td>
                  <td> 2 days </td>
                  <td> Increase by 10-69%<br/>2-3 more days per year</td>
                  <td> Increase by 25-109%<br/>2-3 more days per year</td>
                </tr>
                <tr>
                  <td>Spring</td>
                  <td> 2 days </td>
                  <td> Increase by 2-46%<br/>2 more days per year</td>
                  <td> Increase by 11-82%<br/>2-3 more days per year</td>
                </tr>

                <tr>
                  <td rowSpan='2' className='vert-align grey'><strong>Total Precipitation</strong></td>
                  <td>Annual</td>
                  <td>47 inches</td>
                  <td>Increase by 2-13% <br/>Increase of 1 - 6 inches</td>
                  <td>Increase by 3-16% <br/>Increase of 1.2 - 7.3 inches</td>
                </tr>
                <tr>
                  <td>Winter</td>
                  <td>11.2 inches</td>
                  <td>Increase by 1-21% <br/> Increase of 0.1 - 2.4 inches</td>
                  <td>Increase by 4-35% <br/> Increase of 0.4 - 3.9 inches</td>
                </tr>

                <tr>
                  <td rowSpan='2' className='vert-align grey'><strong>Consecutive Dry Days</strong></td>
                  <td>Summer</td>
                  <td>12 days</td>
                  <td>Variable (-1 - +2 days)</td>
                  <td>Variable (-1 - +3 days)</td>
                </tr>
                <tr>
                  <td>Fall</td>
                  <td>12 days</td>
                  <td>Increase by 0 - 3 days</td>
                  <td>Increase by 0 - 3 days</td>
                </tr>
              </tbody>
           </table>
           <h6 style={{textAlign: 'center', marginBottom: '20px'}}> Projected changes in precipitation variables by the middle and end of century based on climate models and the medium and high pathways of future greenhouse gas emissions.</h6>
          </div>,
          subsections: []
          },
          {title: <SearchLink params={{query:'annual precipitation'}}>More Rainfall</SearchLink>,
           id: "more_rainfall",
           content: <div>
            <p>Total average annual precipitation across the Northeastern states has increased by approximately 10 percent<Footnote num='1'/> in the last fifty years.</p>

            <p>An analysis completed by the Massachusetts Water Resources Authority shows that except in the Cape Cod region, the most recent 30-year normal precipitation for Massachusetts is the highest it has been since scientists began collecting records.</p>

            <p>More total rainfall can have an impact on the frequency of minor but disruptive flooding events, especially in areas where stormwater infrastructure has not been adequately sized to accommodate higher levels.  Rainfall is expected to increase in spring and winter months in particular, with increasing consecutive dry days in summer and fall.  Increased total rainfall will also affect agriculture, forestry and natural ecosystems.</p>
            </div>,
            subsections: []
          },
          {title: <SearchLink params={{query:'heavy precipitation events microbursts'}}>More Intense and More Frequent Downpours</SearchLink>,
           id: "more_frequent_downpours",
           content: <div>
              <p>Of all the regions in the United States, the Northeast has seen the most dramatic increase in the intensity of rainfall events. The U.S. National Climate Assessment<Footnote num='2'/> reports that between 1958 and 2010, the Northeast saw more than a 70% increase in the amount of precipitation falling in very heavy events (defined as the heaviest 1% of all daily events).</p>
              <p>More intense downpours often lead to inland flooding as soils become saturated and stop absorbing more water, river flows rise, and urban stormwater systems become overwhelmed.  Flooding may occur as a result of heavy rainfall, snowmelt or coastal flooding associated with high wind and wave action, but precipitation is the strongest driver of flooding in Massachusetts.  Winter flooding is also common in the state, particularly when the ground is frozen.</p>
              <p>The Commonwealth has experienced 22 flood-related disaster declaration occurrences from 1954 to 2017 with many of these falling in winter or early spring or during recent hurricanes.</p>
              <p>Climate projections for Massachusetts, developed by the University of Massachusetts, suggest that the frequency of high-intensity rainfall events will trend upward, and the result will be an increased risk of flooding.</p>
              <p>Specifically, the annual frequency of downpours releasing more than two inches of rain per day in Massachusetts may climb from less than 1 day per year to approximately 0.9-1.5 days by 2100.  Events which release over one inch during a day could climb to as high as 8-11 days per year by 2100.  A single intense downpour can cause flooding and widespread damage to property and critical infrastructure.  The coast will experience the greatest increase in high-intensity rainfall days, but some level of increase will occur in every area of Massachusetts.</p>
            </div>,
            subsections: []
          },
          {title: <SearchLink params={{query:'snowfall snow cover'}}>Less Winter Snow</SearchLink>,
           id: "less_winter_snow",
           content: <div>
             <p>Climate projections for Massachusetts indicate that in future decades, winter precipitation could increase annually by as much as 0.4-3.9 inches (an increase of 4-35%), but by the end of the century most of this precipitation is likely to fall as rain instead of snow.  There are many human and environmental impacts that could result from this change including reduced snow cover for winter recreation and tourism, less spring snow melt to replenish aquifers and lower spring river flows for aquatic ecosystems.</p>
            </div>,
            subsections: []
          },
          {title: "More Impacts from Changing Precipitation",
           id: "more_impacts",
           content: <div>
            </div>,
            subsections: [
              { name: <SearchLink params={{query:'drought'}}>Episodic Droughts</SearchLink>,
                id:"more_impacts_epsiodic_droughts",
                content: <div>
                  <p>A small projected decrease in average summer precipitation in Massachusetts could combine with higher temperatures to increase the frequency of episodic droughts, like the one experienced across the Commonwealth in the summer of 2016.  </p>
                  <p>Droughts will create challenges for local water supply by reducing surface water storage and the recharge of groundwater supplies, including private wells.  More frequent droughts could also exacerbate the impacts of flood events by damaging vegetation that could otherwise help mitigate flooding impacts.  Droughts may also weaken tree root systems, making them more susceptible to toppling during high wind events.</p>
                </div>
              },
              { name: <SearchLink params={{query:'natural resources annual precipitation'}}>Impacts on flora and fauna</SearchLink>,
                id:"more_impacts_flora_n_fauna",
                content: <div>
                  <p>Changes in precipitation and temperature combine to create new stresses for Massachusetts’ unique ecosystems.  For example, intense rainfall in urbanized areas can cause pollutants on roads and parking lots to get washed into nearby rivers and lakes, reducing habitat quality.  As rainfall and snowfall patterns change, certain habitats and species that have specific physiological requirements may be affected.</p>
                </div>
              },
              { name: <SearchLink params={{query:'agriculture tourism precipitation'}}>Agriculture and Tourism</SearchLink>,
                id:"more_impacts_ag_and_tourism",
                content: <div>
                  <p>Farmers in the Northeast are already experiencing consequences from changing precipitation.   In addition to direct crop damage from intense rainfall, wetter springs can delay planting for corn and vegetables or reduce yields.  </p>
                </div>
              },
              ]
          }
        ]} >

        <p> Changes in the amount, frequency, and timing of precipitation—including both rainfall and snowfall—are occurring across the globe as temperatures rise, and other climate patterns shift in response. </p>

        <p>The Commonwealth receives approximately 48 inches of rain per year on average, with average monthly rainfall between 3 and 4 inches for all regions of the state.  These precipitation patterns are changing and the changes are likely to become more pronounced in the years ahead.  </p>

        <p>We can expect to see more intense spring downpours, drier summers and more intermittent droughts, increased inland and coastal flooding, diminishing snowfall and higher precipitation in winter and spring months.  Preparing now for these changes will help reduce a wide range of risks to Massachusetts cities and towns such as the risk of flood damage, or declining winter tourism.</p>

        <p>Precipitation changes will vary from one part of the state to another due to factors like topography and proximity to the coast.  The <MapLink>Clearinghouse Map</MapLink>  and <DatagrapherLink>Data Grapher</DatagrapherLink> can help local governments examine precipitation trends in their area, and identify actions to build their long-term resilience to the changes ahead.</p>






        </ChangesLayout>
    );
  }
}

export default ChangesInPrecipitationChangesPage;
