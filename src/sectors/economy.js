import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/economy.jpg';
import economy_rising_remperatures_img from '../images/sectors/economy_rising_temperatures.jpg';
import economy_management_practices_img from '../images/sectors/economy_management_practices.jpg';
import {searchURL} from '../search/utils';
import {Footnote} from '../utils/footnotes';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::economy"],
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
                href: sectorSearchURL({changes:["ma::rising temperatures::"]}),
                id: "impacts_rising_temperatures",
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
                  <h6><a href={sectorSearchURL({changes:["ma::rising temperatures::"]})}>Find more information</a></h6>
                </div>
              },
              { name: "Changes in Precipitation",
                href: sectorSearchURL({changes:["ma::changes in precipitation::"]}),
                id: 'impacts_changes_in_precipitation',
                content: <div>
                  <ul>
                    <li>Increasing prevalence of droughts and water shortages may reduce water availability for manufacturing industries and agricultural operations</li>
                    <li>Municipalities may need to raise water rates due to strained water supplies and costs from developing new supplies</li>
                    <li>More winter rain and less snowfall may shrink the winter sports economy </li>
                  </ul>
                  <h6><a href={sectorSearchURL({changes:["ma::changes in precipitation::"]})}>Find more information</a></h6>
                </div>
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({changes:["ma::extreme weather::"]}),
                id: 'impacts_extreme_weather',
                content: <div>
                  <ul>
                    <li>Severe weather may disrupt business supply chains dependent on specific fuels or raw materials, as well as product delivery</li>
                    <li>Extreme weather may also prevent workers from getting to their jobs, slowing the entire economy</li>
                    <li>Flooding could damage business facilities, large manufacturing areas in river valleys, energy delivery and transmission, and transportation systems</li>
                    <li>The state’s insurance and financial management sector (200,000 jobs) may be affected by the growing cost of insuring against extreme weather</li>
                  </ul>
                  <h6><a href={sectorSearchURL({changes:["ma::extreme weather::"]})}>Find more information</a></h6>
                </div>
              },
              { name: "Sea Level Rise",
                href: sectorSearchURL({changes:["ma::sea level rise::"]}),
                id: 'impacts_slr',
                content: <div>
                  Much of the Commonwealth’s critical infrastructure, not to mention homes and businesses, lie on the coast and must be prepared for the eventuality of sea-level rise. If not, encroaching salt water and higher incidence of flooding could slow the economy by damaging transportation and utility infrastructure, as well as goods and properties.
                  <ul>
                    <li>Sea level rise is likely to increase coastal hazards like flooding for many businesses and for critical infrastructure– such as transportation and utility infrastructure</li>
                    <li>Encroaching salt water and chronic flooding could necessitate costly relocation for some businesses</li>
                  </ul>
                  <h6><a href={sectorSearchURL({changes:["ma::sea level rise::"]})}>Find more information</a></h6>
                </div>
              }
            ]},
            {title:"Actions",
              id:'actions',
              content: <p></p>,
              subsections: [
               {name: "Planning",
                href: sectorSearchURL({actions:["ma::planning::"]}),
                id: 'actions_planning',
                content: <div>
                  <ul>
                    <li>Encourage businesses to take account of climate change impacts in risk assessments and risk minimization strategies</li>
                    <li>Develop local emergency management plans with support from the Massachusetts Emergency Management Agency (MEMA)</li>
                    <li>Assess capacity to meet the needs of employees who are vulnerable to health impacts from flooding, extreme heat, or poor air quality</li>
                  </ul>
                  <h6><a href={sectorSearchURL({changes:["ma::planning::"]})}>Find more information</a></h6>
                </div>
              },
              {name: "Management Practices",
                href: sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]}),
                id: 'actions_management_practices',
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
                  <h6><a href={sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]})}>Find more information</a></h6>
                </div>
              },
             {name: "Technology",
              href: sectorSearchURL({actions:["ma::implementation action/direct action on target::technology"]}),
              id:'actions_technology',
              content: <div>
                <ul>
                    <li>Consider improvements to the structural stability, water drainage, and weatherproofing of critical infrastructure and other economically vital sites as part of capital improvement projects.</li>
                    <li>Enhance natural, climate control assets such as tree cover and vegetation</li>
                    <li>Install energy efficient technologies and building systems to reduce energy use</li>
                    <li>Ensure remote access and teleworking options are available for employees during extreme weather, flooding and other storm events</li>
                    <li>Set up emergency communication notification systems so employees know of office closures or evacuations</li>
                  </ul>
                  <h6>
                    <a href={sectorSearchURL({actions:["ma::implementation action/direct action on target::technology"]})}>
                      Find more information
                    </a>
                   </h6>
               </div>
              },
              { name: "Policies / Laws",
                href: sectorSearchURL({actions:["ma::planning::policies/laws/regulations"]}),
                id:'actions_policies_laws',
                content: <div>
                  <ul>
                    <li>Establish partnerships between industry and government to provide technical assistance to businesses for adapting to climate impacts</li>
                    <li>Encourage or incentivize energy efficiency and  renewable energy to reduce dependence on the electric grid and build resilience for power disruptions</li>
                  </ul>
                  <h6>
                    <a href={sectorSearchURL({actions:["ma::planning::policies/laws/regulations"]})}>
                      Find more information
                    </a>
                   </h6>
                </div>
              }]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            content: <ul>
              <li>  <a href='http://www.mass.gov/eea/'> Massachusetts Energy and Environmental Affairs </a></li>
            </ul>,
            subsections: []
          }
        ]}
        >
          <div>
            <p>In 2017, the Commonwealth earned a ranking in U.S. News and World Report as the #1 best place to live in the United States due to its strong economy, excellent health care system and top-notch education system.</p>

            <p>Climate change will produce some serious challenges for our thriving economy. Warmer temperatures could cause declines in fisheries, heat waves could slow outdoor work and increase power outages, and mega storms could decimate business operations. The string of winter storms in February 2015 alone cost the Commonwealth more than $35 million.  <Footnote num='1'/></p>

            <p>Massachusetts is already a leader in the transition to a climate-friendly, clean energy economy. More than 105,000 people are now employed in the clean energy industry. As the transition gains steam, these jobs will continue to grow.</p>
          </div>
        </SectorDetailLayout>
    );
  }
}

export default EconomySectorPage;
