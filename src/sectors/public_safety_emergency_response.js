import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/public_safety.jpg';
import public_safety_extreme_weather_img from '../images/sectors/public_safety_extreme_weather.jpg';
import public_safety_management_practices_img from '../images/sectors/public_safety_management_practices.jpg';
import {searchURL} from '../search/utils';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::public safety / emergency response"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}


class PublicSafetyEmergencyResponse extends Component {
  render() {
    let showcased_resources = {
      title: "Highlighted Resources",
      collection_name: "MA/public_safety_emergency_response/highlighted_resources",
      content: <div>
        <p>The <MapLink>resilient MA map</MapLink> and <DatagrapherLink>data grapher</DatagrapherLink> are two interactive and up-to-date tools that can help emergency managers assess and plan for climate impacts that could create emergency situations. Three other resources include:</p>
      </div>
    };


    return (
      <SectorDetailLayout
        title="Public Safety / Emergency Response"
        sector_name="Public Safety/Emergency Response"
        image={sector_image}
        image_credit="MBTA"
        showcased_resources={showcased_resources}
        sections={[
          {title: "Impacts",
           id: "impacts",
           content: <div>
           </div>,
              subsections: [
                {name: "Rising Temperatures",
                href: sectorSearchURL({changes:["ma::rising temperatures::"]}),
                 id: 'impacts_rising_temperatures',
                 content: <div>
                    <ul>
                      <li>Heat waves are likely to increase heat-related illnesses for the elderly, young, or ill and for people living in buildings without air conditioning</li>
                      <li>Increased demand for energy to cool buildings during hot days may trigger power outages</li>
                    </ul>
                    <h6><a href={sectorSearchURL({changes:["ma::rising temperatures::"]})}>Find more inforation </a></h6>
                  </div>
                },
              {name: "Changes in Precipitation",
               href: sectorSearchURL({changes:["ma::changes in precipitation::"]}),
               id: "impacts_changes_in_precipitation",
               content: <div>
                  <ul>
                    <li>Flooding caused by heavy downpours may damage critical infrastructure like roads, bridges, and energy facilities, disrupting transportation and utility services</li>
                    <li>More frequent intermittent droughts may create local water supply shortages with major public health impacts</li>
                  </ul>
                  <h6><a href={sectorSearchURL({changes:["ma::changes in precipitation::"]})}>Find more inforation </a></h6>
               </div>,
              },
            { name: "Extreme Weather",
              href: sectorSearchURL({changes:["ma::extreme weather::"]}),
               id: "impacts_extreme_weather",
               content: <div>
                  <div className='section-img'>
                    <img src={public_safety_extreme_weather_img}/>
                    <div className='image-credit'>
                      Gary Higgins/The Patriot Ledger
                    </div>
                  </div>
                  <ul>
                    <li>Periods of extreme heat or cold, severe blizzards, and an increase in rainfall produced by Atlantic hurricanes and tropical storms may increase public safety risks</li>
                    <li>Disruptions to key public services such as electricity, transport, schools, and health care  may become more common</li>
                  </ul>
                  <h6><a href={sectorSearchURL({changes:["ma::extreme weather::"]})}>Find more inforation </a></h6>
               </div>
              },
             { name: "Sea Level Rise",
               href: sectorSearchURL({changes:["ma::sea level rise::"]}),
               id: "impacts_sea_level_rise",
               content: <div>
                <ul>
                  <li>Gradual sea level rise combined with high tides and storms may increase the incidence of coastal flooding and erosion</li>
                  <li>Catastrophic flooding from higher seas and extreme weather like hurricanes may trigger costly and devastating disasters on a large geographic scale </li>
                </ul>
                  <h6><a href={sectorSearchURL({changes:["ma::sea level rise::"]})}>Find more inforation </a></h6>
               </div>
              },
            ]
          },
          {title: "Actions",
           id: "actions",
           subsections: [
            {name: "Planning",
              href: sectorSearchURL({actions:["ma::planning::"]}),
              id: 'actions_planning',
              content: <div>
                <ul>
                  <li>Update and revise local Hazard Mitigation Plans with the latest information about potential climate impacts</li>
                  <li>Build climate information into municipal and local plans, especially those that address emergency preparedness and risk reduction</li>
                  <li>Assess the risks of hazardous spills from more frequent and severe flooding</li>
                  <li>Update emergency management plans to account for potential climate impacts on the delivery of emergency services</li>
                </ul>
                <h6><a href={sectorSearchURL({actions:["ma::planning::"]})}>Find more inforation </a></h6>
              </div>
            },
            {name: "Management Practices",
             href: sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]}),
             id: "actions_management_practices",
             content: <div>
              <div className='section-img'>
                <img src={public_safety_management_practices_img}/>
              </div>
                <ul>
                  <li>Assess emergency equipment, supplies, evacuation facilities, and shelters to ensure they are adequate for emergencies exacerbated by projected climate change</li>
                  <li>Forecast the increased demand on local public works and emergency response staff due to more extreme weather events, and secure support mechanisms</li>
                  <li>Conduct outreach to increase awareness of the cost savings and public safety benefits of hazard mitigation and preparedness planning</li>
                  <li>Increase emergency management capabilities through cooperation and resource sharing with the business community, forestry sector, and the tourism industry</li>
                  <li>Increase emergency preparedness for winter weather accidents</li>
                  <li>Maintain a regional database of available equipment and parts to facilitate sharing during emergencies</li>
                  <li>Practice the execution of communities‘ emergency action plans with local organizations that can provide support</li>
                </ul>
                <h6><a href={sectorSearchURL({changes:["ma::implementation action/direct action on target::management and behavior"]})}>Find more inforation </a></h6>
              </div>
            },
            { name: "Research / Monitoring",
              href: sectorSearchURL({actions:["ma::outreach/education::research and monitoring"]}),
             id: "actions_research_monitoring",
             content: <div>
                <ul>
                    <li>Identify MEMA databases and maps that should be updated with information from climate change projections to facilitate response to emergency situations.</li>
                </ul>
                <h6><a href={sectorSearchURL({actions:["ma::outreach/education::research and monitoring"]})}>Find more inforation </a></h6>
              </div>
            },
            {name: "Funding",
             href: sectorSearchURL({actions: ["ma::implementation action/direct action on target::financing"]}),
             id: 'actions_funding',
             content: <div>
                <ul>
                  <li><a href='http://www.massclimatechange.org/resources/resource::2178/learn-about-memas-emergency-management-grant-programs'>
                      State funded grant programs to help communities improve emergency management
                    </a>
                  </li>
                  <li>
                    <a href='http://www.massclimatechange.org/resources/resource::2093/fema-hazard-mitigation-assistance'>
                      FEMA Hazard Mitigation Assistance grant programs
                    </a>
                  </li>
              </ul>
              <h6><a href={sectorSearchURL({actions:["ma::implementation action/direct action on target::financing"]})}>Find more inforation </a></h6>
            </div>
            }
           ]
          },
          {title: "Looking for help?",
           id:"look4help",
           subsections: [],
           content: <ul>
            <li><a href='https://www.mass.gov/orgs/massachusetts-emergency-management-agency'>Massachusetts Emergency Management Agency (MEMA)</a></li>
          </ul>
          }]}
        >
        <p> Governments have a special responsibility to keep people safe by reducing risks from disasters and being at-the-ready to respond when emergencies do occur.</p>

        <p>Emergency management is the work that governments do to coordinate and integrate activities and investments needed to mitigate against, prepare for, respond to, and recover from threatened or actual natural disasters, acts of terrorism, or other man-made disasters.</p>

        <p>Emergency management that is proactive, responsive, and efficient will become critically important as the Commonwealth’s climate changes, because natural disasters and emergencies are likely to become more frequent.  Under Governor Baker’s Executive Order 569 on Climate Change, Massachusetts’ is developing the nation’s first-ever integrated <em>State Hazard Mitigation and Climate Adaptation Plan</em></p>

        </SectorDetailLayout>
    );
  }
}

export default PublicSafetyEmergencyResponse;
