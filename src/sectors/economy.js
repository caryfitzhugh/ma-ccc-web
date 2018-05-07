import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/economy.jpg';
import economy_rising_remperatures_img from '../images/sectors/economy_rising_temperatures.jpg';
import economy_management_practices_img from '../images/sectors/economy_management_practices.jpg';
import {searchURL} from '../search/utils';
import {Footnote} from '../utils/footnotes';
import Collection from '../layouts/collection';
import SearchLink from '../utils/search_link';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: props.sectors || ["ma::economy"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}

class EconomySectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/economy/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Economy"
        image={sector_image}
        image_credit="Capes Treasures, CC BY-NC-ND 2.0"
        showcased_resources={showcased_resources}
        footnotes={[
          <span>Office of Governor Charlie Baker, 2015, Letter to Request Federal Emergency Declaration – Attachment A:  2015 Severe Winter Weather Pattern Impacts - Supplemental Information. <a href='http://www.mass.gov/governor/docs/news/attachment-a-severe-winter-weather-pattern-impacts-supplemental-info.pdf'>http://www.mass.gov/governor/docs/news/attachment-a-severe-winter-weather-pattern-impacts-supplemental-info.pdf </a></span>,
        ]}
        sections={[
          {title: "Impacts",
            id: 'impacts',
            content: <p> </p>,
            subsections: [
              {name: "Rising Temperatures",
                href: sectorSearchURL({q: "temperature economy economic"}),
                id: "impacts_rising_temperatures",
                find_out_more: true,
                content: <div>
                  <div className='section-img'>
                    <img src={economy_rising_remperatures_img}/>
                    <div className='image-credit'>The Daily Journal of Commerce / djcoregon.com </div>
                  </div>

                  <ul>
                    <li>Rising temperatures and heat waves could cause more employee sick days from heat-related illnesses and higher energy costs</li>
                    <li>Outdoor or factory-based industries such as manufacturing and home construction may face more frequent days too hot for safe work</li>
                    <li>Warmer waters may cause declines in certain populations of cold water fish, like ocean cod, and shellfish, reducing fishing jobs and fishing-related tourism</li>
                  </ul>
                </div>
              },
              { name: "Changes in Precipitation",
                href: sectorSearchURL({q: "precipitation economy economic"}),
                id: 'impacts_changes_in_precipitation',
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>Increasing prevalence of droughts and water shortages may reduce water availability for manufacturing industries and agricultural operations</li>
                    <li>Municipalities may need to raise water rates due to strained water supplies and costs from developing new supplies</li>
                    <li>More winter rain and less snowfall may shrink the winter sports economy </li>
                  </ul>
                </div>
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({q: "economy economic 'extreme weather'", sectors: []}),
                id: 'impacts_extreme_weather',
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>Severe weather may disrupt business supply chains dependent on specific fuels or raw materials, as well as product delivery</li>
                    <li>Extreme weather may also prevent workers from getting to their jobs, slowing the entire economy</li>
                    <li>Flooding could damage business facilities, large manufacturing areas in river valleys, energy delivery and transmission, and transportation systems</li>
                    <li>The state’s insurance and financial management sector (200,000 jobs) may be affected by the growing cost of insuring against extreme weather</li>
                  </ul>
                </div>
              },
              { name: "Sea Level Rise",
                href: sectorSearchURL({q: "economy economic 'sea level rise'"}),
                id: 'impacts_slr',
                find_out_more: true,
                content: <div>
                  Much of the Commonwealth’s critical infrastructure, not to mention homes and businesses, lie on the coast and must be prepared for the eventuality of sea-level rise. If not, encroaching salt water and higher incidence of flooding could slow the economy by damaging transportation and utility infrastructure, as well as goods and properties.
                  <ul>
                    <li>Sea level rise is likely to increase coastal hazards like flooding for many businesses and for critical infrastructure– such as transportation and utility infrastructure</li>
                    <li>Encroaching salt water and chronic flooding could necessitate costly relocation for some businesses</li>
                  </ul>
                </div>
              }
            ]},
            {title:"Actions",
              id:'actions',
              content: <p></p>,
              subsections: [
               {name: "Planning",
                href: sectorSearchURL({q: "planning"}),
                id: 'actions_planning',
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>Encourage businesses to take account of climate change impacts in risk assessments and risk minimization strategies</li>
                    <li>Develop local emergency management plans with support from the Massachusetts Emergency Management Agency (MEMA)</li>
                    <li>Assess capacity to meet the needs of employees who are vulnerable to health impacts from flooding, extreme heat, or poor air quality</li>
                  </ul>
                </div>
              },
              {name: "Management Practices",
                href: sectorSearchURL({q: "management"}),
                id: 'actions_management_practices',
                find_out_more: true,
                content:
                <div>
                  <div className='section-img'>
                    <img src={economy_management_practices_img}/>
                    <div className='image-credit'>Team Massachusetts 4D, CC BY 2.0</div>
                  </div>
                  <ul>
                    <li>Consider using renewable energy, performing energy efficiency retrofits, and conserving energy in business processes and in employee commuting</li>
                    <li>Avoid siting new business facilities in flood prone areas</li>
                    <li>Ensure businesses in potential flood zones are flood-proofed, for example by elevating electrical and HVAC systems above ground level</li>
                    <li>Improve storm water management at business facilities and conserve water via grey water systems</li>
                    <li>Identify alternative materials and inventory suppliers to avoid delivery interruptions due to extreme weather or other events</li>

                    <li>Investigate alternate transportation routes and communication systems for suppliers, customers, and workers to use during emergencies</li>
                    <li>Educate employers about OSHA requirements for employee protections in times of high heat</li>
                  </ul>
                </div>
              },
             {name: "Technology",
               href: sectorSearchURL({q: "technology"}),
              id:'actions_technology',
              find_out_more: true,
              content: <div>
                <ul>
                    <li>Consider improvements to the structural stability, water drainage, and weatherproofing of critical infrastructure and other economically vital sites as part of capital improvement projects.</li>
                    <li>Enhance natural, climate control assets such as tree cover and vegetation</li>
                    <li>Install energy efficient technologies and building systems to reduce energy use</li>
                    <li>Ensure remote access and teleworking options are available for employees during extreme weather, flooding and other storm events</li>
                    <li>Set up emergency communication notification systems so employees know of office closures or evacuations</li>
                  </ul>
               </div>
              },
              { name: "Policies / Laws",
                href: sectorSearchURL({q: "policy law regulation"}),
                id:'actions_policies_laws',
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>Establish partnerships between industry and government to provide technical assistance to businesses for adapting to climate impacts</li>
                    <li>Encourage or incentivize energy efficiency and  renewable energy to reduce dependence on the electric grid and build resilience for power disruptions</li>
                  </ul>
                </div>
              },
              /*
                { name: "Funding",
                  id:"funding",
                  find_out_more: true,
                  href: sectorSearchURL({q: "funding financing"}),
                  subsections: [],
                  content: <Collection show_images={false} collection_name='MA/funding/economy' />
                }
              */
          ]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            content: <Collection show_images={false} collection_name='MA/looking_for_help/economy' />,
            subsections: []
          }
        ]}
        >
          <div>
            <p>Massachusetts is a leader in technology, science, health care and education. Our diverse economy is bolstered by the 125 colleges and universities that produce one of the best educated workforces in the country. With low unemployment, high personal income per capita, excellent job growth and growing innovation sectors like renewable energy, the Commonwealth’s economy is strong.</p>
            <p>This page provides information focused on the intersection of climate change and economic growth in an effort to explore how the Commonwealth’s investments in climate change can support industries ranging from the commercial and recreational fishing, to the construction sector, to our local community businesses.</p>
          </div>
        </SectorDetailLayout>
    );
  }
}

export default EconomySectorPage;
