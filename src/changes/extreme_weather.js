import React, { Component } from 'react';
import ChangesLayout from './layout';
import {Link} from 'react-router-dom';
import extreme_weather_img from '../images/home_page/carousel/extreme_weather.jpg';
import {Footnote} from '../utils/footnotes';
import {searchURL} from '../search/utils';


class ExtremeWeatherChangesPage extends Component {
  render() {
    let showcased_resources = null;

    return (<ChangesLayout
        title="Extreme Weather"
        active_layers="ma_historical_extreme_precipitation,ma_projected_extreme_precipitation"
        image={extreme_weather_img}
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/pcpn_2/ANN/MA/'
        footnotes={[
          <span>Climate Science Special Report, Fourth National Climate Assessment (NCA4), Volume prepared by the <a href='https://science2017.globalchange.gov/chapter/front-matter-about/'>U.S. Global Change Research Program (USGCRP) </a></span>
        ]}
        sections={[
          {title: "Historic and Projected Changes in Massachusetts",
           id: "historic_and_projected_changes_in_ma",
           content: <div>
            <p>Massachusetts will be vulnerable to the impacts of many different kind of extreme weather as the climate changes.</p>
          </div>,
          subsections: [
              { name: "Blizzards",
                href: searchURL({facets:{climate_changes:['ma::extreme_weather::'], query: "blizzards"}}),
                id:"changes_blizzards",
                content: <div>
                  <p>Heavy blizzards are among the most costly and disruptive weather events for Massachusetts communities. There have been more than five just since 2011, and two blizzards during the winter of 2015 each brought more two feet of snow to coastal communities in twenty-four hours. </p>
                  <p>While the frequency of future blizzards is extremely hard to project, we know that warmer air currents moving north over the Atlantic Ocean will hold more moisture than in the past. When these fronts collide with colder air systems from the north, Massachusetts and other northeastern states are likely to see very intense blizzard events with high levels of snow.</p>
                  <p>Electrical power outages caused by heavy snow or ice can affect thousands and sometimes hundreds of thousands of people. The blizzard of 2013 left nearly 400,000 Massachusetts residents without power. Power outages that last days or weeks can create serious risks for people who can’t easily relocate outside the outage area until power is restored, as well as challenges for critical facilities like hospitals and emergency services.</p>
                  <p>Work closures, disruption in the movement of goods and critical supplies, and delayed commutes all deliver hard knocks to the Massachusetts economy when severe blizzards hit. Flooding caused by the melting of large amounts of accumulated snow and ice can also cause damage to infrastructure like roads, bridges, and private property. </p>
                </div>
              },
              { name: "Nor'easters and Hurricanes",
                href: searchURL({facets:{climate_changes:['ma::extreme weather::hurricanes',
                                                          "ma::extreme weather::nor'easters"]}}),
                id:"changes_hurricaines",
                content: <div>
                  <p>A 2017 U.S. Climate Science Special Report noted that there has been an upward trend in North Atlantic hurricane activity since 1970<Footnote num='1'/>.  The report forecasts that future hurricanes formed in the North Atlantic will drop more rain and may have higher wind speeds. This is because a warmer atmosphere will hold more water, and hurricanes are efficient at wringing water out of the atmosphere and dumping it on land. </p>
                  <p>Scientists are also studying whether nor’easters along the Atlantic coast are increasing in frequency and intensity, and again there is some evidence of a growing trend. In the future, nor’easter events may become more concentrated in the coldest winter months when atmospheric temperatures are still low enough to result in snowfall rather than rain. </p>
                  <p>As sea level rise occurs along the coast of Massachusetts, the impacts of extreme storms like nor’easters will be even greater. Storms surges will reach larger areas of coastal land and development, and they will produce more damage.</p>
                  <p>When extreme storms like Tropical Storm Irene travel over inland areas, they may release large quantities of precipitation and cause rivers to overtop their banks. Irene dumped more than 10 inches of rain in Western Massachusetts. Buildings floated downriver in Shelburne Falls, flooded highways were closed, and 400,000 utility customers lost power. </p>
                  <h6> Example of extreme weather events in Massachusetts receiving federal disaster declarations since 2010</h6>
                  <table className='table chart left-centered'>
                    <thead>
                      <tr className='blue'>
                        <th> Event </th>
                        <th>Noteworthy Impacts</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>March 12-April 26, 2010</td>
                        <td>
                          A series of severe storms and flooding events throughout Massachusetts<br/>
                          <ul>
                            <li>Widespread rainfall, causing small streams to rise above their flood stages</li>
                            <li>Over $145 million received in individual and public assistance</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td> January 11-12, 2011</td>
                        <td>
                          Nor’easter coastal storm
                          <br/>
                          <ul>
                            <li>Two feet of snow across Massachusetts in a 24-hour period</li>
                            <li>Power outages to 100,000 homes statewide</li>
                            <li>Wind gusts between 49 and 57 mph recorded in several Cape Cod communities</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          August 27-29, 2011
                          <br/>
                          <em>“Tropical Storm Irene”</em>
                        </td>
                        <td>
                          Tropical storm producing heavy rain in Western Massachusetts
                          <br/>
                          <ul>
                            <li>Average of 10 inches of rain in Western Mass</li>
                            <li>Power outages peaked at more than 500,000</li>
                            <li>Local evacuations in a number of towns</li>
                            <li>Flooding carried buildings down river in Shelburne Falls</li>
                            <li>Partial shutdown of Interstate 91 and other local highways due to  river and stream flooding</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td> October 29-30, 2011</td>
                        <td>
                          Nor’easter bringing heavy snow to portions of southern New England
                          <br/>
                          <ul>
                            <li>Snowfall accumulations of one to two feet across central and western Massachusetts</li>
                            <li>Peak power outages to approximately 665,000 homes</li>
                            <li>Over 2,000 residents relocated to 77 shelters</li>
                            <li>Six fatalities occurred during and in the aftermath of the storm</li>
                          </ul>
                        </td>
                     </tr>
                     <tr>
                       <td>
                         February 8-10, 2013
                         <br/>
                         Blizzard of 2013
                         <br/>
                         <em>“Winter Storm Nemo”</em>
                       </td>
                       <td>
                         Blizzard producing widespread heavy snowfall throughout the state
                         <br/>
                         <ul>
                           <li>Widespread snowfall greater than two feet, with snowfall rates of one to two inches per hour at time</li>
                           <li>Nearly 400,000 customers lost powe</li>
                           <li>Over $43 million received in public assistance</li>
                         </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        January 26-29, 2015
                        <br/>
                        <em>“Winter Storm Juno”</em>
                      </td>
                      <td>
                        Winter storm breaking daily snowfall records throughout Massachusetts
                        <br/>
                        <ul>
                          <li>Some of the highest snowfall totals exceeded 30 inches</li>
                          <li>Significant coastal flooding and shoreline erosion, particularly on the South Coast</li>
                          <li>Two fatalities</li>
                          <li>450 individuals sought accommodation at 40 shelters</li>
                          <li>Travel ban was enacted and Logan International Airport temporarily closed</li>
                        </ul>
                      </td>
                    </tr>
                   </tbody>
                  </table>
                </div>
              },
            { name: "More Intense and Frequent Thunderstorms and Downpours",
              href: searchURL({facets: { climate_changes: ['ma::extreme weather::heavy precipitation events']}}),
              id:"more_intense_and_frequent_thunderstorms",
              content: <div>
                <p>The Northeast has already experienced a larger increase in the intensity of rainfall events than any other region in the United States in the last fifty years, and <Link to='/changes/changes-in-precipitation'>this trend is expected to continue</Link>.</p>
                <p>Damaging inland and coastal flooding is likely to occur more frequently in the future. Since historic patterns of development have concentrated our downtown areas along the rivers and streams of Massachusetts’ 28 major watersheds, many property owners, businesses, and public facilities are at risk from this climate trend.</p>
                <p>Nearly 58,000 properties in Massachusetts carry national flood insurance policies, but many structures in hazardous areas are not insured, and insurance rarely fully compensates home and business owners after severe flood damage.</p>
              </div>
            },
            { name: "Temperature Extremes",
              href: searchURL({facets: { climate_changes: ['ma::extreme weather::extreme heat',
                                                           'ma::extreme weather::extreme cold']}}),
              id: "temp_extremes",
              content: <div>
                <p>The Commonwealth will experience more frequent heat waves in the future, and these heat waves can put vulnerable Massachusetts residents in danger (LINK to ‘heat and Public Health” section of Rising Temps). Sensitive and disadvantaged populations are disproportionally affected by higher temperatures.</p>
                <p>Climate change may also contribute to the frequency of brief periods of extreme cold when temperatures drop well below normal. In recent years, extremely low temperatures have been triggered by shifts in the pathways of atmospheric air currents that pass over Arctic northern regions. The extended cold snap of 2015 was one such period.</p>
                <p>Extreme cold can make it challenging for people to stay warm and safe, and it can result in health emergencies for people without adequate shelter, people who live in homes that are poorly insulated, and people who become stranded due to poor travel conditions.</p>
              </div>
            }
          ]
          },
          {title: "Impacts from Extreme Weather",
           id: "impacts_from_extreme_weather",
           content: <div>
          </div>,
          subsections: [
            { name: 'Public Safety',
              href: searchURL({facets: {
                sectors: ["ma::public safety / emergency response"],
                climate_changes: ['ma::extreme weather::']}}),
              id: "public_safety",
              content: <div>
                <p>Public safety risks from growing storm intensity should be taken very seriously. Whether the risks are from highway accidents, home flooding, or downed trees and power lines, extreme storms are dangerous. A single blizzard in 1978 claimed 73 lives in Massachusetts and 26 in Rhode Island.</p>
              </div>
            },
            { name: 'Economic Impacts',
              href: searchURL({facets: {
                sectors: ["ma::economy"],
                climate_changes: ['ma::extreme weather::']}}),
              id: "economic_impacts",
              content: <div>
                <p>Extreme storms can wreak havoc on the Massachusetts economy. The string of storms in February 2015 cost local governments and the Commonwealth more than $35 million. A full shutdown of the Massachusetts economy costs approximately $265 million per day, mostly in the form of lost wages. </p>
              </div>
            },
            { name: 'Property and Infrastructure',
              href: searchURL({facets: {
                sectors: ["ma::infrastructure"],
                climate_changes: ['ma::extreme weather::']}}),
              id: "infrastructure",
              content: <div>
                <p>In addition to the human costs that extreme storms deliver when they permanently or temporarily displace people, the repair and reconstruction costs after storm damage can be enormous for homeowners and businesses. When bridges and culverts have been washed away, roads damaged, or coastal sea walls compromised, municipal and state agencies must secure the resources for expensive recovery projects in limited municipal budgets and from federal disaster grant programs that are increasingly over-subscribed. Electrical grid, power plants and wastewater infrastructure repair costs are all expected to increase in the future.</p>
              </div>
            },
            { name: "Natural Resources",
              href: searchURL({facets: {
                sectors: ["ma::natural resources / habitats"],
                climate_changes: ['ma::extreme weather::']}}),
              id: "natural_resources",
              content: <div>
                <p>The damage to unique ecosystems and land forms after an extreme nor’easter doesn’t get nearly the media attention as damage to our built environment, but it can be very significant. For example, recent nor’easters have caused catastrophic erosion of dunes, salt marshes, and other coastal habitats up and down the coast, while severe storms like Hurricane Irene have re-shaped river courses and led to significant bank erosion throughout Western Massachusetts.</p>
                <p>These land forms support important habitats and species, and are also important for protecting communities against storm surge and flooding.</p>
              </div>
            }
          ]
          }
        ]} >

        <p>Climate change is expected to increase extreme weather events across the globe and right here in Massachusetts. There is strong evidence that storms—from heavy downpours and blizzards to tropical cyclones and hurricanes—are becoming more intense and damaging and can lead to devastating impacts for residents across the state. </p>

        <p>Climate change leads to extreme weather because of warmer air and ocean temperatures and changing air currents. Warmer air leads to more evaporation from large water bodies and holds more moisture, so when clouds release their precipitation, there is more of it. In addition, changes in atmospheric air currents like jet streams and ocean currents can cause changes in the intensity and duration of stormy weather.</p>

        <p>Massachusetts has experienced a large number of damaging weather events in recent decades, from Tropical Storm Irene in 2011 to the unprecedented blizzards and nor’easters of 2015. While it is difficult to connect one storm to a changing climate, scientists point to the northeastern United States as one of the regions that is most vulnerable to an increase in extreme weather driven by climate change.</p>

        <p>Preparing now for an upward trend in extreme weather is one of the smartest investments Massachusetts towns and cities can make. The Clearinghouse includes <Link to="/sectors/local-government">resources that can help local governments prepare</Link> by reducing risks to life and property, investing in resilient infrastructure and conservation of natural resources, and enhancing emergency preparedness.</p>

        </ChangesLayout>
    );
  }
}

export default ExtremeWeatherChangesPage;
