import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import transportation_image from '../images/sectors/transportation.jpg';
import transportation_changes_in_precipitation_img from '../images/sectors/transportation_changes_in_precipitation.jpg';
import transportation_management_practices_img from '../images/sectors/transportation_management_practices.jpg';
import {searchURL} from '../search/utils';
import {Footnote} from '../utils/footnotes';
import Collection from '../layouts/collection';
import SearchLink from '../utils/search_link';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::transportation"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}

class TransportationSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Highlighted Resources",
      collection_name: "MA/transportation/highlighted_resources",
    };

    return (
      <SectorDetailLayout
       image={transportation_image}
       image_credit="Adam E. Moreira. CC BY-SA 3.0"
       title="Transportation"
       showcased_resources={showcased_resources}
       datagrapher_file='Temp/state/gdd50/ANN/MA/'
       footnotes={[ ]}
       sections={[
          { title: "Impacts",
            id: "impacts",
            content: <p>
            </p>,
            subsections: [
              {name: "Rising Temperatures",
                href: sectorSearchURL({q:"temperature transportation"}),
                id: "impacts_rising_temperatures",
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>Extreme heat may cause heat stress in materials like asphalt and increase the frequency of repairs and replacements</li>
                    <li>Peaks in power demand during hotter summer days could cause outages that affect electrified public transit</li>
                    <li>High temperatures and dense air conditions could increase runway length requirements for aircraft due to diminished performance in such conditions</li>
                  </ul>
                </div>
              },
              {name: "Changes in Precipitation",
                href: sectorSearchURL({q:"precipitation transportation"}),
                id: "impacts_changes_in_precipitation",
                find_out_more: true,
                content: <div>
                  <div className='section-img'>
                    <img src={transportation_changes_in_precipitation_img}/>
                    <div className='image-credit'>
                      MassDOT
                    </div>
                  </div>
                  <ul>
                    <li>Flooding caused by heavier downpours may damage roads and stormwater infrastructure like undersized culverts</li>
                    <li>More nuisance ponding on roads may slow commutes and commerce</li>
                    <li>Rapid freeze thaw cycles may cause damage to road surfaces</li>
                  </ul>
                </div>
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({q: "'extreme weather' transportation"}),
                find_out_more: true,
                id: "impacts_extreme_weather",
                content: <div>
                  <ul>
                    <li>Costly damage to roads, bridges, and rail networks may occur as a result of extreme nor’easters, hurricanes, severe thunderstorms and blizzards</li>
                    <li>Extensive flood damage to roads and bridges could dramatically affect commerce and public health and safety especially where alternative routes aren’t available</li>
                    <li>High winds could down power lines and poles adjacent to roads</li>
                    <li>Communities and critical facilities could be cut off after storms</li>
                  </ul>
                </div>
              },
              {name: "Sea Level Rise",
               href: sectorSearchURL({q:"'sea level' transportation"}),
               id: "impacts_sea_level_rise",
               find_out_more: true,
               content: <div>
                  <ul>
                    <li>Coastal storm surges may become larger, extending flood hazard areas into areas where critical infrastructure is located</li>
                    <li>As sea level rise progresses, roadways, subway and highway tunnels, Logan International Airport and other critical elements in our transportation network could be inundated</li>
                  </ul>
               </div>
              },
            ]
        },
        { title: "Actions",
          id: "actions",
          content: <p>
          </p>,
          subsections: [
            {name: "Planning",
              href: sectorSearchURL({q: "planning transportation"}),
              id: 'actions_planning',
              find_out_more: true,
              content: <div>
                <ul>
                  <li>Incorporate climate change vulnerability assessments and adaptation strategies into transportation plans</li>
                  <li>Update floodplain mapping using LiDAR and climate models and utilize maps to assess future flood hazard zones for infrastructure</li>
                  <li>Incorporate climate change projections into siting and design of all new transportation infrastructure and significant retrofits and repairs</li>
                  <li>Plan for expansion of complete streets that accommodate biking, walking and public transit</li>
                  <li>Inventory bridges and culverts that should be upsized to accommodate future expected stream flows</li>
                </ul>
              </div>
            },
            {name: "Management Practices",
              href: sectorSearchURL({q: "management transportation"}),
             id: "actions_management_practices",
              find_out_more: true,
             content: <div>
                <div className='section-img'>
                  <img src={transportation_management_practices_img}/>
                  <div className='image-credit'>
                    Fletcher6, CC-BY-SA 3.0
                  </div>
                </div>
                <ul>
                  <li>Elevate, modify, or relocate the most vulnerable infrastructure</li>
                  <li>Formulate risk-based methods to evaluate the service life of infrastructure assets in a changing climate, and increase the frequency of routine inspections</li>
                  <li>Build pipes, culverts, and outfalls with consideration of the potential magnitudes of future storms</li>
                  <li>Enhance water-based transit options as a long-range transport alternative and interim back-up</li>
                  <li>Encourage use of innovative technologies that keep infrastructure functioning during extreme weather, for example, new airport navigation aids and airfield lighting systems</li>
                </ul>
              </div>
          },
          {name: "Technology",
            href: sectorSearchURL({q: "technology transportation"}),
            id: "actions_tech",
            find_out_more: true,
            content: <div>
              <ul>
                <li>Expand use of green infrastructure such as rain gardens, swales, and porous pavement for stormwater control</li>
                <li>Stock up on replacement parts for vehicles and equipment needed for emergency weather</li>
              </ul>
            </div>
          },
          { name: "Policies / Laws",
            href: sectorSearchURL({q: "policy law regulation transportation"}),
            id: "actions_policies_laws",
            find_out_more: true,
            content: <ul>
              <li>Coordinate across municipal, state, regional agencies to address the vulnerability of regional infrastructure like rail networks</li>
              <li>Consider adopting design standards that account for climate change, and provide trainings</li>
            </ul>
          },
          { name: "Research / Monitoring",
            href: sectorSearchURL({q: "research monitoring transportation",
                                   actions:["ma::outreach/education::research and monitoring"]}),
            id: 'actions_research',
            find_out_more: true,
            content: <ul>
              <li>Research and conduct pilots using resilient materials (e.g. materials that can withstand high heat) for building roads and other infrastructure</li>
              <li>Update hydrologic and hydraulic analyses, including engineering methods used in the calculation of peak flood flow rates</li>
            </ul>
          },
          { name: "Funding",
            id:"funding",
            find_out_more: true,
            href: sectorSearchURL({q: "funding financing"}),
            subsections: [],
            content: <Collection show_images={false} collection_name='MA/funding/transportation' />
          }
        ]},
        {title: "Looking for help?",
          id: 'looking_for_help',
          content: <Collection show_images={false} collection_name='MA/looking_for_help/transportation' />,
          subsections: []
        }]}>

          <p>Massachusetts’ transportation infrastructure spans every part of the state, and includes roads, bridges, tunnels, ferries, subways and commuter and long-distance rail networks. Shifting weather patterns caused by climate change may damage or disrupt this infrastructure and impair our mobility, with far reaching effects on our communities and the state’s economy.</p>
          <p>In an effort to prepare for the future of transportation in Massachusetts that sensibly accounts for impending disruptions due to changes in technology, climate, demographics and more, the Baker-Polito Administration established the Commission on the Future of Transportation in the Commonwealth through Executive Order 579 to advise the Administration on future transportation needs and challenges. The Commission is focusing on five key areas anticipated to have a dramatic impact on transportation in the future:  climate change and resiliency; transportation electrification; autonomous and connected vehicles, including ride-sharing services; transit and mobility services; and land use and demographic trends.</p>
          <p>This page provides information and data about how the Commonwealth can plan for the transportation system of tomorrow that can safely and efficiently move people, goods, and services throughout the state, while reducing greenhouse gas emissions and building resiliency as the climate changes.</p>
       </SectorDetailLayout>
    );
  }
}

export default TransportationSectorPage;
