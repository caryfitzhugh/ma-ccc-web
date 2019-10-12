import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/public_safety.jpg';
import public_safety_extreme_weather_img from '../images/sectors/public_safety_extreme_weather.jpg';
import public_safety_management_practices_img from '../images/sectors/public_safety_management_practices.jpg';
import {searchURL} from '../search/utils';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';
import Collection from '../layouts/collection';


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
                  href: sectorSearchURL({q: "temperature safety emergency", changes:["ma::rising temperatures::"]}),
                 id: 'impacts_rising_temperatures',
                 find_out_more: true,
                 content: <div>
                    <ul>
                      <li>Heat waves are likely to increase heat-related illnesses for the elderly, young, or ill and for people living in buildings without air conditioning</li>
                      <li>Increased demand for energy to cool buildings during hot days may trigger power outages</li>
                    </ul>
                  </div>
                },
              {name: "Changes in Precipitation",
                href: sectorSearchURL({q: "precipitation safety emergency", changes:["ma::changes in precipitation::"]}),
               id: "impacts_changes_in_precipitation",
               find_out_more: true,
               content: <div>
                  <ul>
                    <li>Flooding caused by heavy downpours may damage critical infrastructure like roads, bridges, and energy facilities, disrupting transportation and utility services</li>
                    <li>More frequent intermittent droughts may create local water supply shortages with major public health impacts</li>
                  </ul>
               </div>,
              },
            { name: "Extreme Weather",
              href: sectorSearchURL({q: " 'extreme weather' safety emergency", changes:["ma::extreme weather::"]}),
               id: "impacts_extreme_weather",
               find_out_more: true,
               content: <div>
                  <div className='section-img'>
                    <img alt='people in boat during flooding in a neighborhood' src={public_safety_extreme_weather_img}/>
                    <div className='image-credit'>
                      Gary Higgins/The Patriot Ledger
                    </div>
                  </div>
                  <ul>
                    <li>Periods of extreme heat or cold, severe blizzards, and an increase in rainfall produced by Atlantic hurricanes and tropical storms may increase public safety risks</li>
                    <li>Disruptions to key public services such as electricity, transport, schools, and health care  may become more common</li>
                  </ul>
               </div>
              },
             { name: "Sea Level Rise",
               href: sectorSearchURL({q: " 'sea level' safety emergency", changes:["ma::sea level rise::"]}),
               id: "impacts_sea_level_rise",
               find_out_more: true,
               content: <div>
                <ul>
                  <li>Gradual sea level rise combined with high tides and storms may increase the incidence of coastal flooding and erosion</li>
                  <li>Catastrophic flooding from higher seas and extreme weather like hurricanes may trigger costly and devastating disasters on a large geographic scale </li>
                </ul>
               </div>
              },
            ]
          },
          {title: "Actions",
           id: "actions",
           subsections: [
            {name: "Planning",
              href: sectorSearchURL({q: "planning", actions:["ma::planning::"]}),
              id: 'actions_planning',
              find_out_more: true,
              content: <div>
                <ul>
                  <li>Update and revise local Hazard Mitigation Plans with the latest information about potential climate impacts</li>
                  <li>Build climate information into municipal and local plans, especially those that address emergency preparedness and risk reduction</li>
                  <li>Assess the risks of hazardous spills from more frequent and severe flooding</li>
                  <li>Update emergency management plans to account for potential climate impacts on the delivery of emergency services</li>
                </ul>
              </div>
            },
            {name: "Management Practices",
              href: sectorSearchURL({q: "management", actions:["ma::implementation action/direct action on target::management and behavior"]}),
             id: "actions_management_practices",
             find_out_more: true,
             content: <div>
              <div className='section-img'>
                <img alt='man using chainsaw to cut branches away across a snowy road' src={public_safety_management_practices_img}/>
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
              </div>
            },
            { name: "Research / Monitoring",
              href: sectorSearchURL({q: "research monitoring", actions:["ma::outreach/education::research and monitoring"]}),
             id: "actions_research_monitoring",
             find_out_more: true,
             content: <div>
                <ul>
                    <li>Identify MEMA databases and maps that should be updated with information from climate change projections to facilitate response to emergency situations.</li>
                </ul>
              </div>
            },
            { name: "Funding",
              id:"funding",
              find_out_more: true,
              href: sectorSearchURL({q: "funding financing"}),
              subsections: [],
              content: <Collection show_images={false} collection_name='MA/funding/public_safety_emergency_response' />
            }
          ]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            content: <Collection show_images={false} collection_name='MA/looking_for_help/public_safety_emergency_response' />,
            subsections: []
          }]}
        >
          <p>Safeguarding residents, municipalities and businesses from the impacts of climate change is priority of the Baker-Polito Administration. This commitment is highlighted in Governor Baker’s Executive Order 569 - <em>Establishing an Integrated Climate Change Strategy for the Commonwealth</em>. The Order represents collaboration between the Office of the Governor, the Executive Office of Energy and Environmental Affairs, the Executive Office of Public Safety and Security, and key stakeholders in an effort to enhance state and local collaboration, and help communities more quickly recover from violent storms and extreme weather.</p>
          <p>This page provides information and data to demonstrate the need to strengthen the resilience of communities throughout Massachusetts, and assist cities and towns as they prepare for the impacts of climate change.</p>
        </SectorDetailLayout>
    );
  }
}

export default PublicSafetyEmergencyResponse;
