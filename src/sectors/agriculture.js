import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import agriculture_image from '../images/sectors/agriculture.jpg';
import agriculture_changes_in_precipitation_img from '../images/sectors/agriculture_changes_in_precipitation.jpg';
import agriculture_management_practices_img from '../images/sectors/agriculture_management_practices.jpg';
import {searchURL} from '../search/utils';
import Collection from '../layouts/collection';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::agriculture"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}

class AgricultureSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Highlighted Resources",
      collection_name: "MA/agriculture/highlighted_resources",
    };

    return (
      <SectorDetailLayout
        image={agriculture_image}
        image_credit='MA Office of Travel and Tourism, CC BY-ND 2.0'
        title="Agriculture"
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
                href: sectorSearchURL({q: "agriculture temperature"}),
                id: "impacts_rising_temperatures",
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>Crops that rely on specific temperature regimes like apples, cranberries, and maple syrup may fare poorly</li>
                    <li>Increasing heat stress days (above 90°F) may stress livestock and some crops</li>
                    <li>More pest pressure from insects, diseases and weeds may harm crops and cause farms to increase pesticide use</li>
                    <li>New crops could become more viable but crop transitions may be costly</li>
                  </ul>
                </div>
              },
              {name: "Changes in Precipitation",
                href: sectorSearchURL({q: "agriculture precipitation"}),
                id: "impacts_changes_in_precipitation",
                find_out_more: true,
                content: <div>
                  <div className='section-img'>
                    <img alt='farm with trees knocked over and land covered in silt' src={agriculture_changes_in_precipitation_img}/>
                    <div className='image-credit'>
                      Deerfield, MA farm post - Irene – 40 acres covered in silt.  From MassLive
                    </div>
                  </div>
                  <ul>
                    <li>Increased river flooding is likely to cause soil erosion, soil loss, and crop damage</li>
                    <li>Wetter springs may delay planting for crops and reduce yields</li>
                    <li>Drier summers and intermittent droughts may strain irrigation water supplies, stress crops, and delay harvests</li>
                  </ul>
                </div>
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({q: "agriculture +'extreme weather'"}),
                id: "impacts_extreme_weather",
                find_out_more: true,
                content: <div>
                   <ul>
                    <li>Extreme storms may cause catastrophic damage to crops and fields, farm buildings, equipment and drainage systems</li>
                    <li>Floodwaters may spread invasive plants</li>
                    <li>Heavy rainfall is likely to wash away fertile soils and damage water resources</li>
                  </ul>
                </div>
              },
              {name: "Sea Level Rise",
                href: sectorSearchURL({q: "'sea level rise'"}),
               id: "impacts_sea_level_rise",
               find_out_more: true,
               content: <div>
                  <ul>
                    <li> Increasing tidal range and tidal inundation is likely to cause more saltwater intrusion into aquifers in agricultural areas</li>
                    <li>Rising sea levels and extreme storms may accelerate erosion of coastal agricultural land</li>
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
              href: sectorSearchURL({q: "agriculture planning"}),
              id: 'actions_planning',
              find_out_more: true,
              content: <div>
                <ul>
                  <li>Apply for a grant from the ACRE program to reduce your farm’s risks from climate change and increase its economic resilience (See Funding)</li>
                  <li>Develop a plan for on-farm emergencies</li>
                  <li>Complete a farm energy audit</li>
                  <li>
                    Learn about
                    <a href='/resources/resource::2174/massachusetts-farm-energy-best-management-practices-guide'> Massachusetts Best Management Energy Practices for Dairy, Maple Syrup, Greenhouses, Orchards and Renewables</a>
                  </li>
                  <li>
                    <a href='/resources/resource::1962/energy-efficiency-conservation-and-renewables-program'>
                    Implement on-farm energy efficiency and renewable energy projects
                    </a>
                  </li>

                </ul>
              </div>
            },
            {name: "Management Practices",
             href: sectorSearchURL({q: "agriculture management"}),
             id: "actions_management_practices",
             find_out_more: true,
             content: <div>
              <div className='section-img'>
                <img alt='two people discussing something' src={agriculture_management_practices_img}/>
                <div className='image-credit'>
                  Natural Resource Conservation Service (NRCS)
                </div>
              </div>
              <ul>
                <li>Consider crop variety diversification to increase resilience</li>
                <li>Shift planting or harvesting dates based on forecasted changes in seasons</li>
                <li>Use Agricultural Best Management Practices (BMPs) to manage manure, control runoff of pesticides, nutrients and fertilizers, and prevent soil loss</li>
                <li>Improve integrated pest management to prepare for changes in pest population dynamics</li>
                <li>Implement a water conservation and reuse program</li>
                <li>Increase soil carbon by planting cover crops, using no-till techniques and composting</li>

              </ul>
            </div>
          },
          {name: "Technology",
            href: sectorSearchURL({q: "agriculture technology"}),
            id: "actions_tech",
            find_out_more: true,
            content: <div>
                <ul>
                  <li>Expand irrigation capacity and other (on farm) capital investments. </li>
                  <li>Use fans, sprinklers, and other cooling systems for livestock. </li>
                  <li>Install farming-compatible renewable energy technologies such as windmills and solar panels</li>
              </ul>
            </div>
          },
          { name: "Policies / Laws",
            href: sectorSearchURL({q: "agriculture policy law regulation"}),
            id: "actions_policies_laws",
            find_out_more: true,
            content: <div>
              <ul>
                <li>Examine policies and incentives to help farms reduce their flood risks and protect water quality</li>
                <li>Consider policies that encourage conservation of floodplain agricultural lands to slow floodwaters and protect downstream development</li>
              </ul>
            </div>
          },
          { name: "Research / Monitoring",
            href: sectorSearchURL({q: "research monitoring"}),
            id: 'actions_research',
            find_out_more: true,
            content: <div>
              <ul>
                <li>Track use and occurrence of pesticides as weather patterns change</li>
                <li>Track food-borne illnesses to determine if new patterns or agents are emerging</li>
                <li>Educate vulnerable agricultural workers and their employers about health and safety precautions for any increased pesticide use</li>
              </ul>
            </div>
          },
          { name: "Funding",
            id:"funding",
            find_out_more: true,
            href: sectorSearchURL({q: "funding financing"}),
            subsections: [],
            content: <Collection show_images={false} collection_name='MA/funding/agriculture' />
          }
          ]
        },
        {title: "Looking for help?",
          id: 'looking_for_help',
          content: <Collection show_images={false} collection_name='MA/looking_for_help/agriculture' />,
          subsections: []
        }

        ]}>

        <p>The Commonwealth boasts more than 7,800 farms which produce $500 million in agricultural products each year, including dairy and livestock, produce, and plants for landscaping. As climate changes, a lengthening growing season may favor certain crops. Other changes however— including more extreme heat and more erratic and severe weather—are likely to outweigh any benefits.</p>
        <p>The Baker-Polito Administration has created the <a href='/resources/resource::2173/agricultural-climate-resiliency-and-efficiencies-acre-program'>Agricultural Climate Resiliency & Efficiencies (ACRE) program </a>, within the Massachusetts Department of Agricultural Resources, that reimburses producers to implement practices that address the sector’s vulnerability to climate change and improve economic resiliency.</p>
        <p>This page provides information and data about how farms can begin preparing now so they continue thriving through these changes, and strategies to help the agriculture community move to cleaner energy to reduce carbon pollution and save money.</p>
        </SectorDetailLayout>
    );
  }
}

export default AgricultureSectorPage;
