import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import coastal_zones_image from '../images/sectors/coastal_zones.jpg';
import coastal_zones_rising_temperatures_img from '../images/sectors/coastal_zones_rising_temperatures.jpg';
import coastal_zones_management_practices_img from '../images/sectors/coastal_zones_management_practices.jpg';
import {Footnote} from '../utils/footnotes';
import {searchURL} from '../search/utils';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::coastal zones"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}



class CoastalZonesSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: 'MA/coastal_zones/highlighted_resources'
    };

    return (
      <SectorDetailLayout
        title="Coastal Zones"
        sector_name="Coastal Zone"
        image={coastal_zones_image}
        image_credit="Massachusetts Office of Travel and Tourism, CC BY-ND 2.0"
        showcased_resources={showcased_resources}

        sections={[
          {title: "Impacts",
           id: 'impacts',
           subsections: [
              {name: "Rising Temperatures",
                href: sectorSearchURL({q:'"coastal zones" "rising temperatures"'}),
                id: "impacts_rising_temperatures",
                find_out_more: true,
                content: <div>
                  <div className='section-img'>
                    <img src={coastal_zones_rising_temperatures_img}/>
                  </div>
                  <ul>
                    <li>Commercially important fish and shellfish species may migrate north out of the state as waters warm, while other species may migrate in</li>
                    <li>Ocean acidification is likely to affect the health and abundance of shellfish and other marine species</li>
                    <li>Algal blooms may increase in frequency, and could create health risks for swimmers and wildlife</li>
                  </ul>
                </div>
              },
              {name: "Changes in Precipitation",
                href: sectorSearchURL({q:'coast "changes in precipitation"'}),
                id: "impacts_changes_in_precipitation",
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>Large volumes of stormwater may wash pollutants and pathogens into nearby coastal waterways, degrading water quality</li>
                    <li>More frequent summer droughts may strain municipal drinking water supplies</li>
                    <li>Changing hydrological cycles may stress sensitive coastal habitats and species</li>
                  </ul>
                </div>
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({q: 'coast "extreme weather"'}),
                id: "impacts_extreme_weather",
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>More severe storms may threaten public safety </li>
                    <li>Infrastructure concentrated at the shore – such as power plants, power lines, sea walls, roads and bridges, and waste water plants – may sustain extensive damage from flooding</li>
                    <li>Large scale power outages may disrupt local economies</li>
                  </ul>
                </div>
              },
              {name: "Sea Level Rise",
               href: sectorSearchURL({q:'coast sea level rise'}),
               id: "impacts_sea_level_rise",
               find_out_more: true,
               content: <div>
                <ul>
                    <li>Increasing tidal range and more destructive storm surges may cause loss, shrinkage or migration of sensitive habitats that are home to many species, such as salt marshes and coastal forests</li>
                    <li>More coastal flooding may elevate risks for infrastructure on or near the shore</li>
                    <li>Properties may lose beach and other land from erosion</li>
                    <li>Saltwater intrusion could harm agricultural fields and fresh water aquifers and wells</li>
                  </ul>
               </div>
              },
            ]
          },
          { title: "Actions",
            id: "actions",
            content: null,
            subsections: [
            {name: "Planning",
              href: sectorSearchURL({actions:["ma::planning::"], q: 'coast'}),
              id: 'actions_planning',
              find_out_more: true,
              content: <ul>
                <li>Assess the vulnerability of coastal towns and assets to climate impacts under different climate scenarios</li>
                <li>Build adaptation strategies into comprehensive, master and open space plans, and Hazard Mitigation Plans</li>
                <li>Develop or enhance early warning systems and community evacuation plans</li>
                <li>Identify conservation priorities for salt marshes, wetlands and forests that mitigate flooding, store carbon, and manage stormwater</li>
              </ul>
            },
            {name: "Management Practices",
             href: sectorSearchURL({q: 'coast', actions:["ma::implementation action/direct action on target::management and behavior"]}),
             id: "actions_management_practices",
             find_out_more: true,
             content: <div>
                  <div className='section-img'>
                    <img src={coastal_zones_management_practices_img}/>
                  </div>
              <ul>
                <li>Conserve coastal habitats and habitat corridors to help species remain resilient</li>
                <li>Use early detection and monitoring to prevent introduction of invasive species </li>
                <li>Elevate and/or move buildings and infrastructure in current or future coastal flood zones</li>
                <li>Restore tidally-driven rivers, estuarine, and marine habitats.</li>
              </ul>
            </div>
          },
          {name: "Technology",
            href: sectorSearchURL({q: 'coast', actions:["ma::implementation action/direct action on target::technology"]}),
            id: "actions_tech",
            find_out_more: true,
            content: <div>
              <ul>
                <li>Encourage nature-based techniques to protect shorelines and stabilize banks such as beach nourishment and soft armoring</li>
                <li>Use green infrastructure such as floodable parks and open spaces to manage stormwater and increase storm protection</li>
                <li>Replace or remove ineffective tide gates to improve habitat connectivity</li>
              </ul>
            </div>
          },
          { name: "Policies / Laws",
            href: sectorSearchURL({q: 'coast "polices" OR "laws"'}),
            id: "actions_policies_laws",
            find_out_more: true,
            content: <ul>
              <li>Incorporate climate change information into local policies and regulations, and keep updating them</li>
              <li>Create or amend local wetland bylaws to allow for beach migration</li>
              <li>Examine the concept of local setbacks requiring that new coastal development be a minimum distance from the shore</li>
              <li>Examine the concept of rolling easements for coastal habitats</li>
            </ul>
          },
          { name: "Research / Monitoring",
            href: sectorSearchURL({q: 'coast "research" OR "monitoring"'}),
            id: 'actions_research',
            find_out_more: true,
            content: <ul>
              <li>Conduct research and monitoring to improve understanding of strategies for preventing coastal erosion and marsh die-off</li>
              <li>Conduct sediment transport studies to inform shoreline management</li>
              <li>Monitor the response of different types of wetlands to rising sea levels and/or proactive management techniques</li>
              <li>Use remote sensing to monitor annual changes in land cover and land use</li>
            </ul>
          },
          { name: "Funding",
            href: sectorSearchURL({q: 'local government funding'}),
            id: "actions_funding",
            find_out_more: true,
            content: <ul>
              <li><a href='http://www.massclimatechange.org/resources/resource::2070/coastal-resilience-grant-program'>
                Coastal Resilience Grant Program
                </a></li>
              <li><a href='http://www.massclimatechange.org/resources/resource::2054/massachusetts-municipal-vulnerability-preparedness-program-mvp'>
                Municipal Vulnerability Preparedness Program
                </a></li>
              <li><a href='http://www.massclimatechange.org/resources/resource::2072/massachusetts-dam-and-seawall-repair-or-removal-program'>
                Dam and Seawall Repair or Removal Program
                </a></li>
              <li><a href='http://www.massclimatechange.org/resources/resource::2079/masswildlife-habitat-management-grant-program'>
                MassWildlife Habitat Management Grant Program
                </a></li>
            </ul>
          }
          ]
          },
          {title: "Looking for help?",
           subsections: [],
           id: 'looking_for_help',
           content: <ul>
              <li><a href='https://www.mass.gov/orgs/executive-office-of-energy-and-environmental-affairs'>
                Massachusetts Executive Office of Energy and Environmental Affairs
                </a></li>
              <li><a href='https://www.epa.gov/cre'>
                U.S. Environmental Protection Agency’s Climate Ready Estuaries Program
                </a></li>
              <li><a href='https://coast.noaa.gov/'>
                National Oceanic and Atmospheric Administration (NOAA) Office for Coastal Management
                </a></li>
            </ul>
            }
         ]}
         >
          <p>Climate change will affect Massachusetts’ seventy-eight historic coastal communities and their unique ecosystems in many ways.</p>

          <p>Habitats like salt marshes and barrier beaches may be altered, coastal properties and infrastructure may sustain damage from more frequent floods, and cold water fisheries like cod may decline steeply.</p>

          <p>Fifty-one community-based projects aimed at preparing for coastal flooding and other climate impacts have been completed through the Massachusetts Coastal Resilience Grant Program in the last three years.  In August 2017 Governor Baker announced more than $2.2 million in new funding for 16 projects that enhance resiliency and support local ecosystems and economies in coastal communities.</p>

         </SectorDetailLayout>
     );
   }
 }

 export default CoastalZonesSectorPage;
