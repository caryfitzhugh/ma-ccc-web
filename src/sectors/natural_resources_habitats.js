import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import natural_resources_image from '../images/sectors/natural_resources.jpg';
import natural_resources_changes_in_precipitation_img from '../images/sectors/natural_resources_changes_in_precipitation.jpg';
import natural_resources_management_practices_img from '../images/sectors/natural_resources_management_practices.jpg';
import {searchURL} from '../search/utils';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::natural resources / habitats"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}


class NaturalResourcesHabitatsSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Highlighted Resources",
      collection_name: "MA/natural_resources/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Natural Resources"
        sector_name='Natural Resources/Habitats'
        image={natural_resources_image}
        image_credit="U.S. Fish and Wildlife Service"
        showcased_resources={showcased_resources}
        sections={[
          {title: "Impacts",
           id: "impacts",
           content: <div>
           </div>,
              subsections: [
              {  name: "Rising Temperatures",
                 href: sectorSearchURL({changes:["ma::rising temperatures::"]}),
                 id: 'impacts_rising_temperatures',
                 content: <div>
                    <ul>
                      <li>Habitat quality for native plants and animals may be reduced by warming temperatures and seasonal changes, and invasive species may move in</li>
                      <li>The timing of migration, reproduction, and flowering may change, disrupting the symbiotic connection between animals and their food sources and between plants and pollinators</li>
                      <li>Cold water fish and shellfish may decline dramatically, and warmer fish species may become more abundant</li>
                      <li>Algal blooms may become larger and more frequent</li>

                    </ul>
                    <h6><a href={sectorSearchURL({changes:["ma::rising temperatures::"]})}>Find more information </a></h6>
                  </div>
                },
              {name: "Changes in Precipitation",
                href: sectorSearchURL({changes:["ma::changes in precipitation::"]}),
               id: "impacts_changes_in_precipitation",
               content: <div>
                  <div className='section-img'>
                    <img src={natural_resources_changes_in_precipitation_img}/>
                  </div>
                  <ul>
                    <li>Shifts in rainfall and snowfall may stress habitats and wildlife populations</li>
                    <li>More frequent flood flows in rivers may degrade aquatic and riparian habitats </li>
                    <li>Flooding of riparian areas and wetlands could export soils and nutrients downstream to lakes and bays, triggering algal blooms</li>
                  </ul>
                  <h6><a href={sectorSearchURL({changes:["ma::changes in precipitation::"]})}>Find more information </a></h6>
               </div>,
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({changes:["ma::extreme weather::"]}),
                id: "impacts_extreme_weather",
                content: <div>
                  <ul>
                    <li>Severe storms could cause ecosystem scale disturbances (like tree blow downs) that allow invasive species to gain entry</li>
                    <li>High volumes of storm water runoff may cause serious degradation of water and habitat quality</li>
                  </ul>
                  <h6><a href={sectorSearchURL({changes:["ma::extreme weather::"]})}>Find more information </a></h6>
               </div>
              },
              {name: "Sea Level Rise",
               href: sectorSearchURL({changes:["ma::sea level rise::"]}),
               id: "impacts_sea_level_rise",
               content: <div>
                  <ul>
                    <li>Salt water inundation may alter the health and size of salt marshes and wetlands or cause them to die off, while some may migrate inland</li>
                    <li>Erosion may increase in many habitats including dunes and estuarine inlets </li>
                    <li>Barrier beaches may undergo physical changes in shape, as well as changes in species composition and diversity </li>
                  </ul>
                  <h6><a href={sectorSearchURL({changes:["ma::sea level rise::"]})}>Find more information </a></h6>
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
                  <li>Consider climate change in wildlife management and open space plans</li>
                  <li>Develop strategic priorities for protecting and conserving wetlands, floodplains, salt marshes and other natural areas that buffer flooding and support healthy wildlife populations</li>
                  <li>Identify opportunities to conserve habitat corridors (both aquatic and terrestrial) that support connectivity and migration</li>
                </ul>
                <h6><a href={sectorSearchURL({actions:["ma::planning::"]})}>Find more information </a></h6>
              </div>
            },
            {name: "Management Practices",
             href: sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]}),
             id: "actions_management_practices",
             content: <div>
                  <div className='section-img'>
                    <img src={natural_resources_management_practices_img}/>
                    <div className='image-credit'>
                      U. S. Fish and Wildlife Service – NE  Region,  CC BY 2.0
                    </div>
                  </div>
                <ul>
                  <li>Create wildlife passage structures during projects to build or replace road-stream crossings</li>
                  <li>Restore natural areas to enhance ecosystem services and avoid expensive investments in flood control infrastructure </li>
                  <li>Restore natural buffers by planting native vegetation</li>
                  <li>Consider removal of obsolete dams or tide gates</li>
                  <li>Implement strategies for early detection, rapid response, and prevention of invasive plants and animals</li>
                </ul>
                <h6><a href={sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]})}>Find more information </a></h6>
              </div>
            },
            {name: "Technology",
             href: sectorSearchURL({actions:["ma::implementation action/direct action on target::technology"]}),
             id: "actions_technology",
             content: <div>
                <ul>
                  <li>Encourage use of bioengineering like coir rolls for bank stabilization and erosion control</li>
                </ul>
                <h6><a href={sectorSearchURL({actions:["ma::implementation action/direct action on target::technology"]})}>Find more information </a></h6>
              </div>
            },
            {name: "Policies / Laws",
             href: sectorSearchURL({actions:["ma::planning::policies/laws/regulations"]}),
             id: "actions_policies",
             content: <div>
                <ul>
                  <li>Consider local land use policies and incentives that avoid development in floodplain areas, and encourage development of floodable parks</li>
                  <li>Protect communities of plants and animals especially at risk from climate change</li>
                  <li>Enhance buffer zone protection around important habitats</li>
                  <li>Create or amend local wetland bylaws to allow for beach migration and shoreline transitional areas</li>
                </ul>
                <h6><a href={sectorSearchURL({actions:["ma::planning::policies/laws/regulations"]})}>Find more information </a></h6>
              </div>
            },
            {name: "Research / Monitoring",
             href: sectorSearchURL({actions:["ma::outreach/education::research and monitoring"]}),
             id: 'actions_research',
             content: <div>
                <ul>
                  <li>Establish long-term research and monitoring sites to assess how habitat types and species respond to climate change</li>
                  <li>Survey wetlands and other aquatic resources across the state to identify vulnerable reaches</li>
                  <li>Monitor how low flows and higher temperatures affect nutrient, sediment, and pathogen pollution</li>
                  <li>Identify opportunities to reconnect cold water fish habitats by removing in-stream barriers and re-establishing instream flows</li>
                </ul>
                <h6><a href={sectorSearchURL({actions:["ma::outreach/education::research and monitoring"]})}>Find more information </a></h6>
              </div>
            },
            { name: "Funding",
              href: sectorSearchURL({actions: ["ma::implementation action/direct action on target::financing"]}),
             id: 'actions_funding',
             content: <div>
                <ul>
                  <li>
                    <a href='http://www.mass.gov/eea/agencies/czm/program-areas/stormsmart-coasts/grants/'>
                      Coastal Resiliency Grant Program at the Mass Office of Coastal Zone Management
                    </a></li>
                  <li> <a href='https://www.mass.gov/guides/urban-and-community-forestry-challenge-grants'> Urban and Community Forest Challenge Grants </a></li>
                  <li>
                    <a href='https://www.mass.gov/land-and-recreation-grants-loans'>
                      EEAs Land and Recreation grants and loans
                    </a></li>
                  <li>
                      <a href='https://www.mass.gov/service-details/masswildlife-habitat-management-grant-program'>
                        Mass Wildlife’s Habitat Management Grant Program
                      </a></li>
                </ul>
              </div>
            }
           ]
          },
          {title: "Looking for help?",
           id:"look4help",
           subsections: [],
           content: <ul>
              <li><a href='https://www.mass.gov/orgs/department-of-fish-and-game'>Massachusetts Department of Fish and Game</a></li>
              <li><a href='http://www.mass.gov/eea/agencies/czm/'>Massachusetts Office of Coastal Zone Management</a></li>
              <li><a href='http://www.neafwa.org/'>Northeast Association of Fish and Wildlife Agencies </a></li>
          </ul>
          }]}
        datagrapher_file='Temp/state/maxt/ANN/MA/'>
          <p> Diverse natural habitats across the Commonwealth—from hardwood forests to coastal salt marches, valley floodplains to freshwater trout streams—make our state a special place to live.  They are also critical assets for combatting and preparing for climate change.</p>
          <p> Forests, wetlands, and other naturally vegetated habitats are estimated to absorb and store ten percent of the Commonwealth’s carbon emissions. They also shelter diverse species of fish and wildlife, buffer developed areas against flooding, cool air temperatures, and filter and clean water and air. </p>
          <p> By protecting and restoring natural resources and managing them wisely, we can enhance their resilience to climate-related stresses, from extreme weather to proliferating pests.  Massachusetts has a long and storied tradition of environmental stewardship and over the last 20 years state government has invested an average of $40 million annually in land conservation and parks, with an average of over 16,000 acres per year protected.</p>
        </SectorDetailLayout>
    );
  }
}

export default NaturalResourcesHabitatsSectorPage;
